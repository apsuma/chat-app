import React from 'react';
import './Contact.css';
import PropTypes from 'prop-types';

class Contact extends React.Component {
	constructor(props){
    super(props)
    this.state = {
      online: this.props.status
    }
  }

  render() {
    return (
      <div className="Contact">
        <div>
          <img className="avatar" src={this.props.avatar} alt={this.props.name}/>
        </div>
      
        <div>
          <h3 className="name">{this.props.name}</h3>
          <div 
          className="status" 
          onClick={event => {
            const newStatus = !this.state.online;
            this.setState({online: newStatus});
          }}
          >
            <div className={this.state.online?'status-online':'status-offline'}></div>
            <p className="status-text">{this.state.online?'online':'offline'}</p>
          </div>
        </div>
      </div>
    );
  }
}

Contact.propTypes={
	avatar: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	online: PropTypes.bool,
}

export default Contact;