import restaurantInfoStore from '../stores/restaurentStore'
import { useStore } from '../stores/mapStore'
import { useEffect } from 'react'

export function filterDiscount() {
  const { infos } = restaurantInfoStore()
  const { markers, clearMarker } = useStore()

  function findPrice(id: string): number {
    let num = -1
    infos.forEach((info) => {
      if (info.id === id) {
        num = info.menus[0].price
      }
    })
    return num
  }

  if (markers.length) {
    markers.forEach((marker) => {
      let num = findPrice(marker.id)
      if (num > 50) {
        marker.map = null
      }
    })
    clearMarker()
  }
}
