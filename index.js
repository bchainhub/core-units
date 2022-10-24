const BigNumber = require('bignumber.js')
BigNumber.config({ RANGE: [-1e+9, 1e+9] })

function parseUnit (unit) {
  const decimalsToUnit = {
    '-18': 'ore',
    '-15': 'wav',
    '-12': 'grav',
    '-9': 'nucle',
    '-6': 'atom',
    '-3': 'moli',
    1: 'core',
    3: 'aer',
    6: 'orb',
    9: 'plano',
    12: 'tera',
    15: 'sola',
    18: 'galx',
    21: 'cluster',
    24: 'supermatter'
  }
  if (typeof unit === 'string') {
    unit = unit.trim().toLowerCase()
  }
  if (unit !== undefined && !isNaN(unit)) {
    unit = decimalsToUnit[unit]
  }
  return unit
}

function convertToCore (value, unit) {
  if (value === undefined) {
    throw TypeError('value is required')
  }
  unit = parseUnit(unit)
  if (unit === undefined) {
    throw TypeError('unit is required')
  }

  const v = new BigNumber(value)
  if (unit === '₡') unit = 'core'
  if (unit === 'ø') unit = 'ore'

  if (unit === 'ore') return v.times(new BigNumber(0.000000000000000001))
  if (unit === 'wav') return v.times(new BigNumber(0.000000000000001))
  if (unit === 'grav') return v.times(new BigNumber(0.000000000001))
  if (unit === 'nucle') return v.times(new BigNumber(0.000000001))
  if (unit === 'atom') return v.times(new BigNumber(0.000001))
  if (unit === 'moli') return v.times(new BigNumber(0.001))
  if (unit === 'core') return v.times(new BigNumber(1))
  if (unit === 'aer') return v.times(new BigNumber(1000))
  if (unit === 'orb') return v.times(new BigNumber(1000000))
  if (unit === 'plano') return v.times(new BigNumber(1000000000))
  if (unit === 'tera') return v.times(new BigNumber(1000000000000))
  if (unit === 'sola') return v.times(new BigNumber(1000000000000000))
  if (unit === 'galx') return v.times(new BigNumber(1000000000000000000))
  if (unit === 'cluster') return v.times(new BigNumber(1000000000000000000000))
  if (unit === 'supermatter') return v.times(new BigNumber(1000000000000000000000000))

  throw TypeError('Invalid unit')
}

function converter (value, unit, toUnit) {
  unit = parseUnit(unit)
  toUnit = parseUnit(toUnit)
  const v = convertToCore(value, unit)
  if (unit === '₡') unit = 'core'
  if (toUnit === '₡') toUnit = 'core'
  if (unit === 'ø') unit = 'ore'
  if (toUnit === 'ø') toUnit = 'ore'

  const result = {
    ore: null,
    wav: null,
    grav: null,
    nucle: null,
    atom: null,
    moli: null,
    core: null,
    aer: null,
    orb: null,
    plano: null,
    tera: null,
    sola: null,
    galx: null,
    cluster: null,
    supermatter: null
  }

  result[unit] = new BigNumber(value).toFixed()

  if (unit !== 'ore') { result.ore = v.times(new BigNumber(1000000000000000000)).toFixed() }
  if (unit !== 'wav') { result.wav = v.times(new BigNumber(1000000000000000)).toFixed() }
  if (unit !== 'grav') { result.grav = v.times(new BigNumber(1000000000000)).toFixed() }
  if (unit !== 'nucle') { result.nucle = v.times(new BigNumber(1000000000)).toFixed() }
  if (unit !== 'atom') { result.atom = v.times(new BigNumber(1000000)).toFixed() }
  if (unit !== 'moli') { result.moli = v.times(new BigNumber(1000)).toFixed() }
  if (unit !== 'core') { result.core = v.times(new BigNumber(1)).toFixed() }
  if (unit !== 'aer') { result.aer = v.times(new BigNumber(0.001)).toFixed() }
  if (unit !== 'orb') { result.orb = v.times(new BigNumber(0.000001)).toFixed() }
  if (unit !== 'plano') { result.plano = v.times(new BigNumber(0.000000001)).toFixed() }
  if (unit !== 'tera') { result.tera = v.times(new BigNumber(0.000000000001)).toFixed() }
  if (unit !== 'sola') { result.sola = v.times(new BigNumber(0.000000000000001)).toFixed() }
  if (unit !== 'galx') { result.galx = v.times(new BigNumber(0.000000000000000001)).toFixed() }
  if (unit !== 'cluster') { result.cluster = v.times(new BigNumber(0.000000000000000000001)).toFixed() }
  if (unit !== 'supermatter') { result.supermatter = v.times(new BigNumber(0.000000000000000000000001)).toFixed() }

  if (toUnit) {
    if (result[toUnit] === undefined) {
      throw TypeError('Invalid unit')
    }

    return result[toUnit]
  }

  return result
}

module.exports = converter
