'use client'
import { Box, TextField, Typography, ThemeProvider, createTheme } from '@mui/material';
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema, mappedPlans } from "./userSchema";
import { TypoFormError } from '../../globalStyles';
import Button from '../../ui/Button';

type Inputs = {
  name: string;
  surname: string;
  email: string;
  plan: string;
  comment: string;
};

export default function Formulary() {
  const {
    register,
    handleSubmit,
    /* watch, */
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(userSchema),
  });
  
  const plansOptions = Object.entries(mappedPlans).map(([key, value]) => (
    <option value={key} key={key}>
      { value }
    </option>
  ));
  
  console.log(errors);
  
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return(
    <Box
      sx={{
        background:"#fff",
        width: { lg: '60%',sm: '75%', xs: '100%' }, 
        ml: { lg: '20%', sm: '12%', xs: '-0.2%' },
        '& .MuiTextField-root': { my: '13px', width: '90%' }
      }}
    >
      <Box 
        component="form" 
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          py: 6
        }}
      >
        <TextField
          required
          id='name'
          type='text'
          label='Nombre'
          {...register("name")}
          error={ errors.name?.message ? true : false }
          /* error={ formik.touched.nombre && formik.errors.nombre ? true : false }
          helperText={ formik.touched.nombre && formik.errors.nombre ? formik.errors.nombre : false }
          onChange={formik.handleChange}
          value={formik.values.nombre} */
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
          required
          id='email'
          type='email'
          label='E-mail'
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
          {plansOptions}
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
      
      <Box sx={{ mt: 6 }}>
        <Button content={'Enviar'} type={'submit'}>Submit</Button>
      </Box>
      
      </Box>
    </Box>
  )
}