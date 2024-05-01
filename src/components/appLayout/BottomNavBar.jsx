import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HelpIcon from '@mui/icons-material/Help';

const StyledBottomNavigationAction = styled(BottomNavigationAction)({
  '&.Mui-selected': {
    color: 'gray'
  }
});

const BottomNavBar = ({ expanded, setExpanded }) => {
  const [value, setValue] = React.useState(0);

  function handleToggle() {
    setExpanded(!expanded);
  }

  return (
    <Box>
      <BottomNavigation
        sx={{ backgroundColor: '#333333' }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}>
        <StyledBottomNavigationAction onClick={handleToggle} icon={<MenuIcon />} />
        <StyledBottomNavigationAction icon={<SearchIcon />} />
        <StyledBottomNavigationAction icon={<NotificationsIcon />} />
        <StyledBottomNavigationAction icon={<ShoppingCartIcon />} />
        <StyledBottomNavigationAction icon={<HelpIcon />} />
      </BottomNavigation>
    </Box>
  );
};

export default BottomNavBar;
