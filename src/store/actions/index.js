import {ADD_PRODUCT, DELETE_PRODUCT, REMOVE_PRODUCT,CHECKOUT} from "./types";

export const addProduct = (product) => ({
    type : ADD_PRODUCT, 
    product
});

export const deleteProduct = (product) => ({
    type : DELETE_PRODUCT,
    product
});
export const removeProduct = (id) => ( {
    type: REMOVE_PRODUCT,
    id
});
export const checkout = () => ({
    type:CHECKOUT
})
// export const quantityOfProduct = (quantity) => ({
//     type : QUANTITY_OF_PRODUCT,
//     quantity
// })