<script>
  import TailwindStyles from "$components/TailwindStyles.svelte";
  import Typewriter from "$components/Typewriter.svelte";

  import { scrollto } from "svelte-scrollto";

  import { fade } from "svelte/transition";
  import Header from "$components/Header.svelte";

  import media from "$logic/media";

  let y;

  let showArrow = true;
  $: showArrow = y < 400;

  const roles = ["Full Stack Developer", "DevOps", "Product Owner", "Mobile Developer"];
  const skills = ["C++", "Typescript", "React", "Angular", "Vue", "Svelte", "NodeJS", "C#", "Docker", "CI/CD", "AWS", "React Native"];
</script>

<style global type="text/scss">
  .title {
    @apply font-mono font-extralight text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl leading-normal;
  }

  .page-container {
    @apply relative border-2 my-32 border-black dark:border-white box-bg;
    @apply mx-4 sm:mx-8 lg:mx-16 xl:mx-32;
  }

  .page {
    min-height: calc(100vh);
    @apply box-border flex flex-row items-center;
    @apply p-4 sm:p-8 lg:p-16 xl:p-32;

    &:first-child {
      min-height: calc(100vh - 8rem);
    }
  }

  .box-bg {
    @apply bg-opacity-80 bg-white dark:bg-black dark:bg-opacity-70;
  }
</style>

<TailwindStyles />

<svelte:window bind:scrollY={y} />

<Header />
<main class="page-container">
  <div>
    <div class="page" id="page1">
      <div class={`flex flex-1 ${$media.md ? 'items-end flex-row mt-0' : 'flex-col items-center'}`}>
        <div class="rounded-2xl w-60 h-60 flex-shrink-0 border-4 border-green-400 flex items-center justify-center">
          <i class="fas fa-glasses fa-4x" />
        </div>
        <div class="flex flex-col mt-16 md:mt-0 md:ml-32">
          <h1 class="title">Hi,</h1>
          <h1 class="title">
            My name is
            <span class="font-bold">Emanuele.</span><br />
            I'm a
            <Typewriter>
              {#each roles as role}<span>{role}</span>{/each}
            </Typewriter>
          </h1>
          <h1 class="title">living in <span class="font-bold">Turin, Italy</span></h1>
        </div>
      </div>
    </div>
    <div class="page" id="page2">
      <h1 class="title">
        I'm working with
        <Typewriter>
          {#each skills as skill}<span>{skill}</span>{/each}
        </Typewriter>
      </h1>
    </div>
  </div>
  {#if showArrow}
    <div transition:fade class="fixed bottom-8 left-0 w-full flex flex-row justify-center">
      <i
        use:scrollto={'#page2'}
        class="fas fa-long-arrow-alt-down fa-2x animate-bounce hover:opacity-25 w-16 h-16 cursor-pointer transition-opacity flex items-center justify-center" />
    </div>
  {/if}
</main>
