'use client'

import { usePathname } from 'next/navigation'
import { useState } from 'react';
import { Box, Toolbar, MenuItem, Link, CardMedia, Tooltip, IconButton, Menu, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { spaceGrotesk } from './fonts';

export default function Navbar () {
  const [ anchorElUser, setAnchorElUser ] = useState< null | HTMLElement >(null);
  interface linkbarProps {
    title: string;
    goTo: string;
  }
  const linkBar:linkbarProps[] = [ 
    { title: 'Inicio', goTo: '#home' },
    { title: 'Servicios', goTo: '#servicios' },
    { title: 'Contacto', goTo: '#contacto' }
  ];

  let isLogin:boolean
  let justifyContentOfNavbar:string
  let marginIconNavbar:object
  let marginLinksNavbar:object
  if( usePathname() == '/login' ){
    isLogin = true
    justifyContentOfNavbar = 'center';
    marginIconNavbar = { xs: 0 }
    marginLinksNavbar = { xs: 0 }
  }else{
    isLogin = false
    justifyContentOfNavbar = 'space-between';
    marginIconNavbar = { lg: 20, md: 0, sm: 0 }
    marginLinksNavbar = { lg: '280px', md: 5, sm: 1 }
  }

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const renderNavbar = (
    linkBar.map( x => (
      <MenuItem disableGutters dense key={x.title} sx={{ mx: 0.8, ':selected':{ backgroundColor: 'red' } }}>
        <Link 
          href={ x.goTo }
          sx={{
            textDecoration: 'none',
            fontSize: { sm: '24px', xs: '13px' },
            color: '#F5F5F5', fontWeight: 600, fontFamily: `${spaceGrotesk} antialiased`
          }}
        >
          {x.title}
        </Link>
      </MenuItem>
    ))
  );

  const renderMobilebar = (
    <>
      <Tooltip title="">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <MenuIcon sx={{ color: 'white', fontSize: { sm: 40, xs: 27 } }} fontSize='inherit'/>
        </IconButton>
      </Tooltip>
      
      <Menu
          sx={{ mt: '45px' }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={ Boolean(anchorElUser) }
          onClose={handleCloseUserMenu}
        >
          {linkBar.map((x) => (
            <MenuItem key={ x.title } onClick={ handleCloseUserMenu }>
              <Typography textAlign="center">{ x.title }</Typography>
            </MenuItem>
          ))}
        </Menu>
    </>
  )

  let ShowAppBar
  if( screen.width > 768){
    ShowAppBar = renderNavbar
  }else{
    ShowAppBar = renderMobilebar
  }

  return (
    <Box>
      <Toolbar 
        sx={{
          display: 'flex', justifyContent: justifyContentOfNavbar,
          backgroundColor: '#181818', height: '90px'
        }}
      >
        <CardMedia
          sx={{ 
            width: { sm: '128px', xs: '70px' }, height: { sm: '94px', xs: '60px'},
            ml: marginIconNavbar
          }}
          image="/dwLogo.png"
        />

        <Box sx={{ display: 'flex', mr: marginLinksNavbar }}>
          { isLogin ? <></> : ShowAppBar }
        </Box>
      </Toolbar>
    </Box>
  )
}