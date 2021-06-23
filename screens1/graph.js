import React from "react";
import { View,Text,SafeAreaView } from "react-native";
import {
    LineChart,
  } from 'react-native-chart-kit';



const Graph=({data,title,color,grad})=>{
    return(     
          <View>
            <Text>{title}</Text>
            <LineChart
              data={{
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat','Sun'],
                datasets: [{
                  data: data
                }]
              }}
              width={300} 
              height={320}
              chartConfig={{
                backgroundColor: '#e26a00',
                backgroundGradientFrom: color,
                backgroundGradientTo: grad,
                decimalPlaces: 2, 
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 16
                }
              }}
              bezier
              style={{
                marginVertical: 8,
                borderRadius: 16
              }}
            />
          </View>
    )

}



export default Graph;