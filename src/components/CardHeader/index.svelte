<script>
  import { Stack } from "creditdesign-svelte-components";
  import CardHeadline from "../CardHeadline/index.svelte";

  export let cardData;
  export let cardHeaderStackSpace = "var(--s-4)";
  export let headerLevel;
  export let headlineFontSize;
  export let id = "";

  let { eyebrow, subHead, headline, href } = cardData;
</script>

<header class="card__header">
  <Stack stackSpace="{cardHeaderStackSpace}">
    {#if eyebrow}
      <p class="eyebrow font-size:small font-family:sans-serif">
        {@html eyebrow}
      </p>
    {/if}

    <CardHeadline {cardData} {id} {headerLevel} {headlineFontSize}>
      {#if href}
        <a
          {href}
          id="{id.length ? id : null}"
          data-track="click"
          data-event-category="body links"
          data-event-action="click"
          data-event-label="{headline}"
        >
          {@html headline}
        </a>
      {:else}
        {@html headline}
      {/if}
    </CardHeadline>

    {#if subHead}
      <p class="author font-size:small font-family:sans-serif">
        {@html subHead}
      </p>
    {/if}

  </Stack>
</header>
