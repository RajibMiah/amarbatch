import React, { useState } from 'react'
import { Box, Button, Checkbox, Grid, makeStyles, TextField, Typography } from '@material-ui/core'
// import SigninSideBg from '../../../asset/SignInSideBg'
import logo from '../../../asset/logo.svg'
import SideBg from '../../../asset/signupbg.png'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import {
  Switch,
  Redirect,
  useHistory
} from "react-router-dom";


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

  logoProp: {
    height: '80px',
    paddingTop: '50px'
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
  }
}))

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const HomeRoute = () => {
  return (
    <Switch>
      <Redirect to="/" />
    </Switch>
  )
}

const Index = () => {
  const classes = useStyle()
  const [isSignIn, setIsSignIn] = useState(false)
  const [values, setValues] = useState({ classId: '', password: '' })
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  const setInputs = (e) => {
    e.preventDefault()
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value
    })
  }
  const handleSignInBtn = (e) => {
    e.preventDefault()
    setOpen(true);
    if (values.classId == '171-115-220' && values.password == '12345') {
      setOpen(true);
      setIsSignIn(true)
      setTimeout(() => {
        history.push('/')
      }, 2000);


    } else {
      setIsSignIn(false)
    }

  }
  const history = useHistory()
  return (
    <Grid item container className={classes.root}>
      <Grid item xs={6} >
        {/* <SigninSideBg style={{ position: 'absoulte', width: "500px" }} /> */}
        <Box component='img'
          src={SideBg}
          alt='sideimg'
          style={{ width: "650px", height: '650px' }}
        />
      </Grid>
      <Grid item container xs={6} style={{ textAlign: 'center' }}>
        <Grid item xs={12}>
          <img
            src={logo}
            alt='logo'
            className={classes.logoProp}
          />

        </Grid>
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
            <TextField id="outlined-basic" label="Class Id" name='classId' onChange={setInputs} variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <TextField id="outlined-basic" label="Password" name='password' onChange={setInputs} variant="outlined" />
          </Grid>

          <Grid xs={7} item container style={{ margin: '0 auto', marginBottom: '10px' }}>
            <Grid item xs={4}>
              <Box style={{ display: 'flex' }}>
                <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} style={{ padding: '0px' }} />
                <Typography
                  variant='subtitle2'
                  style={{ fontWeight: 'bold', paddingBottom: '20px' }}
                  color='secondary'
                >
                  keep me sign in
                 </Typography>
              </Box>

            </Grid>
            <Grid item xs={4}>
              <Typography
                variant='subtitle2'
                style={{ fontWeight: 'bold', paddingBottom: '20px', cursor: 'pointer' }}
                color='secondary'
                onClick={() => { history.push('/forgetpassword') }}
              >
                Forget Password
                 </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography
                variant='subtitle2'
                style={{ fontWeight: 'bold', paddingBottom: '20px', cursor: 'pointer' }}
                color='secondary'
                onClick={() => { history.push('/signup') }}
              >
                New user
                 </Typography>
            </Grid>


          </Grid>
          <Grid item xs={12}>
            {/* onClick={() => { history.push() }} */}
            <Button className={classes.btn} onClick={handleSignInBtn}>
              sign in
            </Button>
          </Grid>
          {
            (isSignIn) ?
              <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                  You are sign in . Redireact to home page
                </Alert>
              </Snackbar> :
              <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error">
                  Incorrect classId or Password
               </Alert>
              </Snackbar>
          }


        </Grid>
      </Grid>
    </Grid>
  )
}

export default Index
