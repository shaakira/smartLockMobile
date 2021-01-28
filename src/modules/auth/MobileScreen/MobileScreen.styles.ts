import { StyleSheet} from 'react-native';
import color from '../../../styles/color';
import colors from '../../../styles/color';


const styles= StyleSheet.create({
    container: {
        flex: 1,
      },
      innerContainer:{
        flexDirection: 'row',
        justifyContent:'space-between',
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
    infoStyle:{
        width: 18,
        height: 18, 
        marginLeft:'20%',
        marginTop:'65%'
    },
    keyboardAwareContentContainer: {
        flex: 1,
      },     
      textContainerStyle:{
          backgroundColor:'transparent',
      borderBottomColor:colors.font.lightText,
      borderBottomWidth:1,
     

      },
      mobileStyle:{
          marginTop:50,
          margin:30
      },
      text:{
        fontSize: 14,
        color: colors.font.lightText,
        fontWeight:'600'
      },
      buttonStyle:{
        backgroundColor:'#01394a',
        borderRadius:50,
        width:300,
        height:60,
        alignSelf:'center',
        margin:30,
       },
              btnContainer:{
                marginTop:330
              },
              btmBtn:{
                borderRadius:50,
                width:300,
                height:60,
                alignSelf:'center',
                margin:30,
                borderColor:color.veryLightPink,
                borderWidth:1,
                backgroundColor:'white'
                
              },
              btnText:{
                color: colors.font.lightText,
              },
              headerTxt:{
                color: colors.font.lightText,
                marginLeft:25

              }
    

}
)
export default styles;