import { Box } from "@mui/material";
import Typewriter from 'typewriter-effect';

export default function TitleAnimation() {
  return(
    <Box sx={{ 
      background: 'linear-gradient(to right, #7B61FF 0%, #8DAC55 45%, #000000 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    }}>
      <Typewriter
        options={{
          strings: [ 'Desarrollo', 'Sitio', 'Negocio', 'Proyecto', 'E-commerce' ],
          autoStart: true,
          loop: true,
          delay: 200,
          deleteSpeed: 120
        }}
      />
      
    </Box>
  )
}