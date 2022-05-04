import './App.css';
import { Block, Button, Hero } from './components';

function App() {
  return (
    <div className='App'>
      <Hero title='Success hero' subtitle='Success subtitle' color='success' />
      <Hero title='Danger hero' subtitle='Danger subtitle' color='danger' />
      <Block color='primary'>Some text</Block>
      <Block color='success'>Some more text</Block>
      <Block color='danger'>All of this are evenly spaced</Block>
      <Button type='submit' color='success'>
        Save changes
      </Button>
      <Button type='button' color='primary'>
        Save and continue
      </Button>
      <Button type='reset' color='danger'>
        Cancel
      </Button>
    </div>
  );
}

export default App;
