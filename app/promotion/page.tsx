import FormPromo from "./components/FormPromo";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { TypoH2, TypoH3, TypoBody1 } from "../globalStyles";

export default function promotion() {
  return(
    <Box sx={{ display: 'flex', justifyContent: 'center', my: '25px' }}>
      <Card sx={{ width: '1160px', borderRadius: '25px' }}>
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

          <Box sx={{ display: 'flex', alignItems: 'center', borderLeft: '3.8px solid #7B61FF', pl: 3, mb: '42px' }}>
            <Typography 
              variant="body1"
              sx={{
                width: '500px',
                fontFamily: TypoBody1.fontFamily,
                fontSize: { md: '16px', xs: '11px' },
                fontStyle: TypoBody1.fontStyle,
                fontWeight: TypoBody1.fontWeight,
                lineHeight: TypoBody1.lineHeight,
                mr: 5
              }}
            >
              Creamos tu Landing page, una puerta de entrada al paraíso web completo. 
              Te ofrecemos un paquete integral que incluye el diseño, desarrollo y 
              publicación de tu sitio web, junto con el dominio, hosting y certificado SSL.
            </Typography>
            <CardMedia 
              image="/promoImage.png"
              sx={{
                width: { sm: '140px', xs: '105px' }, 
                height: { sm: '140px', xs: '80px'}
              }}
            />
          </Box>

          <Typography 
            variant="body1"
            sx={{
              maxWidth: '765px',
              fontFamily: TypoBody1.fontFamily,
              fontSize: TypoBody1.fontSize,
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