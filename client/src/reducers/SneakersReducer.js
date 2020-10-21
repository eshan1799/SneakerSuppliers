const initState = {
    username: '',
    myPosts: [],
    allPosts: []
}

const SneakersReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_POSTS':
            return { ...state, allPosts: action.payload, username: action.payload.username }
        // case 'ADD_HISTORY':
        //     return { ...state, history: action.payload }
        // case 'ADD_SEARCH':
        //     return { ...state, searchResult: action.payload }
        // case 'ADD_HISTORIC_PRICES':
        //     return { ...state, historicPrices: action.payload }
        // case 'ADD_NEWS':
        //     return { ...state, news: action.payload}
        // case 'ADD_COMPARISON':
        //     return { ...state, comparison: action.payload }
        // case 'CLEAR_SEARCH':
        //     return { ...state, searchResult: {}, historicPrices: [], news: []}
        // case 'LOG_OUT':
        //     return state = initState
        default:
            return state;
    }
}

export default SneakersReducer;