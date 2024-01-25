'use client'

import { Box, Typography, CardMedia } from "@mui/material";
import { styled } from '@mui/system';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Button from '../../ui/Button';
import { TypoH1 } from "../../globalStyles";
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
    <Box sx={{ backgroundColor: '#1C1C1C', color: '#FFFFFF' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box>
          <Typography 
            sx={{ 
              fontFamily: TypoH1.fontFamily,
              fontSize: TypoH1.fontSize,
              fontStyle: TypoH1.fontStyle,
              fontWeight: TypoH1.fontWeight,
              lineHeight: TypoH1.lineHeight,
              mb: '93px', ml: -4
            }} 
            variant="h1"
          >
            Bienvenid@ a tu próximo
          </Typography>

          <Button width={'400px'} content={'Contáctanos'}/>
        </Box>

        <CardMedia
          sx={{
            width: '450px', height: '450px'
          }}
          image='/presentationImage.png'
        />
      </Box>
      
      {/* // !! Scroll */}
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="body2">Scroll</Typography>
				<AnimatedArrowDownwardIcon sx={{ color: '#FBC837' }}/>
        <Box sx={{ borderBottom: 'solid 2px gray', color: '#444444', opacity: 0.3, width: '75%', mt: 2, mb: 30 }}>.</Box>
			</Box>

      <SkillsCards />
    </Box>
  );
}