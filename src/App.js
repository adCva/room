import './Reset.css';
import './Scss/style.css';
import Nav from './Components/Nav';
import Main from './Components/Main';
import About from './Components/About';



function App() {
  return (
    <div className="App">
      <main>
        <Nav />
        <Main />
        <About />
      </main>
    </div>
  );
}

export default App;