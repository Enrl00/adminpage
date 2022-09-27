import { Sidebar } from './sidebar';
import { useMenuContext } from '../provider/MenuProvider';
// import Ingredient from './ingredient';
import MenuCard from './card';
import BasicSelect from './selector';
import {DragDropFile} from './dragNdrop'
import addMenu from '../sources/addMenu.png'
import addButton from '../sources/addButton.png'
import * as React from 'react';
import { useState } from 'react'
import {
    Button,
    Dialog,
    DialogActions,
    Container,
    DialogTitle,
    useMediaQuery,
    TextField,
    Box,
    Divider, 
    Typography
} from '@mui/material/';
import { useTheme } from '@mui/material/styles';
import foodpic from '../sources/foodpic.png';
import photo from '../sources/photo.png';

const styles = {
    box: {
        width: '208px',
        height: '230px',
        borderRadius: '8px',
        backgroundColor: '#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        paddingTop: "10vh",
        display: "flex",
        flexDirection: "column",
        paddingLeft: "250px",
        backgroundColor: ' #F5F5F7',
        height: '100vh'
    },
    circle: {
        height: '44px',
        width: '44px',
        borderRadius: '50%'
    },
    addCard: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bigCircle: {
        width: '202px',
        height: '202px',
        borderRadius: '50%',
        backgroundColor: '#C4C4C4',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    smallCircle: {
        width: '44px',
        height: '44px',
        borderRadius: '50%',
        backgroundColor: '#C4C4C4',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        top: '-50px',
        left: '150px',
        zIndex: 100,
        border: '5px solid white'
    },
    input: {
        display: 'flex',
        flexDirection: 'column',
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
    }

}

export const Menu = () => {
    const { menuInfo } = useMenuContext();
    const [open, setOpen] = useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <Box sx={styles.container}>
            <Sidebar />
            <Box>
                <Box>
                    <img src={addMenu} alt="" style={{ width: '96px', height: '96px', zIndex: '1000', position: 'relative', top: '50px', left: '50px' }} />
                    <Box sx={styles.box}>
                        <Typography>Add new menu</Typography>
                        <img src={addButton} alt="" style={{ marginTop: '30px' }} onClick={handleClickOpen} />
                        <Dialog
                            fullScreen={fullScreen}
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="responsive-dialog-title"
                        >
                            <DialogTitle id="responsive-dialog-title">
                                Add new Menu
                            </DialogTitle>
                            <Container>
                                <Box>
                                    <Box styles={{width:'60%'}}>
                                        <Box sx={styles.row}>
                                            <Box>
                                                <Box sx={styles.bigCircle}><img src={foodpic} alt="" /></Box>
                                                <Box sx={styles.smallCircle}><img src={photo} alt="" /></Box>
                                            </Box>
                                            <Box>
                                                <Box sx={styles.input}>
                                                    <label>Хоолны Нэр</label>
                                                    <TextField id="outlined-basic" label="Энд бичнэ үү" variant="outlined" />
                                                </Box>
                                                <Box sx={styles.input}>
                                                    <label>Дэлгэрэнгүй</label>
                                                    <TextField id="outlined-basic" label="Энд бичнэ үү" variant="outlined" />
                                                </Box>
                                                <Box sx={styles.row}>
                                                    <Box sx={styles.input}>
                                                        <label>Хоолны Үнэ</label>
                                                        <TextField id="outlined-basic" label="MNT" variant="outlined" />
                                                    </Box>
                                                    <Box sx={styles.input}>
                                                        <label>Төрөл </label>
                                                        <BasicSelect/>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Box>
                                        <Divider />
                                        <Box>
                                            <Box sx={styles.row}>
                                                <Typography>Орц найрлага</Typography>
                                                <Button>Орц нэмэх</Button>
                                            </Box>
                                            <Box>
                                                {/* <Ingredient/> */}
                                            </Box>
                                            <Divider />
                                            <Box>
                                                <Typography>Тэжээллэг чанарs</Typography>
                                                <DragDropFile/>
                                                <Box sx={{marginTop: '1vh'}}>
                                                    <input placeholder='Линк оруулж болно'/>
                                                    <Button variant='filled'>Оруулах</Button>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Container>
                            <DialogActions>
                                <Button autoFocus onClick={handleClose}>
                                    Disagree
                                </Button>
                                <Button onClick={handleClose} autoFocus>
                                    Agree
                                </Button>
                            </DialogActions>
                        </Dialog>
                    </Box>
                </Box>
                {menuInfo.map(el => {
                    return <MenuCard data={el} />
                })}
            </Box>
        </Box>
    )
}