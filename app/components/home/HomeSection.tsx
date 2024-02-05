'use client'

import { Box, Typography, CardMedia } from "@mui/material";
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
    <Box 
      sx={{ 
        backgroundColor: '#1C1C1C', color: '#FFFFFF', 
        height: { lg: '1130px', md: '864px', sm: '726px', xs: '1005px' } ,
        pt: 6
      }}
    >
      <Box 
        sx={{ 
          display: 'flex', flexDirection: { sm: 'row-reverse', xs: 'column' },
          justifyContent: 'center', alignItems: 'center'
        }}
      >
        <CardMedia
          sx={{
            width: { lg: '664px', md: '460px', sm: '380px', xs: '280px' }, 
            height: { lg: '664px', md: '460px', sm: '380px', xs: '280px' }
          }}
          image='/presentationImage.png'
        />
          
        <Box 
          sx={{ 
            display: 'flex', flexDirection: 'column',
            alignItems: 'center',
            mr: { lg: 18, md: 5, sm: 4, xs: 0 }, mt: { sm: 0, xs: 4 }
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
                mt: { lg: -9.8, md: -8.1, sm: -5.6, xs: -5 }, 
                ml: { lg: 27, md: 23, sm: 16, xs: 14.6 }
              }}
            >
              <TitleAnimation />
            </Box>
          </Typography>

          <Button content={'Contáctanos'} type={'button'}/>
        </Box>
      </Box>
      
      {/* // !! Scroll */}
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: { sm: 5, xs: 12 } }}>
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
			</Box>
      
      <SkillsCards />
      
    </Box>
  );
}