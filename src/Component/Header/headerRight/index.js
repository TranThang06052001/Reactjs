
import Switch from '@mui/material/Switch'
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
// const label = { inputProps: { 'aria-label': 'Switch demo' } };
export default function headerRights() {

    return (
        <div className="headerRights">
            <Switch />
            <SearchIcon sx={{fontSize: '32px'}} />
            <SettingsIcon sx={{fontSize: '30px'}}/>
            <ShoppingCartOutlinedIcon sx={{fontSize: '30px'}}/>
        </div>
    )
}

 