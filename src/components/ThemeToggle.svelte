<script>
    import { onMount } from "svelte";
    export let dark = true;

    onMount(() => {
        dark = getHTML().classList.contains("dark");
    });

    function getHTML() {
        return document.getElementsByTagName("html")[0];
    }

    function toggle() {
        dark = !dark;

        getHTML().classList[dark ? "add" : "remove"]("dark");
    }
</script>

<div
    on:click={toggle}
    class="box-bg flex flex-row items-center border-2 border-black dark:border-white transition-colors rounded-full fixed right-8 top-12 z-10">
    <i
        class="fas fa-sun text-black dark:text-white transition-colors w-4 h-4 m-2 inline-block" />
    <button
        class="transition-all absolute w-6 h-6 bg-black dark:bg-white rounded-full m-1 focus:outline-none"
        class:right-0={dark}
        class:right-8={!dark} />
    <i
        class="fas fa-moon text-black dark:text-white transition-colors w-4 h-4 m-2 inline-block" />
</div>
