<script>
	import FeedbackForm from "./components/FeedbackForm.svelte";
	import FeedbackList from "./components/FeedbackList.svelte";
	import FeedbackStats from "./components/FeedbackStats.svelte";
	import MoralisLogin from "./components/MoralisLogin.svelte";
</script>

<main class="container">
	<MoralisLogin />
	<FeedbackForm />
	<FeedbackStats />
	<FeedbackList />
</main>
