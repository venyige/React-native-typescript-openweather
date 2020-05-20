import GetLocation from 'react-native-get-location'
 
GetLocation.getCurrentPosition({
    enableHighAccuracy: true,
    timeout: 15000,
})
