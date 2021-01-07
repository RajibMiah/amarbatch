import { Grid, Box, Typography, makeStyles } from '@material-ui/core'
import React from 'react'

const useStyle = makeStyles(theme => ({
  root: {
    width: 'min-content',
    margin:"20px"
  }

}))

const CRProfile = ({ src  , bgColor , crname}) => {
  const classes = useStyle()
  return (
      <Box component='div' className={classes.root}>
        <img
          src={src}
          alt='crprofile'
          style={{ height: '70px', width: '70px', borderRadius: '50%' , background:`${bgColor}`}}
        />
        <Typography
          variant='body1'
          color='secondary'
          style={{ fontWeight: 'bold', textAlign: 'center' }}
        >
         {crname}
      </Typography>
      </Box>
  )
}

export default CRProfile
