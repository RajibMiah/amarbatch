import { Grid } from '@material-ui/core'
import React from 'react'
import Header from '../../header/Index'

const index = () => {
  return (
   <Grid container>
     <Grid item xs = {12}>
        <Header/>
     </Grid>
     <Grid item xs = {12}>
        <h1>course details</h1>
     </Grid>
     
   </Grid>
  )
}

export default index
