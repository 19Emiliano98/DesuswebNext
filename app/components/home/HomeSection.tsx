'use client'

import { Box, Typography, CardMedia, Divider } from "@mui/material";
import { styled } from '@mui/system';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Button from '../../ui/Button';
import { TypoH1 } from "../../globalStyles";
import TitleAnimation from "./TitleAnimation";
import SkillsCards from "./SkillsCards";

export default function HomeSection() {
  const AnimatedArrowDownwardIcon = styled(ArrowDownwardIcon)({
    animation: 'bounce 1.5s infinite',
    '@keyframes bounce': {
      '0%, 100%': {
        transform: 'translateY(0)',
      },
      '50%': {
        transform: 'translateY(15px)',
      },
    },
  });

  return (
    <Box id='home' sx={{ color: '#000000', pt: { sm: 16, xs: 9 } }}>
      <Box 
        sx={{ 
          display: 'flex', flexDirection: { sm: 'row-reverse', xs: 'column' },
          justifyContent: 'center', alignItems: 'center'
        }}
      >
        <CardMedia
          sx={{
            width: { lg: '464px', md: '460px', sm: '350px', xs: '250px' }, 
            height: { lg: '414px', md: '410px', sm: '310px', xs: '240px' }
          }}
          image='/presentationImage.png'
        />
          
        <Box 
          sx={{ 
            display: 'flex', flexDirection: 'column',
            alignItems: 'center',
            mr: { lg: 35, md: 5, sm: 4, xs: 0 }, mt: { sm: 0, xs: 9 }
          }}
        >
          <Typography 
            sx={{
              width: { md: 400, sm: 250, xs: 240 },
              fontFamily: TypoH1.fontFamily,
              fontSize: TypoH1.fontSize,
              fontStyle: TypoH1.fontStyle,
              fontWeight: TypoH1.fontWeight,
              lineHeight: TypoH1.lineHeight,
              mb: { lg: '70px', md: '85px', sm: '50px', xs: '35px' }
            }} 
            variant="h1"
          >
            Bienvenid@ a tu próximo 
            <Box 
              sx={{ 
                position: 'absolute', 
                mt: { lg: -9.8, md: -8.05, sm: -5.1, xs: -5 }, 
                ml: { lg: 27, md: 22.6, sm: 14.5, xs: 13.55 }
              }}
            >
              <TitleAnimation />
            </Box>
          </Typography>

          <Button content={'Contáctanos'} type={'button'} href={'#contacto'}/>
        </Box>
      </Box>
      
      <Divider sx={{ width: { xl: '1000px', lg: '1100px', md: '700px', sm: '500px', xs: '300px'}, mx: 'auto', mt: { sm: '200px', xs: '130px' }, border: 'solid 1px black' }}/>

      {/* // !! Scroll */}
      {/* // ?? se comento porque se elimino del diseño, no lo borro para que quede registrado por si se vuelve a usar */}
      {/* <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: { sm: 5, xs: 12 } }}>
        <Typography sx={{ fontSize: { md: '23px', xs: '17px' } }} variant="body2">Scroll</Typography>
				<AnimatedArrowDownwardIcon sx={{ color: '#FBC837' }}/>
        <Box 
          sx={{ 
            borderBottom: 'solid 2px gray', color: '#444444', opacity: 0.3, width: '75%',
            mt: 2, mb: 8 
          }}
        >
            .
        </Box>
			</Box> */}
      
      <SkillsCards />
      
    </Box>
  );
}