<script>
  import NavItem from "./NavItem.svelte";
  import ThemeToggle from "./ThemeToggle.svelte";
</script>

<nav class="absolute right-24 mr-4 md:right-36 md:mr-0 top-12 -mt-1 flex flex-row-reverse justify-end md:gap-4">
  <NavItem icon="fas fa-envelope">
    <div class="absolute h-3 w-3 right-0.5 top-1.5 flex">
      <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
      <span class="relative inline-flex h-3 w-3 rounded-full bg-green-400" />
    </div>
  </NavItem>
  <NavItem icon="fab fa-github" />
  <NavItem icon="fab fa-twitter" />
  <NavItem icon="fab fa-facebook-f" />
  <NavItem icon="fab fa-instagram" />
</nav>

<ThemeToggle />
