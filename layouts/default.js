import * as Actions from '../src/store/Actions'
import * as Commands from '../events/commands'

export const GaugeDefinitions = [
  {
    title: 'Speed',
    unit: 'm/s',
    height: 200,
    column: 4,
    min: 0,
    max: 100,
    bufferSize: 200,
    getValFromState: (state) => {
      let latestData = state.data.speed[state.data.speed.length - 1]
      return [latestData[0], latestData[1][0]]
    }
  }, {
    height: 200,
    column: 4,
    min: 0,
    max: 100,
    title: 'Acceleration',
    unit: 'm/s/2',
    bufferSize: 200,
    getValFromState: (state) => {
      let latestData = state.data.acceleration[state.data.acceleration.length - 1]
      return [latestData[0], latestData[1][0]]
    }
  }, {
    height: 200,
    column: 4,
    min: 0,
    max: 100,
    title: 'Battery',
    unit: 'percentage',
    bufferSize: 200,
    getValFromState: (state) => {
      let latestData = state.data.battery[state.data.battery.length - 1]
      return [latestData[0], latestData[1][0]]
    }
  }, {
    height: 200,
    column: 4,
    min: 0,
    max: 100,
    title: 'Temperature',
    unit: 'percentage',
    bufferSize: 200,
    getValFromState: (state) => {
      let latestData = state.data.temp[state.data.temp.length - 1]
      return [latestData[0], latestData[1][0]]
    }
  }, {
    height: 200,
    column: 4,
    min: 0,
    max: 100,
    title: 'Air Tank Level',
    unit: 'percentage',
    bufferSize: 200,
    getValFromState: (state) => {
      let latestData = state.data.airTankLevel[state.data.airTankLevel.length - 1]
      return [latestData[0], latestData[1][0]]
    }
  }, {
    height: 200,
    column: 4,
    min: 0,
    max: 100,
    title: 'distance',
    unit: 'percentage',
    bufferSize: 200,
    getValFromState: (state) => {
      let latestData = state.data.distance[state.data.distance.length - 1]
      return [latestData[0], latestData[1][0]]
    }
  }
]

export const SliderDefinitions = [
  {
    title: 'Acceleration',
    min: 0,
    max: 100,
    default: 0,
    action: Actions.CHANGE_ACCELERATION,
    command: Commands.ACCELERATION,
    getValFromState: (state) => state.controls.acceleration
  }, {
    title: 'Speed',
    min: 0,
    max: 100,
    default: 0,
    action: Actions.CHANGE_SPEED,
    command: Commands.SPEED,
    getValFromState: (state) => state.controls.speed
  }
]