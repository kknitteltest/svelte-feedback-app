import {writable} from 'svelte/store'

export const FeedbackStore = writable([
    {
        id: 1,
        rating: 10,
        text: "testing text testing text tresting text testing text ",
    },
    {
        id: 2,
        rating: 9,
        text: "testing text testing text testing text testing text ",
    },
    {
        id: 3,
        rating: 8,
        text: "testing text testing text testing text testing text ",
    },
])