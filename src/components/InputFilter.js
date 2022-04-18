import React from 'react'
import { InputBase, Select, MenuItem } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/SearchRounded'
import './InputFil.css'


const InputFilter = ({ city, option, setCity, setOption, setSearchInput }) => {
  return (
    <div className='inputContainer' >
            <Select id='city' value={city} className='citySelect' onChange={(e) => setCity(e.target.value)}>
                <MenuItem value='Mumbai'>Mumbai</MenuItem>
                <MenuItem value='Kolkata'>Kolkata</MenuItem>
                <MenuItem value='Bangalore'>Bangalore</MenuItem>
                <MenuItem value='Delhi'>Delhi</MenuItem>
                <MenuItem value='Hydrabad'>Hydrabad</MenuItem>
            </Select>
            <Select id='option' value={option} className='optionSelect' onChange={(e) => setOption(e.target.value)}>
                <MenuItem value='ifsc'>IFSC</MenuItem>
                <MenuItem value='bank_name'>Bank Name</MenuItem>
                <MenuItem value='branch'>Branch</MenuItem>
            </Select>
            <div className='searchBox'>
                <SearchIcon/>
                <InputBase placeholder='Search..' onChange={(e) => setSearchInput(e.target.value)}/>
            </div>
    </div>
  )
}

export default InputFilter;