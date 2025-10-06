import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Documents.css'

interface Document {
  id: string
  title: string
  type: 'invoice' | 'contract' | 'report'
  date: string
  status: 'draft' | 'signed' | 'archived'
}

const Documents: React.FC = () => {
  const [documents] = useState<Document[]>([
    { id: '1', title: 'Счет на оплату', type: 'invoice', date: '2024-01-20', status: 'draft' },
    { id: '2', title: 'Договор с МО', type: 'contract', date: '2024-01-18', status: 'signed' },
    { id: '3', title: 'Отчет за декабрь', type: 'report', date: '2024-01-15', status: 'archived' }
  ])

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'invoice': return 'Счет'
      case 'contract': return 'Договор'
      case 'report': return 'Отчет'
      default: return 'Документ'
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'draft': return '#ffa726'
      case 'signed': return '#66bb6a'
      case 'archived': return '#78909c'
      default: return '#bdbdbd'
    }
  }

  return (
    <div className="documents">
      <div className="documents-header">
        <h1>Модуль документов (мКПИ 2)</h1>
        <Link to="/create" className="btn-primary">
          + Новый документ
        </Link>
      </div>

      <div className="documents-list">
        {documents.map(doc => (
          <div key={doc.id} className="document-card">
            <div className="document-info">
              <h3>{doc.title}</h3>
              <div className="document-meta">
                <span className="document-type">{getTypeLabel(doc.type)}</span>
                <span className="document-date">Дата: {doc.date}</span>
              </div>
            </div>
            <div className="document-status">
              <span
                className="status-badge"
                style={{ backgroundColor: getStatusColor(doc.status) }}
              >
                {doc.status === 'draft' && 'Черновик'}
                {doc.status === 'signed' && 'Подписан'}
                {doc.status === 'archived' && 'В архиве'}
              </span>
            </div>
            <div className="document-actions">
              <Link to={`/${doc.id}`} className="btn-link">
                Просмотр
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Documents