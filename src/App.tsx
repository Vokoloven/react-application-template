import './App.css';

const App = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src='/react.svg' className='App-gear' alt='Gear Animation' />
        <h1 aria-label='qwerty'>Welcome to React Application Template v18.3.1</h1>
        <p>Dive into a world where technology meets creativity!</p>
        <a
          href='https://react.dev'
          target='_blank'
          rel='noopener noreferrer'
          className='start-button'
        >
          <span>Explore React</span>
        </a>
      </header>
    </div>
  );
};

export default App;
