import './Contact.css';

function Contact() {
	const avatar = 'https://randomuser.me/api/portraits/women/65.jpg';
	const name = "Erica Fowler";
	const online = true;

	return (
		<div className="Contact">
			<div>
				<img className="avatar" src={avatar} alt={name}/>
			</div>
		
			<div>
				<h3 className="name">{name}</h3>
				<div className="status">
					<div className={online?'status-online':'status-offline'}></div>
					<p className="status-text">{online?'online':'offline'}</p>
				</div>
			</div>
		</div>
	);
}

export default Contact;