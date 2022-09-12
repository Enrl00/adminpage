import {createTheme, ThemeProvider} from "@mui/material/styles"

const Theme  = createTheme({
    palette:{
        primary:{
            main:'#000723',
            light:'rgb(255, 255, 255)'
        },
        secondary:{
            main:'',
            light:'cyan'
        }
    }
});
export function CustomTheme({children}){
    return <ThemeProvider theme= {Theme}>{children}</ThemeProvider>
}