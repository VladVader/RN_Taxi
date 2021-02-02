import React from 'react'
import { View, Text, StyleSheet, Dimensions , Image, Button } from 'react-native'
import { useNavigation } from '../utils'


interface NavigationParams {
  text: string;
}

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationParams>();
   const {
     state: { params },
   } = navigation;
   return (
     <View>
       <Text>Param: {params ? params.text : ''}</Text>
       <Button
         title="Button"
         onPress={() => {
           navigation.navigate("Landing");
         }}
       />
     </View>
   );
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'green'
    },
    navigation: {
        flex: 2,
        backgroundColor: 'red'
    },
    body: {
        flex: 9,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'yellow'
    },
    footer: {
        flex: 1,
        backgroundColor: 'cyan'
    }

})
