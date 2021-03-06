<script lang="ts">
  import { onMount } from "svelte";

  let isMounted = false;

  onMount(() => {
    isMounted = true;
  });

  function typewriter(parent: HTMLElement) {
    let destroyed = false;
    const promise = async () => {
      const items: HTMLElement[] = [];
      for (let node of [...parent.childNodes].filter((el) => el.childNodes.length === 1 && el.childNodes[0].nodeType === 3)) {
        if (node instanceof HTMLElement) {
          if (node.classList.contains("cursor")) {
            continue;
          }
          items.push(node);
          node.style.display = "none";
        }
      }

      let index = 0;
      while (!destroyed) {
        await sleep(600);
        await write(items[index]);
        await sleep(2000);
        await unwrite(items[index]);
        index++;
        if (index > items.length - 1) {
          index = 0;
        }
      }
    };

    promise();
    return {
      update: () => {},
      destroy: () => {
        destroyed = true;
      },
    };
  }

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  async function write(node: HTMLElement) {
    const text = node.textContent;
    node.textContent = "";
    node.style.display = "";
    for (let index = 0; index <= text.length; index++) {
      node.innerHTML = text.slice(0, index);
      await sleep(200);
    }
    await sleep(200);
  }

  async function unwrite(node: HTMLElement) {
    const text = node.textContent;
    for (let index = text.length - 1; index >= 0; index--) {
      await sleep(100);
      node.innerHTML = text.slice(0, index);
    }
    node.style.display = "none";
    node.textContent = text;
  }
</script>

<style scoped>
  .cursor {
    animation-duration: 350ms;
    animation-name: fade;
    animation-direction: alternate;
    animation-iteration-count: infinite;
  }
  @keyframes fade {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
    }
  }
</style>

<div class:inline-block={isMounted} class:hidden={!isMounted} use:typewriter class="text-green-400">
  <slot /><span class="cursor text-black dark:text-white">▁</span>
</div>
