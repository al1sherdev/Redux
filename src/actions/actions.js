// ADD PRODUCTS FUNCTION
export const addProductAcion = (product) => {
    return {
        type: "ADD_PRODUCT",
        payload: product
    }
}
// DELETE PRODUCTS FUNCTION
export const removeProductAcion = (id) => {
    return {
        type: "DELETE_PRODUCT",
        payload: id
    }
}
// EDIT PRPDUCT FUNCTION
export const editProductAcion = (name, description) => {
    return {
        type: "EDIT_PRODUCT",
        payload: name, description
    }
}
