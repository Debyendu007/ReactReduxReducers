export const increment = (nr=1) => {
    return {
        type: "INCREMENT",
        payload: nr
    };
}

export const decrement = (nr=1) => {
    return {
        type: "DECREMENT",
        payload: nr
    };
}