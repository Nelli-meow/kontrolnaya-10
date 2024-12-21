import News from '../features/news/News.tsx';

const MainPage = () => {
  return (
    <>
      <nav className="navbar bg-primary bg-gradient">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="#">News</a>
        </div>
      </nav>
      <div className="container">
        <News/>
      </div>
    </>
  );
};

export default MainPage;