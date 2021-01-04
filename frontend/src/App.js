import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
    return (
        <div className='App'>
            <Router>
                <Header />
                <main>
                    <Container fluid></Container>
                </main>

                <Footer />
            </Router>
        </div>
    );
};

export default App;
