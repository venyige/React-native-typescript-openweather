import React from 'react';
import GetLocation from 'react-native-get-location';


export const GeoLoc = async (): Promise<any> => {
    let Loc: any = null;
    try {
        Loc = await GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 5000,
        })
        console.log('Loc: ' + Loc);
        return (Loc);
    } catch (error) {
        Loc = { "latitude": 47.5, "longitude": 19.04 };
        console.log('geoLoc error: '+error+'; Loc fallback: ' + Loc);
        return (Loc);
    }

}

