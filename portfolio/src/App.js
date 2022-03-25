import './App.css';

function App() {
  return (
    <div className="App">
      <div className='headMain'>
        <header className="App-header">
          <h1>Ryan Spears</h1>
          <h2>Software Developer</h2>
        </header>
        <header className="App-header2">
          <h3 className="green">About</h3>
          <h3 className="green">Projects</h3>
          <h3 className="green">Resume</h3>
          <h3 className="green">Contact</h3>
        </header>
      </div>
      <div className="div">
        <div className="top">
        <section className="mast">
            <header className="mast__header">
              <h1 className="mast__title js-spanize green">Incoming Transmission</h1> 
              <hr className="sep"/>
              <p className="mast__text js-spanize green">
                This is a story, all about how, 
                My life got twisted upside down. 
                So I'd like to tell a story, just sit right there. 
                And I'll tell you how I became the prince of Bel Air.
              </p>
            </header>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
