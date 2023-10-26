import logo from './logo.svg';
import aloeVera from './img/aloeVera.jpg';
import bonsai from './img/bonsai.jpg';
import fraisier from './img/fraisier.jpg';
import framboisier from './img/framboisier.jpg';
import groseillier from './img/groseillier.jpg';
import monstera from './img/monstera.jpg';
import myrtillier from './img/myrtillier.jpg';
import orhideeBlancRose from './img/orchideeBlancRose.jpg';
import spathiphylleWallis from './img/spathiphylleWallis.jpg';
import './ArticlesList';
import './App.css';
import ArticlesList from './ArticlesList';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>La maison jungle</h1>
      </header>
      <main>
      <ArticlesList/>
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
