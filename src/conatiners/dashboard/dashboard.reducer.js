const INITIAL_STATE = {
    allMovies: [],
    movieList: {},
    apiKey: 'b9bd48a6',
    notificationMsg: '',
    searchedMovie: {}
};
const DashBoardReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'FETCH_MOVIE_LIST': return { ...state, movieList: action.payload, notificationMsg: '', allMovies: action.payload.Search }
        case 'MOVIE_RECORD_MISSING': return { ...state, notificationMsg: action.payload }
        case 'NETWORK_ERROR': return { ...state, notificationMsg: action.payload }
        case 'FETCH_MOVIE_LIST_MORE': return { ...state, movieList: action.payload, allMovies: [...state.allMovies.slice(0, state.allMovies.length - 1), ...action.payload.Search, ...state.allMovies.slice(0)] }
        case 'FETCH_SEARCHED_MOVIE_DETAILS': return { ...state, searchedMovie: action.payload }
        case 'UN_MOUNT_MOVIE_LIST': return INITIAL_STATE 
        default:
            return state;
    }
};
export default DashBoardReducer;