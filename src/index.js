import css from './style.css'
import './global.css'
import mapboxgl from 'mapbox-gl'
import mapboxStyles from './mapboxStyles'

let internalMapboxToken = ''

const block = function (el, config) {
  const that = this
  return new Promise((resolve, reject) => {

    const maplotCenter = config.mapboxCenter || [9.28,45.21]
    const maplotZoom = config.mapboxZoom || 4
    const maplotStyle = config.mapboxStyle || 'stamen-terrain'
    const mapDelay = config.mapboxDelay || 1000

    mapboxgl.accessToken = internalMapboxToken

    const id = 'maplotWrapper' + parseInt(Math.random()*10000)

    const child = document.createElement('div')
    child.classList.add(css.mapbox)
    child.setAttribute('id', id)
    el.appendChild(child)

    const map = new mapboxgl.Map({
      container: id,
      center: maplotCenter,
      zoom: maplotZoom,
      //preserveDrawingBuffer: true, // must true if toolbar to png is active
      style: mapboxStyles[maplotStyle]
    })

    map.on('load', () => {
      setTimeout(() => {
        resolve(that)
      }, mapDelay)
    })

    map.on('error', () => {
      console.log('A error event occurred.')
      reject(that)
    })


    that.beforeDestroy = () => {
      if(map) map.remove()
    }

    that.stepForward = step => {
    }

    that.destroy = () => {
    }

  })
}

export default block

block.install = Presenta => {
  Presenta.addBlock('mapbox', block)
}

block.setToken = t => {
  internalMapboxToken = t
}

block.getToken = () => internalMapboxToken

if (typeof window !== 'undefined' && window.Presenta) {
  window.Presenta.use(block)
}
