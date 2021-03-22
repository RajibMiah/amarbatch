import { Button, Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import Header from '../header/Index'
import BGCourse from '../../asset/BGCourse'
import {useHistory} from 'react-router-dom'
const useStyle = makeStyles(theme => ({

  PTypo: {
    textAlign: 'right',
    position: 'relative',
    top: '320px',
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
        <BGCourse style={{ position: 'relative', left: "-66px" }} />
      </Grid>
      <Grid item xs={6} className={classes.PTypo}>
        <Typography
          variant='h5'
          style={{ fontWeight: 'bold', paddingBottom: '20px' }}
          color='secondary'
        >
          COURSES
        </Typography>
        <Typography
          variant='body1'
          style={{ lineHeight: '25px', paddingBottom: '10px' }}
        >
         As rightly said, where there is a will, there is a way!’ Any achievement is impossible without dedication. So, if you need to achieve your goals, along with hard work, you will need to be dedicated all throughout. Here you can find course details .
        </Typography>
        <Button className = {classes.btn} onClick = {()=>{history.push('/details')}}>
          View Details
        </Button>
      </Grid>


    </Grid>
  )
}

export default Index
