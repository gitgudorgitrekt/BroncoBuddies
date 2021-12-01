import { makeStyles } from '@material-ui/core/styles';
//TODO customize later
export default makeStyles((theme) =>({
    appBar: {
        borderRadius: 10,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifycontent: 'center',
        alignItems: 'center',
      },
      heading: {
        color: 'rgba(0,183,255, 1)',
      },
      image: {
        marginLeft: '15px',
      },
      [theme.breakpoints.down('sm')]: {
        mainContainer: {
          flexDirection: "row",
        }
      }
}));