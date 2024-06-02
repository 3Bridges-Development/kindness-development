import Header from './Components/Header';
import Footer from './Components/Footer';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import { Outlet } from "react-router-dom";
import './App.scss';

function App() {
  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >
      <div className="App">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
