/*jshint node:true, mocha:true */

'use strict';

require('should');

var properties = require('../src/unit-synonyms');

describe('built-in properties and units', function() {
  it('should include metric prefixes', function() {
    properties.UNITS.metricPrefixes.should.eql([
      'yotta',
      'zetta',
      'exa',
      'peta',
      'tera',
      'giga',
      'mega',
      'kilo',
      'hecto',
      'deca',
      'none',
      'deci',
      'centi',
      'milli',
      'micro',
      'nano',
      'pico',
      'femto',
      'atto',
      'zepto',
      'yocto'
    ]);
  });

  it('should include length', function() {
    properties.UNITS.length.should.eql([
      'metre',
      'kilometre',
      'centimetre',
      'millimetre',
      'mile',
      'yard',
      'foot',
      'inch',
      'nauticalMile'
    ]);
  });

  it('should include mass', function() {
    properties.UNITS.mass.should.eql([
      'kilogram',
      'metricTon',
      'gram',
      'milligram',
      'microgram',
      'longTon',
      'shortTon',
      'stone',
      'pound',
      'ounce'
    ]);
  });

  it('should include time', function() {
    properties.UNITS.time.should.eql([
      'nanosecond',
      'microsecond',
      'millisecond',
      'second',
      'minute',
      'hour',
      'day',
      'week',
      'month',
      'year',
      'decade',
      'century',
      'millennium'
    ]);
  });

  it('should include electric current', function() {
    properties.UNITS.electricCurrent.should.eql([
      'ampere',
      'abampere'
    ]);
  });

  it('should include temperature', function() {
    properties.UNITS.temperature.should.eql([
      'celsius',
      'fahrenheit',
      'kelvin',
      'rankine',
      'romer',
      'newton',
      'delisle',
      'reaumur'
    ]);
  });

  it('should include temperature difference', function() {
    properties.UNITS.temperatureDifference.should.eql([
      'celsius',
      'fahrenheit',
      'kelvin',
      'rankine',
      'romer',
      'newton',
      'delisle',
      'reaumur'
    ]);
  });

  it('should include amount of substance', function() {
    properties.UNITS.amountOfSubstance.should.eql([
      'mole',
      'poundMole'
    ]);
  });

  it('should include luminous intensity', function() {
    properties.UNITS.luminousIntensity.should.eql([
      'candela',
      'candlepower',
      'hefnerkerze'
    ]);
  });

  it('should include velocity', function() {
    properties.UNITS.velocity.should.eql([
      'metresSecond',
      'milesHour',
      'feetSecond',
      'kilometresHour',
      'knot'
    ]);
  });

  it('should include volume', function() {
    properties.UNITS.volume.should.eql([
      'cubicMetre',
      'millilitre',
      'litre',
      'cubicInch',
      'cubicFoot',
      'imperialFluidOunce',
      'imperialGill',
      'imperialPint',
      'imperialQuart',
      'imperialGallon',
      'USDram',
      'USFluidOunce',
      'USGill',
      'USCup',
      'USPint',
      'USQuart',
      'USGallon'
    ]);
  });

  it('should include area', function() {
    properties.UNITS.area.should.eql([
      'squareMetre',
      'squareKilometre',
      'hectare',
      'squareMile',
      'acre',
      'squareYard',
      'squareFoot',
      'squareInch'
    ]);
  });

  it('should include plane angle', function() {
    properties.UNITS.angle.should.eql([
      'radian',
      'turn',
      'degree',
      'gradian'
    ]);
  });

  it('should include digital storage', function() {
    properties.UNITS.digitalInformation.should.eql([
      'byte',
      'bit',
      'kibibyte',
      'mebibyte',
      'gibibyte',
      'tebibyte',
      'pebibyte',
      'exbibyte',
      'zebibyte',
      'yobibyte'
    ]);
  });
});
