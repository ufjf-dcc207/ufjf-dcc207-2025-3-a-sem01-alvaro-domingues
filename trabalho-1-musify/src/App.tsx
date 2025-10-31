
//import Sidebar from './components/Sidebar'; // Crie este componente
//import MusicPlayer from './components/MusicPlayer'; // Crie este componente
import HomeView from './views/HomeView';

const App = () => {
  return (
    <div className="spotify-layout">
      
      <div className="main-content">
        <HomeView />
      </div>
      
    </div>
  );
};

export default App;