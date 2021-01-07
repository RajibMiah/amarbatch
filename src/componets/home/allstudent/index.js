import { Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import Header from '../../header/Index'
import PdfDiv from '../../global/Pdfdiv'
import BGStudent from '../../../asset/BGStudent'
import StudentData from '../../../asset/shadin_assets/studentdata/studentdata.pdf'

const useStyle = makeStyles(theme => ({

  root: {
    backgroundImage: `url(${BGStudent})`,
    backgroundRepeat: 'no-repeat',
    '& .MuiButton-root:hover': {
      backgroundColor: 'black'
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
    marginTop: '5rem',
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
            Student Data
        </Typography>
        </Grid>

        <Grid item container >
          <Grid item xs={4}>
            <PdfDiv pdftitle='Section A' Pdf = {StudentData} />
          </Grid>
          <Grid item xs={4}>
            <PdfDiv pdftitle='Section B'  Pdf = {StudentData} />
          </Grid>
          <Grid item xs={4}>
            <PdfDiv pdftitle='Section C'  Pdf = {StudentData} />
          </Grid>
          <Grid item xs={4}>
            <PdfDiv pdftitle='Section D'  Pdf = {StudentData} />
          </Grid>
          <Grid item xs={4}>
            <PdfDiv pdftitle='Section E'  Pdf = {StudentData} />
          </Grid>
          <Grid item xs={4}>
            <PdfDiv pdftitle='Section F' Pdf = {StudentData} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Index
