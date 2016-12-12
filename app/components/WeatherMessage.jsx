var React = require('react');

var WeatherMessage = ({location, temp, units, humidity}) => {
  return (
    <h3>In {location} now {temp} units {units} humidity {humidity}</h3>
  )
}

module.exports = WeatherMessage;
