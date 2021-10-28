<script>
    export let style = "primary";
    export let type = "button";
    export let disabled = false;
    // import FeedbackList from "./components/FeedbackList.svelte";
</script>

<button {type} {disabled} class={style}>
    <slot />
</button>

<style>
    button {
        color: #fff;
        border: 0;
        border-radius: 8px;
        color: #fff;
        width: 100px;
        height: 40px;
        cursor: pointer;
    }

    .primary {
        background-color: #202142;
    }

    .sedondary {
        background: #ff6a95;
    }

    button:hover {
        transform: scale(0.98);
        opacity: 0.9;
        cursor: auto;
    }

    button:disabled {
        background-color: #cccccc;
    }

    button:disabled:hover {
        transform: scale(0.5);
        opacity: 0.9;
    }
</style>
