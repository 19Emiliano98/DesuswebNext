'use client'

import { Box, Card, CardActions, CardContent, Typography, TextField } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { TypoH2, TypoH3 } from '../globalStyles';
import Button from '../ui/Button';

const palettes = createTheme({
  palette: {
    primary: {
      main: '#000000',
    }
  },
});

export default function Login() {
  return (
    <Box
      sx={{
        display: 'flex', alignItems: 'center', flexDirection: 'column',
        '& .MuiTextField-root': {
          width: '493.573px'
        }
      }}
    >
      <Typography 
        variant='h2'
        sx={{
          fontFamily: TypoH2.fontFamily,
          fontSize: TypoH2.fontSize,
          fontStyle: TypoH2.fontStyle,
          fontWeight: TypoH2.fontWeight,
          lineHeight: TypoH2.lineHeight,
        }}
      >
        Panel de autogestión
      </Typography>

      <Card
        sx={{
          display: 'flex', alignItems: 'center',
          flexDirection: 'column', textAlign: 'center',
          width: '564px',
          height: '432px',
          flexShrink: 0,
          borderRadius: '25px',
          border: '2px solid #051622',
          background: '#FFF',
          boxShadow: '10px 10px 15px -5px rgba(5, 22, 34, 0.50), 6px 6px 0px 0px #191919'
        }}
      >
        <CardContent>
          <Typography 
            variant="h3"
            sx={{
              fontFamily: TypoH3.fontFamily,
              fontSize: TypoH3.fontSize,
              fontStyle: TypoH3.fontStyle,
              fontWeight: TypoH3.fontWeight,
              lineHeight: TypoH3.lineHeight,
            }}
          >
            Ingresá tus datos
          </Typography>

          <ThemeProvider theme={palettes}>
            <Box
              sx={{
                display: 'flex', flexDirection: 'column',
                gap: '25px'
              }}
            >
              <TextField
                label="Usuario o correo electrónico"
              />
              <TextField
                label="Contraseña"
                type='password'
              />

              <Button content={'Ingresar'} type={'submit'} href={''}/>
            </Box>
          </ThemeProvider>
        </CardContent>
      </Card>
    </Box>
  );
}