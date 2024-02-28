'use client'

import { Box, TextField, ThemeProvider, Typography, createTheme } from "@mui/material";
import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formPromoSchema } from './formPromoSchema';
import Swal from 'sweetalert2';
import { grey } from '@mui/material/colors';
import Button from '../../ui/Button';
import { fontInter } from "../../ui/fonts";
import { TypoFormError } from "../../globalStyles";

const theme:object = createTheme({
  palette: {
    primary: { main: grey[900] }
  }
});

type Inputs = {
  name: string;
  surname: string;
  email: string;
  phone: string;
  website: string;
};

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didRender: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

const url:string = 'https://desusweb.com/api/promocion';

export default function FormPromo() {
  
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors },
    formState: { isSubmitSuccessful },
  } = useForm<Inputs>({
    resolver: zodResolver( formPromoSchema ),
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ name: "", surname: "", email: "", phone: "", website: "" })
    }
  }, [formState, register, reset])

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    fetch( url , {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    Toast.fire({
      icon: 'success',
      title: 'Recibimos tus datos!!'
    });
  }

  return(
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        display: 'flex', flexDirection: 'column',
        width: { xl: 780, lg: 750, md: 680, sm: 520, xs: 250 },
        mt: '37px',
        '& .MuiTextField-root': { my: '11px' }
      }}
    >
      <ThemeProvider theme={theme}>
        <TextField
          InputLabelProps={{ shrink: true }}
          id='name'
          type='text'
          label='Nombre *'
          {...register("name")}
          error={ errors.name?.message ? true : false }
        />
        { errors.name?.message && 
        <Typography 
          variant='body2' 
          sx={{ 
            fontFamily: TypoFormError.fontFamily,
            color: TypoFormError.color,
            fontSize: TypoFormError.fontSize,
            fontStyle: TypoFormError.fontStyle,
            fontWeight: TypoFormError.fontWeight
          }}
        >
          {errors.name?.message}
        </Typography>}

        <TextField
          InputLabelProps={{ shrink: true }}
          id='surname'
          type='text'
          label='Apellido *'
          error={ errors.surname?.message ? true : false }
          {...register("surname")}
        />
        { errors.surname?.message && 
        <Typography 
          variant='body2' 
          sx={{ 
            fontFamily: TypoFormError.fontFamily,
            color: TypoFormError.color,
            fontSize: TypoFormError.fontSize,
            fontStyle: TypoFormError.fontStyle,
            fontWeight: TypoFormError.fontWeight
          }}
        >
          {errors.surname?.message}
        </Typography>}

        <TextField
          InputLabelProps={{ shrink: true }}
          id='email'
          type='email'
          label='E-mail *'
          error={ errors.email?.message ? true : false }
          {...register("email")}
        />
        { errors.email?.message && 
        <Typography 
          variant='body2' 
          sx={{ 
            fontFamily: TypoFormError.fontFamily,
            color: TypoFormError.color,
            fontSize: TypoFormError.fontSize,
            fontStyle: TypoFormError.fontStyle,
            fontWeight: TypoFormError.fontWeight
          }}
        >
          {errors.email?.message}
        </Typography>}

        <TextField
          InputLabelProps={{ shrink: true }}
          id='phone'
          type='text'
          label='Teléfono *'
          error={ errors.phone?.message ? true : false }
          {...register("phone")}
        />
        { errors.phone?.message && 
        <Typography 
          variant='body2' 
          sx={{ 
            fontFamily: TypoFormError.fontFamily,
            color: TypoFormError.color,
            fontSize: TypoFormError.fontSize,
            fontStyle: TypoFormError.fontStyle,
            fontWeight: TypoFormError.fontWeight
          }}
        >
          {errors.phone?.message}
        </Typography>}

        <TextField
          InputLabelProps={{ shrink: true }}
          id='website'
          type='text'
          label='Sitio web actual (si tienes)'
          {...register("website")}
        />
      </ThemeProvider>

      <Typography 
        variant="body2"
        sx={{ fontSize: '16px', fontFamily: fontInter, fontWeight: 600, mt: '24px' }}
      >* Campos obligatorios</Typography>

      <Box sx={{ mx: 'auto', mt: '57px', mb: '63px' }}><Button content={'Enviar'} type={'submit'} href={''} backColor={'var(--Primario, #B5F53F)'}>Submit</Button></Box>
    </Box>
  )
}