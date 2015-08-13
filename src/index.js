export default (middleware) => {
    let hasBeenTriggered = false;

    return (store) => (next) => (action) => {
        next(action);

        if (!hasBeenTriggered) {
            hasBeenTriggered = true;
            middleware(store.dispatch);
        }
    };
};
