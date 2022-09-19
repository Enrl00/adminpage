import { Sidebar } from './sidebar';
import {Box} from '@mui/material';


//,Paper,styled
// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   }));
export const Home = () => {
    return(
        <Box>
            <Sidebar/>
        </Box>
    )
}
