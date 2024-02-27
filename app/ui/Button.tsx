import { Box, Button } from "@mui/material";
import { fontSpaceGrotesk } from "./fonts";

export default function ButtonStyle ( param:any ) {
  return(
    <Box>
      <Button
        type= { param.type }
        href= { param.href }
        sx={{
          width: { lg: '400px', md: '300px', sm: '220px', xs: '200px' }, height: { md: '70px', sm: '57px', xs: '54px' },
          border: '1px solid var(--Black, #181818)', borderRadius: '15px',
          backgroundColor: param.backColor,
          boxShadow: '4px 4px 6px 2px rgba(44, 42, 42, 0.25)',
          textTransform: 'none',
          color: 'black',
          fontFamily: fontSpaceGrotesk,
          fontSize: '25px',
          fontWeight: 600,
          '&:hover': {
            backgroundColor: '#86B52F'
          },
          '&:disabled': {
            backgroundColor: '#ac8e3d',
            boxShadow: '5px 5px 0px #000000, 10px 12px 55px -20px #FBC837',
            opacity: '70%'
          }
        }}
      >
        { param.content }
      </Button>
    </Box>
  )
}