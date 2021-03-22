import '../assets/App.css';
import { Switch, Route } from 'react-router-dom';
import Session from './Session';
import MainPage from './Main';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path={['/signup', '/login']} component={Session} />
        <Route exact path="/" component={MainPage} />
      </Switch>
    </div>
  );
}

export default App;
