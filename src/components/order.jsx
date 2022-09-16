import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Divider } from '@mui/material';
import { CollapsibleTable } from './table';
import { Sidebar } from './sidebar';
// import {useOrderContext} from '../provider/OrderProvider'

export const Order=()=> {
    // const {orderInfo,setOrderInfo} = useOrderContext();
    const week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  return (
    <Box>
      <Sidebar/>
        <Container style={{marginTop:'10vh', display:'flex', flexDirection:'row', overflow:'scroll'}}>
           {week.map(el => {
            return(
                <div>
                    <div>
                    <CollapsibleTable/>
                    </div>
                    <Divider/>
                </div>
            )
           })}
        </Container>
    </Box>
  );
}
