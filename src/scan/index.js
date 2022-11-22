import { systemData, getWorkerData, getHtmlGeolocation } from './locationData'

export default async () => {
  return await Promise.all([getWorkerData(), getHtmlGeolocation()]).then(
    (promiseValues) => {
      const workerData = promiseValues[0]
      const htmlGeolocation = promiseValues[1]
      let clientData = {}
      Object.entries(systemData).forEach(([key]) => {
        clientData = {
          ...clientData,
          [key]: {
            topWindow: {
              value: systemData[key].value,
              tampered: systemData[key].tampered,
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
    }
  )
}
