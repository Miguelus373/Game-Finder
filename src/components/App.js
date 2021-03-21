import '../assets/App.css';
import { Switch, Route } from 'react-router-dom';
import SignUp from './SignUp';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/signup" component={SignUp} />
      </Switch>
    </div>
  );
}

export default App;
