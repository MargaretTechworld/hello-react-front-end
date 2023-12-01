import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Greetings from './components/Greetings';
import { getGreetings } from './redux/greetingSlice';
import './app.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGreetings());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Greetings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
