// Dependencies
import React from 'react';

//Components
import Header from './../components/Header';
import MessageBlurb from './../components/MessageBlurb';
import HomeButton from './../components/HomeButton';
import Footer from './../components/Footer';

const HomePage = () => {
  return (
    <main className="HomePage">
      <Header />
      <MessageBlurb />
      <HomeButton />
      <Footer />
    </main>
  );
}

export default HomePage;
