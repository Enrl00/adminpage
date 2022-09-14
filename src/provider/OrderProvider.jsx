import {createContext,useContext, useState} from 'react';

const OrderContext = createContext();

export const OrderProvider = (props) => {
    const {children} = props;
    const [orderInfo, setOrderInfo] = useState( {
        all:10,
        packed:2,
        delivered:3,
        mistaken:1,
        order:{
            orderId:'',
            food:'',
            address:'',
            phoneNumber:'',
            state:'',
            time:''
        }
    } );
    return(
        <OrderContext.Provider value={{orderInfo, setOrderInfo}}>
            {children}
        </OrderContext.Provider>
    )
}
export const useOrderContext = () => useContext(OrderContext);