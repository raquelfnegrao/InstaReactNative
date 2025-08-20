import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

function Aprendendo({User}) {
  const [liked, setLikeState] = useState(false)
  const [share, setShareState] = useState(false)
  return (
    <View>
    <View style={{flexDirection: 'row', padding: 15, alignItems: 'center'}}>
      <Image 
        style={{
          marginRight: 15,
          width: 40,
          height: 40,
          borderRadius: 20,
        }}
        source={{
          uri: `https://github.com/${User}.png`
        }}
      />
      <Text >{User}</Text>
      </View>
      <View>
      <Image 
        style={{
          width: '100%',
          height: 350,
        }}
        source={{
          uri: `https://github.com/${User}.png`
        }}
      />
      </View>
      <View style={{flexDirection: 'row', padding: 15, alignItems: 'center'}}>
      <TouchableOpacity onPress={() => setLikeState(!liked)}>
        { liked && <MaterialCommunityIcons name="cards-heart" size={24} color="red" />}
        { !liked && <MaterialCommunityIcons name="cards-heart-outline" size={24} color="black" />}
      </TouchableOpacity>
      <MaterialCommunityIcons name="comment-outline" size={24} color="black" />
      <TouchableOpacity onPress={() => setShareState(!share)}>
        { share && <MaterialCommunityIcons name="share-all" size={24} color="black" />}
        { !share && <MaterialCommunityIcons name="share-all-outline" size={24} color="black" />}
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {[
        'raquelfnegrao',
        'TimOliver',
        'kittinunf',
        'tanin47',
      ].map((User) => <Aprendendo key={User} User={User}/>
      )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
