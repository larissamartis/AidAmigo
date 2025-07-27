import React,{useState} from 'react';
import {View,TouchableOpacity,Image,Text,Button,Alert,PermissionsAndroid} from 'react-native';
import { Card } from 'react-native-elements';
import styles from './Styles';
import { useNavigation } from '@react-navigation/native';
import { launchCamera } from 'react-native-image-picker';
import { useFocusEffect } from '@react-navigation/native';

const CameraButton = () => {
  const [isMounted, setIsMounted] = useState(true);
  const navigation = useNavigation();
  useFocusEffect(
    React.useCallback(() => {
      setIsMounted(true);
      return () => {
        // Cleanup when screen loses focus
        setIsMounted(false);
      };
    }, [])
  );

  const openCamera = async () => {
    if (!isMounted) return;

    try {
      const options = {
        mediaType: 'photo',
        quality: 0.7, // Reduced quality for stability
        maxWidth: 1024,
        maxHeight: 1024,
        cameraType: 'back',
      };

      const response = await launchCamera(options);
      
      if (!isMounted) return; // Check again after async operation

      if (response.didCancel || !response.assets?.[0]?.uri) {
        return;
      }

      const uri = response.assets[0].uri;
      await processImage(uri);
      
    } catch (error) {
      if (isMounted) {
        Alert.alert('Error', 'Camera failed: ' + error.message);
      }
    }
  };

  const processImage = async (uri) => {
    try {
      // Add delay to allow camera resources to release
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Your existing image processing logic
      const formData = new FormData();
      formData.append('image', {
        uri,
        type: 'image/jpeg',
        name: 'wound.jpg',
      });

      const response = await fetch('http://192.168.14.173:5000/predict', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      
      if (isMounted) {
        navigation.navigate('WoundResult', {
          imageUri: uri,
          woundInfo: data,
        });
      }
    } catch (error) {
      if (isMounted) {
        Alert.alert('Processing Error', error.message);
      }
    }
  };

  return (
    <TouchableOpacity
      style={styles.cameraButton}
      onPress={openCamera}
      activeOpacity={0.7}
    >
      <Text style={styles.buttonText}>Capture Wound</Text>
    </TouchableOpacity>
  );
};


const NewButton = ({ title, isActive, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Text style={{ fontWeight: isActive ? 'bold' : 'normal',color:isActive?'red':'green' }}>{title}</Text>
  </TouchableOpacity>
);

const NavBar = ({ activeTab, setActiveTab }) => {
  const navigation = useNavigation();

  const handlePress = (screenName) => {
    setActiveTab(screenName);
    // Simplified navigation - MainApp is already the active navigator
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.nav_container}>
      <NewButton
        title="Home"
        isActive={activeTab === 'Home'}
        onPress={() => handlePress('Home')}
      />
      <NewButton
        title="Track"
        isActive={activeTab === 'Track'}
        onPress={() => handlePress('Track')}
      />
      <NewButton
        title="Profile"
        isActive={activeTab === 'Profile'}
        onPress={() => handlePress('Profile')}
      />
    </View>
  );
};



const NewCard=(props)=>{
  const navigation = useNavigation();
    return (
      <TouchableOpacity onPress={()=>{
          navigation.push(`${props.title}`)
        }}>
        <Card containerStyle={styles.card}>
            <Card.Title style={{fontSize:25}}>{props.title}</Card.Title>
            <Image source={props.imgSrc} style={styles.cardimg}/>
        </Card>
      </TouchableOpacity>
    )
}

const LongCard=(props)=>{
    return(
        <Card>
            <Card.Title style={{fontSize:15}}>{props.title}</Card.Title>
        </Card>
    )
}

const WoundCard = ({ imageUri, woundInfo }) => {
  if (!imageUri || !woundInfo) return null;

  return (
    <View style={styles.woundCard}>
      <Image source={{ uri: imageUri }} style={styles.woundImage} />
      <View style={styles.woundInfo}>
        <Text style={styles.woundTitle}>Wound Analysis</Text>
        <Text style={styles.woundText}>
          <Text style={styles.woundLabel}>Type:</Text> {woundInfo.type}
        </Text>
        <Text style={styles.woundText}>
          <Text style={styles.woundLabel}>Severity:</Text> {woundInfo.severity}
        </Text>
        <Text style={styles.woundText}>
          <Text style={styles.woundLabel}>Recommended Action:</Text> {woundInfo.action}
        </Text>
      </View>
    </View>
  );
};

export {NewCard,LongCard,CameraButton,NavBar,WoundCard};