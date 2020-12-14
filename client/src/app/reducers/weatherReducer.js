const initialState = {
    listLocaltion: [],
    selectedId: null,
}
const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'REQUEST_LOCATION': {
            return {
                ...state,
                listLocaltion: [],
            }
        }
        case 'RESPONSE_LOCATION': {
            console.log('reducer', action.payload)
            return {
                ...state,
                listLocaltion: action.payload,
            }
        }
        default:
            return state;
    }
};

export default weatherReducer;