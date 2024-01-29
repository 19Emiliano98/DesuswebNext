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
        right: { xl: '17%', lg: '8%', md: '5%', sm: '2%', xs: '5%' }, mt: -5, 
        width: { md: '95px', sm: '75px', xs: '75px'}, height: { md: '95px', sm: '75px', xs: '75px'}, 
        borderRadius: '100%', backgroundColor: '#FB9039',
        filter: 'drop-shadow(10px 10px 15px rgba(5, 22, 34, 0.50)) drop-shadow(6px 6px 0px #191919)'
      }}
    >
      { iconCardTop }
    </Card>
  )

  const cardLeft = (
    <Card 
      sx={{ 
        display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'absolute', 
        left: { xl: '17%', lg: '8%', md: '5%', sm: '2%', xs: '5%' }, mt: -5, 
        width: { md: '95px', sm: '75px', xs: '75px'}, height: { md: '95px', sm: '75px', xs: '75px'}, 
        borderRadius: '100%', backgroundColor: '#FB9039',
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
          width: { lg: '1140px', md: '850px', sm: '700px'}, 
          borderRadius: '25px', backgroundColor: backgroundColorCards,
          color: colorFontCards
        }}
      >
        <CardContent sx={{ width: { lg: '1000px', md: '780px', sm: '670px' } }}>
          <Box sx={{ display: 'flex', mt: 2 }}>
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
            
            <Box sx={{ width: '2px', height: { md: '33px', xs: '26px' }, background: colorFontCards, mx: 2 }}/>

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

            <Button content={'Consultar'}/>
          </Box>
        </CardContent>
      </Card>
    </Box>
  )
}