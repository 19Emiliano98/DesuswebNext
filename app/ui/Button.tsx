import { Box, Button } from "@mui/material";
import { spaceGrotesk } from "./fonts";

export default function ButtonStyle ( param:any ) {
  return(
    <Box>
      <Button
        type= { param.type }
        sx={{
          width: { lg: '400px', md: '355px', sm: '260px', xs: '245px' }, height: { md: '70px', sm: '62px', xs: '60px' },
          border: '2px solid #000000', borderRadius: '50px',
          backgroundColor: '#FBC837',
          boxShadow: '5px 5px 0px #000000, 10px 12px 55px -20px #FBC837',
          textTransform: 'none',
          color: 'black',
          fontFamily: spaceGrotesk,
          fontSize: '25px',
          fontWeight: 600,
          '&:hover': {
            backgroundColor: '#AB8726',
            boxShadow: '5px 5px 0px #000000, 10px 12px 55px -20px #FBC837',
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