import React, { useState, useEffect } from 'react'
import { Grid, Box, Typography, makeStyles, Button, TextField } from '@material-ui/core'
import Cartoonimg from '../../../asset/cartoon.svg'
import { BiLocationPlus } from "react-icons/bi";
import { FcBusinessman } from "react-icons/fc";
import { FcPhone } from "react-icons/fc";
import { useHistory } from 'react-router';
import axios from 'axios';


const useStyle = makeStyles(theme => ({
  root: {
    width: 'min-content',
    margin: "-15px",
    display: 'flex',
    '& .MuiButton-root:hover': {
      backgroundColor: 'black'
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
  },
  btn: {
    background: '#6396fc',
    borderRadius: '25px',
    fontWeight: 'bold',
    color: 'white',
    height: '40px',
    width: '100px',
    '& .MuiButton-root:hover': {
      backgroundColor: 'black'
    }
  }

}))

const Index = () => {
  const classes = useStyle()
  const [editedData, setEditedData] = useState()
  const history = useHistory()

  useEffect(() => {

    return () => {
    }
  }, [])

  const handleSubmit = () => {
    console.log("data", editedData)
    axios({
      method: 'POST',
      url: 'http://localhost:4000/profile',
      data: editedData,
      headers: {
        Authorization: localStorage.getItem("authToken")
      }
    }).then(({ data }) => {
      history.push('/profile')
    })
      .catch(err => {
        window.alert("edit profile is not saved please try again")
      })
  }

  const handleProfileChange = (e) => {
    setEditedData({
      ...editedData,
      [e.target.name]: e.target.value
    })
  }

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
              <TextField
                label='edit your name'
                name="userName"
                onChange={handleProfileChange}
              />


            </Typography>
            <Box component='ul' className={classes.ulStyle}>
              <li> <i><FcBusinessman />
                <TextField label='edit your study' />
              </i></li>
              <li><i><FcPhone /></i>
                <TextField label='edit your phone number' />
              </li>
              <li><i><BiLocationPlus style={{ color: "green" }} /></i>
                <TextField
                  label='edit your name'

                />
              </li>
            </Box>

          </Box>

        </Box>
      </Grid>

      <Grid item xs></Grid>
      <Grid item >
        <Button onClick={handleSubmit} className={classes.btn}>
          save
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
            name='bio'
            multiline
            rows="3"
            className={classes.textField}
            margin="normal"
            variant="outlined"
            onChange={handleProfileChange}
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
            name='education'
            id="outlined-multiline-static"
            multiline
            rows="3"
            className={classes.textField}
            margin="normal"
            variant="outlined"
            onChange={handleProfileChange}
          />
        </Grid>



      </Grid>
    </Grid>
  )
}

export default Index
