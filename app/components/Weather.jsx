var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
    getInitialState: function(){
      return {
        isLoading: false
      }
    },
    handleSearch: function(location, units){
      var that = this;

      this.setState({isLoading: true});

      openWeatherMap.getTemp(location, units).then(function(data){
        var {temp, humidity} = data.main;
        that.setState({
          location: location,
          humidity: humidity,
          temp: temp,
          units: units,
          isLoading: false
        });
      }, function(errorMessage){
        that.setState({isLoading: false});
        alert(errorMessage);
      })
    },
    render: function () {
        var {isLoading, temp, location, units, humidity} = this.state;
        function renderMessage(){
          if(isLoading){
            return <h3>Fetching weather....</h3>;
          } else if (temp && location && units && humidity){
            return <WeatherMessage location={location} units={units} temp={temp} humidity={humidity}/>;
          }
        }
        return (
            <div>
                <h3>Weater Component</h3>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
            </div>
        )
    }
});

module.exports = Weather;
