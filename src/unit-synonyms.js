/*jshint node:true */

'use strict';

var definitions = {
  amountOfSubstance: require('unit-synonyms-amount-of-substance'),
  angle: require('unit-synonyms-angle'),
  area: require('unit-synonyms-area'),
  digitalInformation: require('unit-synonyms-digital-information'),
  electricCurrent: require('unit-synonyms-electric-current'),
  length: require('unit-synonyms-length'),
  luminousIntensity: require('unit-synonyms-luminous-intensity'),
  mass: require('unit-synonyms-mass'),
  metricPrefixes: require('unit-synonyms-metric-prefixes'),
  temperature: require('unit-synonyms-temperature'),
  temperatureDifference: require('unit-synonyms-temperature-difference'),
  time: require('unit-synonyms-time'),
  velocity: require('unit-synonyms-velocity'),
  volume: require('unit-synonyms-volume')
};

module.exports = Object.keys(definitions).reduce(function(acc, property) {
  acc.UNITS[property] = definitions[property].units;
  acc.SYNONYMS[property] = definitions[property].synonyms;

  return acc;
}, {
  UNITS: {},
  SYNONYMS: {}
});
