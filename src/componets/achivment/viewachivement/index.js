import { Box, Card, Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import Header from '../../header/Index'
import PdfDiv from '../../global/Pdfdiv'
import BGStudent from '../../../asset/BGStudent'
import Pdf from '../../../asset/PDF.pdf'
import AchivementsImg from '../../../asset/achivement.jpg'
import AchivementCard from './achivementcard/AchivementCard'
import Nasa from '../../../asset/shadin_assets/achivement/nasa.jpg'
import img1 from '../../../asset/shadin_assets/achivement/IMG_396.jpg'
import img2 from '../../../asset/shadin_assets/achivement/IMG_518.jpg'
import img3 from '../../../asset/shadin_assets/achivement/Low-res-IMG_4067.jpg'

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
            Achivements
        </Typography>
        </Grid>
      </Grid>

      <Grid item container spacing = {3}>
        <AchivementCard
          img= {Nasa}
          achivHead='VR web'
          achivTitle='nasa space app challange'
        />
         <AchivementCard
          img={img1}
          achivHead='VR web'
          achivTitle='nasa space app challange'
        />
         <AchivementCard
          img={img2}
          achivHead='VR web'
          achivTitle='nasa space app challange'
        />
         <AchivementCard
          img={img3}
          achivHead='VR web'
          achivTitle='nasa space app challange'
        />
         <AchivementCard
          img={img1}
          achivHead='VR web'
          achivTitle='nasa space app challange'
        />
         <AchivementCard
          img={img2}
          achivHead='VR web'
          achivTitle='nasa space app challange'
        />
         <AchivementCard
          img={img3}
          achivHead='VR web'
          achivTitle='nasa space app challange'
        />

      </Grid>

    </Grid>
  )
}

export default Index
