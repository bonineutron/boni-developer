import { Route, Routes } from 'react-router-dom';
import { NotFoundPage, HomePage } from 'pages';

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
