import { View, Text, TouchableOpacity, Image, Linking } from "react-native";
import React from 'react';

import styles from "./footer.style";
import { icons } from "../../../constants";

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
        <Image
          source={icons.heartOutline}
          resizeMode='contain'
          style={isPress ? styles.likedImage : styles.likeBtnImage}
        />
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