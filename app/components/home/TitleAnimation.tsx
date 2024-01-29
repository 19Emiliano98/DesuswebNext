import { Box } from "@mui/material";
import Typewriter from 'typewriter-effect';

export default function TitleAnimation() {
  return(
    <Box sx={{ color: '#FF9B4A' }}>
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