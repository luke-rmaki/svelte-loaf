<script lang="ts">
  import Loaf from "../lib/Loaf.svelte";
  import { addToast } from "../lib/store";

  setTimeout(() => {
    addToast({
      message: "Hello warning",
      type: "warning",
      autohide: false,
      callback: () => {
        console.log("callback");
      },
    });
    addToast({
      message: "Hello world",
      type: "message",
      autohide: false,
      callback: () => {
        console.log("callback");
      },
    });
  }, 1000);
</script>

<Loaf />
<h1>Welcome to your library project</h1>
<p>
  Create your package using @sveltejs/package and preview/showcase your work
  with SvelteKit
</p>
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>

<style>
  :global(html) {
    --loaf-message-bg: #7bced1;
    --loaf-message-text: #0c1018;
    --loaf-error-bg: #b12232;
    --loaf-error-text: #0c1018;
    --loaf-warning-bg: #f7b6b9;
    --loaf-warning-text: #0c1018;
    --toast-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  }
</style>
