import { Button, Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import Header from '../header/Index'
import BGNotification from '../../asset/BGNotification'
import {useHistory} from 'react-router-dom'
const useStyle = makeStyles(theme => ({

  PTypo: {
    textAlign: 'left',
    position: 'relative',
    top: '185px',
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
      <Grid item xs={6} style={{ padding: '32px' }}>
        <BGNotification style={{ position: 'absolute', top: '-65px' }} />
      </Grid>
      <Grid item xs={6} className={classes.PTypo}>
        <Typography
          variant='h5'
          style={{ fontWeight: 'bold', paddingBottom: '20px' }}
          color='secondary'
        >
          Notice
        </Typography>
        <Typography
          variant='body1'
          style={{ lineHeight: '25px', fontWeight: 'bold', paddingBottom: '10px' }}
        >
          The level of our success is limited only by our imagination and no act of kindness, however small, is ever wasted. you can find all notice that given by university and teachers.
        </Typography>
        <Button className={classes.btn} onClick = {()=>{history.push('/noticedetails')}}>
          View Details
        </Button>
      </Grid>


    </Grid>
  )
}

export default Index
