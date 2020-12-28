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

	$: console.log($media);
</script>

<style global type="text/scss">
	.title {
		@apply font-mono font-extralight text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl leading-normal;
	}

	.page {
		min-height: calc(100vh);
		@apply box-border flex flex-row items-center;

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
<main
	class="relative border-2 m-32 px-8 md:px-16 lg:px-32 border-black dark:border-white box-bg">
	<div>
		<div class="page" id="page1">
			<div
				class={`flex flex-1 ${$media.xl ? 'items-end flex-row mt-0' : 'flex-col'}`}>
				<div
					class="rounded-2xl w-60 h-60 flex-shrink-0 self-center border-4 border-green-400 flex items-center justify-center">
					<i class="fas fa-glasses fa-4x" />
				</div>
				<div class="flex flex-col mt-16 xl:mt-0 xl:ml-32">
					<h1 class="title">Hi,</h1>
					<h1 class="title">
						My name is
						<span class="font-bold">Emanuele.</span><br />
						I'm a
						<Typewriter>
							<span>Full Stack Developer</span>
							<span>DevOps</span>
							<span>Product Owner</span>
							<span>Mobile Developer</span>
						</Typewriter>
					</h1>
					<h1 class="title">
						living in
						<span class="font-bold">Turin, Italy</span>
					</h1>
				</div>
			</div>
		</div>
		<div class="page" id="page2">
			<h1 class="title">
				I'm working with
				<Typewriter>
					<span>C++</span>
					<span>Typescript</span>
					<span>React</span>
					<span>Angular</span>
					<span>Vue</span>
					<span>Svelte</span>
					<span>NodeJS</span>
					<span>C#</span>
					<span>Docker</span>
					<span>CI/CD</span>
					<span>AWS</span>
					<span>React Native</span>
				</Typewriter>
			</h1>
		</div>
	</div>
	{#if showArrow}
		<div
			transition:fade
			class="fixed bottom-8 left-0 w-full flex flex-row justify-center">
			<i
				use:scrollto={'#page2'}
				class="fas fa-long-arrow-alt-down fa-2x animate-bounce hover:opacity-25 w-16 h-16 cursor-pointer transition-opacity flex items-center justify-center" />
		</div>
	{/if}
</main>
