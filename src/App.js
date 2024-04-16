import './App.scss';
import Home from './Views/Home';
import ThemeProvider from 'react-bootstrap/ThemeProvider';

function App() {
  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >
      <div className="App">
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
