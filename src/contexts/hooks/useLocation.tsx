import React, {useState, useEffect, }from 'react';
import { View, Text } from 'react-native';
import * as Location from 'expo-location';

interface Location {
  latitude: number;
  longitude: number; 
}

export default function useLocation() {

  const [location, setLocation] = useState<Location>();

  useEffect(() => {
    (async() => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        alert('Precisamos da sua localização para a utilização do app.');
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation({latitude: location.coords.latitude, longitude: location.coords.longitude})
    })();  
  }, [])
  

  
  if (!location) 
    return {latitude: 0, longitude: 0}
  return {latitude: location.latitude, longitude: location.longitude};  

  
}

