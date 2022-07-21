import React from "react";
import { Text, StyleSheet, View, Image, TextInput, TouchableOpacity, SafeAreaView, StatusBar } from "react-native";

export default function Cadastro({ navigation }){
    return(
        <View style={styles.main}>
            <StatusBar barStyle={'dark-content'}/> 
            <SafeAreaView>
          <View style={styles.Text}>
                <Text style={styles.lbl1}>Crie sua conta  <Image source={require('../img/User.png')} style={styles.img} /> </Text>
                <Text style={styles.lbb}>Olá, crie sua conta</Text>
          </View>
            <View style={styles.btns}>
            <TextInput style={styles.input}placeholder="Digite seu Nick"/> 
                <TextInput style={styles.input}placeholder="Digite seu E-mail"/>    
                <TextInput style={styles.inputo}placeholder="Digite sua Senha"/>
                <TouchableOpacity style={styles.btn}><Text style={styles.txtbtn} >Cadastrar</Text></TouchableOpacity>
            </View>
            <View style={styles.linhas}>
            <View style={styles.lin}></View>
            <Text style={styles.txtl}>Ou entre com</Text>
            <View style={styles.lin2}></View>
            </View>

            <View style={styles.google}>

            <Image source={require('../img/go.png')} style={styles.img2} />
                <Text style={styles.go1}>Google </Text>
            </View>

            <TouchableOpacity style={styles.btnult} onPress={() => navigation.navigate('Login')}>
                <Text  style={styles.crie} >
                    Já tem uma conta ? Voltar
                </Text>
            </TouchableOpacity>

        </SafeAreaView>
        </View>
    )

};

const styles = StyleSheet.create({
  main:{

     flexDirection:'column',
     width: '100%',
     height: '100%',

  }, 
  Text:{
      width:'70%',
      height:'auto',
      marginLeft:'12%',

      marginTop:'30%',
      marginLeft:'8%'
  },
  lbl1:{
      width: '100%',
      height: 'auto',
      fontSize: 30,
      lineHeight: 38,
      color: "#000000",
      alignItems:'center',
  },
  lbb:{
    marginVertical:10,
    color: '#636363'
      },
      img:{
          width: 35,
          height: 33,
      },
      btns:{
       
          justifyContent:'center',
          alignItems:'center',
          width:'90%',
          marginTop:'11%',
          marginLeft:'5%'
      },
      input:{
          width: '96%',
          height: 59,
          borderRadius: 12,
          backgroundColor: "#FFF",
          shadowColor: "rgba(0, 0, 0, 0.12)",
          shadowOffset: {
              width: 0,
              height: 2
          },
          shadowRadius: 2,
          shadowOpacity: 1,
          borderStyle: 'solid',
          borderWidth: 1,
          paddingLeft:25,
          paddingTop:18,
          paddingBottom:19,
          margin:'2.5%'        
  },
  inputo:{
          width: '96%',
          height: 59,
          borderRadius: 12,
          backgroundColor: "#FFF",
          shadowColor: "rgba(0, 0, 0, 0.12)",
          shadowOffset: {

              width: 0,
              height: 2
          },
          shadowRadius: 2,
          shadowOpacity: 1,
          borderStyle: 'solid',
          borderWidth: 1,
          paddingLeft:25,
          paddingTop:18,
          paddingBottom:19 
  },
  txt:{
    
      justifyContent:'center',
      width:'100%',
      marginTop:'3.5%',
      alignItems:'flex-end',
  },
  linhas:{

      flexDirection:'row',
      display:'flex',
     justifyContent:'space-between',
      alignItems:'center',
      margin:'5%',
      paddingLeft:'5.5%',
      paddingRight:'5.5%'


  },
  lbll:{
     alignItems:'center',
     width: 130,
      height: 18,
     
      fontSize: 14,
      fontWeight: "400",

      lineHeight: 14,
      color: "#4285F4"
  },
  btn:{
      width: '96%',
      height: 55,
      borderRadius: 12,
      backgroundColor: "#007DFA",
      margin:'auto',
      justifyContent:'center',
      alignItems:'center',
      display:'flex',
      marginTop:'4-.5%'
  },
  txtbtn:{
      textAlign:'center',
      fontSize: 18,
      fontWeight: "600",
   
      lineHeight: 18,
      color: "#FFFFFF",
      
      },

      lin:{
      width: 105,
      height: 0,
      borderStyle: 'solid',
      borderWidth: 0.6000000238418579,
      borderColor: "rgba(163, 151, 151, 1.0)",
      display:'block'

      },

      lin2:{

          width: 105,
          height: 0,
       
          borderWidth: 0.6000000238418579,
          borderColor: "rgba(163, 151, 151, 1.0)",
      },
      txtl:{
          width: 78,
          height: 15,
          fontSize: 12,
          fontWeight: '400',
         
          lineHeight: 12,
          color: '#757171'
      },
      google:{
        
          justifyContent:'center',
          alignItems:'center',
          marginTop:'8%',
          flexDirection:'row'
      },  
      img2:{
      marginRight:'1.5%',
      width: 22,
      height: 22,
      },

      go1:{
          fontSize: 14,
          fontWeight: "500",
        
          lineHeight: 14,
          color: "#000000",
      },
      crie:{
        color: '#636363'
      },
      btnult:{
          marginTop:'10%',
          display:'flex',
          justifyContent:'center',
          alignItems:'center',



      },



});