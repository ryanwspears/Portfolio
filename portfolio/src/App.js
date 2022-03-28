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
          <canvas id="c"></canvas>
          <section className="mast">
            <header className="mast__header">
              <h1 className="mast__title js-spanize green" id="mastHead">&gt;&gt;&gt; Welcome to my portfolio...</h1>
              <hr className="sep"/>
              <p className="mast__text js-spanize green" id="mastLine1">
                &gt;&gt;&gt; Here you can read all about me, and my experience as a software developer.
              </p>
              <p className="mast__text js-spanize green" id="mastLine2">
                &gt;&gt;&gt; To dive into my life, try clicking one of the options in the menu above.
              </p>
            </header>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
