import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Divider } from '@mui/material';
import {useOrderContext} from '../provider/OrderProvider'

export const Order=()=> {
    const {orderInfo,setOrderInfo} = useOrderContext();
    const week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  return (
    <Box>
        <Container style={{marginTop:'10vh'}}>
           {week.map(el => {
            return(
                <div>
                    <div>

                    </div>
                    <Divider/>
                </div>
            )
           })}
        </Container>
    </Box>
  );
}
