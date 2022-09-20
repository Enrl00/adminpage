import * as React from 'react';
import { Box } from '@mui/system';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@mui/material';
import AccordionContainer from './accordionContainer';
const styles ={
  tableBody:{
    width:'300px',
    height:'540px',
    overflow: 'scroll',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center' 
  },
  table:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}

export const CollapsibleTable = ({ data }) => {
  let orderedArr = data.filter(({ status }) => status === "Ordered");
  let packedArr = data.filter(({ status }) => status === "Packed");
  let deliveredArr = data.filter(({ status }) => status === "Delivered");
  let mistakenArr = data.filter(({ status }) => status === "Mistaken");
  return (
    <Box>
      <TableContainer component={Paper} >
        <Table sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Ordered</TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{backgroundColor: '#F5F5F7'}} sx={styles.tableBody}>
            {orderedArr.length !== 0 && <AccordionContainer data={orderedArr} />}
          </TableBody>
        </Table>
      </TableContainer>
      <TableContainer component={Paper} id='packed'>
        <Table sx={styles.table }>
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Packed</TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ backgroundColor: '#FFF9F1'}}  sx={styles.tableBody}>
            {packedArr.length !== 0 && <AccordionContainer data={packedArr} />}
          </TableBody>
        </Table>
      </TableContainer>
      <TableContainer component={Paper} id='delivered'>
        <Table sx={styles.table}>
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Delivered</TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ backgroundColor: '#FAFFF5' }}  sx={styles.tableBody}>
            <AccordionContainer data={deliveredArr} />
          </TableBody>
        </Table>
      </TableContainer>
      <TableContainer component={Paper} id='mistaken'>
        <Table sx={styles.table}>
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Mistaken</TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ backgroundColor: '#FAFFF5' }}  sx={styles.tableBody}>
            <AccordionContainer data={mistakenArr}/>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>

  );
}
