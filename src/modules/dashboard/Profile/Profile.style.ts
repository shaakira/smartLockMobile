import { StyleSheet} from 'react-native';
import color from '../../../styles/color';
import colors from '../../../styles/color';


const styles= StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#01394a'
  },
  innerContainer:{
    flexDirection: 'row',
    justifyContent:'space-between'
  },
      bottomContainer:{
        flex:5,
        backgroundColor:'white',
        borderTopRightRadius:20,
        borderTopLeftRadius:20,
        marginTop:20
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
        color:'white',
        fontWeight:'500',
        marginLeft:'5%',
        justifyContent:'center',
    } ,
    
    imageStyle:{
      width: 20,
      height: 20, 
      marginLeft:'20%',
      marginTop:'65%',
      tintColor:'white'
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
      header:{
        fontSize: 20,
        color: colors.font.darkText,
        fontWeight:'600',
        textAlign:'center'
      },
      markStyle:{
        height:40,
        width:40,
        alignSelf:'center',
        marginTop:60
      },
      contentText:{
        fontSize: 16,
        
        marginTop:10,
        textAlign: 'auto'
      },
      questStyle:{
        height:30,
        width:30,
        margin:20,
        alignSelf:'flex-end'
      },
      buttonStyle:{
        backgroundColor:'#01394a',
        borderRadius:50,
        width:300,
        height:60,
        alignSelf:'center',
     
        marginTop:60
       },
      btnContainer:{
        marginTop:80
      },
  
              pwdText:{
color:'#e6c405',marginLeft:10,
marginTop:-8
              },
              btmBtn:{
                borderRadius:50,
                width:300,
                height:60,
                alignSelf:'center',
                borderColor:'#bd0606',
                borderWidth:1,
                backgroundColor:'white'
                
              },
              btnText:{
                color: '#bd0606',
              },
              editStyle:{
                width: 22,
                height: 22, 
               marginRight:'5%',
               marginTop:65,
               tintColor:'white'
            
              },
            
}
)
export default styles;