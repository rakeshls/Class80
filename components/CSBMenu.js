import React,{Component} from 'react'
import {StyleSheet,View ,Text } from 'react-native'
import {DrawerItems} from 'react-native-drawer'
import firebase from 'firebase'
export default class CSBMenu extends Component{
    render(){
        return(
       <View style={{flex:1}}>
           <View style={styles.drawerContaner}>
               <DrawerItems>
                   {...this.props}
               </DrawerItems>
           </View>
        <Text>Welcome to CSBMenu </Text>

       </View>
        )
    }
}
const styles = StyleSheet.create({
drawerContaner:{
    flex:0.8
}
})