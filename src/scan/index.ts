import systemData from './locationData/systemData'
import getWorkerData from './locationData/workerData'
import getHtmlGeolocation from './locationData/htmlGeolocation'
import getFrameData from './locationData/frameData'
import UAParser from 'ua-parser-js'

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
    let parser = new UAParser(workerData.userAgent.value)
    let parserResults = parser.getResult()
    console.log(parserResults)
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

    const data = {
      timezone: workerData.timezone.value,
      locale: workerData.locale.value,
      dateLocale: workerData.dateLocale.value,
      platform: workerData.platform.value,
      // @ts-ignore
      browser: `${parserResults.browser.name} ${parserResults.browser.version}`,
      engine: `${parserResults.engine.name} ${parserResults.engine.version}`,
      // htmlGeolocation,
    }

    console.log(data)

    return data
  })
}

export { fullScan, homeScan }
