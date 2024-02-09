import { Box, Typography } from "@mui/material";
import VerifiedIcon from '@mui/icons-material/Verified';
import { TypoH2, TypoBody1 } from "../../globalStyles";
import ServicesCards from "./ServicesCards";
import { tiendaOnline, landingPage, desarrolloLibre } from "./cardsContent";
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';

export default function ServicesSection () {
  return (
    <Box 
      sx={{ 
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        mt: { lg: 10, md: 8, sm: 8, xs: 5 }, pt: 4
      }}
    >
      <Typography 
      sx={{
        fontFamily: TypoH2.fontFamily,
        fontSize: TypoH2.fontSize,
        fontStyle: TypoH2.fontStyle,
        fontWeight: TypoH2.fontWeight,
        lineHeight: TypoH2.lineHeight
      }}
      variant="h2"
      >
        Nuestros Servicios:
      </Typography>

      <Box 
        sx={{ 
          display: 'flex', alignItems: 'center',
          mt: 2, mb: { lg: 8, md: 15, xs: 12 },
          ml: { sm: 0, xs: 1 }
        }}
      >
        <VerifiedIcon sx={{ color: '#067ACC', mr: 1 }} fontSize="large"/>

        <Typography 
          sx={{
            fontFamily: TypoBody1.fontFamily,
            fontSize: TypoBody1.fontSize,
            fontStyle: TypoBody1.fontStyle,
            fontWeight: TypoBody1.fontWeight,
            lineHeight: TypoBody1.lineHeight
          }}
          variant="body1"
        >
          Todos nuestros servicios incluyen dominio, hosting y certificado SSL
        </Typography>

        <Typography 
          sx={{
            position: { sm: 'static', xs: 'absolute' },
            fontFamily: TypoBody1.fontFamily,
            fontSize: TypoBody1.fontSize,
            fontStyle: TypoBody1.fontStyle,
            fontWeight: 700,
            lineHeight: TypoBody1.lineHeight,
            color: '#067ACC', 
            mt: { sm: 0, xs: 3.4 },
            ml: { sm: 0.8, xs: 29 }
          }}
          variant="body1"
        >
          GRATIS
        </Typography>
      </Box>

      <ServicesCards 
        content={ tiendaOnline }
        right={ true }
        backgroundColorCards={ 'white' }
        colorFontCards={ 'black' }
        iconCardTop={<LocalGroceryStoreOutlinedIcon fontSize="inherit" sx={{ fontSize: { md: '45px', sm: '34px', xs: '29px' } }}/>}
      />

      <ServicesCards 
        content={ landingPage }
        right={ false }
        backgroundColorCards={ '#181818' }
        colorFontCards={ 'white' }
        iconCardTop={<ViewQuiltIcon fontSize="inherit" sx={{ fontSize: { md: '45px', sm: '34px', xs: '29px' } }}/>}
      />

      <ServicesCards 
        content={ desarrolloLibre }
        right={ true }
        backgroundColorCards={ 'white' }
        colorFontCards={ 'black' }
        iconCardTop={<DeveloperModeIcon fontSize="inherit" sx={{ fontSize: { md: '45px', sm: '34px', xs: '29px' } }}/>}
      />
    </Box>
  )
}