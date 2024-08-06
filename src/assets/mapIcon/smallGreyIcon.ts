import greyLogo from '@assets/mapIcon/grey_webp/grey_2x.webp'

export default function smallGreyIcon() {
  const container = document.createElement('div')
  container.style.position = 'relative'
  container.style.display = 'inline-block'
  container.style.textAlign = 'center'
  container.style.width = '30px'
  container.style.height = '30px'
  container.style.fontSize = '12px'
  container.style.color = 'black'
  container.style.fontWeight = 'bold'

  const img = document.createElement('img')
  img.src = greyLogo
  img.style.width = '100%'
  img.style.height = '100%'
  container.appendChild(img)

  return container
}
