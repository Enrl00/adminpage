import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Divider from '@mui/material/divider';
import Box from '@mui/material/Box';
import location from '../sources/location.png';
import phone from '../sources/phone.png'
const AccordionContainer = (data) => {
      return(
        data.data.order.map(el => {
          return(
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography> {el.orderID}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Divider/>
                    <Box>
                      {el.orders.map(ele=> {
                        return(
                         <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                          <ul>{ ele.productName}</ul>
                          <span>×{ele.amount}</span>
                         </div>
                        )
                      })}
                      <Divider/>
                        <div>
                          <div style={{display:'flex',flexDirection:'row', justifyContent:'space-between'}}>
                            <img src={location} alt=''/>
                            <div>{el.address}</div>
                          </div>
                          <div>
                            <img src={phone} alt=""/>
                            <span>{el.phoneNumber}</span>
                          </div>
                        </div>
                    </Box>
                  </AccordionDetails>
                </Accordion>
          )
        })
      )
  }
export default AccordionContainer;