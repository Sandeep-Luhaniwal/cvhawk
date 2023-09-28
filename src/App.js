import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Nav from './compoments/Nav';
import './assets/css/Root.css'
import Accrodian from './compoments/Accrodian';
import Header from './compoments/Header';
import Start from './compoments/Start';
import Footer from './compoments/Footer';
import Help from './compoments/Help';
import Powerfull from './compoments/Powerfull';
import Resume from './compoments/Resume';
import Design from './compoments/Design';
import Themeslider from './compoments/Themeslider';
import Slidersay from './compoments/Slidersay';
import Preloader from './compoments/Preloader';
import BackToTop from './compoments/BacktoTop';

function App() {
  return (
    <>
      <Preloader />
      <Nav />
      <Header />
      <Themeslider />
      <Powerfull />
      <Help />
      <Design />
      <Resume />
      <Slidersay />
      <Accrodian />
      <Start />
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
