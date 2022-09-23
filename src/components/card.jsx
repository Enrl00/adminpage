import {Box,Typography}from 'react';
import addButton from '../sources/addButton.png'

const styles = {
    box:{
        width:'208px',
        height:'230px',
        borderRadius: '8px',
        backgroundColor:'#FFFFFF',
        display:'flex',
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    priceText:{
        display:'flex',
        flexDirection:'row'
    }}

export default function MenuCard({data}){
    return(
        <Box sx={styles.box}>
            <Typography>{data.name}</Typography>
            <Typography>{data.amount}</Typography>
            <Box sx={styles.priceText}>
                <Typography >{data.price}</Typography>
                <img src={addButton} alt="" />
            </Box>
        
        </Box>
    )
}