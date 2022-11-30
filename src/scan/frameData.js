const getFrameData = async () => {
  const frame = document.createElement('iframe')
  document.body.appendChild(frame)
  frame.style.display = 'none'
  frame.src = '/frame.html'
  return new Promise((resolve) => {
    const receiveMessage = (event) => {
      resolve(event.data)
    }
    window.addEventListener('message', receiveMessage, false)
  })
}

export default getFrameData
