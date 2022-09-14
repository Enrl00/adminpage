import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import WeeklySpread from './weeklySpread';
import { Divider } from '@mui/material';

export const Order=()=> {
  return (
    <Box>
        <Container style={{marginTop:'10vh'}}>
            <div>
                <h2>All</h2>
                <WeeklySpread/>
            </div>
            <Divider/>
            <div> 
                <h2>Packed</h2>
                <WeeklySpread/>
            </div>
            <Divider/>
            <div> 
                <h2>Delivered</h2>
                <WeeklySpread/>
            </div>
            <Divider/>
            <div>
                <h2>Mistaken</h2>
                <WeeklySpread/>
            </div>
        </Container>
    </Box>
  );
}
