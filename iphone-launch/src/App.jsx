import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Model from './components/Model';
import Features from './components/Features';
import * as Sentry from '@sentry/react'

const App = () => {

  //Sentry test method
  //return <button onClick={() => methodDoesNotExist()}>Break the world</button>;

  return (
    <main className='bg-black'>
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
    </main>
  );
};

export default Sentry.withProfiler(App);
