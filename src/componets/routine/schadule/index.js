import { Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import Header from '../../header/Index'
import PdfDiv from '../../global/Pdfdiv'
import BGStudent from '../../../asset/BGStudent'
import Pdf from '../../../asset/PDF.pdf'
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Slide from '@material-ui/core/Slide';
import Routine2020 from '../../../asset/shadin_assets/classroutine/2020Routine.pdf'
import FinalExamRoutine from '../../../asset/shadin_assets/examroutine/FinalExam.pdf'


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
            Class Schedule
        </Typography>
        </Grid>

        <Grid item xs={12} container>
          <PdfDiv pdftitle='Summer day 2020' Pdf= {Routine2020} />
        </Grid>

        <Grid item xs={12} className={classes.PTypo}>
          <Typography
            variant='h5'
            className={classes.typoStyle}
            color='secondary'
          >
            Exam Schedule
        </Typography>
        </Grid>

        <Grid item xs={12} container>
          <PdfDiv pdftitle='Summer day 2020' Pdf = {FinalExamRoutine} />
        </Grid>
      </Grid>

      
    </Grid>
  )
}

export default Index
