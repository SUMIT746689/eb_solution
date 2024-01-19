"use client"
import { AppBar, Box, CssBaseline, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from "@mui/material"
import Image from "next/image";
import { FC, ReactNode } from "react";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import ReceiptIcon from '@mui/icons-material/Receipt';
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation';

type LayoutType = {
    children: ReactNode
}

const drawerWidth = 240;
const lightColor = '#B0B7C3'
const textColor = '#A7AFBC'
const lightBgColor = '#F0F5FA'
const icons = [<DashboardIcon />, <PersonIcon />, <ReceiptIcon />]

const PrivateLayout: FC<LayoutType> = ({ children }) => {
    const pathname = usePathname()
    console.log({ pathname })
    const router = useRouter();
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <AppBar variant="outlined" color="transparent" sx={{
                    boxShadow: "none",
                    height: '120px',
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between"
                    // border:'none'
                    // backgroundColor:"white"
                }}>

                    <Toolbar >
                        <Image src='/logo.png' alt="logo" width={80} height={42} style={{ objectFit: "cover" }} />
                    </Toolbar>

                    <Grid pl="34px" textTransform="uppercase" color={textColor} fontSize={'12px'} fontWeight={500}>
                        Pages
                    </Grid>
                </AppBar>
                <Toolbar />
                <List sx={{ pt: '60px' }}>
                    {[
                        { text: 'Dashboard', path: '/' },
                        { text: 'Users', path: '/users' },
                        { text: 'Sales', path: '/sales' }
                    ].map(({text,path}, index) => (
                        <ListItem key={text} >
                            <ListItemButton sx={{ ":hover": { bgcolor: lightBgColor, borderRadius: "12px" } }}>
                                <ListItemIcon sx={{ color: textColor }}>
                                    {icons[index]}
                                </ListItemIcon>
                                <ListItemText sx={{ color: textColor, fontSize: '14px' }} primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            {children}
        </Box>
    )
}

export default PrivateLayout;