'use client'

import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react';
import useScreenSize from '../hooks/useScreenSize';
import { Box, Toolbar, MenuItem, Link, CardMedia, Tooltip, IconButton, Menu, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { spaceGrotesk } from './fonts';

export default function Navbar () {
  const [ anchorElUser, setAnchorElUser ] = useState< null | HTMLElement >(null);
  const [ isDesktop, setIsDesktop ] = useState<boolean>(true);
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
  let transformStyleData:object
  if( usePathname() == '/login' ){
    isLogin = true
    justifyContentOfNavbar = 'center';
    marginIconNavbar = { xs: 0 }
    marginLinksNavbar = { xs: 0 }
    transformStyleData = { lg: 'translate( -25px , -11px )', md: 'translate( -25px , -10px )', sm: 'translate( -26px , -11px )', xs: 'translate( -18px , -9px )' }
  }else{
    isLogin = false
    justifyContentOfNavbar = 'space-between';
    marginIconNavbar = { lg: 15, md: 8, sm: 6 }
    marginLinksNavbar = { lg: '135px', md: 9, sm: 7 }
    transformStyleData = { lg: 'translate( -146px , -10px )', md: 'translate( -90px , -10px )', sm: 'translate( -74px , -10px )', xs: 'translate( -18px , -9px )' }
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
              <Link 
              href={ x.goTo }
              sx={{
                textDecoration: 'none',
                fontSize: { sm: '24px', xs: '13px' },
                color: 'black', fontWeight: 600, fontFamily: `${spaceGrotesk} antialiased`
              }}
              >
                { x.title }
              </Link>
            </MenuItem>
          ))}
        </Menu>
    </>
  )
  
  const checkWindowSize = () => {
    let windowWith:any;

    if( typeof window !== 'undefined' ){
      windowWith = window.innerWidth;
    }
    if( windowWith > 768 ){
      setIsDesktop(true);
    }else{
      setIsDesktop(false)
    }
  }

  let showAppBar;
  if( isDesktop == true ){
    showAppBar = renderNavbar
  }else{
    showAppBar = renderMobilebar
  }

  // logica cuando el usuario carga la primera vez
  useEffect(() => {
    checkWindowSize();
  }, [isDesktop]);
  
  // cuando el usuario cambia el tamaño de la pantalla
  if(typeof window !== 'undefined'){
    window.addEventListener('resize', checkWindowSize)
  }

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
            width: { sm: 75, xs: 66 }, height: { sm: 75, xs: 66 },
            borderRadius: '50px',
            backgroundColor: '#3F3F3F',
            ml: marginIconNavbar
          }}
        >
          <CardMedia
            sx={{
              width: { sm: '128px', xs: '105px' }, height: { sm: '94px', xs: '80px'},
              ml: marginIconNavbar, 
              transform: transformStyleData
            }}
            image="/rocket.png"
          />
        </Box>

        <Box sx={{ display: 'flex', mr: marginLinksNavbar }}>
          { isLogin ? <></> : showAppBar }
        </Box>
      </Toolbar>
    </Box>
  )
}