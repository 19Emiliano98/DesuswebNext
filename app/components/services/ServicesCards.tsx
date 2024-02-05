import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import Button from '../../ui/Button';
import { TypoH3, TypoBody1 } from "../../globalStyles";


export default function ServicesCards ( param:any ) {
  const { 
    content, right, backgroundColorCards, colorFontCards, iconCardTop
  } = param;

  const cardRight = (
    <Card 
      sx={{ 
        display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'absolute', 
        right: { xl: '17%', lg: '8%', md: '46%', sm: '45.5%', xs: '39.5%' },
        width: { md: '85px', sm: '75px', xs: '75px'}, height: { md: '85px', sm: '75px', xs: '75px'}, 
        borderRadius: '100%', border: '2px solid black', backgroundColor: '#FB9039',
        filter: 'drop-shadow(10px 10px 15px rgba(5, 22, 34, 0.50)) drop-shadow(6px 6px 0px #191919)',
        mt: { lg: -5, sm: -6.2, xs: -5.7 }
      }}
    >
      { iconCardTop }
    </Card>
  )

  const cardLeft = (
    <Card 
      sx={{ 
        display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'absolute', 
        left: { xl: '17%', lg: '8%', md: '46%', sm: '44.6%', xs: '39.5%' }, mt: -5, 
        width: { md: '85px', sm: '75px', xs: '75px'}, height: { md: '85px', sm: '75px', xs: '75px'}, 
        borderRadius: '100%', border: '2px solid black', backgroundColor: '#FB9039',
        filter: 'drop-shadow(10px 10px 15px rgba(5, 22, 34, 0.50)) drop-shadow(6px 6px 0px #191919)'
      }}
    >
      { iconCardTop }
    </Card>
  )

  return(
    <Box sx={{ mb: 10 }}>
      { right ? cardRight : cardLeft }

      <Card 
        sx={{ 
          display: 'flex', justifyContent: 'center', 
          width: { lg: '1140px', md: '850px', sm: '700px', xs: '340px' }, 
          borderRadius: '25px', backgroundColor: backgroundColorCards,
          color: colorFontCards, boxShadow: "10px 10px 15px -5px #0516227f, 6px 6px 0 0 #191919"
        }}
      >
        <CardContent sx={{ width: { lg: '1000px', md: '780px', sm: '670px' } }}>
          <Box 
            sx={{ 
              display: { lg: 'flex', xs: 'flex' },
              flexDirection: { lg: 'row', xs: 'column' },
              alignItems: { lg: 'normal', xs: 'center' },
              mt: { lg: 2, xs: 7 } 
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
                width: { lg: '2px', xs: '150px' }, 
                height: { lg: '33px', md: '3px', xs: '2px' }, 
                background: colorFontCards, 
                mx: { lg: 2, xs: 0 }, my: { lg: 0, xs: 3 }
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

            <Button content={'Consultar'} type={'button'}/>
          </Box>
        </CardContent>
      </Card>
    </Box>
  )
}