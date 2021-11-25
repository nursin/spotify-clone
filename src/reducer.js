export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // remove after finish developing
    token: 'BQBwnOC19O0csILQMq8DyXdDGTJka5YU2C9lr5cjsxNH_Jlc_9Sq-ezjFBcqJkz97P7lKwDD7mcpJ_eq12PB1GAX6EqwY8J4LvRNopgmjPJkJdy0Ji_gptKIWS5S_cEQcN9-rJORmLsV6r6d6G3LNhLtTier1u78qg',
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