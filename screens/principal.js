import React,{useState,useEffect, PureComponent} from "react";
import { Alert,View,StyleSheet,Text,ImageBackground,Image,TouchableOpacity} from "react-native";
import axios from 'axios'
import FormButton from '../components/FormButton';

export default function Principal({navigation}){
  const [ph,setph]=useState("")
  const [temperature,settemperature]=useState("")
  const [humidite,sethumidite]=useState("")
  const [vent,setvent]=useState("")
  const [action,setaction]=useState("OFF")
  const [phmoy,setPhmoy]=useState(0);
  const[tempmoy,setTempmoy]=useState(0);
  const[hummoy,setHummoy]=useState(0);


  const [isSubmit2,setisSubmit2]=useState(false);
  const [isSubmit,setisSubmit]=useState(false);
  const[pompe,setpompe]=useState(false);

  ///////////////////////////////////////////////////
  useEffect(() => 
  {
      const insert = async()  => 
      {
        axios.post("http://192.168.1.4:80/new/insertGraph.php",JSON.stringify
        ({
          temp:tempmoy/4,
          ph:phmoy/4,
          hum:hummoy/4
        }))
          .then(()=>{setisSubmit2(false);})
          .catch((err) => { alert(err); });
      };
      setInterval(insert,10000);
  },[isSubmit2]);

  const update=()=>{
    setPhmoy(phmoy+ph);
    setTempmoy(tempmoy+temperature);
    setHummoy(hummoy+humidite);
   }
   
  //  const insertToDb=()=>{
  //    setisSubmit2(true);
  //  }

   setInterval(update,10000);
   
///////////////////////////////////////////////////////////
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
//////////////////////////////////////////////////////////////
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

                if(response.data.humidite<=50){Alert.alert("Attention","humidite est faible"),[{text:"activer la pompe"},{text:"annuler"}]}
                
                setisSubmit(false);
            })
            .catch((err) => { alert(err); });
        };
        setInterval(authenticate, 3000);
    }
    ,[isSubmit]);

    // const fresh=()=>{
    //   setisSubmit(true)
    // }
    
  

  return(
    <ImageBackground source={ require('../assets/images/theme4.jpg')} style={styles.image1}>

    <View style={styles.con}>
      <View style={styles.fils}>
          <View style={styles.temp} >
                <Image style={{width:50,height:50}} source={require('../assets/temp.png')}/>
                <Text style={styles.text}>{temperature} °C</Text>
                <Text style={{marginTop:5}}>Temperature</Text>
          </View>
          <View style={styles.temp} >
               <Image style={{width:50,height:50}} source={require('../assets/humidity.png')}/>
               <Text style={styles.text}>{humidite} %</Text>
               <Text>Humidite</Text>
             </View>
      </View>
      <View style={styles.fils}>
        <View style={styles.temp} >
               <Image style={{width:30,height:30,marginRight:10}} source={require('../assets/wind.png')}/>
               <Text style={styles.text}>{vent} km/h</Text>
               <Text style={{marginTop:10}}>Vitesse du vent</Text>
             </View>
    
             <View style={styles.temp} >
              <Image style={{width:50,height:50,marginRight:10}} source={require('../assets/water-pump.png')}/>
               <Text style={styles.text}>{action}</Text>
               <Text>Pompe</Text>
             </View>
      </View>
      <View style={styles.fils}>
         <View style={styles.temp} >
              <Image style={{width:50,height:50,marginRight:14}} source={require('../assets/ph-meter.png')}/>
               <Text style={styles.text}>{ph}</Text>
               <Text style={{marginTop:10}}>Acidite</Text>
          </View>
          <FormButton
          buttonTitle="Pompe"
          onPress={activer_pompe}
        />
      </View>
    </View>
    </ImageBackground>

    )
  }

const styles=StyleSheet.create({
  image1: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
    
  },
  con:{
    flex:1,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
  },
  fils:{
    justifyContent:"center",
    flex:1,
    alignItems:'center',
    flexDirection:'row'
  }, 
  text:{
    fontSize:20,
    fontWeight:'bold',
    marginRight:10
  },
  temp:{
    width:120,
    height:100,
    borderRadius:10,
    borderColor:'#ff953e',
    borderWidth:3,
    margin:20,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    flexWrap:'wrap',
    paddingTop:10
  },

})
// import React,{useState,useEffect} from "react";
// import { View,StyleSheet,Text,Image} from "react-native";
// import axios from 'axios'
// import FormButton from '../components/FormButton';

// export default function Principal(){
//   const [ph,setph]=useState(0)
//   const [temperature,settemperature]=useState(0)
//   const [humidite,sethumidite]=useState(0)
//   const [vent,setvent]=useState(0)
//   const [phmoy,setPhmoy]=useState(0);
//   const[tempmoy,setTempmoy]=useState(0);
//   const[hummoy,setHummoy]=useState(0);
//   const [action,setaction]=useState("OFF")


//   const [isSubmit,setisSubmit]=useState(true);
//   const [isSubmit2,setisSubmit2]=useState(false);
//   const[pompe,setpompe]=useState(false);
// ////////////Pompe//////////////
//   useEffect(()=>
//   {
//     const activer=async() =>
//     {
      
//       axios.post("http://192.168.1.4:80/new/pompe.php")
//       .then((response)=>
//       {
//         setaction(response.data.action);
//         setpompe(false)
//       })
//       .catch((err)=>{alert(err);});
//     };
//     if(pompe) activer();
//   },[pompe]);

//   const activer_pompe=()=>{setpompe(true);}
// /////////////////parameter/////////////////////////
//     useEffect(() => 
//     {
//         const authenticate = async()  => 
//         {
//           axios.post("http://192.168.1.4:80/new/principale.php")
            
//             .then((response) => 
//             {
//                 setph(response.data.ph)
//                 settemperature(response.data.temperature)
//                 sethumidite(response.data.humidite)
//                 setvent(response.data.vent)
                
//                 setisSubmit(false);
//             })
//             .catch((err) => { alert(err); });
//         };
//         if (isSubmit) {
//           authenticate();
//         }
//     },[isSubmit]);
// /////////////////////////Insert Graph////////////////////////////////
//     useEffect(() => 
//     {
//         const insert = async()  => 
//         {
//           axios.post("http://192.168.1.4:80/new/insertGraph.php",JSON.stringify
//           ({
//             temp:tempmoy/4,
//             ph:phmoy/4,
//             hum:hummoy/4
//           }))
//             .then(()=>{setisSubmit2(false);})
//             .catch((err) => { alert(err); });
//         };
//         if(isSubmit2){
//           insert();
//         }
//     },[isSubmit2]);
//     ///////////////////////////
//     const fresh=()=>{
//       setisSubmit(true);
//     }
//     const update=()=>{
//      setPhmoy(phmoy+ph);
//      setTempmoy(tempmoy+temperature);
//      setHummoy(hummoy+humidite);
//     }
//     const insertToDb=()=>{
//       setisSubmit2(true);
//     }
//     setInterval(fresh, 3000);
//     setTimeout(update,3600000*4);
//     setInterval(insertToDb,3600000*24);
  
//   return(
    
//     <View>
//     <View style={{flex:1,flexDirection:'row',flexWrap:'wrap',paddingTop:30,alignItems:'center',justifyContent:'center'}}>
//       <View style={styles.temp} >
//         <Image style={{width:50,height:50}} source={require('../assets/temp.png')}/>
//         <Text style={{fontWeight:'bold',marginRight:10}}>{temperature} °C</Text>
//         <Text style={{marginTop:5}}>Temperature</Text>
//       </View>
//       <View style={styles.hum1} >
//         <Image style={{width:50,height:50}} source={require('../assets/humidity.png')}/>
//         <Text style={{fontWeight:'bold',marginRight:10}}>{humidite} %</Text>
//         <Text>Humidite</Text>
//       </View>
//       <View style={styles.ph} >
//         <Image style={{width:50,height:50,marginRight:14}} source={require('../assets/ph-meter.png')}/>
//         <Text style={{fontWeight:'bold',marginRight:10}}>{ph}</Text>
//         <Text style={{marginTop:10}}>Acidite</Text>
//       </View>
//       <View style={styles.pomp} >
//         <Image style={{width:50,height:50,marginRight:10}} source={require('../assets/water-pump.png')}/>
//         <Text style={{fontWeight:'bold',marginRight:10}}>OFF</Text>
//         <Text>Pompe</Text>
//       </View>
//       <View style={styles.wind} >
//         <Image style={{width:30,height:30,marginRight:10}} source={require('../assets/wind.png')}/>
//         <Text style={{fontWeight:'bold',marginRight:10,}}>{vent} km/h</Text>
//         <Text style={{marginTop:10}}>Vitesse du vent</Text>
//       </View>
//     </View>
//     <View>
//       <View style={styles.button}>
//         <FormButton
//           buttonTitle="Pompe"
//           onPress={activer_pompe}
//         />
//       </View>
//       </View>
//     </View>


//   )
// }

// const styles=StyleSheet.create({
//   button:{
//     backgroundColor:'#34eb43',
//     height:50,
//     width:200,
//     alignItems:'center',
//     justifyContent:'center',
//     position:"absolute",
//     top:450,
//     left:80
//   },
//   text:{
//     fontWeight:'bold',
//     marginRight:10
//   },
//   container:{
//     flex:1,
//     flexDirection:'row',
//     flexWrap:'wrap',
//     paddingTop:30,
//     alignItems:'center',
//     justifyContent:'center'
//   },
//   image:{
//     width:50,
//     height:50
//   },
//   temp:{
//     width:120,
//     height:100,
//     borderRadius:10,
//     borderColor:'red',
//     borderWidth:3,
//     margin:20,
//     // flex:1,
//     flexDirection:'row',
//     justifyContent:'center',
//     alignItems:'center',
//     flexWrap:'wrap',
//     paddingTop:10
//   },
//   hum1:{
//     width:120,
//     height:100,
//     borderRadius:10,
//     borderColor:'#34ebe8',
//     borderWidth:3,
//     margin:20,
//     // flex:1,
//     flexDirection:'row',
//     justifyContent:'center',
//     alignItems:'center',
//     flexWrap:'wrap',
//     paddingTop:10
//   },
//   hum2:{
//     width:120,
//     height:100,
//     borderRadius:10,
//     borderColor:'gold',
//     borderWidth:3,
//     margin:20,
//     // flex:1,
//     flexDirection:'row',
//     justifyContent:'center',
//     alignItems:'center',
//     flexWrap:'wrap',
//     paddingTop:10
//   },
//   ph:{
//     width:120,
//     height:100,
//     borderRadius:10,
//     borderColor:'orange',
//     borderWidth:3,
//     margin:20,
//     // flex:1,
//     flexDirection:'row',
//     justifyContent:'center',
//     alignItems:'center',
//     flexWrap:'wrap',
//     paddingTop:10
//   },
//   pomp:{
//     width:120,
//     height:100,
//     borderRadius:10,
//     borderColor:'#34a8eb',
//     borderWidth:3,
//     margin:20,
//     // flex:1,
//     flexDirection:'row',
//     justifyContent:'center',
//     alignItems:'center',
//     flexWrap:'wrap',
//     paddingTop:10
//   },
//   wind:{
//     width:120,
//     height:100,
//     borderRadius:10,
//     borderColor:'#34eb43',
//     borderWidth:3,
//     margin:20,
//     // flex:1,
//     flexDirection:'row',
//     justifyContent:'center',
//     alignItems:'center',
//     flexWrap:'wrap',
//     paddingTop:10
//   }
// })


