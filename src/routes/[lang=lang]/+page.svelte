<script type="ts">
	import { LL } from '$i18n/i18n-svelte';
	import { createSearchStore, searchHandler } from '$stores/searchBar';
	import { onDestroy } from 'svelte';
	import { Seo } from '@emerald-dao/component-library';
	import LevelCard from '$lib/components/flownaut/LevelCard.svelte';

	export let data;

	$: searchCadence = data.flownauts.map((example) => ({
		...example,
		searchTerms: `${example.title}`
	}));

	$: searchStore = createSearchStore(searchCadence);

	$: unsubscribe = searchStore.subscribe((model) => searchHandler(model));

	onDestroy(() => {
		unsubscribe();
	});
</script>

<section class="container-medium section-large column-6">
	<div class="title-wrapper">
		<h1 class="w-medium">Ei!</h1>
		<p class="small">
		</p>
	</div>
	{#if data.flownauts.length === 0}
		<p><em>{$LL.NO_EXAMPLES_FOUND()}</em></p>
	{:else}
		<div class="main">
			{#if $searchStore.search.length > 0 && $searchStore.filtered.length === 0}
				<p>No results found</p>
			{/if}
			{#each $searchStore.filtered as content, i}
				<LevelCard level={content} {i} />
			{/each}
		</div>
	{/if}
</section>

<Seo
	title={`Flownaut | Emerald Academy`}
	description="A Cadence hacking game inspired by Ethernaut."
	type="WebPage"
	image="https://academy.ecdao.org/favicon.png"
/>

<style type="scss">
	section {
		.title-wrapper {
			display: flex;
			flex-direction: column;
			gap: var(--space-3);
			align-items: center;
			justify-content: center;
			text-align: center;
			margin-bottom: var(--space-10);
		}

		.main {
			display: grid;
			grid-template-columns: 1fr;
			gap: var(--space-4) var(--space-13);

			@include mq(small) {
				grid-template-columns: 1fr 1fr;
			}

			@include mq(medium) {
				grid-template-columns: 1fr 1fr 1fr;
			}
		}

		p {
		}
	}
</style>
