var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
    getInitialState: function(){
      return {
        isLoading: false
      }
    },
    handleSearch: function(location, units){
      var units = units || 'imperial',
      that = this;

      this.setState({
        isLoading: true,
        errorMessage: undefined, //clear error message from previous serches
        location: undefined,
        temp: undefined,
        humidity: undefined,
        units: undefined
      });

      openWeatherMap.getTemp(location, units).then(function(data){
        var {temp, humidity} = data.main;
        that.setState({
          location: location,
          humidity: humidity,
          temp: temp,
          units: units,
          isLoading: false
        });
      }, function(e){
        that.setState({
          isLoading: false,
          errorMessage: e.message
        });
      })
    },
    componentDidMount: function(){
      console.log(this.props.location.query.location);
      console.log(this.props);

      var location = this.props.location.query.location;

      if(location && location.length > 0) {
        this.handleSearch(location);
        window.location.hash = '#/';
      }
    },
    componentWillReceiveProps: function(newProps){
      var location = newProps.location.query.location;
      if(location && location.length > 0) {
        this.handleSearch(location);
        window.location.hash = '#/';
      }
    },
    render: function () {
        var {isLoading, temp, location, units, humidity, errorMessage} = this.state;
        function renderMessage(){
          if(isLoading){
            return <h3 className='text-center'>Fetching weather....</h3>;
          } else if (temp && location && units && humidity){
            return <WeatherMessage location={location} units={units} temp={temp} humidity={humidity}/>;
          }
        };
        function renderError(){
          if(typeof errorMessage === 'string'){
            return (
              <ErrorModal message={errorMessage}/>
            )
          }
        }
        return (
            <div>
                <h1 className='text-center page-title'>Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
                {renderError()}
            </div>
        )
    }
});

module.exports = Weather;
