import Project from './components/projectList.jsx';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';

  function App() {
  return  (
      <div className="bucket-app">
        <Header />
        <Project />
        <Footer/>
      </div>
    );
  }

export default App;
