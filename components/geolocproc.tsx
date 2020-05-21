import React from 'react';
import GetLocation from 'react-native-get-location';


export const  GeoLoc =async():Promise<any> =>{
    let Loc:any =null;
        try {
             Loc = await GetLocation.getCurrentPosition({
                enableHighAccuracy: true,
                timeout: 150000,
            })
console.log('Loc: '+Loc);
return(Loc);
        } catch (error) {
            console.error('Geoloc error is ', error);
Loc='';
return(Loc);
        }

}

