import React from 'react';
import {StyleSheet, FlatList, View} from 'react-native';
import {List, ListItem} from 'react-native-elements';
import {randomUsers} from './util';
//import {FlatList} from 'react-native-gesture-handler';

export default class App extends React.Component {
  state = {
    refreshing:false,
    data:randomUsers(20), //util.js 의 randomUsers함수 Count값이 20으로 변경
  };
  onEndReached=()=>{
    this.setState(state=>({
      data:[
        ...state.data,
        ...randomUsers(),
      ]
    }));
  };
  onRefresh=()=>{
    this.setState({
      data:randomUsers(20),
    });
  }
  render() {
    //FlatList는 따로 꼭 공부필요.
    return (
      <List>
        <FlatList
          data={this.state.data}
          initialNumToRender={2}
          onEndReachedThreshold={1}
          onEndReached={this.onEndReached}
          refreshing={this.state.refreshing}
          onRefresh={this.onRefresh}
          horizontal={false}
          renderItem={({item})=>{
            return(
              <ListItem
                roundAvatar
                avatar={{uri:item.avatar}}
                title={item.name}
                subtitle={item.email}
                />
            );
          }}
          />
      </List>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });