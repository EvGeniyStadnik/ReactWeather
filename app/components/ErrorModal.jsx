
var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

var ErrorModal = React.createClass({
  getDefaultProps: function(){
    return {
      title: 'Error'
    }
  },
  propTypes: {
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired
  },
  componentDidMount: function(){
    var {title, message} = this.props;

    var modalMarkup = (
      <div id='error-modal' className='reveal tiny text-center' data-reveal=''>
        <h4>{title}</h4>
        <p>{message}</p>
        <p>
          <button className='button hollow' data-close=''>
            Ok
          </button>
        </p>
      </div>
    )
  //it takes jsx code and return the string version and then we convert string to DOM element through $()
    var $modal = $(ReactDOMServer.renderToString(modalMarkup));

    $(ReactDOM.findDOMNode(this)).html($modal);
  //or we can use:
  //ReactDOM.findDOMNode(this).innerHTML = ReactDOMServer.renderToString(modalMarkup);

    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },
  render: function(){
    return (
      <div>
      </div>
    )
  }
});
module.exports = ErrorModal;
