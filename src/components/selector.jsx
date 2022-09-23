import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect() {
  const [foodType, setFoodType] = React.useState('');

  const handleChange = (event) => {
    setFoodType(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Төрөл</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={foodType}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={'Цагаан хоол'}>Цагаан хоол</MenuItem>
          <MenuItem value={'Цавууллаггүй'}>Цавууллаггүй</MenuItem>
          <MenuItem value={'Хөнгөн хоол'}>Хөнгөн хоол</MenuItem>
          <MenuItem value={'Халуун ногоотой'}>Халуун ногоотой</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}