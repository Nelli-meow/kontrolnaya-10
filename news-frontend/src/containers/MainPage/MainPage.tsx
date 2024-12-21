import News from '../../features/news/News.tsx';
import Header from '../../components/Header/Header.tsx';

const MainPage = () => {
  return (
    <>
      <Header/>
      <div className="container">
        <News/>
      </div>
    </>
  );
};

export default MainPage;