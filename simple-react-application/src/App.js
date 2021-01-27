import './App.css';
import PostsList from './components/PostsList'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          This is a React/Javascript exercise<br />
          Here is the front end UI / Full stack Developer's challenge. <br />
          You have about 1 - 2 hours to complete. Once when they are done, we can review the GitHub code, before scheduling interview. <br />
          I really don't know whose idea, how do you know my skill level through this tiny app.
        </p>
      </header>
      <div className="App-container">
        <PostsList />
      </div>
    </div>
  );
}

export default App;
