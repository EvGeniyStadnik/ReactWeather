var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=2e23ae79c7a1298b8feb247687e1a8d9';

module.exports = {
  getTemp: function(location, units){
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&units=${units}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function(res){
      if(res.data.cod && res.data.message){
        throw new Error(res.data.message);
      } else {
        console.log(res);
        return res.data;
      }
    }, function(err){
      throw new Error(err.response.data.message);
    })
  }
}
