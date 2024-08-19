import './App.css';
import WormholeConnect from '@wormhole-foundation/wormhole-connect';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Overview from './page/Overview/Overview';

function App() {
  return (
    <>
      {/* <WormholeConnect /> */}
      <Router>
        <Routes>
          <Route
            path='/'
            element={<Overview />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
