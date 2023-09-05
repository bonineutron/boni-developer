import { NotFoundPage, HomePage } from './pages';
import { Route, Routes } from 'react-router-dom';

export default function Router(): JSX.Element {
  return (
    <Routes>
      {/* configuration */}
      <Route path='*' element={<NotFoundPage />} />
      {/* pages */}
      <Route path='/:language' element={<HomePage />} />
    </Routes>
  );
}
