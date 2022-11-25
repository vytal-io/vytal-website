import {
  systemData,
  getWorkerData,
  getHtmlGeolocation,
  getFrameData,
} from './locationData'

export default async () => {
  return await Promise.all([
    getFrameData(),
    getWorkerData(),
    getHtmlGeolocation(),
  ]).then((promiseValues) => {
    const frameData = promiseValues[0]
    const workerData = promiseValues[1]
    const htmlGeolocation = promiseValues[2]
    let clientData = {}
    Object.entries(systemData).forEach(([key]) => {
      clientData = {
        ...clientData,
        [key]: {
          topWindow: {
            value: systemData[key].value,
            tampered: systemData[key].tampered,
          },
          frame: {
            value: frameData[key].value,
            tampered: frameData[key].tampered,
          },
          webWorker: {
            value: workerData[key].value,
            tampered: workerData[key].tampered,
          },
        },
      }
    })

    const data = {
      clientData,
      htmlGeolocation,
    }

    console.log(data)

    return data
  })
}
