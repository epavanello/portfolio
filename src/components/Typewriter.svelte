<script>
    import { onMount } from "svelte";

    let isMounted = false;

    onMount(() => {
        isMounted = true;
    });

    async function typewriter(parent) {
        const items = [];
        for (let node of [...parent.childNodes].filter(
            (el) =>
                el.childNodes.length === 1 && el.childNodes[0].nodeType === 3
        )) {
            items.push({ node, text: node.textContent });
            node.textContent = "";
        }
        console.log(items);

        let index = 0;
        while (true) {
            await write(items[index]);
            await sleep(800);
            await unwrite(items[index]);
            index++;
            if (index > items.length - 1) {
                index = 0;
            }
        }
    }

    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    async function write(item) {
        for (let index = 0; index <= item.text.length; index++) {
            item.node.innerHTML = item.text.slice(0, index) + "▌";
            await sleep(200);
        }
        await sleep(200);
        item.node.innerHTML = item.text;
    }

    async function unwrite(item) {
        for (let index = item.text.length - 1; index >= 0; index--) {
            await sleep(100);
            item.node.innerHTML = item.text.slice(0, index);
        }
    }
</script>

<style scoped>
</style>

<div class:inline-block={isMounted} class:hidden={!isMounted} use:typewriter>
    <slot />
</div>
