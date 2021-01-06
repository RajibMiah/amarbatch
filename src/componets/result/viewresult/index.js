import { Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import Header from '../../header/Index'
import PdfDiv from '../../global/Pdfdiv'
import BGStudent from '../../../asset/BGStudent'
import FinalResult from '../../../asset/shadin_assets/finaleresult/FinalResult.pdf'
import MidResult from '../../../asset/shadin_assets/midresult/midResult.pdf'



const useStyle = makeStyles(theme => ({

  root: {
    backgroundImage: `url(${BGStudent})`,
    backgroundRepeat: 'no-repeat',
    '& .MuiButton-root:hover':{
      backgroundColor:'black'
    }
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
    marginTop: '3rem',
    marginLeft: '23px',
    marginBottom: '10px',
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
            Mid-Term Exam Result
        </Typography>
        </Grid>

        <Grid item xs={12} container>
          <PdfDiv pdftitle='summer mid term result  2020' Pdf = {FinalResult} />
        </Grid>

        <Grid item xs={12} className={classes.PTypo}>
          <Typography
            variant='h5'
            className={classes.typoStyle}
            color='secondary'
          >
            Final Exam Result
        </Typography>
        </Grid>

        <Grid item xs={12} container>
          <PdfDiv pdftitle='summer final result  2020' Pdf = {MidResult} />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Index

