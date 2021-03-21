import Contact from './components/Contact';

const contact1 = {
  id:1,
  avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
  name: 'Erica Fowler',
  online: true
}
const contact2 = {
  id: 2,
  avatar: 'https://randomuser.me/api/portraits/men/37.jpg',
  name: 'Herbert Bryant',
  online: false
}
const contact3 = {
  id: 3,
  avatar: 'https://randomuser.me/api/portraits/men/52.jpg',
  name: 'Ryan Sanchez',
  online: true
}

function App() {
  return (
    <div className="App">
      <Contact
        key={contact1.id} 
        name={contact1.name}
        avatar={contact1.avatar}
        status={contact1.online} 
      />
      <Contact 
        key={contact2.id}
        name={contact2.name}
        avatar={contact2.avatar}
        status={contact2.online} 
      />
      <Contact 
        key={contact3.id}
        name={contact3.name}
        avatar={contact3.avatar}
        status={contact3.online} 
      />
    </div>
  );
}

export default App;