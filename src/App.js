import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import { BrowserView, MobileView } from 'react-device-detect';
import { Header, Main, Menu, Footer, HelloPage, HistoryPage, MapPage, PlacePage,
    UseGuidePage, UseFeePage, NoticePage, NoticeDetailPage, VolunteerPage, SupportPage, IrPage,
    IrDetailPage, GalleryPage, GalleryDetailPage,

    MHeader, MMain, MHelloPage, MHistoryPage, MMapPage, MPlacePage, MUseGuidePage, MUseFeePage,
    MNoticePage, MNoticeDetailPage, MVolunteerPage, MSupportPage, MIrPage, MIrDetailPage,
    MGalleryPage, MGalleryDetailPage, MFooter,

    AdminPage, AdminCreatePage } from './components';

class App extends Component {
    render() {
        return (
            <div>
                <BrowserView>
                    <Header />
                    <Menu />
                    <Routes>
                        <Route path="/" element={<Main/>}/>
                        <Route path="/HelloPage" element={<HelloPage/>}/>
                        <Route path="/HistoryPage" element={<HistoryPage/>}/>
                        <Route path="/MapPage" element={<MapPage/>}/>
                        <Route path="/PlacePage" element={<PlacePage/>}/>
                        <Route path="/UseGuidePage" element={<UseGuidePage/>}/>
                        <Route path="/UseFeePage" element={<UseFeePage/>}/>
                        <Route path="/NoticePage" element={<NoticePage/>}/>
                        <Route path="/NoticeDetailPage" element={<NoticeDetailPage/>}/>
                        <Route path="/VolunteerPage" element={<VolunteerPage/>}/>
                        <Route path="/SupportPage" element={<SupportPage/>}/>
                        <Route path="/IrPage" element={<IrPage/>}/>
                        <Route path="/IrDetailPage" element={<IrDetailPage/>}/>
                        <Route path="/GalleryPage" element={<GalleryPage/>}/>
                        <Route path="/GalleryDetailPage" element={<GalleryDetailPage/>}/>
                        <Route path="/AdminPage" element={<AdminPage/>}/>
                        <Route path="/AdminCreatePage" element={<AdminCreatePage/>}/>
                    </Routes>
                    <Footer />
                </BrowserView>

                <MobileView>
                    <MHeader/>
                    <Routes>
                        <Route path="/" element={<MMain/>}/>
                        <Route path="/MHelloPage" element={<MHelloPage/>}/>
                        <Route path="/MHistoryPage" element={<MHistoryPage/>}/>
                        <Route path="/MMapPage" element={<MMapPage/>}/>
                        <Route path="/MPlacePage" element={<MPlacePage/>}/>
                        <Route path="/MUseGuidePage" element={<MUseGuidePage/>}/>
                        <Route path="/MUseFeePage" element={<MUseFeePage/>}/>
                        <Route path="/MNoticePage" element={<MNoticePage/>}/>
                        <Route path="/MNoticeDetailPage" element={<MNoticeDetailPage/>}/>
                        <Route path="/MVolunteerPage" element={<MVolunteerPage/>}/>
                        <Route path="/MSupportPage" element={<MSupportPage/>}/>
                        <Route path="/MIrPage" element={<MIrPage/>}/>
                        <Route path="/MIrDetailPage" element={<MIrDetailPage/>}/>
                        <Route path="/MGalleryPage" element={<MGalleryPage/>}/>
                        <Route path="/MGalleryDetailPage" element={<MGalleryDetailPage/>}/>
                    </Routes>
                    <MFooter />
                </MobileView>
            </div>
        );
    }
}

export default App;
