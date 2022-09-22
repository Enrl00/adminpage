import {Box, Typography} from '@mui/material';
import {Sidebar} from './sidebar';
import { useMenuContext } from '../provider/MenuProvider';
import MenuCard from './card';
import addMenu from '../sources/addMenu.png'
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
    container:{
        paddingTop: "10vh", 
        display: "flex", 
        flexDirection: "column",
        paddingLeft: "250px", 
        backgroundColor:' #F5F5F7',
        height:'100vh'
    },
    circle:{
        height:'44px',
        width:'44px',
        borderRadius:'50%'
    },
    addCard:{
        display:'flex',
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

}

export const Menu = () => {
const {menuInfo} = useMenuContext();
return(
    <Box sx={styles.container}>
        <Sidebar/>
        <Box>
            <Box id='addItem'>
                <img src={addMenu} alt="" style={{width:'96px', height:'96px'}}/>
                <Box sx={styles.box}>
                    <Typography>Add new menu</Typography>
                    <img src={addButton} alt="" />
                </Box>
            </Box>
            {menuInfo.map(el=>{
               return <MenuCard data={el}/>
            })}
        </Box>
    </Box>
)
}