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
                    <Route exact path="/" element={<Main/>}/>
                    <Route exact path="/HelloPage" element={<HelloPage/>}/>
                    <Route exact path="/HistoryPage" element={<HistoryPage/>}/>
                    <Route exact path="/MapPage" element={<MapPage/>}/>
                    <Route exact path="/PlacePage" element={<PlacePage/>}/>
                    <Route exact path="/UseGuidePage" element={<UseGuidePage/>}/>
                    <Route exact path="/NoticePage" element={<NoticePage/>}/>
                    <Route exact path="/NoticeDetailPage" element={<NoticeDetailPage/>}/>
                    <Route exact path="/VolunteerPage" element={<VolunteerPage/>}/>
                    <Route exact path="/SupportPage" element={<SupportPage/>}/>
                    <Route exact path="/IrPage" element={<IrPage/>}/>
                    <Route exact path="/IrDetailPage" element={<IrDetailPage/>}/>
                </Routes>
                <Footer />
            </div>
        );
    }
}

export default App;
