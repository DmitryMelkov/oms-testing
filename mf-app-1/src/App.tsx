import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Applications from './components/Applications'
import './App.css'

const App: React.FC = () => {
  return (
    <div className="mf-app-1">
      <Routes>
        <Route path="/" element={<Applications />} />
        <Route path="/new" element={<NewApplication />} />
        <Route path="/:id" element={<ApplicationDetails />} />
      </Routes>
    </div>
  )
}

const NewApplication: React.FC = () => {
  return (
    <div className="page">
      <h2>Новое заявление</h2>
      <p>Форма создания нового заявления...</p>
    </div>
  )
}

const ApplicationDetails: React.FC = () => {
  return (
    <div className="page">
      <h2>Детали заявления</h2>
      <p>Просмотр деталей заявления...</p>
    </div>
  )
}

export default App