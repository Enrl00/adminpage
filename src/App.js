import './App.css';
import {Box} from '@mui/material';
import { Routes, Route } from "react-router-dom";
import {Graphics, Sidebar,Home,Menu,Order} from './components';
import InputDiv from './components/logIn'
const App = () => {

  return (
    <Box>
      <Sidebar/>
      <InputDiv/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Order" element={<Order />} />
        <Route path="Graphics" element={<Graphics/>}/>
        <Route path="Menu" element={<Menu/>}/>
      </Routes>
    </Box>
  );
}

export default App;
