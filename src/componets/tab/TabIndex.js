import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import HomeIcon from '@material-ui/icons/Home';
import ScheduleIcon from '@material-ui/icons/Schedule';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PersonIcon from '@material-ui/icons/Person';
import { useHistory } from "react-router-dom";
import TimeIcon from '../../asset/TimeIcon'
import CourseIcon from '../../asset/CourseIcon'
import NoticeIcon from '../../asset/noticeicon'
import AchivmentIcon from '../../asset/AchivmentIcon'
import Routine from '../routine/RoutineRouter'
import Course from '../courses/CourseRoute'
import Notification from '../notice/NoticeRoute'
import Result from '../result/route'
import Achivement from '../achivment/route'
import Profile from '../profile/Route'

import TabPanel from './tabpanel/TabPanel'

import Home from '../home/HomeRoute'

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 656,
    '& .MuiTabs-flexContainer': {
      background: '#6396FC',
      marginLeft: '15px',
      borderRadius: '25px',
      height: '90%',
      position: 'relative',
      top: '5%',
    },

  },
  tabs: {
    // borderRight: `1px solid ${theme.palette.divider}`,
    width: '8%',
    '& .MuiTab-wrapper': {
      height: '50px',
      width: "50%",
    },
    '& .MuiSvgIcon-root': {
      fontSize: '50px',
      borderColor: 'white',
      stroke: '#6396fc'
    },
    '& .MuiTab-root': {
      margin: '10px',
      minWidth: "0px !important",
      '&:hover': {
        background: 'black',
        borderRadius: '50%'
      }
    }
  },
  tabStyle: {
    background: 'black',
    borderRadius: '50%'

  }

}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  let history = useHistory();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        indicatorColor='#ffff'
        // variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab
          icon={<HomeIcon style={{ color: 'white' }} />}
          onClick={() => { history.push('/') }}
          {...a11yProps(0)}
        />
        <Tab
          icon={<TimeIcon />}
          onClick={() => { history.push('/routine') }}
          {...a11yProps(1)}
        />
        <Tab
          icon={<CourseIcon />}
          onClick={() => { history.push('/courses') }}
          {...a11yProps(2)}
        />
        <Tab
          icon={<NoticeIcon />}
          onClick={() => { history.push('/notice') }}
          {...a11yProps(3)}
        />
        <Tab
          icon={<ListAltIcon style={{ color: 'white' }} />}
          onClick={() => { history.push('/result') }}
          {...a11yProps(4)}
        />
        <Tab
          icon={<AchivmentIcon />}
          onClick={() => { history.push('/achivement') }}
          {...a11yProps(5)}
        />
        <Tab
          icon={<PersonIcon style={{ color: 'white' }} />}
          onClick={() => { history.push('/profile') }}
          {...a11yProps(6)}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Home />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Routine />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Course />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Notification />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Result />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Achivement />
      </TabPanel>
      <TabPanel value={value} index={6}>
        <Profile />
      </TabPanel>
    </div>
  );
}
