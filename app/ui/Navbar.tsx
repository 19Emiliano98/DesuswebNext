'use client'

import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react';
import { Box, Toolbar, MenuItem, Link, CardMedia, Tooltip, IconButton, Menu, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { fontSpaceGrotesk, fontUnicaOne } from './fonts';

export default function Navbar () {
  const [ anchorElUser, setAnchorElUser ] = useState< null | HTMLElement >(null);
  const [ isDesktop, setIsDesktop ] = useState<boolean>(true);
  interface linkbarProps {
    title: string;
    goTo: string;
  }
  const linkBar:linkbarProps[] = [ 
    { title: 'Inicio', goTo: '/#home' },
    { title: 'Servicios', goTo: '/#servicios' },
    { title: 'Contacto', goTo: '/#contacto' }
  ];

  let isLogin:boolean
  let justifyContentOfNavbar:string
  let marginIconNavbar:object
  let marginLinksNavbar:object
  let transformStyleData:object
  const actualPathName:string = usePathname();
  if( actualPathName == '/login' || actualPathName == '/promotion' ){
    isLogin = true
    justifyContentOfNavbar = 'center';
    marginIconNavbar = { xs: 0 }
    marginLinksNavbar = { xs: 0 }
    transformStyleData = { lg: 'translate( -25px , -11px )', md: 'translate( -25px , -10px )', sm: 'translate( -12px , -1px )', xs: 'translate( -10px , 2.5px )' }
  }else{
    isLogin = false
    justifyContentOfNavbar = 'space-between';
    marginIconNavbar = { lg: 15, md: 8, sm: 6 }
    marginLinksNavbar = { lg: 30, md: 9, sm: 7 }
    transformStyleData = { lg: 'translate( -146px , -10px )', md: 'translate( -90px , -10px )', sm: 'translate( -63px , -1px )', xs: 'translate( -10px , 2px )' }
  }

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const renderNavbar = (
    linkBar.map( x => (
      <MenuItem disableGutters dense key={x.title} sx={{ display:{ sm: 'flex', xs: 'none' }, mx: 1, ':selected':{ backgroundColor: 'red' } }}>
        <Link 
          href={ x.goTo }
          sx={{
            textDecoration: 'none',
            fontSize: { lg: '25px', md: '19px', sm: '17px', xs: '13px' },
            color: '#F5F5F5', fontWeight: 500, fontFamily: `${fontSpaceGrotesk} antialiased`
          }}
        >
          {x.title}
        </Link>
      </MenuItem>
    ))
  );

  const renderMobilebar = (
    <Box component='div' sx={{ display:{ sm: 'none', xs: 'inline' } }}>
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
              <Link 
              href={ x.goTo }
              sx={{
                textDecoration: 'none',
                fontSize: { sm: '24px', xs: '13px' },
                color: 'black', fontWeight: 600, fontFamily: `${fontSpaceGrotesk} antialiased`
              }}
              >
                { x.title }
              </Link>
            </MenuItem>
          ))}
        </Menu>
    </Box>
  )

  return (
    <Box>
      <Toolbar 
        sx={{
          display: 'flex', justifyContent: justifyContentOfNavbar,
          backgroundColor: '#181818', height: '90px'
        }}
      >
        <Box
          sx={{ 
            display: 'flex'
          }}
        >
          <Box
            sx={{
              width: { md: 75, sm: 69, xs: 55 }, height: { md: 75, sm: 69, xs: 55 },
              borderRadius: '50px',
              backgroundColor: '#3F3F3F',
              ml: marginIconNavbar
            }}
          >
            <CardMedia
              sx={{
                width: { md: '128px', sm: '100px', xs: '80px' }, height: { md: '94px', sm: '70px', xs: '50px'},
                ml: marginIconNavbar, 
                transform: transformStyleData
              }}
              image="/Rocket.png"
            />
          </Box>

          <Typography 
            sx={{ 
              display: 'flex', alignItems: 'center',
              fontFamily: fontUnicaOne.style,
              fontSize: { lg: '40px', sm: '30px', xs: '20px'},
              fontWeight: 400,
              lineHeight: 'normal',
              color: '#FFF',
              ml: 2.4
            }}>
            Desus Web
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', mr: marginLinksNavbar }}>
          { isLogin ? <></> : renderNavbar }  
          { isLogin ? <></> : renderMobilebar }
        </Box>
      </Toolbar>
    </Box>
  )
}