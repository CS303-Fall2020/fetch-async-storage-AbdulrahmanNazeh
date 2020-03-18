import React ,{ useState }from 'react'
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard , Dimensions,TextInput,Button } from 'react-native';

export default function Details({ navigation }) {
    const [text,setText] = useState('')

    const changeHandle = ( text )=>{
        setText(text)
    }

    const h = navigation.getParam('PressUpdateHandler');
    
    return (
        <View>
           
                <View>
                <TextInput style={styles.input} value={text == '' ?navigation.getParam('item').title:text }
                onChangeText={(text)=>changeHandle(text)}
                />
                <Button  title='update' color='coral' 
                onPress={()=>{h(navigation.getParam('item').id,text);setText('')}}
                    />
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
  input: {
      marginBottom: 10,
      paddingHorizontal: 8,
      paddingVertical: 6,
      borderBottomWidth: 1,
      borderBottomColor: '#ddd'
  
  }
  
  
  });