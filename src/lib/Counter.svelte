<svelte:options customElement="sbelte-counter" />

<script>
  let count = 0;
  const increment = () => {
    count += 1;
  };
</script>

<button on:click={increment}>
  {count} 🍊
</button>
