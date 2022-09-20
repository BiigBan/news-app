import { Search } from '@mui/icons-material'
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Container } from '@mui/system';
import logo from './../../assets/header/logo.svg';
import style from './Header.module.css';

export default function Header() {



    return (
        <Box sx={{ flexGrow: 1 }} >
            <AppBar sx={{boxShadow: 'none'}} position="static">
                <Container>
                    <Toolbar>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                        >
                            <a className={style.logo} href="/"><img src={logo} alt="logo image" /></a>
                        </Typography>
                        <Search>
                            <SearchIcon/>
                        </Search>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box >
    )
}
