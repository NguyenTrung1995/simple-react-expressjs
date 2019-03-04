// action names
const ITEMS_HAS_ERRORED = "ITEMS_HAS_ERRORED";
const ITEMS_IS_LOADING = "ITEMS_IS_LOADING";
const ITEMS_FETCH_DATA_SUCCESS = "ITEMS_FETCH_DATA_SUCCESS";

// actions
export const itemsHasErrored = bool => ({
    type: ITEMS_HAS_ERRORED,
    hasErrored: bool
})

export const itemsIsLoading = bool => ({
    type: ITEMS_IS_LOADING,
    isLoading: bool
})

export const itemsFetchDataSuccess = items => ({
    type: ITEMS_FETCH_DATA_SUCCESS,
    items
})

export const errorAfterFiveSeconds = () => {
    // We return a function instead of an action object
    return (dispatch) => {
        setTimeout(() => {
            // This function is able to dispatch other action creators
            dispatch(itemsHasErrored(true));
        }, 5000);
    };
}

export const itemsFetchData = url => {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));
        setTimeout(() => {
            fetch(url)
                .then((response) => {
                    if (!response.ok) {
                        throw Error(response.statusText);
                    }
                    dispatch(itemsIsLoading(false));
                    return response;
                })
                .then((response) => response.json())
                .then((items) => dispatch(itemsFetchDataSuccess(items.products)))
                .catch(() => dispatch(itemsHasErrored(true)));
        }, 1000);
    };
}