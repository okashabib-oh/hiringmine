import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { Box, Button } from '@mui/material';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker'
];


const Filter = () => {
    const [personName, setPersonName] = React.useState([]);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <div>
            <FormControl sx={{ m: 1, width: 200, color: 'slateblue' }} size='small'>
                <InputLabel id="demo-multiple-checkbox-label" size='small'
                    sx={{
                        color: 'slateblue'
                    }}>Category</InputLabel>
                <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={personName}
                    onChange={handleChange}
                    input={<OutlinedInput label="Category" />}
                    renderValue={(selected) => selected.join(', ')}
                    MenuProps={MenuProps}
                    size='small'
                    color='secondary'
                >
                    {names.map((name) => (
                        <MenuItem key={name} value={name} color='#212126'>
                            <Checkbox checked={personName.includes(name)} color='secondary' size='small' />
                            <ListItemText primary={name} />
                        </MenuItem>
                    ))}
                    <Box display='flex' justifyContent='space-between' m={1}>
                        <Button color='secondary' size='small'>Clear</Button>
                        <Button color='secondary' variant='contained' size='small'>Search</Button>
                    </Box>
                </Select>
            </FormControl>
        </div>
    );
}

export default Filter

// #08253C #030E18 #2196F3