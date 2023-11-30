import { useEffect } from 'react';
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
    <div className="App">
      <h1>Greetings</h1>
      <Greetings />
    </div>
  );
}

export default App;
