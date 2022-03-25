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
      <body className="body">
        <div className="top">
        <section class="mast">
            <header class="mast__header">
              <h1 class="mast__title js-spanize">Incoming Transmission</h1> 
              <hr class="sep"/>
              <p class="mast__text js-spanize">
                This is a story, all about how, 
                My life got twisted upside down. 
                So I'd like to tell a story, just sit right there. 
                And I'll tell you how I became the prince of Bel Air.
              </p>
            </header>
          </section>
        </div>
      </body>
    </div>
  );
}

export default App;
