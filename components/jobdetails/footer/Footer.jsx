import { View, Text, TouchableOpacity, Image, Linking } from "react-native";
import React from 'react';

import styles from "./footer.style";
import { icons } from "../../../constants";
import { Icon } from '@rneui/themed';


const Footer = ({ url }) => {

  let [isPress, setIsPress] = React.useState(false);

  var touchProps = {
    style : styles.likeBtn,
    onHideUnderPlay: () => setIsPress(false),
    onShowUnderPlay: () => setIsPress(true),
    onPress: () => {console.log(isPress),setIsPress(!isPress)} ,
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity {...touchProps}> 
      <View> 
      {isPress ? 
      <Icon
      raised
      name='heart-o'
      type='font-awesome'
      onPress={() => setIsPress(!isPress)} />  : 
      <Icon
        raised
        name='heart'
        type='font-awesome'
        color='rgb(254, 118, 84)'
        onPress={() => setIsPress(!isPress)}/>}
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.applyBtn}
        onPress={() => Linking.openURL(url)}
      >
        <Text style={styles.applyBtnText}>Apply for job</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;