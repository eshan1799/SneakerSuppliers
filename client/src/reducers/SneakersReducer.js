const initState = {
    myPosts: [],
    allPosts: []
}

const SneakersReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_POSTS':
            return { ...state, allPosts: action.payload.posts }
        default:
            return state;
    }
}

export default SneakersReducer;