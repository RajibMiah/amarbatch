import { Grid, Box, Typography, makeStyles, Button } from '@material-ui/core'
import React from 'react'
import Cartoonimg from '../../asset/cartoon.svg'
import { BiLocationPlus } from "react-icons/bi";
import { FcBusinessman } from "react-icons/fc";
import { FcPhone } from "react-icons/fc";


const useStyle = makeStyles(theme => ({
  root: {
    width: 'min-content',
    margin: "20px",
    // background: 'red',
    display: 'flex'
  },
  ulStyle: {
    listStyle: 'none',
    lineHeight: '38px',
    fontWeight: 'bold',
    padding: "0",
    width: '12rem',


  }

}))

const Index = () => {
  const classes = useStyle()
  return (
    <Grid container>
      <Grid item >
        <Box component='div' className={classes.root}>
          <img
            src={Cartoonimg}
            alt='crprofile'
            style={{ width: '150px', borderRadius: '50%', }}
          />
          <Box component='div'>
            <Typography
              variant='body1'
              color='secondary'
              style={{ fontWeight: 'bold', textAlign: 'left' }}
            >
              Shahadin Mahamud
          </Typography>
            <Box component='ul' className={classes.ulStyle}>
              <li> <i><FcBusinessman /></i> BSc hons in cse</li>
              <li><i><FcPhone /></i>+88 01715646 45</li>
              <li><i><BiLocationPlus style={{ color: "green" }} /></i>Amborkhana,sylhet</li>
            </Box>

          </Box>

        </Box>
      </Grid>

      <Grid item xs></Grid>
      <Grid item >
        <Button style={{ background: '#6396fc', borderRadius: '25px', fontWeight: 'bold', color: 'white', height: '40px' , width:'100px' }}>
          Edit
        </Button>
      </Grid>
      <Grid item container>
        <Grid item xs={12} className={classes.PTypo}>
          <Typography
            variant='h5'
            style={{ fontWeight: 'bold', paddingBottom: '20px' }}
            color='secondary'
          >
            Bio
        </Typography>
          <Typography
            variant='body1'
            style={{ lineHeight: '25px', fontWeight: 'bold', paddingBottom: '10px' }}
          >
            The passage experienced a surge in popularity during the 1960s when Letraset used it on
            their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text
            with their software. Today it's seen all around the web
        </Typography>
        </Grid>

        <Grid item xs={12} className={classes.PTypo}>
          <Typography
            variant='h5'
            style={{ fontWeight: 'bold', paddingBottom: '20px' }}
            color='secondary'
          >
            Education
        </Typography>
          <Typography
            variant='body1'
            style={{ lineHeight: '25px', fontWeight: 'bold', paddingBottom: '10px' }}
          >
            The passage experienced a surge in popularity during the 1960s when Letraset used it on
            their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text
            with their software. Today it's seen all around the web
        </Typography>
        </Grid>



      </Grid>
    </Grid>
  )
}

export default Index
