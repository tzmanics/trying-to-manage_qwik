import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div>
      <h3 class="tagline">Learn stuff with me while I'm trying to manage.</h3>
    </div>
  );
});

export const head: DocumentHead = {
};
