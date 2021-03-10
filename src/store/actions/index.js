import {ADD_PRODUCT, DELETE_PRODUCT} from "./types";

export const addProduct = (product) => ({
    type : ADD_PRODUCT, 
    product
});

export const deleteProduct = (product) => ({
    type : DELETE_PRODUCT,
    product
})