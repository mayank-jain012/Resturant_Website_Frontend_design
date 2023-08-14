import { NavBar } from './component/index'
import './App.css';
import { Header, Aboutus, Menu, Cheif, Introduction, Laurels, Gallery, Findus, Footer } from './container/index'
function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Aboutus />
      <Menu />
      <Cheif />
      <Introduction />
      <Laurels />
      <Gallery />
      <Findus />
      <Footer />
    </div>
  );
}

export default App;
