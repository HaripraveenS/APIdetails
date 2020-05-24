import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListItem from './listItem'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  FlatList,
} from 'react-native';
import { connect } from 'react-redux'
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
// const DATA = [
//     {
//       id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//       title: 'First Item',
//     },
//     {
//       id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//       title: 'Second Item',
//     },
//     {
//       id: '58694a0f-3da1-471f-bd96-145571e29d72',
//       title: 'Third Item',
//     },
//   ];
var DAT = [];
function findData(){
fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(json => {
dat = json;
DAT = Object.values(dat)
console.log(json);
// for(let i = 0; i< 10 ;i++){
//     titlhges.push(Object.values(data)[i].title)
// }
})
return DAT
}
// console.log(DATA);

function Item(props){
    var data;
    return (
        <Button title={props.title}
        onPress={() =>{ 
            fetch('https://jsonplaceholder.typicode.com/posts/' + props.ide)
            .then(response => response.json())
            .then(json => {console.log(json.body)
            props.navigator.navigate('Details' , {detail: json.body})})
        .catch((error) => {
            console.log(error)
        });
        // console.log(data);
                
            }
        }

        // <Text>{title} skdhf</Text>
        />
    );
}
class HomeScreen extends Component {
    constructor(){
        super();
        this.state = {
            isloading: true,
            datasource:null
        }
    }
    componentDidMount () {
        return   fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => {
            this.setState({
                isloading:false,
                datasource: json,
                detail : null
            })
            console.log(this.state.datasource[1])
        })
        .catch((error) => {
            console.log(error)
        });
        // console.log(this.state.newdata);
    }
    

        // const titles = data.title;
        // const List = titles.map((title)=>
        // <li>{title.toString()}</li>
    render() {
        if( this.state.isloading){
            return (
                <Text>isloading</Text>
            )
        }
    else {
        var slsldj = this.state.datasource.map((val,key) => {
            return <View key={key} >
                <Text>{val.title}</Text>
            </View>
        });
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* <Text>Home Screen</Text> */}
      
      <FlatList
        let data={this.state.datasource}
        renderItem={({ item }) => <Item title={item.title} navigator = {this.props.navigation} ide ={item.id}/>}
        keyExtractor={item => item.id}
      />
      {/* {slsldj} */}
      
        

    </View>
  );
    }
}
}
// function mapstatetoprop(count){
//     return{
//         counter : state.counter
//     }
// }
// export default connect(mapstatetoprop)(HomeScreen);
export default HomeScreen