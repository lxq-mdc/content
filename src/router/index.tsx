import React from 'react';
import { BrowserRouter ,useRoutes} from 'react-router-dom'
import { routes } from './router';

export const AppRouter:React.FC<{children:React.ReactNode}> = ({children}) => {
  return (
    <BrowserRouter>
      {children}
    </BrowserRouter>
  );
}

export const AppRoutes: React.FC = () => {
  return <>{ useRoutes(routes)}</>
}