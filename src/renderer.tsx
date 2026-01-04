import { Container, createRoot } from 'react-dom/client';
import { WelcomeSection } from './components/welcome-section';

const rootContainer = document.getElementById('root');
const root = createRoot(rootContainer as Container);
root.render(
  <>
    <WelcomeSection />
  </>,
);
