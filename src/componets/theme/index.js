import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: '#6396fc',
    },
  },
  props: {
    MuiButton: {
      disableRipple: true,
      disableFocusRipple : true,
    },
  },
  overrides:{
    MuiButton:{
      root:{
        color:'red'
      },
      '& .MuiButton-root:hover':{
         backgroundColor:'red !important'
      }
    }
  }
});

export default theme 