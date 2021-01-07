import { Button, Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import Header from '../header/Index'
import BGResult from '../../asset/BGResult'
import {useHistory} from 'react-router-dom'

const useStyle = makeStyles(theme => ({

  PTypo: {
    textAlign: 'right',
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
      <Grid item xs={6} className={classes.PTypo}>
        <Typography
          variant='h5'
          style={{ fontWeight: 'bold', paddingBottom: '20px' }}
          color='secondary'
        >
          Exam Results
        </Typography>
        <Typography
          variant='body1'
          style={{ lineHeight: '25px', fontWeight: 'bold', paddingBottom: '10px' }}
        >
         Success means having the courage, the determination, and the will to become the person you believe you were meant to be. Hope you will pass the exam, Good Luck.
        </Typography>
        <Button className = {classes.btn} onClick = {()=>{history.push('view-result')}}>
          View Result
        </Button>
      </Grid>
      <Grid item xs={6} style={{ padding: '32px' }}>
        <BGResult style={{ position: 'relative', top: '-70px' }} />
      </Grid>
    </Grid>
  )
}

export default Index
