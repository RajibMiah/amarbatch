import { Button, Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import Header from '../header/Index'
import BGAchivment from '../../asset/BGAchivment'
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
    color: 'white', height: '40px'
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
        <BGAchivment style={{ position: 'absolute', top: '-5px' }} />
      </Grid>
      <Grid item xs={6} className={classes.PTypo}>
        <Typography
          variant='h5'
          style={{ fontWeight: 'bold', paddingBottom: '20px' }}
          color='secondary'
        >
          Achivements
        </Typography>
        <Typography
          variant='body1'
          style={{ lineHeight: '25px', fontWeight: 'bold', paddingBottom: '10px' }}
        >
          The passage experienced a surge in popularity during the 1960s when Letraset used it on
          their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text
          with their software. Today it's seen all around the web
        </Typography>
        <Button className = {classes.btn} onClick = {()=>{history.push('/viewachivement')}}>
          View Result
        </Button>
      </Grid>

    </Grid>
  )
}

export default Index
