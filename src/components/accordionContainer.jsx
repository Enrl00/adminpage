import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Divider from '@mui/material/divider';
import Box from '@mui/material/Box';
import FadeMenu from './button';
import location from '../sources/location.png';
import phone from '../sources/phone.png'
const styles = {
  spacing:{
    display: 'flex',
    flexDirection: 'row',
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
                    <Typography>×{ele.amount}</Typography>
                  </Box>
                )
              })}
              <Divider />
              <Box>
                <Box sx={styles.spacing}>
                  <img src={location} alt='' />
                  <Box style={{fontSize:'14px',marginLeft:'3px'}}>{el.address}</Box>
                </Box>
                <Box sx={styles.spacing}>
                  <img src={phone} alt="" />
                  <Box style={{fontSize:'14px', marginLeft:"3px"}}>{el.phoneNumber}</Box>
                </Box>
              </Box>
              <Divider />
              <Box>
                <FadeMenu data={el}/>
              </Box>
            </Box>
          </AccordionDetails>
        </Accordion>
      )
    })
  )
}
export default AccordionContainer;