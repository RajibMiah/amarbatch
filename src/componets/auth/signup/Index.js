import React from 'react'
import { Box, Button, Checkbox, Grid, makeStyles, TextField, Typography } from '@material-ui/core'
import SigninSideBg from '../../../asset/SignInSideBg'
import { useForm, Controller } from "react-hook-form";
import logo from '../../../asset/logo.svg'
import { useHistory } from 'react-router-dom'
import SideBg from '../../../asset/signupbg.png'
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
        backgroundColor: "black"
      }
    }
  }
}))
const Index = () => {
  const classes = useStyle()
  const history = useHistory()
  const { register, handleSubmit  } = useForm();
  const onSubmit = data => console.log("data",data);

  return (
    <Grid container className={classes.root}>
      <Grid item xs={6}>
        {/* <SigninSideBg style= {{position:'absoulte', width:"500px"}}/> */}
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
                label="user name"
                name ='userName'
                variant="outlined"
                // control={control}
                defaultValue=""
                inputRef={register}
                // onChange = {handle}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField id="outlined-basic" label="Email" variant="outlined" />
            </Grid>
            <Grid item xs={12}>
              <TextField id="outlined-basic" label="Phone Number" variant="outlined" />
            </Grid>
            <Grid item xs={12}>
              <TextField id="outlined-basic" label="Class Id" variant="outlined" />
            </Grid>
            <Grid item xs={12}>
              <TextField id="outlined-basic" label="Password" variant="outlined" />
            </Grid>
            <Grid item xs={12}>
              <TextField id="outlined-basic" label="Confirm Password" variant="outlined" />
            </Grid>
            <Grid xs={6} item container style={{ margin: '0 auto' }}>
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
              <Grid item xs={6}>
                <Typography
                  variant='subtitle2'
                  style={{ fontWeight: 'bold', paddingBottom: '20px', textAlign: 'end', cursor: 'pointer' }}
                  color='secondary'
                  onClick={() => { history.push('/signin') }}
                >
                  already user
              </Typography>
              </Grid>

            </Grid>
            <Grid item xs={12}>
              {/* onClick={() => { history.push() }} */}
              <Button
               type="submit"
                className={classes.btn}
              >
                sign up
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  )
}

export default Index
