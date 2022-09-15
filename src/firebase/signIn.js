import {auth} from './firebase'
import { sendSignInLinkToEmail,createUserWithEmailAndPassword } from "firebase/auth";


// const actionCodeSettings = {

//     url: 'http://localhost:3000/',
  
//     handleCodeInApp: true,
    
//   };
  
  export const SignIn = (email, password)=>{
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log('success')
              alert('succesfully signed in')
            })
            .catch((error) => {
            //   console.log(error.message);
            });
    }
//   sendSignInLinkToEmail(auth, email, actionCodeSettings)
//             .then(() => {
//               window.localStorage.setItem('emailForSignIn', email);
//             alert('email sent')
//             })
//             .catch((error) => {
//               console.log( error.message);
//             })