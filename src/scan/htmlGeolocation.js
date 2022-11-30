const getGeocode = (lat, lon) =>
  fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`)
    .then((response) => response.json())
    .then((data) => data.display_name)

const checkGetCurrentPosition = () => {
  if (
    !navigator.geolocation.getCurrentPosition
      .toString()
      .includes('[native code]')
  ) {
    return true
  }
  return false
}

const getHtmlGeolocation = async () =>
  new Promise((showPosition, showError) => {
    navigator.geolocation.getCurrentPosition(showPosition, showError, {
      enableHighAccuracy: true,
    })
  })
    .then(async (position) => {
      const reverseGeocode = await getGeocode(
        position.coords.latitude,
        position.coords.longitude
      )
      const htmlGeolocation = {
        tampered: checkGetCurrentPosition(),
        data: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          accuracy: position.coords.accuracy,
          altitude: position.coords.altitude,
          altitudeAccuracy: position.coords.altitudeAccuracy,
          heading: position.coords.heading,
          speed: position.coords.speed,
          reverseGeocode,
        },
      }

      return htmlGeolocation
    })
    .catch((e) => e.message)

export default getHtmlGeolocation
