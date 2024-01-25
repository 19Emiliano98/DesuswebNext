import { Box, Button } from "@mui/material";
import { spaceGrotesk } from "./fonts";

export default function ButtonStyle ( param:any ) {
  return(
    <Box>
      <Button
        sx={{
          width: param.width, height: '70px',
          border: '2px solid #000000', borderRadius: '50px',
          backgroundColor: '#e3b332',
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