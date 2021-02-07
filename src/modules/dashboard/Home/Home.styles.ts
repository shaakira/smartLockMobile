import { StyleSheet} from 'react-native';
import color from '../../../styles/color';
import colors from '../../../styles/color';


const styles= StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'
  },
  innerContainer:{
    flexDirection: 'row',
    justifyContent:'space-between'
  },
      bottomContainer:{
        flex:4,
        backgroundColor:'red',
        transform : [ { scaleX : 2 } ],
        borderBottomStartRadius : 200,
        borderBottomEndRadius : 200,
        overflow : 'hidden',
    },
    
    logoImage: {
        width: '75%',
        height: '40%' ,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,  
        elevation: 5
      },
      topText:{
        marginTop:'10%',
        fontSize:32,
        color:'black',
        fontWeight:'500',
        justifyContent:'center',
    } ,
    
    imageStyle:{
      width: 22,
      height: 22, 
      marginLeft:'20%',
      marginTop:'65%'
  },
  menuStyle:{
    width: 22,
    height: 22, 
   marginRight:'5%',
   marginTop:65

  },
  
    keyboardAwareContentContainer: {
        flex: 1,
      },    
      textInput:{
          marginRight:20,
          marginLeft:20,
          
      } ,
      textStyle:{
        flex:1,
        marginTop:30
      },
      text:
      {
        margin:10,
        fontSize: 14,
        color: colors.font.lightText,
        fontWeight:'600'
      }
      ,
      centerContainer:{
        flex:1,
        marginTop:-30,
        flexDirection:'row'
        
      },
      parent : {
        height : '68%',
        width : '100%',
        transform : [ { scaleX : 2 } ],
        borderBottomStartRadius : 220,
        borderBottomEndRadius : 220,
        overflow : 'hidden',
        zIndex:1,
    },
    child : {
        flex : 1,
        transform : [ { scaleX : 0.5 } ],

        backgroundColor : 'white',
        alignItems : 'center',
        justifyContent : 'center',
      
    },
    leftContainer:{
      flex:1,
      backgroundColor:'#01394a',
      alignItems : 'center',
      justifyContent : 'center',
    },
    rightContainer:{
      flex:1,
      backgroundColor:'#e6c405',
      alignItems : 'center',
      justifyContent : 'center',
    },
    imgStyle:{
      width: 40,
      height: 40, 
    }
    })


export default styles;