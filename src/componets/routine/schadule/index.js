import { Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import Header from '../../header/Index'
import PdfDiv from '../../global/Pdfdiv'
import BGStudent from '../../../asset/BGStudent'
import Pdf from '../../../asset/PDF.pdf'
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Slide from '@material-ui/core/Slide';


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
    marginTop: '3rem',
    marginLeft: '23px',
    marginBottom: '10px',
  },

}))
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Index = () => {
  const classes = useStyle()
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
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
          <PdfDiv pdftitle='Summer day 2020' viewClick={handleClickOpen} />
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
          <PdfDiv pdftitle='Summer day 2020' viewClick={handleClickOpen} />
        </Grid>
      </Grid>

      <Grid item xs={6}>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"

          className={classes.diloag}
        >
          <DialogContent onClick={handleClose} >
            <iframe
              src={Pdf}
              width="100%"
              height="500px"
            >
            </iframe>
          </DialogContent>

        </Dialog>
      </Grid>
    </Grid>
  )
}

export default Index
