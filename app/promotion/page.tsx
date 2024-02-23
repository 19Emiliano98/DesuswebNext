import FormPromo from "./components/FormPromo";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { TypoH2, TypoH3, TypoBody1 } from "../globalStyles";

export default function promotion() {
  return(
    <Box sx={{ display: 'flex', justifyContent: 'center', my: '25px' }}>
      <Card 
        sx={{ 
          width: { xl: '1020px', lg: '880px', md: '850px', sm: '660px', xs: '320px'},
          borderRadius: '25px', border: '4px solid #051622',
          boxShadow: "10px 10px 15px -5px rgba(5, 22, 34, 0.50), 6px 6px 0px 0px #191919" 
        }}
      >
        <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography 
            variant="h2"
            sx={{
              fontFamily: TypoH2.fontFamily,
              fontSize: TypoH2.fontSize,
              fontStyle: TypoH2.fontStyle,
              fontWeight: TypoH2.fontWeight,
              lineHeight: TypoH2.lineHeight,
              color: 'var(--Support-blue, #4260A0)',
              mt: '35px', mb: '33px'
            }}
          >¡Oportunidad Unica!</Typography>

          <Typography 
            variant="h3"
            sx={{
              maxWidth: '753px',
              fontFamily: TypoH3.fontFamily,
              fontSize: TypoH3.fontSize,
              fontStyle: TypoH3.fontStyle,
              fontWeight: TypoH3.fontWeight,
              lineHeight: '200%',
              textAlign: 'center',
              mb: '40px'
            }}
            >¡Tenemos una promoción exclusiva que no querrás dejar pasar! Pero apresúrate, ¡es solo por tiempo limitado!</Typography>

          <Box 
            component='div'
            sx={{ 
              display: 'flex', flexDirection: { sm: 'row', xs: 'column-reverse' },
              alignItems: 'center', mb: '42px' 
            }}
          >
            <Box component='div' sx={{ display: 'flex', alignItems: 'center' }}>
              <Box component='div' sx={{ width: 3.1, height: {md: 140, sm: 100, xs: 175 }, backgroundColor: '#7B61FF', borderRadius: '30px', mr: 2.7 }}/>
              <Typography 
                variant="body1"
                sx={{
                  width: { md: '500px', sm: '360px', xs: '200px' },
                  fontFamily: TypoBody1.fontFamily,
                  fontSize: { md: '16px', xs: '13px' },
                  fontStyle: TypoBody1.fontStyle,
                  fontWeight: 600,
                  lineHeight: TypoBody1.lineHeight,
                  mr: { sm: 5, xs: 0 }
                }}
              >
                Creamos tu Landing page, una puerta de entrada al paraíso web completo. 
                Te ofrecemos un paquete integral que incluye el diseño, desarrollo y 
                publicación de tu sitio web, junto con el dominio, hosting y certificado SSL.
              </Typography>
            </Box>
            <CardMedia 
              image="/promoImage.png"
              sx={{
                width: { md: '140px', xs: '105px' }, 
                height: { md: '140px', xs: '105px'},
                mb: { sm: 0, xs: 3 }
              }}
            />
          </Box>

          <Typography 
            variant="body1"
            sx={{
              width: { xl: '750px', lg: '700px', md: '700px', sm: '540px', xs: '260px'},
              fontFamily: TypoBody1.fontFamily,
              fontSize: { lg: '20px', md: '16px', xs: '15px' },
              fontStyle: TypoBody1.fontStyle,
              fontWeight: TypoBody1.fontWeight,
              lineHeight: TypoBody1.lineHeight,
              color: '#067ACC'
            }}
          >
            Completa el formulario a continuación para que podamos contactarte y 
            reservar tu lugar en esta promoción exclusiva:
          </Typography>

          <FormPromo />
        </CardContent>
      </Card>
    </Box>
  )
}