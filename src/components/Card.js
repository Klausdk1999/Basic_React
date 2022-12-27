import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Card() {
    return ( 
    <View style={styles.card}>
        <Text style={styles.cardTitle}>React Native</Text>
        <Text style={styles.cardSubitle}>Criando aplicações para Android e IOS</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    card:{
      backgroundColor:'white',
      padding:12,
      borderRadius:4,
      marginVertical:6
    },
    cardTitle:{
      fontSize:18,
      fontWeight: 'bold'
    },
    cardSubtitle:{
      color:'#999',
      fontSize:14
    }
  });