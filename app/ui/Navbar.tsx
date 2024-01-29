import { Box, Toolbar, MenuItem, Link, CardMedia } from '@mui/material';

import { spaceGrotesk } from './fonts';

export default function Navbar () {
  interface linkbarProps {
    title: string;
    goTo: string;
  }
  
  const linkBar:linkbarProps[] = [ 
    { title: 'Inicio', goTo: '#aboutMe' },
    { title: 'Servicios', goTo: '#projects' },
    { title: 'Clientes', goTo: '#skills' },
    { title: 'Contacto', goTo: '#contact' }
  ];

  const renderOptionBar = (
    linkBar.map( x => (
      <MenuItem disableGutters dense key={x.title} sx={{ mx: 0.8, ':selected':{ backgroundColor: 'red' } }}>
        <Link 
          href={ x.goTo }
          sx={{
            textDecoration: 'none',
            fontSize: { sm: '24px', xs: '13px' },
            color: '#051622', fontWeight: 600, fontFamily: `${spaceGrotesk} antialiased`
          }}
        >
          {x.title}
        </Link>
      </MenuItem>
    ))
  );

  return (
    <Box>
      <Toolbar 
        sx={{
          display: 'flex', justifyContent: 'space-between',
          backgroundColor: '#FBC837', height: '90px'
        }}
      >
        <CardMedia
          sx={{ 
            width: { sm: '128px', xs: '70px' }, height: { sm: '94px', xs: '60px'}, 
            ml: { lg: 20, md: 4, sm: 3 }
          }}
          image="/dwLogo.png"
        />
        <Box sx={{ display: 'flex', mr: { lg: '280px', md: 5, sm: 1 } }}>

          { renderOptionBar }
        </Box>
      </Toolbar>
    </Box>
  )
}