import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Divider } from '@mui/material';
import { Dashboard, ShoppingCart, People, Category } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <Drawer
            variant="permanent"
            sx={{
                width: 240,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box' },
            }}
        >
            <Toolbar />
            <Divider />
            <List>
                <ListItem component={Link} to="/dashboard">
                    <ListItemIcon>

                        <Dashboard />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                </ListItem>

                <ListItem component={Link} to="/products">
                    <ListItemIcon>
                        <ShoppingCart />
                    </ListItemIcon>
                    <ListItemText primary="Products" />
                </ListItem>



                <ListItem  component={Link} to="/categories">
                    <ListItemIcon>
                        <Category />
                    </ListItemIcon>
                    <ListItemText primary="Categories" />
                </ListItem>
            </List>
        </Drawer>
    );
};

export default Sidebar;
