<script>
	import FeedbackForm from "./components/FeedbackForm.svelte";
	import FeedbackList from "./components/FeedbackList.svelte";
	import FeedbackStats from "./components/FeedbackStats.svelte";
	import MoralisLogin from "./components/MoralisLogin.svelte";

	// defineNewObjet = async () => {
	// 	const MonsterCreature = Moralis.Object.extends("monster");
	// 	const monster = new MonsterCreature();
	// 	monster.set("health", 85);
	// 	monster.set("strength", 15);

	// 	await monster.save();
	// };
</script>

<main class="container">
	<MoralisLogin />
	<FeedbackForm />
	<FeedbackStats />
	<FeedbackList />
</main>
