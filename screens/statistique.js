import React from "react";
import { View} from "react-native";
import Graphs from './graphs'

export default class Statistique extends React.Component{


render() {
    return (
        <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', }}>
          <Graphs/>
        </View>
    );
}
}
    

