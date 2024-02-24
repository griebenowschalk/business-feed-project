import { ThemeProvider } from '@emotion/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { theme } from '../../theme/theme';
import { Provider } from 'react-redux';

import store from '../../redux/store';
import LandingPage from '../landingpage/LandingPage';

import '../../scss/global.scss';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path='/home' element={<LandingPage />} />
            <Route path='*' element={<LandingPage />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  )
}

export default App
