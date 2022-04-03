import { useState } from 'react';

export const useSideBarOpen = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return [sidebarOpen, setSidebarOpen];
};
