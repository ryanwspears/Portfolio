import './App.css';

function App() {
  return (
    <div className="App">
      <div className='headMain'>
        <header className="App-header">
          <h1>ryan spears</h1>
          <h2>software developer</h2>
        </header>
        <header className="App-header2">
          <h3 className="green">about</h3>
          <h3 className="green">projects</h3>
          <h3 className="green">resume</h3>
          <h3 className="green">contact</h3>
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
                <span className="gold">var </span>greeting =
                <span className="blue"> 'Welcome to my portfolio.'</span>
                <span>;</span>
                <p className="codeGreen"></p>
                <span className="gold">var </span>toDo =
                <span className="blue"> 'To learn more about me, click one of the options in the menu above.'</span>
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
