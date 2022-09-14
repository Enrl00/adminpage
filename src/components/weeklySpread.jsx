import AccordionContainer from './accordionContainer';
const week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', "Friday", 'Saturday', 'Sunday']
const WeeklySpread = () => {
    return(
        <div style={{display:'flex', flexDirection:'row', overflow:'scroll'}}>
               {week.map((el)=> {
                return(
                    <div>
                        <h4 style={{color:'grey'}}>{el}</h4>
                        <hr/>
                        <AccordionContainer/>
                    </div>
                )
               })}                      
        </div>
    )
}
export default WeeklySpread;