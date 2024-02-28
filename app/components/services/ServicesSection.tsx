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
      id='servicios'
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
          mt: 2, mb: { xl: 8, md: 15, xs: 12 },
          ml: { sm: 0, xs: 2 }
        }}
      >
        <VerifiedIcon sx={{ color: '#067ACC', mr: 1 }} fontSize="large"/>

        <Typography 
          sx={{
            width: { sm: 'auto', xs: 261.4 },
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
            fontSize: { md: '22px', xs: '22px' },
            fontStyle: TypoBody1.fontStyle,
            fontWeight: 700,
            lineHeight: TypoBody1.lineHeight,
            color: '#067ACC', 
            mt: { sm: 0, xs: 6.9 },
            ml: { sm: 0.8, xs: 21.1 }
          }}
          variant="body1"
        >
          GRATIS
        </Typography>
      </Box>

      <ServicesCards 
        content={ tiendaOnline }
        flex={ 'flex-end' }
        backgroundColorCards={ 'white' }
        colorFontCards={ 'black' }
        iconCardTop={<LocalGroceryStoreOutlinedIcon fontSize="inherit" sx={{ fontSize: { md: '45px', sm: '34px', xs: '29px' } }}/>}
      />

      <ServicesCards 
        content={ landingPage }
        flex={ 'flex-start' }
        backgroundColorCards={ '#181818' }
        colorFontCards={ 'white' }
        iconCardTop={<ViewQuiltIcon fontSize="inherit" sx={{ fontSize: { md: '45px', sm: '34px', xs: '29px' } }}/>}
      />

      <ServicesCards 
        content={ desarrolloLibre }
        flex={ 'flex-end' }
        backgroundColorCards={ 'white' }
        colorFontCards={ 'black' }
        iconCardTop={<DeveloperModeIcon fontSize="inherit" sx={{ fontSize: { md: '45px', sm: '34px', xs: '29px' } }}/>}
      />
    </Box>
  )
}