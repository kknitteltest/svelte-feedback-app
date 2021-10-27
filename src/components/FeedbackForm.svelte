<script>
    import Card from "./Card.svelte";
    import Button from "./Button.svelte";
    import RatingSelect from "./RatingSelect.svelte";

    let text = "";
    let rating = 10;
    let btnDisabled = true;
    let min = 10;
    let message;

    const handleSelect = (e) => (rating = e.detail);

    const handleInput = () => {
        if (text.trim().length <= min) {
            message = `Text must be at least ${min} charactors`;
            btnDisabled = true;
        } else {
            message = null;
            btnDisable = false;
        }
    };

    const handleSubmit = () => {
        if(text.trim().length > min)
    }
</script>

<Card>
    <header>
        <h2>How would you rate your service with us?</h2>
    </header>
    <form on:submit|preventDefault={handleSubmit}>
        <RatingSelect on:rating-select={handleSelect} />
        <div class="input-group">
            <input
                type="text"
                on:input={handleInput}
                bind:value={text}
                placeholder="Tell us something that keeps you coming back"
            />

            <Button disabled={btnDisabled} type="submit">Send</Button>
        </div>
        <div>
            {#if message}
                <div class="message">
                    {message}
                </div>
            {/if}
        </div>
    </form>
</Card>

<style>
    header {
        max-width: 499px;
        margin: auto;
    }

    header h2 {
        font-size: 22px;
    }
</style>
