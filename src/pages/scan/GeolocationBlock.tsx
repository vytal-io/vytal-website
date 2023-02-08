import { Box, Flex, Heading } from 'theme-ui'
import Block from 'components/Block'
import ScanItem from './ScanItem'

const GeolocationBlock = ({ geolocationData }: any) => {
  return (
    <Block>
      <Box
        sx={{
          borderBottom: '1px solid',
          borderColor: 'border',
          p: ['12px', '16px 20px', '16px 20px'],
          borderRadius: '4px 4px 0 0',
          background: 'backgroundSecondary',
        }}
      >
        <Heading variant="styles.h2">Geolocation</Heading>
        <Box sx={{ color: 'textSecondary' }}>
          navigator.geolocation.getCurrentPosition()
        </Box>
      </Box>
      {geolocationData.data ? (
        <>
          <ScanItem
            title="Reverse Geocode"
            tampered={geolocationData.tampered}
            value={geolocationData.data.reverseGeocode}
          />
          <ScanItem
            title="Latitude"
            tampered={geolocationData.tampered}
            value={geolocationData.data.latitude}
          />
          <ScanItem
            title="Longitude"
            tampered={geolocationData.tampered}
            value={geolocationData.data.longitude}
          />
          <ScanItem
            title="Accuracy"
            tampered={geolocationData.tampered}
            value={geolocationData.data.accuracy}
          />
          <ScanItem
            title="Altitude"
            tampered={geolocationData.tampered}
            value={geolocationData.data.altitude}
          />
          <ScanItem
            title="Altitude Accuracy"
            tampered={geolocationData.tampered}
            value={geolocationData.data.altitudeAccuracy}
          />
          <ScanItem
            title="Heading"
            tampered={geolocationData.tampered}
            value={geolocationData.data.heading}
          />
          <ScanItem
            title="Speed"
            tampered={geolocationData.tampered}
            value={geolocationData.data.speed}
            noBorder
          />
        </>
      ) : (
        <Flex
          sx={{
            p: ['12px', '12px 20px', '12px 20px'],
            justifyContent: 'space-between',
            fontSize: ['13px', '15px', '15px'],
          }}
        >
          {geolocationData}
        </Flex>
      )}
    </Block>
  )
}

export default GeolocationBlock
