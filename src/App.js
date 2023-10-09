import NavBar from "./Components/NavBar";
import HeroSlider from "./Components/HeroSlider";
import Fotter from "./Components/Fotter"
import Movies from "./Components/Movies";
function App() {
  return (
    <>
    <div style={{backgroundColor:"black"}}>
    <NavBar />
    <HeroSlider />
    <Movies />
    <Fotter />
    </div>
    </>
  );
}

export default App;
