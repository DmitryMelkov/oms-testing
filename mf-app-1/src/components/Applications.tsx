import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Applications.css';
import { OMSUIButton, OMSUIButtonVariant, AISUButtonColor } from '@oms/uikit';

interface Application {
  id: string;
  title: string;
  status: 'pending' | 'approved' | 'rejected';
  date: string;
}

const Applications: React.FC = () => {
  const [applications] = useState<Application[]>([
    { id: '1', title: 'Заявление на полис ОМС', status: 'pending', date: '2024-01-15' },
    { id: '2', title: 'Заявление на замену полиса', status: 'approved', date: '2024-01-10' },
    { id: '3', title: 'Заявление на прикрепление', status: 'rejected', date: '2024-01-05' },
  ]);

  return (
    <div className="applications">
      <div className="applications-header">
        <h1>Модуль заявлений (мКПИ 1)</h1>
        <Link to="/new">
          <OMSUIButton variant={OMSUIButtonVariant.contained} color={AISUButtonColor.blue}>
            + Новое заявление
          </OMSUIButton>
        </Link>
      </div>

      <div className="applications-list">
        {applications.map((app) => (
          <div key={app.id} className="application-card">
            <div className="application-info">
              <h3>{app.title}</h3>
              <p>Дата: {app.date}</p>
              <p>Статус: {app.status}</p>
            </div>
            <div className="application-actions">
              <Link to={`/applications/${app.id}`}>
                <OMSUIButton variant={OMSUIButtonVariant.outlined} color={AISUButtonColor.blue}>
                  Подробнее
                </OMSUIButton>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="buttons-showcase">
        <h3>Демонстрация кнопок OMS UI Kit:</h3>
        <div className="buttons-grid">
          <OMSUIButton variant={OMSUIButtonVariant.contained} color={AISUButtonColor.blue}>
            Contained Blue
          </OMSUIButton>
          <OMSUIButton variant={OMSUIButtonVariant.outlined} color={AISUButtonColor.green}>
            Outlined Green
          </OMSUIButton>
          <OMSUIButton variant={OMSUIButtonVariant.text} color={AISUButtonColor.red}>
            Text Red
          </OMSUIButton>
          <OMSUIButton variant={OMSUIButtonVariant.contained} disabled>
            Disabled
          </OMSUIButton>
        </div>
      </div>
    </div>
  );
};

export default Applications;
