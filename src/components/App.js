import '../assets/App.css';
import { Switch, Route } from 'react-router-dom';
import Session from './Session';
import MainPage from './Main';
import GamesIndex from '../containers/GamesIndex';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path={['/signup', '/login']} component={Session} />
        <Route path="/games" component={GamesIndex} />
        <Route exact path="/" component={MainPage} />
      </Switch>
    </div>
  );
}

export default App;
