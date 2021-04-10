// Dependencies
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
import Header from './Header';
import HomePage from './../routes/HomePage';
import SignUp from './../routes/SignUp';
import LogIn from './../routes/LogIn';
import FriendsList from './../routes/FriendsList';
import InfoPage from './../routes/InfoPage';
import InfoForm from './../routes/InfoForm';

// Styles
import './../styles/App.css';

const App = (props) => {
  return (
    <div className="App">
      <Header /> 
      <Switch>
        <Route exact path="/" component={() => <HomePage />} />
        <Route path="/signup" component={() => <SignUp />} />     
        <Route path="/login" component={() => <LogIn />} />  
        <Route path="/friends" component={() => <FriendsList />} />  
        <Route path="/info" component={() => <InfoPage />} />  
        <Route path="/info/form" component={() => <InfoForm />} />  
      </Switch>
    </div>
  );
}

export default App;
