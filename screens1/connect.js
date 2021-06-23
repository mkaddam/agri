import React,{ useState,useEffect} from 'react';
import {Keyboard,Text,ImageBackground, TouchableWithoutFeedback, StyleSheet, View ,Image,Button} from "react-native"
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import axios from 'axios'
import AsyncStorage  from '@react-native-async-storage/async-storage'

export default function Connect({navigation}){

    const [email, setemail]=useState("");
    const [password, setPassword] = useState("");
    
    const [textinputvalue,settextinputvalue]=useState("");

    const [isSubmit,setisSubmit]=useState(false);
    useEffect(() => 
    {
        const authenticate = async()  => 
        {
          axios.post("http://192.168.1.4:80/new/authentifier.php",JSON.stringify
                ({
                  email:email,
                  password:password,
                })
            )
            .then((response) => 
            {
                if(response.data.result=="yes")
                {
                    
                        AsyncStorage.setItem('any_key',email);
                    
                        navigation.push('Compte');                         
                }
                else{alert("information invalide")}
                setisSubmit(false);
            })
            .catch((err) => { alert(err); });
        };
        if (isSubmit) authenticate();
    },[isSubmit]);
    
    const check=()=>
    {
        if(email.length==0 || password.length==0)
        {
            alert("remplir les champs");
        }
        else
        {
            setisSubmit(true)
        }
    }

    const pressHandler = () =>
    {
        navigation.push('Inscription');
    }
    return(
        <ImageBackground source={ require('../assets/images/theme1.jpg')} style={styles.image}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                <Image source={require('../assets/images/connect_img.png')} style={styles.img}/>
                <View style={styles.inputsview}> 
                    <FormInput
                        labelValue={email}

                        // value={textinputvalue}

                        onChangeText={(userEmail) => setemail(userEmail)}
                        placeholderText="Nom d utilisateur"
                        iconType="user"
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                    <FormInput
                        labelValue={password}
                        onChangeText={(userPassword) => setPassword(userPassword)}
                        placeholderText="Password"
                        iconType="lock"
                        secureTextEntry={true}
                    />
                    <FormButton
                        buttonTitle="Sign In"
                        onPress={check}
                    />
            <Text style={{color:'green'}}> _______________________________________ </Text>
                    <Button title="creer un nouveau compte" style={styles.btn} onPress={pressHandler}/>
                </View>  
            </View>
        </TouchableWithoutFeedback>
        </ImageBackground>
    )
}

const styles=StyleSheet.create({
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
        
      },
    container:{
        flex:1,
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'center',
        marginTop:100,
    },
    btn:{
        marginTop:100,
    },
    inputsview:{
        marginTop:100,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        
    },
    img:{
        height:"20%",
        width:"90%"
    },
    input:{
        width:300,
        padding:10,
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        fontSize: 18,
        borderRadius: 6,
        marginTop:10
    },
    navButton: {
        marginTop: 15,
      },
      forgotButton: {
        marginVertical: 35,
      },
})