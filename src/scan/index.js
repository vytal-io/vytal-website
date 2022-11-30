import systemData from './systemData'
import getWorkerData from './workerData'
import getHtmlGeolocation from './htmlGeolocation'
import getFrameData from './frameData'
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

const homeScan = async () =>
  getWorkerData().then((workerData) => {
    const parser = new UAParser(workerData.userAgent.value)
    const parserResults = parser.getResult()

    const data = {
      timezone: workerData.timezone.value,
      locale: workerData.locale.value,
      dateLocale: workerData.dateLocale.value,
      platform: workerData.platform.value,
      browser: `${parserResults.browser.name} ${parserResults.browser.version}`,
      engine: `${parserResults.engine.name} ${parserResults.engine.version}`,
    }

    return data
  })

export { fullScan, homeScan }
