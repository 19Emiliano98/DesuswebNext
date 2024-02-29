'use client'

import { Box, Typography, CardMedia, Divider } from "@mui/material";
import Button from '../../ui/Button';
import { TypoH1 } from "../../globalStyles";
import SkillsCards from "./SkillsCards";

export default function HomeSection() {

  return (
    <Box id='home' sx={{ color: '#000000', pt: { sm: 16, xs: 9 } }}>
      <Box 
        sx={{ 
          display: 'flex', flexDirection: { sm: 'row-reverse', xs: 'column' },
          justifyContent: 'center', alignItems: 'center', ml: { md: -14, sm: 2 }
        }}
      >
        <CardMedia
          sx={{
            width: { lg: '464px', md: '350px', sm: '240px', xs: '250px' }, 
            height: { lg: '414px', md: '320px', sm: '240px', xs: '240px' }
          }}
          image='/presentationImage.png'
        />
          
        <Box 
          sx={{ 
            display: 'flex', flexDirection: 'column',
            alignItems: 'center',
            mr: { xl: 16, lg: 7, md: -10, sm: 5, xs: 0 }, mt: { sm: 6, xs: 9 }
          }}
        >
          <Typography 
            sx={{
              width: { md: 700, sm: 300, xs: 300 },
              textAlign: 'center',
              fontFamily: TypoH1.fontFamily.style,
              fontSize: TypoH1.fontSize,
              fontStyle: TypoH1.fontStyle,
              fontWeight: TypoH1.fontWeight,
              lineHeight: TypoH1.lineHeight,
              mb: { lg: '70px', md: '60px', sm: '50px', xs: '35px' }
            }} 
            variant="h1"
          >
            Bienvenid@ a tu próximo
            <Box component='div' sx={{ ml: 16 }}>
              desarrollo
            </Box>
            <Box component='div' sx={{ position: 'absolute', mt: { lg: -29, md: -22, sm: -15, xs: -13 }, ml: { lg: 1, md: 12, sm: -5 }, zIndex: -1 }}>
              <CardMedia
                sx={{ 
                  width: { lg: '348px', md: '260px', sm: '200px', xs: '160px' }, 
                  height: { lg: '175px', md: '130px', sm: '100px', xs: '80px' } 
                }}
                image='/HomeCloudImage/Cloud1.png'
              />
              <CardMedia
                sx={{ 
                  position: 'absolute',
                  width: { lg: '356px', md: '270px', sm: '200px', xs: '170px' }, 
                  height: { lg: '134px', md: '100px', sm: '70px', xs: '64px' },
                  ml: { lg: 29, md: 23, sm: 19, xs: 15 }, mt: { lg: -5, md: -4, sm: -4, xs: -3 }
                }}
                image='/HomeCloudImage/Cloud2.png'
              />
            </Box>
          </Typography>

          <Button content={'Contáctanos'} type={'button'} href={'#contacto'} backColor={'white'}/>
        </Box>
      </Box>
      
      <Divider sx={{ width: { xl: '1000px', lg: '1100px', md: '700px', sm: '500px', xs: '300px'}, mx: 'auto', mt: { sm: '200px', xs: '130px' }, border: 'solid 1px black' }}/>
      
      <SkillsCards />
      
    </Box>
  );
}