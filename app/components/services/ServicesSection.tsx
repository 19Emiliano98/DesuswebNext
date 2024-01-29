import { Box, Typography } from "@mui/material";
import VerifiedIcon from '@mui/icons-material/Verified';
import { TypoH2, TypoBody1 } from "../../globalStyles";
import ServicesCards from "./ServicesCards";
import { tiendaOnline, landingPage, desarrolloLibre } from "./cardsContent";
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';

export default function ServicesSection () {
  return (
    <Box 
      sx={{ 
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        backgroundColor: '#FBC837', mt: { lg: 46, md: 34, sm: 31 }, pt: 4
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

      <Box sx={{ display: 'flex', alignItems: 'center', mt: 3.5, mb: 8 }}>
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
            fontFamily: TypoBody1.fontFamily,
            fontSize: TypoBody1.fontSize,
            fontStyle: TypoBody1.fontStyle,
            fontWeight: 700,
            lineHeight: TypoBody1.lineHeight,
            color: '#067ACC', ml: 0.8
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
        iconCardTop={<LocalGroceryStoreOutlinedIcon />}
      />

      <ServicesCards 
        content={ landingPage }
        right={ false }
        backgroundColorCards={ '#8740E3' }
        colorFontCards={ 'white' }
        iconCardTop={<ViewQuiltIcon />}
      />

      <ServicesCards 
        content={ desarrolloLibre }
        right={ true }
        backgroundColorCards={ '#0F235E' }
        colorFontCards={ 'white' }
        iconCardTop={<LocalGroceryStoreOutlinedIcon />}
      />
    </Box>
  )
}