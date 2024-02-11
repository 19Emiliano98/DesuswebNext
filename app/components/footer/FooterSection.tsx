import { Box, Typography } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { TypoBody1 } from "../../globalStyles";

export default function FooterSection (){
  return(
    <Box
      sx={{
        display: 'flex', flexDirection: { sm: 'row', xs: 'column'},
        justifyContent: 'center', alignItems: 'center',
        background: "#181818", color: 'white', py: 6
      }}
    >
      <Typography
        sx={{
          fontFamily: TypoBody1.fontFamily,
          fontSize: TypoBody1.fontSize,
          fontStyle: TypoBody1.fontStyle,
          fontWeight: TypoBody1.fontWeight,
          lineHeight: TypoBody1.lineHeight
        }}
      >
        © 2023 by DesusWeb www.desusweb.com
      </Typography>
      
      <Box sx={{ display: 'flex' }}>
        <FacebookIcon fontSize="inherit" sx={{ mx: 0.6, fontSize: { md: '50px', sm: '40px', xs: '30px' } }}/>
        
        <InstagramIcon fontSize="inherit" sx={{ mx: 0.6, fontSize: { md: '50px', sm: '40px', xs: '30px' } }}/>
      </Box>
    </Box>
  )
}