import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {AppRegistry, Image } from 'react-native';

class GodDescriptor extends Component {
  render() {
    return (
        <Text>This is {this.props.name}!</Text>
    );
  }
}

export default class Jesus extends Component {
  render() {
      let jesus = {
        uri: 'https://i.pinimg.com/originals/11/93/02/1193023fc0cb1b483fc9e9de0485098b.jpg'
      };
      let buddha = {
        uri: 'https://thumbs.gfycat.com/ShadowyIdleGorilla-size_restricted.gif'
      }
      let muhd = {
        uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/fa/South_park_muhammad.jpg/220px-South_park_muhammad.jpg'
      }
      return (
            <View style={{alignItems: 'center'}}>
            <Image source={jesus} style={{width: 200, height:150}}/>
            <GodDescriptor name = 'Jesus' />
            <Image source={buddha} style={{width: 200, height:150}}/>
            <GodDescriptor name = 'Buddha' />
            <Image source={muhd} style={{width: 200, height:150}}/>
            <GodDescriptor name = 'Muhammad' />
            </View>
      );
  }
}