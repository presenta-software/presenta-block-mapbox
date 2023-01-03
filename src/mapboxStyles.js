var OSM = '© <a target="_blank" href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
var carto = [
    '© <a target="_blank" href="https://carto.com/">Carto</a>',
    OSM
].join(' ');

var stamenTerrainOrToner = [
    'Map tiles by <a target="_blank" href="https://stamen.com">Stamen Design</a>',
    'under <a target="_blank" href="https://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>',
    '|',
    'Data by <a target="_blank" href="https://openstreetmap.org">OpenStreetMap</a> contributors',
    'under <a target="_blank" href="https://www.openstreetmap.org/copyright">ODbL</a>'
].join(' ');

var stamenWaterColor = [
    'Map tiles by <a target="_blank" href="https://stamen.com">Stamen Design</a>',
    'under <a target="_blank" href="https://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>',
    '|',
    'Data by <a target="_blank" href="https://openstreetmap.org">OpenStreetMap</a> contributors',
    'under <a target="_blank" href="https://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>'
].join(' ');

export default {
    'light-v10': 'mapbox://styles/mapbox/light-v10',
    'dark-v10': 'mapbox://styles/mapbox/dark-v10',
    'satellite-v9': 'mapbox://styles/mapbox/satellite-v9',

    'open-street-map': {
        id: 'osm',
        version: 8,
        sources: {
            'plotly-osm-tiles': {
                type: 'raster',
                attribution: OSM,
                tiles: [
                    'https://a.tile.openstreetmap.org/{z}/{x}/{y}.png',
                    'https://b.tile.openstreetmap.org/{z}/{x}/{y}.png'
                ],
                tileSize: 256
            }
        },
        layers: [{
            id: 'plotly-osm-tiles',
            type: 'raster',
            source: 'plotly-osm-tiles',
            minzoom: 0,
            maxzoom: 22
        }]
    },
    'white': {
        id: 'white-bg',
        version: 8,
        sources: {},
        layers: [{
            id: 'white-bg',
            type: 'background',
            paint: {'background-color': '#FFFFFF'},
            minzoom: 0,
            maxzoom: 22
        }]
    },
    'carto-positron': {
        id: 'carto-positron',
        version: 8,
        sources: {
            'plotly-carto-positron': {
                type: 'raster',
                attribution: carto,
                tiles: ['https://cartodb-basemaps-c.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png'],
                tileSize: 256
            }
        },
        layers: [{
            id: 'plotly-carto-positron',
            type: 'raster',
            source: 'plotly-carto-positron',
            minzoom: 0,
            maxzoom: 22
        }]
    },
    'carto-darkmatter': {
        id: 'carto-darkmatter',
        version: 8,
        sources: {
            'plotly-carto-darkmatter': {
                type: 'raster',
                attribution: carto,
                tiles: ['https://cartodb-basemaps-c.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png'],
                tileSize: 256
            }
        },
        layers: [{
            id: 'plotly-carto-darkmatter',
            type: 'raster',
            source: 'plotly-carto-darkmatter',
            minzoom: 0,
            maxzoom: 22
        }]
    },
    'stamen-terrain': {
        id: 'stamen-terrain',
        version: 8,
        sources: {
            'plotly-stamen-terrain': {
                type: 'raster',
                attribution: stamenTerrainOrToner,
                tiles: ['https://stamen-tiles.a.ssl.fastly.net/terrain/{z}/{x}/{y}.png'],
                tileSize: 256
            }
        },
        layers: [{
            id: 'plotly-stamen-terrain',
            type: 'raster',
            source: 'plotly-stamen-terrain',
            minzoom: 0,
            maxzoom: 22
        }]
    },
    'stamen-toner': {
        id: 'stamen-toner',
        version: 8,
        sources: {
            'plotly-stamen-toner': {
                type: 'raster',
                attribution: stamenTerrainOrToner,
                tiles: ['https://stamen-tiles.a.ssl.fastly.net/toner/{z}/{x}/{y}.png'],
                tileSize: 256
            }
        },
        layers: [{
            id: 'plotly-stamen-toner',
            type: 'raster',
            source: 'plotly-stamen-toner',
            minzoom: 0,
            maxzoom: 22
        }]
    },
    'stamen-watercolor': {
        id: 'stamen-watercolor',
        version: 8,
        sources: {
            'plotly-stamen-watercolor': {
                type: 'raster',
                attribution: stamenWaterColor,
                tiles: ['https://stamen-tiles.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.png'],
                tileSize: 256
            }
        },
        layers: [{
            id: 'plotly-stamen-watercolor',
            type: 'raster',
            source: 'plotly-stamen-watercolor',
            minzoom: 0,
            maxzoom: 22
        }]
    }
}