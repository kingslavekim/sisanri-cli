import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header, Main, Menu, Footer, HelloPage, HistoryPage} from './components';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Menu />
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/인사말" element={<HelloPage/>}/>
                    <Route path="/연혁" element={<HistoryPage/>}/>
                </Routes>
                <Footer />
            </div>
        );
    }
}

export default App;
