import { Suspense } from 'solid-js';
import { TopAnimes } from "~/components/TopAnimes";


export default function Home() {

  return (
    <main>
      <Suspense fallback={<div>Loading</div>}>
        <TopAnimes/>
      </Suspense>
    </main>
  );
}
