import { Route, Routes } from 'react-router-dom';
import MainPage from './containers/MainPage.tsx';

const App = () => (
    <>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/news" element={<MainPage/>} />
        <Route path="*" element={<p>Page is not  found</p>} />
      </Routes>

    </>
);

export default App
