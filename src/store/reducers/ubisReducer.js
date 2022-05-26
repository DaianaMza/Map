const initialState = {
    latitud : " ",
    longitud:" "
};
/* const SetUbis = (state, action) => {
    const updatedState = {isMapVisible: action.isMapVisible};
    return {
        ...state,
        ...updatedState
    };}; */
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_MAP_VISIBLE:
            return {
                ...state, latitud :
               action.payload[0].latitud,
               longitud :
               action.payload[0].longitud,
            };
        default:
            return state;
    }
};

export default reducer;