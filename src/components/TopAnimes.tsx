import { createResource, For, Show } from "solid-js";
import server from "solid-start/server";
import { TopAnime } from "~/types/topAnime";
import fetchTopAnimes from "~/lib/fetchTopAnimes";

export const TopAnimes = () => {
  const [data] = createResource<TopAnime>(server(() => fetchTopAnimes()));
  return (
    <div>
      <Show when={ data() }>
        <div class="grid grid-cols-4">
          <For each={ data().data }>
            { item => (
              <div>
                <img class="rounded-xl h-40 aspect-square object-contain flex items-center" src={ item.images.webp.image_url } alt=""/>
                <div class="font-bold">{ item.title }</div>
              </div>
            ) }
          </For>
        </div>

      </Show>
    </div>
  );
};
