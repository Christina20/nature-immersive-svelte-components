<script>
  import { onMount } from "svelte";
  import { Cover, Cluster } from "creditdesign-svelte-components";

  export let srcURL;
  export let alt;
  export let coverSpace = "1rem";
  export let coverHeight = "100vh";

  let mounted = false;
  let paused = true;
  let prefersReducedMotion = true;
  let video;

  let srcIMG = srcURL.replace(/-small/, "");
  let srcWEBM = srcURL
    .replace(/-small/, "")
    .slice(0, -4)
    .concat(".webm");
  let srcMP4 = srcURL
    .replace(/-small/, "")
    .slice(0, -4)
    .concat(".mp4");

  let handleBtnClick = () => {
    video[paused ? "play" : "pause"]();
  };

  onMount(async () => {
    mounted = true;
    prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
      .matches;
  });
</script>

<style>
  /* Fall back styles for no custom properties */
  .cover__background {
    width: 600px;
    margin-right: auto;
    margin-left: auto;
  }

  @supports (color: var(--primary)) {
    .cover__background {
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: -999;
      width: inherit;
      margin: 0;
      transform: translate(-50%, -50%);
    }

    /* Make the text visible over the dark background */
    .cover--with-background {
      color: var(--white-0);
      background-color: rgba(10, 4, 4, 0.4);
    }
  }

  button {
    padding: var(--s-2);
    font-size: var(--font-size-small-1);
    font-weight: bold;
    color: var(--white-0);
    text-transform: uppercase;
    cursor: pointer;
    background: none;
    border: 3px solid var(--white-0);
    outline: none;
    transition: background-color 300ms ease;
  }

  button:hover {
    background-color: var(--black-3);
  }

  button:focus {
    background-color: var(--black-3);
    border: 3px solid var(--outline);
  }
</style>

<div class="cover--with-background">
  <Cover {coverSpace} {coverHeight}>

    {#if mounted}
      <video
        bind:this="{video}"
        poster="{srcIMG}"
        playsinline="true"
        muted="true"
        autoplay="{!prefersReducedMotion}"
        loop="true"
        class="cover__background"
        aria-label="{alt}"
        bind:paused
      >
        <source src="{srcWEBM}" type="video/webm" />
        <source src="{srcMP4}" type="video/mp4" />
      </video>
    {:else}
      <img class="cover__background" src="{srcURL}" {alt} />
    {/if}

    <slot />

    {#if mounted}
      <Cluster clusterJustifyContent="flex-end">
        <button class="box" type="button" on:click="{handleBtnClick}">
          {paused ? 'Play video' : 'Pause video'}
        </button>
      </Cluster>
    {/if}

  </Cover>
</div>
