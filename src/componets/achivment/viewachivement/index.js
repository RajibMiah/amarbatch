import { Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import Header from '../../header/Index'
import PdfDiv from '../../global/Pdfdiv'
import BGStudent from '../../../asset/BGStudent'
import Pdf from '../../../asset/PDF.pdf'


const useStyle = makeStyles(theme => ({

  root: {
    backgroundImage: `url(${BGStudent})`,
    backgroundRepeat: 'no-repeat'
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

      <Grid item xs={6}>
        <Grid item xs={12} className={classes.PTypo}>
          <Typography
            variant='h5'
            className={classes.typoStyle}
            color='secondary'
          >
            Student Date
        </Typography>
        </Grid>

        <Grid item xs={12} container>
          <PdfDiv section='Section A' />
        </Grid>
        <Grid item xs={12} container>
          <PdfDiv section='Section B' />
        </Grid>
      </Grid>

      <Grid item xs={6}>
        <iframe
          src={Pdf}
          width="100%"
          height="500px"
        >
        </iframe>
      </Grid>
    </Grid>
  )
}

export default Index
