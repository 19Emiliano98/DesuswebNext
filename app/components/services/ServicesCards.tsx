import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import Button from '../../ui/Button';
import { TypoH3, TypoBody1 } from "../../globalStyles";


export default function ServicesCards ( param:any ) {
  const { 
    content, flex, backgroundColorCards, colorFontCards, iconCardTop
  } = param;

  const renderCard = (
    <Card 
      sx={{ 
        display: 'flex', position: 'absolute',
        justifyContent: 'center', alignItems: 'center',
        width: { md: '85px', sm: '75px', xs: '75px'}, 
        height: { md: '85px', sm: '75px', xs: '75px'}, 
        borderRadius: '100%', border: '2px solid black', backgroundColor: '#B5F53F',
        filter: 'drop-shadow(10px 10px 15px rgba(5, 22, 34, 0.50)) drop-shadow(6px 6px 0px #191919)',
        mt: { xl: -2, sm: -4, xs: -2.5 },
        ml: { xl: -5, sm: 0, xs: 0},
        mr: { xl: -4, sm: 0, xs: 0}
      }}
    >
      { iconCardTop }
    </Card>
  )

  return(
    <Box sx={{ mb: { lg: 12, md: 15, xs: 13 } }}>
      <Box sx={{ display: 'flex', justifyContent: { xl: flex, xs: 'center' }, alignItems: 'center' }}>
        { renderCard }
      </Box>

      <Card 
        sx={{ 
          display: 'flex', justifyContent: 'center', 
          width: { lg: '1140px', md: '850px', sm: '700px', xs: '340px' },
          border: '4px solid #051622', borderRadius: '25px', backgroundColor: backgroundColorCards,
          color: colorFontCards, boxShadow: "10px 10px 15px -5px rgba(5, 22, 34, 0.50), 6px 6px 0px 0px #191919"
        }}
      >
        <CardContent sx={{ width: { lg: '1000px', md: '780px', sm: '670px' } }}>
          <Box 
            sx={{ 
              display: 'flex',
              flexDirection: { xl: 'row', xs: 'column' },
              alignItems: { xl: 'normal', xs: 'center' },
              mt: { xl: 2, xs: 4 } 
            }}
          >
            <Typography 
              sx={{
                fontFamily: TypoH3.fontFamily,
                fontSize: TypoH3.fontSize,
                fontStyle: TypoH3.fontStyle,
                fontWeight: TypoH3.fontWeight,
                lineHeight: TypoH3.lineHeight
              }}
              variant="h3"
            >
              { content.title }
            </Typography>
            
            <Box 
              sx={{ 
                width: { xl: '2px', sm: '300px', xs: '180px' }, 
                height: { xl: '33px', md: '3px', xs: '2px' }, 
                background: colorFontCards, 
                mx: { xl: 2, xs: 0 }, my: { xl: 0, xs: 3 }
              }}
            />

            <Typography 
              sx={{
                fontFamily: TypoH3.fontFamily,
                fontSize: TypoH3.fontSize,
                fontStyle: TypoH3.fontStyle,
                fontWeight: TypoH3.fontWeight,
                lineHeight: TypoH3.lineHeight
              }}
              variant="h3"
            >
              { content.subtitle }
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 3 }}>
            <Typography 
              sx={{
                width: { lg: '960px', md: '730px', sm: '630px' },
                fontFamily: TypoBody1.fontFamily,
                fontSize: TypoBody1.fontSize,
                fontStyle: TypoBody1.fontStyle,
                fontWeight: TypoBody1.fontWeight,
                lineHeight: TypoBody1.lineHeight, mb: 4
              }}
              variant="body1"
            >
              { content.text }
            </Typography>

            <Button content={'Consultar'} type={'button'} href={'#contacto'} backColor={'var(--Primario, #B5F53F)'}/>
          </Box>
        </CardContent>
      </Card>
    </Box>
  )
}