import React from 'react';
import '../styles/globals.css'
// import '../styles/all.min.css'
import AppLayout from '../src/components/Layout/AppLayout'
import { Provider } from 'react-redux'
import store from '../src/Store/Store'
import { getSections, getTutorialSections } from '../data/dataSections';

const  MyApp = ({ Component, pageProps }) => {

  const sections = getSections();
  const tutorialSections = getTutorialSections();

  return (
    <Provider store={store}>
      <AppLayout sections={sections} tutorialSections={tutorialSections}><Component {...pageProps} /></AppLayout>
    </Provider>
  );
}

export default MyApp