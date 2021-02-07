import { StyleSheet} from 'react-native';
import color from '../../../styles/color';


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
        color: color.font.lightText,
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
        backgroundColor:'#e6c405',
            borderRadius:50,
            width:200,
            height:60,
            alignSelf:'flex-end',
          marginLeft:30
    },
      btnContainer:{
        flexDirection:'row',
        marginTop:20,
        marginLeft:30
      },
      btnStyle:{
        backgroundColor:'#e85f5f',
        marginTop:50,
        borderRadius:8,
        width:200,
        height:50,
        alignSelf:'center',
        margin:30,
              },
              cancelBtn:{
                color: color.font.lightText,
                fontSize: 20,
                marginTop:15
            
            },
              pwdText:{
color:'#e6c405',marginLeft:10,
marginTop:-8
              },
              centeredView: {
                flex:1,
                justifyContent: "center",
                alignItems: "center",
              },
              modalView: {
                backgroundColor: "white",
                borderRadius: 20,
              padding:30,
              margin:20
              },
              openButton: {
                backgroundColor: "#F194FF",
                borderRadius: 20,
                padding: 10,
                elevation: 2
              },
              modalText: {
                marginBottom: 15,
                fontSize:22,
                color:'#01394a',
                fontWeight:'500'
              
              },modalContainer:{
                flex:3
              },
              modalInnerText:{
                marginBottom: 15,
                fontSize:16,
                marginTop:15,
                color:color.brownishGrey
              }

}
)
export default styles;