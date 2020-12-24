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
    // fontWeight: 'bold',
    textAlign: 'center',
    color: 'white'
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
          variant='h6'
          style={{ lineHeight: '25px' }}
        >
          The passage experienced a surge in popularity during the 1960s when Letraset used it on
          their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text
          with their software. Today it's seen all around the web; on templates, websites, and stock
          designs. Use our generator to get your own, or read on for the authoritative history of lorem ipsum.
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
            <CRProfile src={Cartoonimg} bgColor='brown' />
          </Grid>
          <Grid item  >
            <CRProfile src={Cartoonimg} bgColor='#5FBEFF' />
          </Grid>
          <Grid item>
            <CRProfile src={Cartoonimg} bgColor='brown' />
          </Grid>
          <Grid item >
            <CRProfile src={Cartoonimg} bgColor='#5FBEFF' />
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
