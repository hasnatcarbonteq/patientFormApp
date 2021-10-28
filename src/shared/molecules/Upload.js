import React, { useState } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import IconButton from '../atoms/IconButton';
import {launchImageLibrary} from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default Upload = ({onChange, maxItems = 1, label, error, name=""}) => {
    const [files, setFiles] = useState(null);
    
    // const getData = async () => {
    //   try {
    //     const value = await AsyncStorage.getItem(name)
    //     if(value !== null) {
    //       setFiles(JSON.parse(value));
    //     }
    //   } catch(e) {
    //     // error reading value
    //   }
    // }

    const selectFile = async () => {
      // Opening Document Picker to select one file

      const options = {
        selectionLimit: 2,
      }
      
      launchImageLibrary(options, (response) => {

        if (response.didCancel) {
          alert('User cancelled image picker');
        } else if (response.errorCode) {
          alert('ImagePicker Error: ', response.errorMessage);
        } else if ( response?.assets.length <= maxItems ) {
          let images = []
          const source = response?.assets.map(img => {
            images.push({uri: img.uri}) 
            return images;
          });
          // You can also display the image using data:
          // const source = { uri: 'data:image/jpeg;base64,' + response.data };
          AsyncStorage.setItem(name, JSON.stringify(source));
          setFiles(source);
          onChange(source);
        } else {
          alert('You can only upload ' + maxItems + ' pictures');
        }
      });
    };

    // useEffect(() => {
    //   getData();
    // }, []);
    return (
        <View style={styles.mainBody}>
            <View style={styles.labelContainer}>
                <Text style={styles.labelText}>
                {label}
                </Text>
            </View>
            {/*Showing the data of selected Single file*/}
            <View style={[styles.imageGallery, error && styles.errorStyle]}>
                {
                  files ? files.map( (img, key) => (
                      <Image style={styles.images} source={img[key]} key={key} />
                    )) : 
                    <Text style={styles.placeholderText}>No image selectted</Text>
                }
            </View>
            {error && <Text style={styles.errorTextStyle}>{error}</Text>}
            <IconButton 
                onPress={selectFile}
                text="Select File"
                icon="upload"
                variant="primary"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    mainBody: {
      flex: 1,
      justifyContent: 'center',
    },
    labelContainer: {
      margin: 10,
    },
    labelText: { 
      textAlign: 'center',
      fontSize: 30,
    },
    imageGallery: {
      flex: 1,
      flexDirection: 'row',
      padding: 10,
      borderWidth: 1,
      borderRadius: 5,
      width: '100%',
    },
    images: {
      width: 100,
      height: 100,
      margin: 5,
    },
    placeholderText: {
      fontSize: 16,
      textAlign: 'center',
      width: '100%',
      color: '#ccc',
      fontStyle: 'italic',
    },
    errorStyle: {
      borderColor: 'red',
    },
    errorTextStyle: {
        color: 'red',
        fontSize: 18,
        paddingLeft: 5,
        justifyContent: 'flex-start',
        textAlign: 'left',
    },
});
