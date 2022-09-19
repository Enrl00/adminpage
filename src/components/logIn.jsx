import { Container, TextField, Button } from '@mui/material';
import {useState }from 'react'
import { SignIn } from "../firebase/signIn";
// import {Link }from '@mui/material';
const styles={
    button:{
        color:'rgb(0,0,0)'
    }
}


const InputDiv = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return(
        <Container style={{marginTop:'10vh',marginLeft:'20vw', display:'flex', flexDirection:'column'}}>
            <TextField  variant="standard" placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
            <TextField  variant="standard" placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
            {/* <Link to={'/'}> */}
                <Button 
                variant="outlined"
                sx={styles.button}
                onClick={()=>{
                    SignIn(email,password)
                    }} >Log In</Button>
            {/* </Link> */}
        </Container>
)    
} 
export default InputDiv;