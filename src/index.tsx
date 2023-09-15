import { createRoot } from 'react-dom/client'
import { HashRouter as Router } from 'react-router-dom';
import { AppRoutes } from './Routes/AppRoutes';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <Router>
    <AppRoutes />
  </Router>
);
