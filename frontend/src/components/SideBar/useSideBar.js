import { useState } from 'react';
import { useLocation } from 'react-router-dom';

function useSideBar(window) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { pathname } = location;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container = window !== undefined ? () => window().document.body : undefined;

  return {
    mobileOpen,
    handleDrawerToggle,
    container,
    pathname,
  };
}

export default useSideBar;
