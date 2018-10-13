/** @format */
import React from 'react';
import { Text, View, AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import Header from './src/components/header';

const App = () => (
    <View style={{ flex: 1 }}>
        <Header title="I care because you do" />
        <Text>Hello</Text>
    </View>
);


AppRegistry.registerComponent(appName, () => App);
