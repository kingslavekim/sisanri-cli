import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header, Main, Menu, Footer, HelloPage, HistoryPage, MapPage, PlacePage, UseGuidePage, NoticePage, VolunteerPage} from './components';

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
                    <Route path="/오시는 길" element={<MapPage/>}/>
                    <Route path="/시설안내" element={<PlacePage/>}/>
                    <Route path="/이용안내" element={<UseGuidePage/>}/>
                    <Route path="/공지사항" element={<NoticePage/>}/>
                    <Route path="/봉사지원" element={<VolunteerPage/>}/>
                </Routes>
                <Footer />
            </div>
        );
    }
}

export default App;
