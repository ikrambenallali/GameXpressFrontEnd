import { Outlet, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import Sidebar from './Sidebar'; // <- n'oublie pas d'importer la Sidebar
import { useAuth } from '../context/AuthContext';

const Layout = () => {
  const { user, isAuthenticated, logout } = useAuth();

  return (
    <Box sx={{ display: 'flex' }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <Box component="main" sx={{ flexGrow: 1 }}>
        {/* Header */}
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              E-Commerce
            </Typography>
            {isAuthenticated ? (
              <>
                {(user?.roles?.includes('admin') || user?.roles?.includes('product_manager')) && (
                  <Button color="inherit" component={Link} to="/dashboard">
                    Dashboard
                  </Button>
                )}
                <Button color="inherit" onClick={logout}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button color="inherit" component={Link} to="/login">
                  Login
                </Button>
                <Button color="inherit" component={Link} to="/register">
                  Register
                </Button>
              </>
            )}
          </Toolbar>
        </AppBar>

        {/* Space for the AppBar */}
        <Toolbar />

        {/* Main Page Content */}
        <Box sx={{ p: 3 }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
