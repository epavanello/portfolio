<script>
    export let icon = "";
</script>

<button class="cursor-pointer flex items-center justify-center group w-12 h-12">
    <div
        class="bg-green-400 bg-opacity-75 rounded-full w-12 h-12 absolute transform scale-0 transition-transform group-hover:scale-100 left z-0" />
    <i class="{icon} fa-2x z-10"><slot /></i>
</button>
