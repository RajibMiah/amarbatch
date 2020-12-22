import { Box, Button, Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import PdfIcon from '../../asset/PdfIcon.svg'
import Pdf from '../../asset/PDF.pdf'
const useStyle = makeStyles(theme => ({

  btn: {
    background: '#6396fc',
    borderRadius: '25px',
    fontWeight: 'bold',
    color: 'white',
    height: '40px',
    margin: '5px'
  }

}))

const Pdfdiv = ({pdftitle}) => {
  const classes = useStyle()
  return (
    <Grid item xs={12} >
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

          <Box component='div' style={{ display: 'flex', paddingTop: '30px', paddingLeft: '10px' }}>
            <Button className={classes.btn} >
              View Pdf
            </Button>

            <Button className={classes.btn} href= {Pdf} download>
              Download
            </Button>
          </Box>
        </Box>

      </Box>

    </Grid>


  )
}

export default Pdfdiv
