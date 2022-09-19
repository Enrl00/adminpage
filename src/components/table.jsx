import * as React from 'react';
import { Box } from '@mui/system';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AccordionContainer from './accordionContainer';
import { useState } from 'react';
import { useOrderContext } from '../provider/OrderProvider';

export const CollapsibleTable=(text)=> {
  const [packedOrder, setPackedOrder] = useState([])
  const [deliveredOrder, setDelilveredOrder] = useState([])
  const [mistakenOrder, setMistakenOrder] = useState([])
  const{orderInfo} = useOrderContext()
  let packedArr=[];
  let deliveredArr=[];
  let mistakenArr=[];
  text.data.order.map((el) => {
    if(el.status === 'Packed'){
      packedArr.push(el);
      setPackedOrder(packedArr)
  } if(el.status === 'Delivered'){
    deliveredArr.push(el);
      setDelilveredOrder(deliveredArr)
  } if(el.status === 'Mistaken'){
    mistakenArr.push(el);
      setMistakenOrder(mistakenArr)
  }
  })
  return (
    <Box>
      <TableContainer component={Paper}>
      <Table sx={{
        display:'flex',
        flexDirection:'column',
        alignItems:'center'
      }}>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>{text.value}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody style={{height:'40vh', overflow:'scroll', display:'flex',flexDirection:'column', width:'90%'}}>
          <AccordionContainer data={orderInfo} />
        </TableBody>
      </Table>
    </TableContainer>
    <TableContainer component={Paper} id='packed'>
      <Table sx={{
        display:'flex',
        flexDirection:'column',
        alignItems:'center'
      }}>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>{text.value}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody style={{height:'40vh', overflow:'scroll', display:'flex',flexDirection:'column', width:'90%'}}>
          <AccordionContainer data={packedOrder} />
        </TableBody>
      </Table>
    </TableContainer>
    <TableContainer component={Paper} id='delivered'>
      <Table sx={{
        display:'flex',
        flexDirection:'column',
        alignItems:'center'
      }}>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>{text.value}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody style={{height:'40vh', overflow:'scroll', display:'flex',flexDirection:'column', width:'90%'}}>
          <AccordionContainer data={deliveredOrder} />
        </TableBody>
      </Table>
    </TableContainer>
    <TableContainer component={Paper} id='mistaken'>
      <Table sx={{
        display:'flex',
        flexDirection:'column',
        alignItems:'center'
      }}>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>{text.value}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody style={{height:'40vh', overflow:'scroll', display:'flex',flexDirection:'column', width:'90%'}}>
          <AccordionContainer data={mistakenOrder} />
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
    
  );
}
