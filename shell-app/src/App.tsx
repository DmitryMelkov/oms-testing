import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { AppRoutes } from './routes/AppRoutes';
import './App.css';

const App: React.FC = () => {
  return (
    <Router future={{ v7_startTransition: true }}>
      <Layout>
        <AppRoutes />
      </Layout>
    </Router>
  );
};

export default App;