import * as React from 'react';
import {Button,Menu,MenuItem,Fade} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {useOrderContext} from '../provider/OrderProvider'

const styles = {
  button:{
    borderRadius: '24px',
    width:'108px',
    height:'32px',
    backgroundColor:'#66B60F',
    color:'#FFFFFF',
    marginTop:'10px',
    fontSize:'14px'
  }
}

export default function FadeMenu({data}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [buttonStatus]= React.useState(data.status);
  const  {orderInfo,setOrderInfo} = useOrderContext();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (e) => {
    setAnchorEl(null);
    console.log('initial info:', orderInfo)
    const filtered = orderInfo.order.filter((el) => el.orderID !== data.orderID)
    console.log('filtered:', filtered)
    data.status = e;
    console.log('data.status:',data.status)
    filtered.push(data)
    console.log('pushed filtered:', filtered)
    setOrderInfo(filtered)
    console.log('set orderinfo:', orderInfo)
  };
  return (
    <div>
      <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        variant="contained"
        sx={styles.button}
      >
        {buttonStatus}
        <ExpandMoreIcon/>
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={(e)=>handleClose(e.target.innerText)}>Packed</MenuItem>
        <MenuItem onClick={(e)=>handleClose(e.target.innerText)}>Delivered</MenuItem>
        <MenuItem onClick={(e)=>handleClose(e.target.innerText)}>Mistaken</MenuItem>
      </Menu>
    </div>
  );
}

