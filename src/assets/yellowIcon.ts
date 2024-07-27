import yellowLogo from '../assets/mapIcon/말풍선_노랑.png'

export default function yellowIcon(price) {
  const container = document.createElement('div')
  container.style.position = 'relative'
  container.style.display = 'inline-block'
  container.style.textAlign = 'center'
  container.style.width = '50px'
  container.style.height = '50px'
  container.style.fontSize = '12px'
  container.style.color = 'black'
  container.style.fontWeight = 'bold'

  const img = document.createElement('img')
  img.src = yellowLogo
  img.style.width = '100%'
  img.style.height = '100%'
  container.appendChild(img)

  const label = document.createElement('div')
  label.style.position = 'absolute'
  label.style.top = '50%'
  label.style.left = '50%'
  label.style.transform = 'translate(-50%, -50%)'
  label.textContent = `${price}원`
  container.appendChild(label)

  return container
}
