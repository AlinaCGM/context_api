// import Task from './Task';
import Cards from './components/Cards';
import Grid from './components/Grid';
import CarouselSlider from './components/CarouselSlider';
import './App.css';

function App() {
  return (
    <div className="App">
     {/* <Task/> */}
     <CarouselSlider/>
    <Cards/>
    <Grid/>
    </div>
  );
}

export default App;
