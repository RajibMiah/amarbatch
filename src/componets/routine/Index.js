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
    height: '40px'
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
          style={{ lineHeight: '25px', fontWeight: 'bold', paddingBottom: '10px' }}
        >
          The passage experienced a surge in popularity during the 1960s when Letraset used it on
          their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text
          with their software. Today it's seen all around the web; on templates, websites, and stock
          designs. Use our generator to get your own, or read on for the authoritative history of lorem ipsum.
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
