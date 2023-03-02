const initialValue = [];

export const productReducer = (state = initialValue, action) => {
    switch (action.type) {
        case "ADD_PRODUCT":
            return [
                ...state,
                action.payload
            ]
        case "DELETE_PRODUCT":
            return state.filter(item => item.id !== action.payload)
        case "EDIT_PRODUCT":
            return state.map(item => {
                if(item.id === action.payload.id) {
                    item.name = action.payload.name 
                    item.description = action.payload.decription
                }  return item
                }
            )
        default:
            return state;
    }
}