import { Box, Card, Typography, CardContent, CardMedia } from "@mui/material";
import { TypoH2 } from "../../globalStyles";

const images = [ 
  '/lenguages/reactImage.jpg',
  '/lenguages/figmaImage.jpg',
  '/lenguages/cssImage.jpg',
  '/lenguages/htmlImage.jpg',
  '/lenguages/dockerImage.jpg',
  '/lenguages/jsImage.jpg',
  '/lenguages/phpImage.jpg',
  '/lenguages/sfImage.jpg'
]

export default function SkillsCards() {
  const card = (
    images.map( ( x, index ) => 
      <Box key={index}>
        <Card
          sx={{
            display: 'flex', justifyContent: 'center', alignItems: { md: 'center', xs: 'normal' },
            width: { lg: '200px', md: '138px', sm: '113px', xs: '95px' }, 
            height: { lg: '200px', md: '138px', sm: '113px', xs: '95px' },
            borderRadius: '25px',
            backgroundColor: '#191919',
            border: '1px solid var(--Black, #181818)',
            m: 1.1
          }}
        >
          <CardContent>
            <CardMedia
              sx={{
                width: { lg: '133px', md: '95px', sm: '76px', xs: '60px' },
                height: { lg: '133px', md: '95px', sm: '76px', xs: '60px' },
                borderRadius: '35px'
              }}
              component="img"
              image={x}
              alt="React"
              />
          </CardContent>
        </Card>
      </Box>
    )
  );

  return(
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: { sm: 11, xs: 8 } }}>
      <Typography 
        sx={{ 
          fontFamily: TypoH2.fontFamily,
          fontSize: TypoH2.fontSize,
          fontStyle: TypoH2.fontStyle,
          fontWeight: TypoH2.fontWeight,
          lineHeight: TypoH2.lineHeight,
          mb: '3%'
        }}
        variant="h2"
      >
        Trabajamos con:
      </Typography>

      <Box
        sx={{ 
          display: 'flex', flexWrap: 'wrap', justifyContent: 'center',
          width: { lg: '1200px', md: '800px', sm: '600px' },
          mt: { xl: 1, lg: 3, md: 4, sm: 2, xs: 2 }
        }}
      >
        { card }
      </Box>
    </Box>
  )
}