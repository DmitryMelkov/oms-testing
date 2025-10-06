import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Documents from './components/Documents'

const App: React.FC = () => {
  return (
    <div className="mf-app-2">
      <Routes>
        <Route path="/" element={<Documents />} />
        <Route path="/create" element={<CreateDocument />} />
        <Route path="/:id" element={<DocumentDetails />} />
      </Routes>
    </div>
  )
}

const CreateDocument: React.FC = () => {
  return (
    <div className="page">
      <h2>Создание документа</h2>
      <p>Форма создания нового документа...</p>
    </div>
  )
}

const DocumentDetails: React.FC = () => {
  return (
    <div className="page">
      <h2>Детали документа</h2>
      <p>Просмотр деталей документа...</p>
    </div>
  )
}

export default App