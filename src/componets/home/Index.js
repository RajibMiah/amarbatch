import { Button, Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import Header from '../header/Index'
import HomeIcon from '../../asset/homeiconsvg'
import CRProfile from './crproile/CRProfile'
import Cartoonimg from '../../asset/cartoon.svg'
import { useHistory } from "react-router-dom";
import './style.css'

const useStyle = makeStyles(theme => ({

  PTypo: {
    textAlign: 'left',
    position: 'relative',
    top: '102px',
    height: 'max-content',
  },
  btn: {
    background: '#6396fc',
    borderRadius: '25px',
    textAlign: 'center',
    color: 'white',
    '& .MuiButton-root:hover':{
      backgroundColor:'black'
    }
  }
}))

const Index = () => {
  const classes = useStyle()
  let history = useHistory();
  return (
    <Grid container>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={6} className={classes.PTypo}>
        <Typography
          variant='h5'
          style={{ fontWeight: 'bold', paddingBottom: '20px' }}
          color='secondary'
        >
          WELLCOME FRIENDS
        </Typography>
        <Typography
          variant='body1'
        >
          As said by Edward Young, ‘procrastination is the thief of time’. The more the delay made to begin, the more time wasted. The secret to getting ahead is getting started. Set a timetable, adhere to it strictly and you will find things falling in place.
          Welcome to our batch website.Here you can find the important files and other important things about our batch.
          Be Our Guest.
        </Typography>
      </Grid>

      <Grid item xs={6}>
        <HomeIcon style={{ width: '100%', height: "22rem" }} />
      </Grid>
      <Grid item container>
        <Grid item xs={12}>
          <Typography
            variant='h5'
            color='secondary'
            style={{ fontWeight: 'bold', textAlign: 'center' }}
          >
            Class Representative
            </Typography>
        </Grid>
        <Grid item xs={12} container justify='center'>
          <Grid item >
            <CRProfile src={Cartoonimg} crname = 'Ayan' bgColor='brown' />
          </Grid>
          <Grid item  >
            <CRProfile src={Cartoonimg} crname = 'Prince' bgColor='#5FBEFF' />
          </Grid>
          <Grid item>
            <CRProfile src={Cartoonimg}crname = 'Dhiman' bgColor='brown' />
          </Grid>
          <Grid item >
            <CRProfile src={Cartoonimg} crname = 'Rizvi' bgColor='#5FBEFF' />
          </Grid>
          

        </Grid>
        <Grid item xs={12} container justify='center'>
          <Button className={classes.btn} onClick = {()=>{history.push('/allstudent')}}>
            All Student
          </Button>
        </Grid>
      </Grid>

    </Grid>
  )
}

export default Index
