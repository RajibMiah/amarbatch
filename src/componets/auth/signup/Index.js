import React, { useState} from 'react'
import {  Button, CardMedia, Checkbox, Grid, makeStyles, Snackbar, TextField, Typography } from '@material-ui/core'
import { useForm } from "react-hook-form";
import logo from '../../../asset/logo.svg'
import { useHistory } from 'react-router-dom'
import SideBg from '../../../asset/signupbg.png'
import axios from 'axios';
import Alert from '@material-ui/lab/Alert';
const useStyle = makeStyles(theme => ({

  root: {
    '& .MuiFormControl-root': {
      width: '50%',
      margin: '7px'
    },
    '& .MuiOutlinedInput-root': {
      height: '45px'
    },
    '& .MuiInputLabel-formControl': {
      top: '-6px'
    },
    '& .MuiIconButton-label': {
      position: 'relative',
      top: '-9px'
    }
  },
  media:{
    height:"100vh",
  },
  logoProp: {
    height: '80px',
    paddingTop: '20px'
  },
  signout: {
    position: 'absolute',
    right: '12px',
    top: '-28px',
    cursor: 'pointer',
    display: 'flex'
  },
  btn: {
    background: '#6396fc',
    borderRadius: '25px',
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    width: '40%',
    padding: "10px",
    '& .MuiButton-root': {
      '::hover': {
        backgroundColor: "black !important"
      }
    }
  }
}))
const Index = () => {
  const classes = useStyle()
  const history = useHistory()
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState()
  const [message, setMessage] = useState()
  // const [values, setValues] = useState({ classId: '', password: '' })
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    axios({
      method: 'POST',
      url: 'http://localhost:4000/user/signup',
      data: data
    })
      .then(({ data }) => {
        console.log("data", data)
        if (data.code === 'SUCCESS') {
          localStorage.setItem('authToken', 'Barrer ' + data.token);
          setSeverity('success')
          setMessage("You are sign in . Redireact to home page")
          setOpen(true);
          setTimeout(() => {
            history.push('/edit-profile')
          }, 2000);

        }
      })
      .catch(err => {
        setMessage("error is ocopide ")
        setSeverity('error')
        setOpen(true);
      })
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };


  return (
    <Grid container className={classes.root}>
      <Grid item xs={6}>
        {/* <SigninSideBg style= {{position:'absoulte', width:"500px"}}/> */}
        <CardMedia
          className={classes.media}
          image={SideBg}
          title="Paella dish"
        />
      </Grid>
      <Grid item container xs={6} style={{ textAlign: 'center' }}>
        <Grid item xs={12}>
          <img
            src={logo}
            alt='logo'
            className={classes.logoProp}
          />
          <Typography
            variant='h6'
            style={{ fontWeight: 'bold' }}
            color='secondary'
          >
            Sign Up Account
        </Typography>
        </Grid>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid item container spacing={0}>
            <Grid item xs={12}>
              <TextField
                id="outlined-basic"
                placeholder="User Name"
                name='userName'
                variant="outlined"
                defaultValue=""
                inputRef={register}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-basic"
                placeholder="Email"
                name='email'
                variant="outlined"
                defaultValue=""
                inputRef={register}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-basic"
                placeholder="Phone Number"
                name='phoneNo'
                variant="outlined"
                defaultValue=""
                inputRef={register}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-basic"
                placeholder="Class Id"
                name='classId'
                variant="outlined"
                defaultValue=""
                inputRef={register}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-basic"
                placeholder="Password"
                name='password'
                variant="outlined"
                defaultValue=""
                inputRef={register}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-basic"
                placeholder="Confirm Password"
                name='confirmPassword'
                variant="outlined"
                defaultValue=""
                inputRef={register}
              />
            </Grid>
            <Grid xs={6} item container style={{ margin: '0 auto' }}>
              <Grid item xs={5} style={{ display: 'flex' }}>
                <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} style={{ padding: '0px' }} />
                <Typography
                  variant='subtitle2'
                  style={{ fontWeight: 'bold', paddingBottom: '20px' }}
                  color='secondary'
                >
                  keep me sign in
                </Typography>
              </Grid>
              <Grid itemx xs />
              <Grid item xs={5}>
                <Typography
                  variant='subtitle2'
                  style={{ fontWeight: 'bold', textAlign: 'end', cursor: 'pointer' }}
                  color='secondary'
                  onClick={() => { history.push('/signin') }}
                >
                  already user
                </Typography>
              </Grid>

            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                color='primary'
                className={classes.btn}
              >
                sign up
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity}>
          {message}
        </Alert>
      </Snackbar>
    </Grid>
  )
}

export default Index
