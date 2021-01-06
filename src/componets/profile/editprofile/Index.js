import { Grid, Box, Typography, makeStyles, Button, TextField } from '@material-ui/core'
import React from 'react'
import Cartoonimg from '../../../asset/cartoon.svg'
import { BiLocationPlus } from "react-icons/bi";
import { FcBusinessman } from "react-icons/fc";
import { FcPhone } from "react-icons/fc";


const useStyle = makeStyles(theme => ({
  root: {
    width: 'min-content',
    margin: "-15px",
    display: 'flex',
    '& .MuiButton-root:hover':{
      backgroundColor:'black'
    }
  },
  ulStyle: {
    listStyle: 'none',
    lineHeight: '38px',
    fontWeight: 'bold',
    padding: "0",
    width: '30rem',
  },
  textField: {
    width: '100%'
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
              <TextField label='enter your name' />
            </Typography>
            <Box component='ul' className={classes.ulStyle}>
              <li> <i><FcBusinessman />  <TextField label='enter your study' /></i></li>
              <li><i><FcPhone /></i>  <TextField label='inter your name' /></li>
              <li><i><BiLocationPlus style={{ color: "green" }} /></i>  <TextField label='inter your name' /></li>
            </Box>

          </Box>

        </Box>
      </Grid>

      <Grid item xs></Grid>
      <Grid item >
        <Button style={{ background: '#6396fc', borderRadius: '25px', fontWeight: 'bold', color: 'white', height: '40px', width: '100px' }}>
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
          <TextField
            id="outlined-multiline-static"
            label="Multiline"
            multiline
            rows="3"
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
        </Grid>

        <Grid item xs={12} className={classes.PTypo}>
          <Typography
            variant='h5'
            style={{ fontWeight: 'bold', paddingBottom: '20px' }}
            color='secondary'
          >
            Education
        </Typography>
          <TextField
            id="outlined-multiline-static"
            label="Multiline"
            multiline
            rows="3"
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
        </Grid>



      </Grid>
    </Grid>
  )
}

export default Index
