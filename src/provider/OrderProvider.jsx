import {createContext, createTheme, useContext, useState} from 'react';
import { UNSAFE_RouteContext } from 'react-router-dom';

const OrderContext = createContext();

export const OrderProvider = (props) => {
    const {children} = props;
    const [orderInfo, setOrderInfo] = useState( {
        totalOrder:0,
        orderId:''
    } );
    return(
        <OrderContext.Provider value={{orderInfo, setOrderInfo}}>
            {children}
        </OrderContext.Provider>
    )
}
export const useUserContext = () => useContext(OrderContext);