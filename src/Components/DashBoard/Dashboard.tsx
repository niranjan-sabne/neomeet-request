import {
   Avatar,
   Divider,
   Drawer,
   Grid,
   List,
   ListItem,
   ListItemButton,
   ListItemIcon,
   ListItemText,
   Tab,
   Tabs,
} from '@mui/material';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import './DashBoard.css';
import { useEffect, useState } from 'react';
import DashboardTwoToneIcon from '@mui/icons-material/DashboardTwoTone';
import WorkHistoryTwoToneIcon from '@mui/icons-material/WorkHistoryTwoTone';
const Dashboard: React.FC = () => {
   const [value, setValue] = useState(0);
   const [selectedIndex, setSelectedIndex] = useState(0);

   const handleListItemClick = (
      event: React.MouseEvent<HTMLDivElement, MouseEvent>,
      index: number
   ) => {
      setSelectedIndex(index);
   };

   const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
   };

   function a11yProps(index: number) {
      return {
         id: `vertical-tab-${index}`,
         'aria-controls': `vertical-tabpanel-${index}`,
      };
   }

   function stringAvatar(name: string) {
      return {
         sx: {
            bgcolor: ' #F12B20',
         },
         children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
      };
   }
   return (
      <div>
         <Box sx={{ flexGrow: 1 }}>
            <AppBar
               position="static"
               sx={{ backgroundColor: 'whitesmoke', boxShadow: 'none' }}
            >
               <Toolbar>
                  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                     <strong>
                        <span className="neoname" style={{ color: ' #333' }}>
                           Neo
                        </span>
                        <span className="neoname" style={{ color: ' #F12B20' }}>
                           SOFT
                        </span>
                     </strong>
                  </Typography>
                  <Avatar
                     className="dashboard-avatar"
                     {...stringAvatar('Neha Deore')}
                  />
               </Toolbar>
            </AppBar>
         </Box>
         <Box>
            <Grid container>
               <Grid className="dashboard-leftsidebar" item lg={2.5}>
                  <Box
                     sx={{
                        width: '100%',
                        maxWidth: 360,
                     }}
                  >
                     <List component="nav" aria-label="main mailbox folders">
                        <ListItemButton
                           selected={selectedIndex === 0}
                           onClick={(event) => handleListItemClick(event, 0)}
                        >
                           <ListItemIcon>
                              <DashboardTwoToneIcon />
                           </ListItemIcon>
                           <ListItemText primary="DashBoard" />
                        </ListItemButton>
                        <ListItemButton
                           selected={selectedIndex === 1}
                           onClick={(event) => handleListItemClick(event, 1)}
                        >
                           <ListItemIcon>
                              <WorkHistoryTwoToneIcon />
                           </ListItemIcon>
                           <ListItemText primary="History" />
                        </ListItemButton>
                     </List>
                  </Box>
               </Grid>
               <Grid className="dashboard-rightsidebar" item lg={9.5}>
                  right sidebar
               </Grid>
            </Grid>
         </Box>
      </div>
   );
};

export default Dashboard;
