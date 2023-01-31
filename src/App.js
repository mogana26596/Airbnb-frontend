import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import NewPage from './components/NewComponent/NewPage';
import Page from './components/NewComponent/page/Page';
import Page1 from './components/NewComponent/page/Page1';
import Page2 from './components/NewComponent/page/Page2';
import Page3 from './components/NewComponent/page/Page3';
import Page4 from './components/NewComponent/page/Page4';
import Page5 from './components/NewComponent/page/Page5';
import Payment1 from './components/NewComponent/payment/Payment1';
import Payment2 from './components/NewComponent/payment/Payment2';
import Payment3 from './components/NewComponent/payment/Payment3';
import Payment4 from './components/NewComponent/payment/Payment4';
import Payment5 from './components/NewComponent/payment/Payment5';
import Payment6 from './components/NewComponent/payment/Payment6';
import TopoftheworldPage from './components/TopoftheworldComponent/TopoftheworldPage';
import TopPage1 from './components/TopoftheworldComponent/page/TopPage1';
import TopPage2 from './components/TopoftheworldComponent/page/TopPage2';
import TopPage3 from './components/TopoftheworldComponent/page/TopPage3';
import TopPage4 from './components/TopoftheworldComponent/page/TopPage4';
import TopPage5 from './components/TopoftheworldComponent/page/TopPage5';
import TopPage6 from './components/TopoftheworldComponent/page/TopPage6';
import TopPayment1 from './components/TopoftheworldComponent/payment/TopPayment1';
import TopPayment2 from './components/TopoftheworldComponent/payment/TopPayment2';
import TopPayment3 from './components/TopoftheworldComponent/payment/TopPayment3';
import TopPayment4 from './components/TopoftheworldComponent/payment/TopPayment4';
import TopPayment5 from './components/TopoftheworldComponent/payment/TopPayment5';
import TopPayment6 from './components/TopoftheworldComponent/payment/TopPayment6';
import AdaptedPage from './components/AdaptedComponent/AdaptedPage';
import AdaptedPage1 from './components/AdaptedComponent/page/AdaptedPage1';
import AdaptedPage2 from './components/AdaptedComponent/page/AdaptedPage2';
import AdaptedPage3 from './components/AdaptedComponent/page/AdaptedPage3';
import AdaptedPage4 from './components/AdaptedComponent/page/AdaptedPage4';
import AdaptedPage5 from './components/AdaptedComponent/page/AdaptedPage5';
import AdaptedPage6 from './components/AdaptedComponent/page/AdaptedPage6';
import AdaptedPayment1 from './components/AdaptedComponent/payment/AdaptedPayment1';
import AdaptedPayment2 from './components/AdaptedComponent/payment/AdaptedPayment2';
import AdaptedPayment3 from './components/AdaptedComponent/payment/AdaptedPayment3';
import AdaptedPayment4 from './components/AdaptedComponent/payment/AdaptedPayment4';
import AdaptedPayment5 from './components/AdaptedComponent/payment/AdaptedPayment5';
import AdaptedPayment6 from './components/AdaptedComponent/payment/AdaptedPayment6';
import PlayPage from './components/PlayComponent/PlayPage';
import PlayPage1 from './components/PlayComponent/page/PlayPage1';
import PlayPage2 from './components/PlayComponent/page/PlayPage2';
import PlayPage3 from './components/PlayComponent/page/PlayPage3';
import PlayPage4 from './components/PlayComponent/page/PlayPage4';
import PlayPage5 from './components/PlayComponent/page/PlayPage5';
import PlayPage6 from './components/PlayComponent/page/PlayPage6';
import PlayPayment1 from './components/PlayComponent/payment/PlayPayment1';
import PlayPayment2 from './components/PlayComponent/payment/PlayPayment2';
import PlayPayment3 from './components/PlayComponent/payment/PlayPayment3';
import PlayPayment4 from './components/PlayComponent/payment/PlayPayment4';
import PlayPayment5 from './components/PlayComponent/payment/PlayPayment5';
import PlayPayment6 from './components/PlayComponent/payment/PlayPayment6';

function App(){
    return(
        <>
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<LoginPage/>} />
                        <Route path="/signup" element={<SignupPage/>} />
                        <Route path="/new" element={<NewPage />} />
                               <Route path="/page" element={<Page />} />
                               <Route path="/page1" element={<Page1 />} />
                               <Route path="/page2" element={<Page2 />} />
                               <Route path="/page3" element={<Page3 />} />
                               <Route path="/page4" element={<Page4 />} />
                               <Route path="/page5" element={<Page5 />} />
                               <Route path="/payment1" element={<Payment1 />} />
                               <Route path="/payment2" element={<Payment2 />} />
                               <Route path="/payment3" element={<Payment3 />} />
                               <Route path="/payment4" element={<Payment4 />} />
                               <Route path="/payment5" element={<Payment5 />} />
                               <Route path="/payment6" element={<Payment6 />} />
                        <Route path="/topoftheworld" element={<TopoftheworldPage />} />
                               <Route path="/toppage1" element={<TopPage1 />} />
                               <Route path="/toppage2" element={<TopPage2 />} />
                               <Route path="/toppage3" element={<TopPage3 />} />
                               <Route path="/toppage4" element={<TopPage4 />} />
                               <Route path="/toppage5" element={<TopPage5 />} />
                               <Route path="/toppage6" element={<TopPage6 />} />
                               <Route path="/payment1" element={<TopPayment1 />} />
                               <Route path="/payment2" element={<TopPayment2 />} />
                               <Route path="/payment3" element={<TopPayment3 />} />
                               <Route path="/payment4" element={<TopPayment4 />} />
                               <Route path="/payment5" element={<TopPayment5 />} />
                               <Route path="/payment6" element={<TopPayment6 />} />
                        <Route path="/adapted" element={<AdaptedPage />} />
                               <Route path="/adaptedpage1" element={<AdaptedPage1 />} />
                               <Route path="/adaptedpage2" element={<AdaptedPage2 />} />
                               <Route path="/adaptedpage3" element={<AdaptedPage3 />} />
                               <Route path="/adaptedpage4" element={<AdaptedPage4 />} />
                               <Route path="/adaptedpage5" element={<AdaptedPage5 />} />
                               <Route path="/adaptedpage6" element={<AdaptedPage6 />} />
                               <Route path="/payment1" element={<AdaptedPayment1 />} />
                               <Route path="/payment2" element={<AdaptedPayment2 />} />
                               <Route path="/payment3" element={<AdaptedPayment3 />} />
                               <Route path="/payment4" element={<AdaptedPayment4 />} />
                               <Route path="/payment5" element={<AdaptedPayment5 />} />
                               <Route path="/payment6" element={<AdaptedPayment6 />} />
                        <Route path="/play" element={<PlayPage />} />
                               <Route path="/playpage1" element={<PlayPage1 />} />
                               <Route path="/playpage2" element={<PlayPage2 />} />
                               <Route path="/playpage3" element={<PlayPage3 />} />
                               <Route path="/playpage4" element={<PlayPage4 />} />
                               <Route path="/playpage5" element={<PlayPage5 />} />
                               <Route path="/playpage6" element={<PlayPage6 />} />
                               <Route path="/payment1" element={<PlayPayment1 />} />
                               <Route path="/payment2" element={<PlayPayment2 />} />
                               <Route path="/payment3" element={<PlayPayment3 />} />
                               <Route path="/payment4" element={<PlayPayment4 />} />
                               <Route path="/payment5" element={<PlayPayment5 />} />
                               <Route path="/payment6" element={<PlayPayment6 />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    )
}

export default App;