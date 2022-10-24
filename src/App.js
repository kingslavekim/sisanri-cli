import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header, Main, Menu, Footer, HelloPage, HistoryPage, MapPage, PlacePage, UseGuidePage, NoticePage, NoticeDetailPage, VolunteerPage, SupportPage, IrPage, IrDetailPage} from './components';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Menu />
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/HelloPage" element={<HelloPage/>}/>
                    <Route path="/HistoryPage" element={<HistoryPage/>}/>
                    <Route path="/MapPage" element={<MapPage/>}/>
                    <Route path="/PlacePage" element={<PlacePage/>}/>
                    <Route path="/UseGuidePage" element={<UseGuidePage/>}/>
                    <Route path="/NoticePage" element={<NoticePage/>}/>
                    <Route path="/NoticeDetailPage" element={<NoticeDetailPage/>}/>
                    <Route path="/VolunteerPage" element={<VolunteerPage/>}/>
                    <Route path="/SupportPage" element={<SupportPage/>}/>
                    <Route path="/IrPage" element={<IrPage/>}/>
                    <Route path="/IrDetailPage" element={<IrDetailPage/>}/>
                </Routes>
                <Footer />
            </div>
        );
    }
}

export default App;
