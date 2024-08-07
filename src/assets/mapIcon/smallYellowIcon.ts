import yellowLogo from '@assets/mapIcon/yellow_webp/yellow_2x.webp'

export default function smallYellowIcon() {
  const container = document.createElement('div')
  container.style.position = 'relative'
  container.style.display = 'flex'
  container.style.textAlign = 'center'
  container.style.width = '30px'
  container.style.height = '30px'
  container.style.color = 'black'
  container.style.fontWeight = 'bold'

  const img = document.createElement('img')
  img.src = yellowLogo
  img.style.width = '100%'
  img.style.height = '100%'
  container.appendChild(img)

  return container
}
