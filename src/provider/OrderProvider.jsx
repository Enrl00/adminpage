import {createContext,useContext, useState} from 'react';
import order from '../data/order.json'

const OrderContext = createContext();

export const OrderProvider = (props) => {
    const {children} = props;
    const [orderInfo, setOrderInfo] = useState( {order} );
    return(
        <OrderContext.Provider value={{orderInfo, setOrderInfo}}>
            {children}
        </OrderContext.Provider>
    )
}
export const useOrderContext = () => useContext(OrderContext);