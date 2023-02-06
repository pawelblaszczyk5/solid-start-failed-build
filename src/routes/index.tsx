import { Suspense, lazy, JSX } from "solid-js";
import { unstable_clientOnly } from "solid-start";

import { onMount, createSignal, Show } from "solid-js";

export default function Home() {
  const Stage = unstable_clientOnly(
    async () => import("~/components/TemplateEditor/Stage")
  );
  return (
    <>
      <nav class="flex flex-row dark:border-neutral-700 border-gray-200 border-b">
        ddd
      </nav>
      <main class="grow items-stretch flex flex-row">
        <div class="grow dark:border-neutral-700 border-gray-200 border-l border-r">
          <Stage />
        </div>
        <div>right prop</div>
      </main>
    </>
  );
}
