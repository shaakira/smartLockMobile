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
  },
      bottomContainer:{
        flex:5,
        backgroundColor:'white',
        borderTopRightRadius:10,
        borderTopLeftRadius:10,
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
        marginLeft:'5%',
        justifyContent:'center',
    } ,
    
    imageStyle:{
      width: 15,
      height: 15, 
      marginLeft:'20%',
      marginTop:'65%'
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
      },
      modal:{
        height:400,
        backgroundColor:'white',
        borderRadius:8,
      },
      innerModal:{
        padding:20,
        marginTop:20
      },
      buttonStyle:{
        backgroundColor:'#01394a',
        borderRadius:50,
        width:200,
        height:60,
        alignSelf:'center',
        margin:30,
        marginTop:60
       },
      btnContainer:{
        marginTop:20
      },
              btmBtn:{
                borderRadius:50,
                width:150,
                height:60,
                alignSelf:'center',
                marginTop:60,
                marginLeft:20,
                borderColor:color.veryLightPink,
                borderWidth:1,
                backgroundColor:'white'
                
              },
              btnText:{
                color: colors.font.lightText,
              },
              pwdText:{
                color:'#e6c405',marginLeft:10,
                marginTop:-8
                              }

}
)
export default styles;