import React, { useState } from 'react'
import { Box, Button, CardMedia, Checkbox, Grid, makeStyles, TextField, Typography } from '@material-ui/core'
// import SigninSideBg from '../../../asset/SignInSideBg'
import { useForm } from "react-hook-form";
import logo from '../../../asset/logo.svg'
import SideBg from '../../../asset/signupbg.png'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import {
  useHistory
} from "react-router-dom";
import axios from 'axios';


const useStyle = makeStyles(theme => ({

  root: {
    '& .MuiFormControl-root': {
      width: '60%',
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
    height:"100vh"
  },
  sideImage: {
    width: "650px",
    height: '650px'
  },
  logoProp: {
    height: '80px',
    paddingTop: '50px'
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
    '& .MuiButton-root:hover': {
      backgroundColor: 'black'
    }
  },
  keepMeTag: {
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: '20px'
  },
  forgetStyle: {
    fontWeight: 'bold',
    paddingBottom: '20px',
    cursor: 'pointer'
  },
  newUserLink: {
    fontWeight: 'bold',
    textAlign: 'end',
    cursor: 'pointer'
  }
}))

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
// const HomeRoute = () => {
//   return (
//     <Switch>
//       <Redirect to="/" />
//     </Switch>
//   )
// }

const Index = () => {
  const classes = useStyle()
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState()
  const [message, setMessage] = useState()
  const history = useHistory()

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    axios({
      method: 'POST',
      url: 'http://localhost:4000/user/signin',
      data: data
    })
      .then(({ data }) => {
        if (data.code === 'SUCCESS') {
          localStorage.setItem('authToken', 'Barrer ' + data.token);
          setSeverity('success')
          setMessage("You are sign in . Redireact to home page")
          setOpen(true);
          setTimeout(() => {
            history.push('/')
          }, 2000);

        }
      })
      .catch(err => {
        setMessage("UNAUTHORIZED")
        setSeverity('error')
        setOpen(true);
      })
  }


  return (
    <Grid item container className={classes.root}>
      <Grid item xs={6}  >
        <CardMedia
          className={classes.media}
          image={SideBg}
          title="Paella dish"
        />
      </Grid>
      <Grid item container xs={6} style={{ textAlign: 'center' }}>
        <Grid item xs={12} className={classes.logoContainer}>
          <img
            src={logo}
            alt='logo'
            className={classes.logoProp}
          />

        </Grid>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid item container spacing={0}>
            <Grid item xs={12}>
              <Typography
                variant='h6'
                style={{ fontWeight: 'bold', paddingBottom: '20px' }}
                color='secondary'
              >
                Sign In Account
            </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-basic"
                placeholder="class id"
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

            <Grid xs={7} item container style={{ margin: '1rem auto' }}>
              <Grid item xs={4} style={{ display: 'flex' }}>

                <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} style={{ padding: '0px' }} />
                <Typography
                  variant='subtitle2'
                  className={classes.keepMeTag}
                  color='secondary'
                >
                  keep me sign in
                </Typography>


              </Grid>
              <Grid item xs={4}>
                <Typography
                  variant='subtitle2'
                  className={classes.forgetStyle}
                  color='secondary'
                  onClick={() => { history.push('/forgetpassword') }}
                >
                  Forget Password
              </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography
                  variant='subtitle2'
                  className={classes.newUserLink}
                  color='secondary'
                  onClick={() => { history.push('/signup') }}
                >
                  New user
              </Typography>
              </Grid>


            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                color='primary'
                className={classes.btn}
              // onClick={handleSignInBtn}
              >
                sign in
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
