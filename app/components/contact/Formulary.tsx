'use client'

import { Box, TextField, Typography, ThemeProvider, createTheme } from '@mui/material';
import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Swal from 'sweetalert2';
import { userSchema, mappedPlans } from "./userSchema";
import { TypoFormError } from '../../globalStyles';
import Button from '../../ui/Button';
import { grey } from '@mui/material/colors';
import { fontInter } from '../../ui/fonts';

type Inputs = {
  name: string;
  surname: string;
  email: string;
  plan: string;
  comment: string;
};

const theme:object = createTheme({
  palette: {
    primary: { main: grey[900] }
  }
});

const url:string = 'https://desusweb.com/api/mail';

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

export default function Formulary() {
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors },
    formState: { isSubmitSuccessful },
  } = useForm<Inputs>({
    resolver: zodResolver(userSchema),
  });
  
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ name: "", surname: "", email: "", comment: "" })
    }
  }, [formState, register, reset])

  const plansOptions = Object.entries(mappedPlans).map(([key, value]) => (
    <option value={key} key={key}>
      { value }
    </option>
  ));
  
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
      title: 'Recibimos tu consulta!'
    })
  };

  return(
    <Box
      sx={{
        mx: 'auto',
        background:"#fff",
        width: { lg: '60%',sm: '75%', xs: '90%' },
        border: '2px solid #051622', borderRadius: '25px', 
        boxShadow: '6px 6px 0px #191919, 10px 10px 15px -5px rgba(5, 22, 34, 0.5)',
        '& .MuiTextField-root': { my: '13px' }
      }}
    >
      <Box 
        component="form" 
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          display: 'flex', flexDirection: 'column',
          width: { xl: 870, lg: 750, md: 680, sm: 520, xs: 300 },
          py: 6, mx: 'auto'
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
            {...register("surname")}
            error={ errors.surname?.message ? true : false }
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
            </Typography>
          }

          <TextField
            InputLabelProps={{ shrink: true }}
            id='email'
            type='text'
            label='E-mail *'
            {...register("email")}
            error={ errors.email?.message ? true : false }
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
            </Typography>
          }

          <TextField 
            label="Selecciona un plan"
            id="plan"
            type='select'
            select
            SelectProps={{
              native: true
            }}
            {...register("plan")}
            
          >
            { plansOptions }
          </TextField>
          { errors.plan?.message && 
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
              {errors.plan?.message}
            </Typography>
          }

          <TextField
            InputLabelProps={{ shrink: true }}
            id='comment'
            type='text'
            multiline
            rows={5}
            label='Dejanos un comentario'
            {...register("comment")}
            error={ errors.comment?.message ? true : false }
          />
          { errors.comment?.message && 
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
              {errors.comment?.message}
            </Typography>
          }
        </ThemeProvider>

      <Typography 
      variant="body2"
      sx={{ fontSize: '16px', fontFamily: fontInter, fontWeight: 600, mt: '24px' }}
      >* Campos obligatorios</Typography>
      
      <Box sx={{ m:'80px auto 0px auto' }}>
        <Button content={'Enviar'} type={'submit'} href={''} backColor={'var(--Primario, #B5F53F)'}>Submit</Button>
      </Box>
      
      </Box>
    </Box>
  )
}