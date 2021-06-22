import React,{useState,useEffect, PureComponent} from "react";
import { View,StyleSheet,Text,ImageBackground,Image,TouchableOpacity} from "react-native";
import axios from 'axios'
import FormButton from '../components/FormButton';

export default function Principal({navigation}){
  const [ph,setph]=useState("")
  const [temperature,settemperature]=useState("")
  const [humidite,sethumidite]=useState("")
  const [vent,setvent]=useState("")
  const [action,setaction]=useState("OFF")

  const [isSubmit,setisSubmit]=useState(false);
  const[pompe,setpompe]=useState(false);
/////////////////////////////////////
  useEffect(()=>
  {
    const activer=async() =>
    {
      
      axios.post("http://192.168.1.4:80/new/pompe.php")
      .then((response)=>
      {
        setaction(response.data.action);
        setpompe(false)
      })
      .catch((err)=>{alert(err);});
    };
    if(pompe) activer();
  },[pompe]);

  const activer_pompe=()=>{setpompe(true);}
///////////////////////////////////////////////////
    useEffect(() => 
    {
        const authenticate = async()  => 
        {
          axios.post("http://192.168.1.4:80/new/get_params.php")
            
            .then((response) => 
            {
                setph(response.data.ph)
                settemperature(response.data.temperature)
                sethumidite(response.data.humidite)
                setvent(response.data.vent)
                
                setisSubmit(false);
            })
            .catch((err) => { alert(err); });
        };
        if (isSubmit) authenticate();
    },[isSubmit]);

    const fresh=()=>{
      setisSubmit(true)
    }
    setInterval(fresh, 3000);
  return(
    
     <View style={{marginTop:30}}>
        <View style={{flex:1,flexDirection:'row',flexWrap:'wrap',paddingTop:30,alignItems:'center',justifyContent:'center'}}>
          <View style={styles.temp} >
            <Image style={{width:50,height:50}} source={require('../assets/temp.png')}/>
            <Text style={{fontWeight:'bold',marginRight:10}}>{temperature} °C</Text>
            <Text style={{marginTop:5}}>Temperature</Text>
          </View>
          <View style={styles.hum1} >
            <Image style={{width:50,height:50}} source={require('../assets/humidity.png')}/>
            <Text style={{fontWeight:'bold',marginRight:10}}>{humidite} %</Text>
            <Text>Humidite</Text>
          </View>
          <View style={styles.ph} >
            <Image style={{width:50,height:50,marginRight:14}} source={require('../assets/ph-meter.png')}/>
            <Text style={{fontWeight:'bold',marginRight:10}}>{ph}</Text>
            <Text style={{marginTop:10}}>Acidite</Text>
          </View>
          <View style={styles.pomp} >
            <Image style={{width:50,height:50,marginRight:10}} source={require('../assets/water-pump.png')}/>
            <Text style={{fontWeight:'bold',marginRight:10}}>{action}</Text>
            <Text>Pompe</Text>
          </View>
          <View style={styles.wind} >
            <Image style={{width:30,height:30,marginRight:10}} source={require('../assets/wind.png')}/>
            <Text style={{fontWeight:'bold',marginRight:10,}}>{vent} km/h</Text>
            <Text style={{marginTop:10}}>Vitesse du vent</Text>
          </View>
        </View>
      <View>
              <View style={styles.button}>
                <FormButton
                  buttonTitle="Pompe"
                  onPress={activer_pompe}
                />
              </View>
      </View>
      </View>
   
    )
  }

const styles=StyleSheet.create({

  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
    
  },

  button:{
 
    width:300,
    alignItems:'center',
    justifyContent:'center',
     top:450,
    left:40
  },
  text:{
    fontWeight:'bold',
    marginRight:10
  },
  container:{
    flex:1,
    flexDirection:'row',
    flexWrap:'wrap',
    paddingTop:30,
    alignItems:'center',
    justifyContent:'center'
  },
  image:{
    width:50,
    height:50
  },
  temp:{
    width:120,
    height:100,
    borderRadius:10,
    borderColor:'red',
    borderWidth:3,
    margin:20,
    // flex:1,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    flexWrap:'wrap',
    paddingTop:10
  },
  hum1:{
    width:120,
    height:100,
    borderRadius:10,
    borderColor:'#34ebe8',
    borderWidth:3,
    margin:20,
    // flex:1,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    flexWrap:'wrap',
    paddingTop:10
  },
  hum2:{
    width:120,
    height:100,
    borderRadius:10,
    borderColor:'gold',
    borderWidth:3,
    margin:20,
    // flex:1,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    flexWrap:'wrap',
    paddingTop:10
  },
  ph:{
    width:120,
    height:100,
    borderRadius:10,
    borderColor:'orange',
    borderWidth:3,
    margin:20,
    // flex:1,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    flexWrap:'wrap',
    paddingTop:10
  },
  pomp:{
    width:120,
    height:100,
    borderRadius:10,
    borderColor:'#34a8eb',
    borderWidth:3,
    margin:20,
    // flex:1,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    flexWrap:'wrap',
    paddingTop:10
  },
  wind:{
    width:120,
    height:100,
    borderRadius:10,
    borderColor:'#34eb43',
    borderWidth:3,
    margin:20,
    // flex:1,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    flexWrap:'wrap',
    paddingTop:10
  }
})


