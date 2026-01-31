import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { navigateTo } from './store/navigationSlice';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import Menu from './pages/Menu/Menu';
import Delivery from './pages/Delivery/Delivery';
import Contact from './pages/Contact/Contact';

function App() {
  const currentView = useSelector((state) => state.navigation.currentView);
  const dispatch = useDispatch();

  // Handle URL sync (Browser Source of Truth -> Redux)
  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname.toLowerCase();
      if (path.includes('menu')) {
        dispatch(navigateTo('menu'));
      } else if (path.includes('delivery')) {
        dispatch(navigateTo('delivery'));
      } else if (path.includes('contact') || path.includes('contacto')) {
        dispatch(navigateTo('contact'));
      } else {
        dispatch(navigateTo('home'));
      }
    };

    // Check on mount
    handleLocationChange();

    // Listen for popstate (Back/Forward buttons)
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, [dispatch]);

  // Handle URL sync (Redux Source of Truth -> Browser)
  useEffect(() => {
    let path = '/';
    if (currentView === 'menu') path = '/menu';
    if (currentView === 'delivery') path = '/delivery';
    if (currentView === 'contact') path = '/contacto';

    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path);
    }
  }, [currentView]);

  return (
    <Layout>
      {currentView === 'home' && <Home />}
      {currentView === 'menu' && <Menu />}
      {currentView === 'delivery' && <Delivery />}
      {currentView === 'contact' && <Contact />}
    </Layout>
  );
}

export default App;
