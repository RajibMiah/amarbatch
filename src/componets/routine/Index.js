import { Button, Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import Header from '../header/Index'
import RoutinImg from '../../asset/RoutineBackground'
import {useHistory} from 'react-router-dom'
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
    fontWeight: 'bold',
    color: 'white',
    height: '40px',
    '& .MuiButton-root:hover':{
      backgroundColor:'black'
    }
  }
}))


const Index = () => {
  const classes = useStyle()
  const history = useHistory()
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
          ROUTINE
        </Typography>
        <Typography
          variant='body1'
          style={{ lineHeight: '25px', paddingBottom: '10px' }}
        >
         As we know There may be times when you may doubt and deprecate yourself but always remember that you are one of a kind. Have faith in your capabilities, focus on your strengths and the weaknesses will vanish. here you can find our routines.
        </Typography>
        <Button className = {classes.btn} onClick = {()=>{history.push('/schadule')}}>
          View Details
        </Button>
      </Grid>
      <Grid item xs={6} style={{ padding: '32px' }}>
        <RoutinImg />
      </Grid>

    </Grid>
  )
}

export default Index
