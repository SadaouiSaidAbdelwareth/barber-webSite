import React, { useState, useCallback } from 'react';
import { useTheme } from './hooks/useTheme';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import DashboardPage from './pages/DashboardPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export type Page = 'home' | 'booking' | 'dashboard';

const App: React.FC = () => {
  const { theme } = useTheme();
  const [currentPage, setCurrentPage] = useState<Page>('home');

  // Use useCallback to prevent re-creation of the function on every render
  const navigate = useCallback((page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'booking':
        return <BookingPage navigate={navigate} />;
      case 'dashboard':
        return <DashboardPage navigate={navigate} />;
      case 'home':
      default:
        return <HomePage navigate={navigate} />;
    }
  };

  return (
    <div className={`${theme} bg-white dark:bg-dark-bg text-gray-800 dark:text-gray-200 font-sans transition-colors duration-500`}>
      <Navbar navigate={navigate} currentPage={currentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer navigate={navigate} />
    </div>
  );
};

export default App;