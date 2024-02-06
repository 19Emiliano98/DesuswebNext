import { Box, Typography } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { TypoBody1 } from "../../globalStyles";

export default function FooterSection (){
  return(
    <Box
      sx={{
        display: 'flex', justifyContent: 'center', alignItems: 'center',
        background: "#051622", color: 'white', py: 6
      }}
    >
      <Typography
        sx={{
          fontFamily: TypoBody1.fontFamily,
          fontSize: TypoBody1.fontSize,
          fontStyle: TypoBody1.fontStyle,
          fontWeight: TypoBody1.fontWeight,
          lineHeight: TypoBody1.lineHeight,
          mr: 2.4
        }}
      >
        © 2023 by DesusWeb www.desusweb.com
      </Typography>
      
      <FacebookIcon fontSize="inherit" sx={{ mx: 0.6, fontSize: '50px' }}/>
      
      <InstagramIcon fontSize="inherit" sx={{ mx: 0.6, fontSize: '50px' }}/>
    </Box>
  )
}