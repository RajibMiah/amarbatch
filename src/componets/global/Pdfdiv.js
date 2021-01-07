import { Box, Button, Dialog, DialogContent, Grid, makeStyles, Slide, Typography } from '@material-ui/core'
import React from 'react'
import PdfIcon from '../../asset/PdfIcon.svg'

const useStyle = makeStyles(theme => ({

  root: {
    marginBottom: '30px',
    '& .MuiButton-root:hover': {
      backgroundColor: 'black'
    },
    '& .MuiDialogContent-root':{
      width:'540px'
    }
  },
  btn: {
    background: '#6396fc',
    borderRadius: '25px',
    fontWeight: 'bold',
    color: 'white',
    height: '40px',
    margin: '5px'
  }

}))
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Pdfdiv = ({ pdftitle, viewClick, Pdf }) => {
  const classes = useStyle()
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Grid item xs={4} className={classes.root} >
        <Box component='div' style={{ display: 'flex' }}>
          <Box component='div'>
            <img
              src={PdfIcon}
              style={{ width: '168px', marginLeft: '25px' }}
              alt='pdficon'
            />
          </Box>

          <Box component='div'>
            <Box component='div'>
              <Typography
                variant='h5'
                style={{ fontWeight: 'bold', paddingLeft: "15px", paddingTop: '20px' }}
                color='secondary'
              >
                {pdftitle}
              </Typography>
            </Box>

            <Box component='div' style={{ display: 'flex', paddingTop: '30px', paddingLeft: '10px', width: 'max-content' }}>
              <Button disableFocusRipple className={classes.btn} onClick={handleClickOpen}>
                View Pdf
            </Button>

              <Button disableFocusRipple className={classes.btn} href={Pdf} download>
                Download
            </Button>
            </Box>
          </Box>

        </Box>

      </Grid>
      <Grid item xs={12}>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"

          className={classes.diloag}
        >
          <DialogContent onClick={handleClose} style = {{width:'540px'}} >
            <iframe
              src={Pdf}
              width="100%"
              height="500px"
            >
            </iframe>
          </DialogContent>

        </Dialog>
      </Grid>
    </>

  )
}

export default Pdfdiv
