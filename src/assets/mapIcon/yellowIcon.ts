import yellowLogo from '@assets/mapIcon/yellow_webp/yellow_2x.webp'
import { after } from 'node:test'

export default function yellowIcon(price: number, discountprice: number) {
  const container = document.createElement('div')
  container.style.position = 'relative'
  container.style.display = 'flex'
  container.style.textAlign = 'center'
  container.style.width = '81px'
  container.style.height = '81px'
  container.style.color = 'black'
  container.style.fontWeight = 'bold'

  const img = document.createElement('img')
  img.src = yellowLogo
  img.style.width = '100%'
  img.style.height = '100%'
  container.appendChild(img)

  const beforeDiscount = document.createElement('div')
  beforeDiscount.style.position = 'absolute'
  beforeDiscount.style.display = 'flex'
  beforeDiscount.style.top = '30%'
  beforeDiscount.style.left = '50%'
  beforeDiscount.style.fontSize = '11px'
  beforeDiscount.style.fontWeight = '400'
  beforeDiscount.style.textDecoration = 'line-through'
  beforeDiscount.style.color = 'white'
  beforeDiscount.style.whiteSpace = 'nowrap'
  beforeDiscount.style.transform = 'translate(-50%, -50%)'
  beforeDiscount.textContent = `${price}원`
  container.appendChild(beforeDiscount)

  const afterDiscount = document.createElement('div')
  afterDiscount.style.position = 'absolute'
  afterDiscount.style.display = 'flex'
  afterDiscount.style.top = '50%'
  afterDiscount.style.left = '50%'
  afterDiscount.style.fontSize = '12px'
  afterDiscount.style.fontWeight = '500'
  afterDiscount.style.whiteSpace = 'nowrap'
  afterDiscount.style.transform = 'translate(-50%, -50%)'
  afterDiscount.textContent = `${discountprice}원`
  container.appendChild(afterDiscount)

  return container
}
