import { Box, Button, Checkbox, Grid, makeStyles, TextField, Typography } from '@material-ui/core'
import SigninSideBg from '../../../asset/SignInSideBg'
import React from 'react'
import logo from '../../../asset/logo.svg'
import BGforget from '../../../asset/BGforget'

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
    '& .MuiButton-root:hover':{
      backgroundColor:'black'
    }
    // margin: '20px'
  }
}))
const Index = () => {
  const classes = useStyle()
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} style = {{textAlign:'center'}}>
        <img
          src={logo}
          alt='logo'
          className={classes.logoProp}
        />

      </Grid>
       <Grid item container xs={6} style={{ textAlign: 'center' }}>

        <Grid item container spacing={0}>
          <Grid item xs={12}>
            <Typography
              variant='h5'
              style={{ fontWeight: 'bold', paddingBottom: '20px' , position:'relative' , right:'150px' }}
              color='secondary'
            >
              Password
        </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField id="outlined-basic" label="Password" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <TextField id="outlined-basic" label="Confirm Password" variant="outlined" />
          </Grid>


          <Grid item xs={12}>
            {/* onClick={() => { history.push() }} */}
            <Button className={classes.btn} >
              Confirm
            </Button>
          </Grid>


        </Grid>
      </Grid>
      <Grid item container xs = {6}>
        <BGforget style = {{position:'absolute', width:"37%"}}/>
      </Grid>
    </Grid>
  )
}

export default Index
