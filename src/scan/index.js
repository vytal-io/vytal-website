// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import {
  systemData,
  getWorkerData,
  getHtmlGeolocation,
  getFrameData,
} from './locationData'

const fullScan = async () => {
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

const homeScan = async () => {
  return await Promise.all([
    getWorkerData(),
    // getHtmlGeolocation(),
  ]).then((promiseValues) => {
    const workerData = promiseValues[0]
    // let clientData = {}
    // Object.entries(systemData).forEach(([key]) => {
    //   clientData = {
    //     ...clientData,
    //     [key]: {
    //       topWindow: {
    //         value: systemData[key].value,
    //         tampered: systemData[key].tampered,
    //       },
    //       frame: {
    //         value: frameData[key].value,
    //         tampered: frameData[key].tampered,
    //       },
    //       webWorker: {
    //         value: workerData[key].value,
    //         tampered: workerData[key].tampered,
    //       },
    //     },
    //   }
    // })

    // const data = {
    //   clientData,
    //   htmlGeolocation,
    // }

    // console.log(data)

    return workerData
  })
}

export default { fullScan, homeScan }
