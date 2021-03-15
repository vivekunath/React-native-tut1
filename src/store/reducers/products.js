const initialState =[];

const Products = (state = initialState, action) => {
    debugger
    switch (action.type) {
        case "ADD_PRODUCT":
            const product = state.find((product) => product.id === action.product.id)
            if(product){
                product.quantity = product.quantity+1,
                product.price = product.basePrice*product.quantity
                return[
                    ...state
                 ]
            }
            else 
            {
                return [...state, action.product]
            }
            
           
        case "DELETE_PRODUCT":
            return [
                ...(state.filter((product) => product.id !== action.product))
            ] 
        case "REMOVE_PRODUCT":
            const item = state.find((product) => product.id === action.id)
            if(item.quantity >1){
                item.quantity = item.quantity-1
                item.price = item.basePrice*item.quantity
                return[
                    ...state
                 ]
            }
            else 
            {
                return [
                    ...(state.filter((product) => product.id !== action.id))
                ] 
            }
        case "CHECKOUT":
            state=initialState
        default :
            return state;
        
    }
}

export default Products;

