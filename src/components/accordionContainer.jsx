import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Divider from '@mui/material/divider';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import location from '../sources/location.png';
import phone from '../sources/phone.png'
const styles = {
  spacing:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center' 
  }
}
const AccordionContainer = ({ data }) => {
  return (
    data?.map(el => {
      return (
        <Accordion sx={{ width: '90%', marginTop: '1.5vh' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography> {el.orderID}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Divider />
            <Box>
              {el.orders.map(ele => {
                return (
                  <Box sx={ styles.spacing } >
                    <ul>{ele.productName}</ul>
                    <span>×{ele.amount}</span>
                  </Box>
                )
              })}
              <Divider />
              <Box>
                <Box sx={styles.spacing}>
                  <img src={location} alt='' />
                  <Box>{el.address}</Box>
                </Box>
                <Box>
                  <img src={phone} alt="" />
                  <span>{el.phoneNumber}</span>
                </Box>
              </Box>
              <Divider />
              <Box>
                <Button>Order</Button>
              </Box>
            </Box>
          </AccordionDetails>
        </Accordion>
      )
    })
  )
}
export default AccordionContainer;