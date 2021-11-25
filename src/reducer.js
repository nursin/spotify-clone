export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // remove after finish developing
    token: 'BQAd8KUWW9GMRJrxRo-EYNe4LvYkvP1ejQDFZ1FCwELLoDjlWHa1mr1kAgyETPqgaEEACIiM5hz5UqoY1GGn7nNG_rd-YiBPIm_LluulKvXTnumb-cTUohtnMwg48_lbpzk-144ta7D5YIIfP9qIJRpYP9hEY8Vvsg',
};

export const reducer = (state, action) => {
    console.log(action);

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state, 
                user: action.user,
            };
        
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            };

        default:
            return state;
    }
}