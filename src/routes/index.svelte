<script>
	import TailwindStyles from "../components/TailwindStyles.svelte";
	import ThemeToggle from "../components/ThemeToggle.svelte";
	import NavItem from "../components/NavItem.svelte";
	import Typewriter from "../components/Typewriter.svelte";
	import SvelteTypewriter from "svelte-typewriter";
</script>

<style global type="text/scss">
	.title {
		@apply font-mono font-extralight text-5xl leading-normal;
	}

	.page {
		height: calc(100vh);
		@apply box-border flex flex-row items-center;

		&:not(:last-child) {
			@apply border-b-2 border-dashed border-current;
		}

		&:first-child {
			height: calc(100vh - 16rem);
		}
	}

	.box-bg {
		@apply bg-opacity-80 bg-white dark:bg-black dark:bg-opacity-70;
	}
</style>

<TailwindStyles />

<nav
	class="absolute right-40 top-12 -mt-1 flex flex-row-reverse justify-end gap-4">
	<NavItem icon="fas fa-envelope">
		<div class="absolute h-3 w-3 right-0.5 top-1.5 flex">
			<span
				class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
			<span
				class="relative inline-flex h-3 w-3 rounded-full bg-green-400" />
		</div>
	</NavItem>
	<NavItem icon="fab fa-github" />
	<NavItem icon="fab fa-twitter" />
	<NavItem icon="fab fa-facebook-f" />
	<NavItem icon="fab fa-instagram" />
</nav>

<ThemeToggle />
<main
	class="md:container md:mx-auto relative border-2 m-32 p-32 border-black dark:border-white box-bg">
	<div>
		<div class="page">
			<div class="flex flex-row items-end">
				<div
					class="rounded-2xl w-60 h-60 flex-shrink-0 border-4 border-green-400 flex items-center justify-center">
					<i class="fas fa-glasses fa-4x" />
				</div>
				<div class="flex flex-col ml-32">
					<h1 class="title">Hi,</h1>
					<h1 class="title">
						My name is
						<span class="font-bold">Emanuele Pavanello</span>
						and I'm a
						<Typewriter>
							<span>Frontend Developer</span>
							<span>Backend Developer</span>
							<span>Mobile Developer</span>
							<span>DevOps</span>
						</Typewriter>
					</h1>
					<h1 class="title">
						from
						<span class="font-bold">Turin, Italy</span>
					</h1>
				</div>
			</div>
		</div>
		<div class="page">
			<h1 class="title">
				I'm working with
				<Typewriter>
					<span>C++</span>
					<span>ES6</span>
					<span>React</span>
					<span>Angular2+</span>
					<span>Vue</span>
					<span>Svelte</span>
					<span>NodeJS</span>
					<span>C#</span>
				</Typewriter>
			</h1>
		</div>
	</div>
	<div class="fixed bottom-8 left-0 w-full flex flex-row justify-center">
		<i
			class="fas fa-long-arrow-alt-down fa-2x animate-bounce hover:opacity-25 w-16 h-16 cursor-pointer transition-opacity flex items-center justify-center" />
	</div>
</main>
