import './App.css';
import MapComponent from './MapComponent';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="main-content">
        <Sidebar />
        <div className="map-container">
          <MapComponent />
        </div>
      </div>
    </div>
  );
}

export default App;
