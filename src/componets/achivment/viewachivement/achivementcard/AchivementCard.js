import { Box, Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyle = makeStyles(theme => ({


  ulStyle: {
    listStyle: 'none',
    lineHeight: '38px',
    fontWeight: 'bold',
    padding: "0",
    width: '12rem',
  },
  typoStyle: {
    fontWeight: 'bold',
    marginTop: '5rem',
    marginLeft: '2rem',
    marginBottom: '19px',
  },

}))


const AchivementCard = ({img , achivHead , achivTitle}) => {
  const classes = useStyle()
  return (
    <>
      <Grid item xs={3}>
        <Box>
          <img
            src={img}
            alt='img'
            style={{ width: "70%", height:'105px' }}
          />
        </Box>
        <Grid item xs={8} className={classes.PTypo}>
          <Typography
            variant='h5'
            style={{ fontWeight: 'bold', textAlign: 'center' }}
            color='secondary'
          >
             {achivHead}
             </Typography>
          <Typography
            variant='subtitle'
            component='div'
            style={{ fontWeight: 'bold', textAlign: 'center' }}
          >
            {achivTitle}
           </Typography>
        </Grid>
      </Grid>
    </>

  )
}

export default AchivementCard
