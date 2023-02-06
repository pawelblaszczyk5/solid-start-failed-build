import {
  Component,
  ComponentProps,
  JSX,
  createSignal,
  splitProps,
  sharedConfig,
  onMount,
  createMemo,
  untrack,
} from "solid-js";

export default function clientOnly<T extends Component<any>>(
  fn: () => Promise<{
    default: T;
  }>
) {
  if (import.meta.env.SSR)
    return (props: ComponentProps<T> & { fallback?: JSX.Element }) =>
      props.fallback;

  const [comp, setComp] = createSignal<T>();
  fn().then((m) => setComp(() => m.default));
  return (props: ComponentProps<T>) => {
    let Comp: T | undefined;
    let m: boolean;
    const [, rest] = splitProps(props, ["fallback"]);
    if ((Comp = comp()) && !sharedConfig.context) return Comp(rest);
    const [mounted, setMounted] = createSignal(!sharedConfig.context);
    onMount(() => setMounted(true));
    return createMemo(
      () => (
        (Comp = comp()),
        (m = mounted()),
        untrack(() => (Comp && m ? Comp(rest) : props.fallback))
      )
    );
  };
}
