import { Route, Routes } from 'react-router-dom';
import './App.css';
import Events from './pages/Events';
import Participants from './pages/Participants';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Events />} />
        <Route path="/:id/participants" element={<Participants />} />
      </Routes>
    </>
  );
}

export default App;
