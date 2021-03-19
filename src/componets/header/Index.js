import { Box, Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import logo from '../../asset/logo.svg'
import SignOut from '../../asset/signout.svg'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Redirect, useHistory } from 'react-router-dom'

const useStyle = makeStyles(theme => ({

  logoProp: {
    position: 'absolute',
    left: '40%',
    top: '-4%',
    height: '80px'
  },
  signout: {
    position: 'absolute',
    right: '4rem',
    top: '-28px',
    cursor: 'pointer',
    display: 'flex'
  }
}))

const Index = () => {
  const classes = useStyle()
  const history = useHistory()

  const handleSignOut = () => {
    localStorage.removeItem('authToken')
    history.push('/signin')
  }



  return (
    <Grid container>
      <Grid item xs>
        <img
          src={logo}
          alt='logo'
          className={classes.logoProp}
        />
      </Grid>
      <Box component='div' className={classes.signout} onClick={handleSignOut}>
        <ExitToAppIcon style={{ color: '#6396fc', paddingTop: '5px' }} />
        <Typography
          variant='h6'
          style={{ fontWeight: 'bold' }}
          color='secondary'
        >
          sign out
       </Typography>
      </Box>
    </Grid>
  )
}

export default Index
