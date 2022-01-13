const rewire = require('rewire')
const defaults = rewire('react-scripts/scripts/build.js')
const config = defaults.__get__('config')

config.output.filename = 'static/js/plants_manager.js'
config.plugins[5].options.filename = 'static/css/plants_manager.css'
