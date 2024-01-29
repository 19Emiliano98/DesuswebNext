import { Box, Card, Typography, CardContent, CardMedia } from "@mui/material";
import { TypoH2 } from "../../globalStyles";

const images = [ 
  '/lenguages/reactImage.png',
  '/lenguages/figmaImage.png',
  '/lenguages/cssImage.png',
  '/lenguages/htmlImage.png',
  '/lenguages/dockerImage.png',
  '/lenguages/jsImage.png',
  '/lenguages/phpImage.png',
  '/lenguages/sfImage.png'
]

export default function SkillsCards() {
  const card = (
    images.map( ( x, index ) => 
      <>
        <Card
          sx={{
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            width: { lg: '200px', md: '138px', sm: '113px' }, height: { lg: '200px', md: '138px', sm: '113px' },
            borderRadius: '25px',
            backgroundColor: '#FBC837',
            border: '4px solid black',
            boxShadow: '8px 8px 0px #000000 , 10px 10px 15px -5px rgba(5, 22, 34, 0.5)', // tamanio del shadow alterado por emi
            m: 1.3
          }}
          key={index}
        >
          <CardContent>
            <CardMedia
              sx={{
                width: { lg: '110px', md: '90px', sm: '67px' },
                height: { lg: '110px', md: '90px', sm: '67px' }
              }}
              component="img"
              image={x}
              alt="React"
              />
          </CardContent>
        </Card>
      </>
    )
  );

  return(
    <Box sx={{ 
      display: 'flex', flexDirection: 'column', alignItems: 'center'
      }}>
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
          width: { lg: '1200px', md: '800px', sm: '600px' }
        }}
      >
        {card}
      </Box>
    </Box>
  )
}