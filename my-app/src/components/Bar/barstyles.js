import { makeStyles } from '@material-ui/core/styles';
import { autocompleteClasses } from '@mui/material';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '10px 0',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
    textDecoration: 'none',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
}));