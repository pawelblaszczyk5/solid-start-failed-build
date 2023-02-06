import { onMount, onCleanup, createSignal } from "solid-js";
import Konva from "konva";

export default function Stage() {
  const [stageWidth, setStageWidth] = createSignal(0);
  const [stageHeight, setStageHeight] = createSignal(0);
  const [stage, setStage] = createSignal<Konva.Stage>();
  const [transparentStage, setTransparentStage] = createSignal<Konva.Stage>();
  let mainComponentElement: HTMLDivElement | undefined;
  let mainStageCanvasContainer: HTMLDivElement | undefined;
  let stageSemiTransparentBackgroundStage: HTMLDivElement | undefined;

  const resizeHnadler = (event: Event) => {
    const positionInfo = mainComponentElement!.getBoundingClientRect();
    console.log(event, positionInfo);
    setStageWidth(positionInfo.width);
    setStageHeight(positionInfo.height);
    setTimeout(() => {
      const positionInfo = mainComponentElement!.getBoundingClientRect();
      console.log(event, positionInfo);
      setStageWidth(positionInfo.width);
      setStageHeight(positionInfo.height);
    }, 0);
  };

  onMount(async () => {
    if (!stage()) {
      setStage(
        new Konva.Stage({
          container: mainStageCanvasContainer!,
          width: stageWidth(),
          height: stageHeight(),
        })
      );
    }
    if (!transparentStage()) {
      setTransparentStage(
        new Konva.Stage({
          container: stageSemiTransparentBackgroundStage!,
          width: stageWidth(),
          height: stageHeight(),
        })
      );
    }

    const positionInfo = mainComponentElement!.getBoundingClientRect();
    setStageWidth(positionInfo.width);
    setStageHeight(positionInfo.height);
    window.addEventListener("resize", resizeHnadler);
  });

  onCleanup(() => {
    stage()?.destroy();
    transparentStage()?.destroy();
    window.removeEventListener("resize", resizeHnadler);
  });

  return (
    <div
      ref={mainComponentElement}
      class="relative h-full w-full verflow-hidden"
    >
      <div
        class="absolute left-0 top-0 h-full w-full"
        ref={mainStageCanvasContainer}
      >
        asd
      </div>
      <div
        class="absolute left-0 top-0 h-full w-full pointer-events-none"
        ref={stageSemiTransparentBackgroundStage}
      >
        asd
      </div>
    </div>
  );
}
