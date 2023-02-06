import Stage from "~/components/TemplateEditor/Stage";

export default function Home() {
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
