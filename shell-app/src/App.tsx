import React, { Suspense, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// Динамический импорт микрофронтендов
const MfApp1 = React.lazy(() => import('mf_app_1/App'));
const MfApp2 = React.lazy(() => import('mf_app_2/App'));

const App: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <Router future={{ v7_startTransition: true }}>
      <div className="shell-app">
        {/* Хедер */}
        <header className="shell-header">
          <div className="header-left">
            <button className="sidebar-toggle" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
              ☰
            </button>
            <h1>АИС ОМС</h1>
          </div>
          <div className="header-right">
            <span className="user-info">Пользователь: Иванов И.И.</span>
          </div>
        </header>

        <div className="shell-content">
          {/* Сайдбар */}
          <aside className={`shell-sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
            <nav className="sidebar-nav">
              <div className="nav-section">
                <h3>Основные модули</h3>
                <ul>
                  <li>
                    <Link to="/" className="nav-link">
                      <span className="nav-icon">🏠</span>
                      Главная
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="nav-section">
                <h3>Бизнес-модули</h3>
                <ul>
                  <li>
                    <Link to="/applications" className="nav-link">
                      <span className="nav-icon">📋</span>
                      Заявления
                    </Link>
                  </li>
                  <li>
                    <Link to="/documents" className="nav-link">
                      <span className="nav-icon">📄</span>
                      Документы
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </aside>

          {/* Основной контент */}
          <main className="shell-main">
            <Suspense fallback={<div className="loading">Загрузка модуля...</div>}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/applications/*" element={<MfApp1 />} />
                <Route path="/documents/*" element={<MfApp2 />} />
              </Routes>
            </Suspense>
          </main>
        </div>
      </div>
    </Router>
  );
};

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <div className="modules-grid">
        <div className="module-card">
          <div className="module-icon">📋</div>
          <h3>Заявления</h3>
          <p>Работа с заявлениями застрахованных лиц</p>
          <Link to="/applications" className="module-link">
            Перейти к модулю
          </Link>
        </div>

        <div className="module-card">
          <div className="module-icon">📄</div>
          <h3>Документы</h3>
          <p>Учетные документы и отчетность</p>
          <Link to="/documents" className="module-link">
            Перейти к модулю
          </Link>
        </div>
      </div>
    </div>
  );
};

export default App;
