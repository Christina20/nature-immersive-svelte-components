<script>
  import LogoNature from "./index.svelte";

  const sizes = [1, 2, 3, 4, 5];
  const ratio = 1.6;
</script>

{#each sizes as size}
  <div>
    <LogoNature height="{size * ratio}" />
  </div>
{/each}
