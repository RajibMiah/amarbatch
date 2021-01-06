import { Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import Header from '../../header/Index'
import PdfDiv from '../../global/Pdfdiv'
import BGStudent from '../../../asset/BGStudent'
import offerCourse from '../../../asset/shadin_assets/offerdcourse/OfferCourse.pdf'


const useStyle = makeStyles(theme => ({

  root: {
    backgroundImage: `url(${BGStudent})`,
    backgroundRepeat: 'no-repeat'
  },
  diloag: {
    "& MuiDialogContent-root": {
      width: '600px',
      padding: '0px'
    },
    '& .MuiDialog-paper': {
      width: '600px',
    }
  },

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

const Index = () => {
  const classes = useStyle()
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Header />
      </Grid>

      <Grid item xs={12}>
        <Grid item xs={12} className={classes.PTypo}>
          <Typography
            variant='h5'
            className={classes.typoStyle}
            color='secondary'
          >
            Offer Courses
        </Typography>
        </Grid>

        <Grid item xs={12} container>
          <PdfDiv pdftitle='summer day offer course 2020'  Pdf = {offerCourse} />
        </Grid>
        {/* <Grid item xs={12} container>
          <PdfDiv pdftitle ='Section B' />
        </Grid> */}
      </Grid>

    </Grid>
  )
}

export default Index
