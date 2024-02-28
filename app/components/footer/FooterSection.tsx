import { Box, Typography } from "@mui/material";
// import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { TypoBody1 } from "../../globalStyles";
import Link from "next/link";

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
          lineHeight: TypoBody1.lineHeight,
          mr: 2
        }}
      >
        © 2023 by DesusWeb www.desusweb.com
      </Typography>
      
      <Box sx={{ display: 'flex', textDecoration: 'none' }}>
        {/* <FacebookIcon fontSize="inherit" sx={{ mx: 0.6, fontSize: { md: '50px', sm: '40px', xs: '30px' } }}/> */}
        
        <Link target="_blank" href='https://www.instagram.com/desusweb?igsh=MTlmYzcxOTl3MTA4Zg=='>
          <InstagramIcon fontSize="inherit" sx={{ mx: 0.6, fontSize: { md: '50px', sm: '40px', xs: '30px' }, color: 'white' }}/>
        </Link>
      </Box>
    </Box>
  )
}