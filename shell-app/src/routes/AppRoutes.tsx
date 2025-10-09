import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import '../App.css'

// Динамический импорт микрофронтендов
const MfApp1 = React.lazy(() => import('mf_app_1/App'));
const MfApp2 = React.lazy(() => import('mf_app_2/App'));

export const AppRoutes: React.FC = () => {
  return (
    <Suspense fallback={<div className="loading">Загрузка модуля...</div>}>
      <Routes>
        <Route path="/" element={<MfApp1 />} />
        <Route path="/applications/*" element={<MfApp1 />} />
        <Route path="/documents/*" element={<MfApp2 />} />
      </Routes>
    </Suspense>
  );
};