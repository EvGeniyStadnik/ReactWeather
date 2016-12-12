var React = require('react');

var WeatherForm = React.createClass({
     onFormSubmit: function(e){
        e.preventDefault();
        var location = this.refs.location.value,
        units = this.refs.units.value || 'imperial';
        if(location){
          this.refs.location.value = '';
          this.refs.units.value = '';
          this.props.onSearch(location, units);
        }
     },
    render: function () {
        return (
            <div>
                <form action="" onSubmit={this.onFormSubmit}>
                    <input type="text" ref="location" placeholder="add location"/><br/>
                    <input type="text" ref="units" placeholder="add units"/><br/>
                    <button>Get Weather</button>
                </form>
            </div>
        )
    }
});

module.exports = WeatherForm;
