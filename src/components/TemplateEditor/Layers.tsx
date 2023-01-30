import { layers, selectedLayer } from '~/state/tempate';
export default function Layers() {
  return (
    <ol class="flex flex-col">
      <li class="flex flex-col items-center">
        {layers().map((layer, index) => (
          <div
            class={`px-4 py-2  ${
              selectedLayer() === index ? 'dark:bg-slate-600 bg-slate-300' : ''
            } dark:border-neutral-700 border-gray-200 border-b`}
          >
            {layer.name}
          </div>
        ))}
      </li>
    </ol>
  );
}
