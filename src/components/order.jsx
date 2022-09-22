import * as React from 'react';
import { Box, Divider, TableCell, TableHead, TableRow } from '@mui/material';
import { CollapsibleTable } from './table';
import { Sidebar } from './sidebar';
import { useOrderContext } from '../provider/OrderProvider'

export const Order = () => {
  const { orderInfo } = useOrderContext();
  const week = [0, 1, 2, 3, 4, 5, 6];
  return (
    <Box>
      <Sidebar />
      <Box
        sx={{ marginTop: "10vh", display: "flex", flexDirection: "column" ,marginLeft: "250px"}}
      >
        <Box>
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              overflow: "scroll",
            }}
          >
            {week.map((el, index) => {
              const day = orderInfo?.order?.filter(({date}) => new Date(date).getDay() === el);
              return (
                <Box key={index}>
                  <TableHead>
                    <TableRow>
                      <TableCell />
                      <TableCell>{el === 0 ? 'Sunday' : el === 1 ? 'Monday' : el === 2 ? 'Tuesday' : el === 3 ? 'Wednesday' : el === 4 ? 'Thursday' : el === 5 ? 'Friday' : 'Saturday'}</TableCell>
                    </TableRow>
                  </TableHead>
                  <Box>
                    <CollapsibleTable value={el} data={day} />
                  </Box>
                  <Divider />
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
