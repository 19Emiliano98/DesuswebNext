import { Box, Button } from "@mui/material";
import { spaceGrotesk } from "./fonts";

export default function ButtonStyle ( param:any ) {
  return(
    <Box>
      <Button
        type= { param.type }
        href= { param.href }
        sx={{
          width: { lg: '400px', md: '355px', sm: '260px', xs: '245px' }, height: { md: '70px', sm: '62px', xs: '60px' },
          border: '1px solid var(--Black, #181818)', borderRadius: '15px',
          backgroundColor: 'var(--Primario, #B5F53F)',
          boxShadow: '4px 4px 6px 2px rgba(44, 42, 42, 0.25)',
          textTransform: 'none',
          color: 'black',
          fontFamily: spaceGrotesk,
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