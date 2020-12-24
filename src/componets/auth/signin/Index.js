import { Box, Button, Checkbox, Grid, makeStyles, TextField, Typography } from '@material-ui/core'
import SigninSideBg from '../../../asset/SignInSideBg'
import React from 'react'
import logo from '../../../asset/logo.svg'
import SideBg from '../../../asset/signupbg.png'
import { useHistory } from 'react-router-dom'

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
    // margin: '20px'
  }
}))
const Index = () => {
  const classes = useStyle()
  const history = useHistory()
  return (
    <Grid item container className={classes.root}>
      <Grid item xs={6}>
        {/* <SigninSideBg style={{ position: 'absoulte', width: "500px" }} /> */}
        <Box component = 'img'
          src = {SideBg}
          alt = 'sideimg'
          style = {{width:"650px", height:'650px'}}
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
            <TextField id="outlined-basic" label="Class Id" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <TextField id="outlined-basic" label="Password" variant="outlined" />
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
            <Button className={classes.btn} >
              sign in
            </Button>
          </Grid>


        </Grid>
      </Grid>
    </Grid>
  )
}

export default Index
