import { Routes, Route } from 'react-router-dom';
import AppLayout from './components/layouts/AppLayout';
import Excel2json from './components/content/Excel2Json';
import JsonSmoothing from './components/content/JsonSmoothing';
import JsonMinify from './components/content/JsonMinify';

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<JsonSmoothing />} />
        <Route path="jsonminify" element={<JsonMinify />} />
        <Route path="excel2json" element={<Excel2json />} />
      </Route>
    </Routes>
  );
}

export default App;
