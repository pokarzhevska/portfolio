import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './component/header/header';
import PortfolioDetail from './component/portfolioDetail/portfolioDetail';
import About from './pages/about';
import Contact from './pages/contact';
import Portfolio from './pages/portfolio';
import Resume from './pages/resume';

function App() {
    return (
        <div>
            <Header/>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/about" Component={About}/>
                    <Route exact path="/resume" Component={Resume}/>
                    <Route exact path="/portfolio" Component={Portfolio}/>
                    <Route exact path='/contact' Component={Contact}/>
                    <Route exact path="/portfolio-detail" Component={PortfolioDetail}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
