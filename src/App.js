import Contact from './components/Contact';

const contact1 = {
  avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
  name: 'Erica Fowler',
  online: true
}
const contact2 = {
  avatar: 'https://randomuser.me/api/portraits/men/37.jpg',
  name: 'Herbert Bryant',
  online: false
}
const contact3 = {
  avatar: 'https://randomuser.me/api/portraits/men/52.jpg',
  name: 'Ryan Sanchez',
  online: true
}

function App() {
  return (
    <div className="App">
      <Contact 
        name={contact1.name}
        avatar={contact1.avatar}
        status={contact1.online} 
      />
      <Contact 
        name={contact2.name}
        avatar={contact2.avatar}
        status={contact2.online} 
      />
      <Contact 
        name={contact3.name}
        avatar={contact3.avatar}
        status={contact3.online} 
      />
    </div>
  );
}

export default App;