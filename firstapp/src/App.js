// import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

//let nikhil = "Nikhil Taparia"

function App() {
  return (
    <>
      <Navbar title="TextFormator" />
      <div className="container my-4">
      {/* <About/> */}
      <Textform heading="Enter Text Below"/>
      </div>
    </>
  );
}

export default App;
