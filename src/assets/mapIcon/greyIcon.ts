import greyLogo from '@assets/mapIcon/grey_webp/grey_2x.webp'

export default function greyIcon(price: number) {
  const container = document.createElement('div')
  container.style.position = 'relative'
  container.style.display = 'inline-block'
  container.style.textAlign = 'center'
  container.style.width = '81px'
  container.style.height = '81px'
  container.style.fontSize = '12px'
  container.style.color = 'black'
  container.style.fontWeight = 'bold'

  const img = document.createElement('img')
  img.src = greyLogo
  img.style.width = '100%'
  img.style.height = '100%'
  container.appendChild(img)

  const Price = document.createElement('div')
  Price.style.position = 'absolute'
  Price.style.top = '40%'
  Price.style.left = '50%'
  Price.style.fontSize = '12px'
  Price.style.fontWeight = '400'
  Price.style.whiteSpace = 'nowrap'
  Price.style.transform = 'translate(-50%, -50%)'
  Price.textContent = `${price}원`
  container.appendChild(Price)

  return container
}
