import './App.css';
import { Route, Switch } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Upload from './components/Upload/Upload';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/upload" component={Upload} />
        <Route path="/" exact component={Home} />
      </Switch>
    </Layout>
  );
}

export default App;
