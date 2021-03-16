import './Contact.css';
import PropTypes from 'prop-types'

function Contact(props) {


	return (
		<div className="Contact">
			<div>
				<img className="avatar" src={props.avatar} alt={props.name}/>
			</div>
		
			<div>
				<h3 className="name">{props.name}</h3>
				<div className="status">
					<div className={props.status?'status-online':'status-offline'}></div>
					<p className="status-text">{props.status?'online':'offline'}</p>
				</div>
			</div>
		</div>
	);
}

Contact.propTypes={
	avatar: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	online: PropTypes.bool.isRequired,
}

export default Contact;