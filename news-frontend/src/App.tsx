import { Route, Routes } from 'react-router-dom';
import MainPage from './containers/MainPage.tsx';
import NewNews from './features/news/containers/NewNews.tsx';

const App = () => (
    <>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/news" element={<MainPage/>} />
        <Route path="/news/add-news" element={<NewNews/>} />
        <Route path="*" element={<p>Page is not  found</p>} />
      </Routes>

    </>
);

export default App
