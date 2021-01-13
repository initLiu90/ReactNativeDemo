import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TodoScreen from './screens/TodoScreen';
import DynamicScreen from './screens/DynamicScreen';
import HomeScreen from './screens/HomeScreen';
import AsyncScreen from './screens/AsyncScreen';
import SagaScreen from './screens/SagaScreen';

const Stack = createStackNavigator();

export function RootStack() {
    return (
        <Stack.Navigator initialRouteName={HOME}>
            <Stack.Screen name={HOME} component={HomeScreen}/>
            <Stack.Screen name={TODO} component={TodoScreen}/>
            <Stack.Screen name={DYNAMIC} component={DynamicScreen}/>
            <Stack.Screen name={SAGA} component={SagaScreen}/>
            <Stack.Screen name={ASYNC} component={AsyncScreen}/>
        </Stack.Navigator>
    );
}

export const HOME = 'Home';
export const TODO = 'Todo';
export const DYNAMIC = 'Dynamic';
export const ASYNC = 'Async';
export const SAGA = 'Saga';
