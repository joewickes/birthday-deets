// Dependencies
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Styles
import './../styles/App.css';

// Components
import HomePage from './../routes/HomePage';
import FriendInfoPage from './../routes/FriendInfoPage';
import FriendsPage from './../routes/FriendsPage';
import MyInfoPage from './../routes/MyInfoPage';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={() => <HomePage />} />
        <Route exact path="/friends" component={() => <FriendsPage />} />
        <Route exact path="/friendinfo" component={() => <FriendInfoPage />} />
        <Route exact path="/myinfo" component={() => <MyInfoPage />} />
      </Switch>
    </div>
  );
}

export default App;
