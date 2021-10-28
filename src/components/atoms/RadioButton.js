import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default RadioButton = ({isChecked, label, onPress}) => {
    return (
        <TouchableOpacity 
          style={[styles.container, isChecked && styles.active]} 
          onPress={onPress}>
            <View style={[styles.radioButtonIcon, isChecked && styles.active]}>
                {isChecked ? <View style={styles.radioButtonIconInnerIcon} /> : null}
            </View>
            <View style={styles.radioButtonTextContainer}>
                <Text style={styles.radioButtonText}>{label}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
   container: {
    height: 50,
    marginTop: 5,
    marginBottom: 5,
    justifyContent: "center",
    paddingLeft: 10,
    paddingRight: 10,
    borderWidth: 0.5,
    borderColor: "gray",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  radioButtonIcon: {
    backgroundColor: "white",
    borderWidth: 3,
    borderColor: "gray",
    height: 20,
    width: 20,
    borderRadius: 30 / 2,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  radioButtonIconInnerIcon: {
    height: 15,
    width: 15,
    backgroundColor: "darkgreen",
    borderRadius: 25 / 2,
    borderWidth: 3,
    borderColor: "white",
  },
  active: {
    borderColor: "green",
  },
  radioButtonTextContainer: {
    flex: 5,
    height: 50,
    justifyContent: "center",
    paddingLeft: 10,
  },
  radioButtonText: {
    fontSize: 18,
  },
});