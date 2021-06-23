import React from "react";
import { View,Text,SafeAreaView } from "react-native";
import Carousel from 'react-native-snap-carousel';
import Graph from "./graph";

export default class Graphs extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          activeIndex:0,
          carouselItems: [
          {
              title:"Temperature",
              text: "Text 1",
              graphdata:[10,20,30,10,50,60,70],
              color:'#52eb34',
              grad:'#ffa726'

          },
          {
              title:"PH",
              text: "Text 2",
              graphdata:[1,4,7,8,12,14,3],
              color:'#deeb34',
              grad:'#ffa726'
          },
          {
              title:"Himudite",
              text: "Text 3",
              graphdata:[10,20,30,10,50,60,70],
              color:'#34deeb',
              grad:'#34deeb'
          },
        ]
      }
    }

    _renderItem({item,index}){
        return (
          <View>
            <Graph data={item.graphdata} title={item.title} color={item.color} grad={item.grad}></Graph>
          </View>
        )
    }

    render() {
        return (
          <SafeAreaView style={{flex: 1, paddingTop: 50, }}>
            <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', }}>
                <Carousel
                  layout={"default"}
                  ref={ref => this.carousel = ref}
                  data={this.state.carouselItems}
                  sliderWidth={300}
                  itemWidth={300}
                  renderItem={this._renderItem}
                  onSnapToItem = { index => this.setState({activeIndex:index}) } />
            </View>
          </SafeAreaView>
        );
    }
}
// import React, { useState,useEffect, useCallback, useRef } from 'react';
// import { Text, View, SafeAreaView } from 'react-native';
// import Graph from './graph';
// import Carousel from 'react-native-snap-carousel';
// import axios from 'axios';


// const Graphs = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [temperature,setTemperature]=useState([]);
//   const [ph,setPh]=useState([]);
//   const [humidite,setHumidite]=useState([]);
  
//   const ref = useRef(null);
//   useEffect(() => {
//     const authenticate = async()  => 
//     {
//       axios.post("http://192.168.1.4:80/new/graphe.php")
//         .then((response) => {
      
//             const tmp=response.data.temperature;
//             const ph=response.data.ph;
//             const  hum=response.data.humidite;
//             setTemperature(tmp);
//             setPh(ph);
//             setHumidite(hum);
//         })
//         .catch((err) => 
//         {
//           alert(err);
//         });
//     };
// authenticate();
// });

//   const renderItem = useCallback(({ item, index }) => (
//     <View>
//     <Graph data={item.graphdata} title={item.title} color={item.color} grad={item.grad}></Graph>
//   </View>
//   ), []);

//   return (
//     <SafeAreaView style={{ flex: 1, paddingTop: 50 }}>
//       <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
//         <Carousel
//           layout="default"
//           ref={ref}
//           data={[
//             {
//                 title:"Temperature",
//                 text: "Text 1",
//                 graphdata:temperature.length<7 ? [0,0,0,0,0,0,0] :temperature,
//                 color:'#52eb34',
//                 grad:'#ffa726'
          
//             },
//             {
//                 title:"PH",
//                 text: "Text 2",
//                 graphdata:ph.length<7 ? [0,0,0,0,0,0,0] :ph,
//                 color:'#deeb34',
//                 grad:'#ffa726'
//             },
//             {
//                 title:"Himudite",
//                 text: "Text 3",
//                 graphdata:humidite.length<7 ? [0,0,0,0,0,0,0] :humidite,
//                 color:'#34deeb',
//                 grad:'#34deeb'
//             },
//           ]}
//           sliderWidth={300}
//           itemWidth={300}
//           renderItem={renderItem}
//           onSnapToItem={(index) => setActiveIndex(index)}
//         />
//       </View>
//     </SafeAreaView>
//   );
// };

// export default Graphs;