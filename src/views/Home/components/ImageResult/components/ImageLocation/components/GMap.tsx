import React from 'react';
import Typography from '@material-ui/core/Typography';

// DECIMAL, MINUTES, SECOND

const calculateDecimalLatitude = (latValues: number[], latRef: string) => {
    let latsign = 1;
    if (latRef === 'S') {
        latsign = -1;
    }

    const absdlat = Math.abs( Math.round(latValues[0] * 1000000.));

    const tempmlat = Math.abs(Math.round(latValues[1] * 1000000.)/1000000);
    const absmlat = Math.abs(Math.round(tempmlat * 1000000));

    const tempslat = Math.abs(Math.round(latValues[2] * 1000000.)/1000000);
    const absslat = Math.abs(Math.round(tempslat * 1000000.));

    return Math.round(absdlat + (absmlat/60.) + (absslat/3600.) ) * latsign/1000000;
}

const calculateDecimalLongitude = (lonValues: number[], lonRef: string) => {

    let lonsign = 1;
    if (lonRef === 'W') {
        lonsign = -1;
    }

    const absdlon = Math.abs( Math.round(lonValues[0] * 1000000.));
    
    const tempmlon = Math.abs(Math.round(lonValues[1] * 1000000.)/1000000);
    const absmlon = Math.abs(Math.round(tempmlon * 1000000));
    
    const tempslon = Math.abs(Math.round(lonValues[2] * 1000000.)/1000000);
    const absslon = Math.abs(Math.round(tempslon * 1000000.));
    
    return Math.round(absdlon + (absmlon/60) + (absslon/3600) ) * lonsign/1000000;
}

const calculateDecimalLatLong = (latValues: number[], latRef: string, lonValues: number[], lonRef: string): [number, number] => (
    [calculateDecimalLatitude(latValues, latRef), calculateDecimalLongitude(lonValues, lonRef)]
)


const GMap: React.FC<{exifData: any}> = props => {
    const {exifData, ...rest} = props;

    const {GPSLatitudeRef: latRef, GPSLatitude: latValues, GPSLongitudeRef: lonRef, GPSLongitude: lonValues} = exifData;
    const canCalculateMapLocation = latRef && latValues && lonRef && lonValues;
    if (!canCalculateMapLocation) {
        return (
            <Typography>
                No data in image to calculate location
            </Typography>
        )
    }

    const [lat, long] = calculateDecimalLatLong(latValues, latRef, lonValues, lonRef);
    return (
        <iframe 
            width="100%" 
            height="400px" 
            // frameborder="0" 
            // style="border:0"
            src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GMAP_EMBED_API_KEY}&q=${lat},${long}&zoom=15`}
            // allowfullscreen
            >

        </iframe>

    )
}

export default GMap;