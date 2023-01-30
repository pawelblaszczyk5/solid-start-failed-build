import { Suspense, lazy, JSX } from "solid-js";
import Stage from "~/components/TemplateEditor/Stage";

import { onMount, createSignal, Show } from "solid-js";

function ClientOnly(props: { children: JSX.Element }) {
  const [flag, setFlag] = createSignal(false);

  onMount(() => {
    setFlag(true);
  });

  return <Show when={flag()}>{props.children}</Show>;
}

export default function Home() {
  return (
    <>
      <nav class="flex flex-row dark:border-neutral-700 border-gray-200 border-b">
        ddd
      </nav>
      <main class="grow items-stretch flex flex-row">
        <div class="grow dark:border-neutral-700 border-gray-200 border-l border-r">
          <ClientOnly>
            <Stage />
          </ClientOnly>
        </div>
        <div>right prop</div>
      </main>
    </>
  );
}
