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

const formHeight:number = 17
const formMargin:string = '-2px'

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
    Toast.fire({
      icon: 'success',
      title: 'Recibimos tus datos!!'
    })

    console.log(data);
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
          required
          id='name'
          type='text'
          label='Nombre'
          {...register("name")}
          inputProps={{
            style: {
              height: formHeight
            },
          }}
          InputLabelProps={{
            style: {
              marginTop: formMargin
            },
          }}
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
          required
          id='surname'
          type='text'
          label='Apellido'
          inputProps={{
            style: {
              height: formHeight
            },
          }}
          InputLabelProps={{
            style: {
              marginTop: formMargin
            },
          }}
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
          required
          id='email'
          type='email'
          label='E-mail'
          inputProps={{
            style: {
              height: formHeight
            },
          }}
          InputLabelProps={{
            style: {
              marginTop: formMargin
            },
          }}
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
          required
          id='phone'
          type='text'
          label='Teléfono'
          inputProps={{
            style: {
              height: formHeight
            },
          }}
          InputLabelProps={{
            style: {
              marginTop: formMargin
            },
          }}
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
          id='website'
          type='text'
          label='Sitio web actual (si tienes)'
          {...register("website")}
          inputProps={{
            style: {
              height: formHeight
            },
          }}
          InputLabelProps={{
            style: {
              marginTop: formMargin
            },
          }}
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