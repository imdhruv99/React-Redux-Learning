import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

// ACTION CREATORS

// 1. Send Cart Data
export const sendCartData = (cart) => {

    return async (dispatch) => {

        dispatch(uiActions.showNotification({
            status: 'pending',
            title: 'Sending',
            message: 'Sending cart data! '
            })
        );
        
        const sendRequest = async () => {
            const response = await fetch (
                'https://shoppingcart-e5677-default-rtdb.firebaseio.com/cart.json', {
                method: 'PUT',
                body: JSON.stringify(cart)
            });
          
            if (!response.ok){
                throw new Error("Sending cart data failed.")
            }
        };

        try {
            await sendRequest();
        }   catch (error) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error',
                message: 'Sending cart data failed!'
                })
            );
        }
        

        dispatch(uiActions.showNotification({
          status: 'success',
          title: 'Success',
          message: 'Send cart data successfully!'
            })
        );

    };
};

// 2. Fetch Cart Data
export const fetchCartData = (cart) => {
    return async (dispatch) => {
        
        const fetchData = async() => {
            const response = await fetch(
                'https://shoppingcart-e5677-default-rtdb.firebaseio.com/cart.json',
            );
            
            if (!response.ok) {
                throw new Error("Could not fetch card data!")
            }

            const data =  await response.json();

            return data;
        }

        try {
            const cartData = await fetchData();
            dispatch(cartActions.replaceCart({
                items: cartData.items || [],
                totalQuantity:  cartData.totalQuantity  
            }));

        }   catch(error) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error',
                message: 'Fetching cart data failed!'
                })
            );            
        }

    };
};