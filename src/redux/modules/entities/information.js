export const schema = {
    name: 'information',
    id: 'id',
};

const reducer = (state = {}, action) => {
    if (action.response && action.response.information) {
        return { ...state, ...action.response.information }
    }
    return state;
};

export default reducer;