var React = require('react');

var About = (props) => {
    return (
      <div>
        <h1 className='text-center page-title'>About</h1>
        <p>Welcome to About page! That links are using for rich the sorces that was usd in project</p>
        <ul>
          <li>
            <a href="https://devcenter.heroku.com/">Heroku</a> - This is for deploy to live web page
          </li>
          <li>
            <a href="http://foundation.zurb.com/">Foundation</a> - This is for styling tamplates
          </li>
          <li>
            <a href="http://openweathermap.org/">Openweathermap</a> - This is our weater
          </li>
        </ul>
      </div>
    )
}


module.exports = About;
