import { makeStyles } from '@material-ui/core/styles';
//TODO customize later
export default makeStyles(() =>({
    appBar: {
        borderRadius: 10,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      heading: {
        color: 'rgba(0,183,255, 1)',
      },
      image: {
        marginLeft: '15px',
      },

      topnav: {
        backgroundcolor: rgba(0,183,255, 1),
        overflow: hidden,
      },
}));