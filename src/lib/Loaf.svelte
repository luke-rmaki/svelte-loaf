<script lang="ts">
  import { fly } from "svelte/transition";
  import { toast } from "./store";
  import type { Toast } from "./types";

  let loaf: Toast[] = [];

  // update loaf on new toast added
  toast.subscribe((newState: Toast[]) => {
    loaf = newState;
  });

  function handleClick(e: Event) {
    const target = e.target as HTMLElement;
    const toast = loaf.filter(t => t.id === target.id)[0];
    if (toast.callback) toast.callback();
    if (toast.autohide === false) {
      // remove toast from loaf
      loaf = loaf.filter(t => t.id !== target.id);
    }
  }
</script>

<aside>
  {#each loaf as toast}
    <span
      id={toast.id}
      on:click={e => handleClick(e)}
      on:keypress={e => handleClick(e)}
      data-autohide={toast.autohide}
      class={`${toast.type} ${toast.autohide ? "" : "dismissable"}`}
      transition:fly={{ y: 500, duration: 800 }}>{toast.message}</span
    >
  {/each}
</aside>

<style lang="scss">
  aside {
    height: 100vh;
    padding-inline-start: 10px;
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    z-index: var(--toast-index, 100);

    span {
      padding: 10px 12px;
      margin-block-end: 20px;
      text-align: center;
      border-radius: 15px;
      z-index: var(--toast-index, 100);
      /* position: fixed; */
    }

    .dismissable {
      cursor: pointer;
    }
    .message {
      background-color: var(--loaf-message-bg, blue);
      color: var(--loaf-message-text, #fff);
      box-shadow: var(--toast-shadow);
    }

    .error {
      background-color: var(--loaf-error-bg, red);
      color: var(--loaf-error-text, #fff);
      box-shadow: var(--toast-shadow);
    }

    .warning {
      background-color: var(--loaf-warning-bg, orange);
      color: var(--loaf-warning-text, #fff);
      box-shadow: var(--toast-shadow);
    }
  }
</style>
