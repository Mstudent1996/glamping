import styles from './App.module.css';
import  Header  from './components/header/Header';
import  Footer  from './components/footer/Footer';
import Homepage from './pages/homepage/HomePage';
import Contact from './pages/contact/Contact';
import Activities from './pages/activities/Activities';
import ServicesPage from './pages/servicespage/ServicesPage'


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function App() {
    return (
        <Router>
            <div className={styles.app}>
                <Header />
                <main className={styles.main}>
                    <Routes>
                        <Route path="/" element={<Homepage />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/activities" element={<Activities />} />
                        <Route path="/servicespage" element={<ServicesPage />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}
    