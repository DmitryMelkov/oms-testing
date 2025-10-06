import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Applications.css'

interface Application {
  id: string
  title: string
  status: 'pending' | 'approved' | 'rejected'
  date: string
}

const Applications: React.FC = () => {
  const [applications] = useState<Application[]>([
    { id: '1', title: 'Заявление на полис ОМС', status: 'pending', date: '2024-01-15' },
    { id: '2', title: 'Заявление на замену полиса', status: 'approved', date: '2024-01-10' },
    { id: '3', title: 'Заявление на прикрепление', status: 'rejected', date: '2024-01-05' }
  ])

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'orange'
      case 'approved': return 'green'
      case 'rejected': return 'red'
      default: return 'gray'
    }
  }

  return (
    <div className="applications">
      <div className="applications-header">
        <h1>Модуль заявлений (мКПИ 1)</h1>
        <Link to="/new" className="btn-primary">
          + Новое заявление
        </Link>
      </div>

      <div className="applications-list">
        {applications.map(app => (
          <div key={app.id} className="application-card">
            <div className="application-info">
              <h3>{app.title}</h3>
              <p>Дата: {app.date}</p>
            </div>
            <div className="application-status">
              <span
                className="status-badge"
                style={{ backgroundColor: getStatusColor(app.status) }}
              >
                {app.status === 'pending' && 'На рассмотрении'}
                {app.status === 'approved' && 'Утверждено'}
                {app.status === 'rejected' && 'Отклонено'}
              </span>
            </div>
            <div className="application-actions">
              <Link to={`/${app.id}`} className="btn-link">
                Подробнее
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Applications