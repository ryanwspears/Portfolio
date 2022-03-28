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
              <pre id="typewriter" className='green'>
                <span className="green">Enter Password: </span>
                <span className="blue">**************</span>
                <p className="codeGreen">Success!</p>
                <span class="gold">var </span>greeting =
                <span class="blue"> 'Welcome to my portfolio.'</span>
                <span>;</span>
                <p className="codeGreen"></p>
                <span class="gold">var </span>toDo =
                <span class="blue"> 'To learn more about me, click one of the options in the menu above.'</span>
                <span>;</span>
              </pre>
            </header>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
