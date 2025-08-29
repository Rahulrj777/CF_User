import React, { useState } from 'react'
// import Confetti from 'react-confetti';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header'
import Home from './pages/Home'
import AllCourse from './pages/AllCourse'
import Footer from './components/Footer'
import Progressbar from './components/Progressbar'
// import Sidebar from './admin/Sidebar'
// import Admin from './admin/Admin'
// import Terms from './pages/Terms'
// import Privacy from './pages/Privacy'


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import About from './pages/About'
import Contact from './pages/Contact'
import Manoj from './components/mentors/Manoj'
import Arvind from './components/mentors/Arvind'
import Direction from './pages/course/Direction'
import Admission from './pages/Admission'
import Cinematography from './pages/course/Cinematography'
import Editing from './pages/course/Editing'
import Acting from './pages/course/Acting'
import Vfx from './pages/course/Vfx'
import MultiForm from './pages/MultiForm'
import Stanley from './components/mentors/Stanley'
import StillPhotography from './pages/course/StillPhotography'


import manoj from './images/banner/entry.jpg'
import mobilemonoj from './images/newMobile.png'
import ban from './images/2.png'

import logo from './images/footer_logo-1.png'
import Madhu from './components/mentors/Madhu'
import VirtualProduction from './pages/course/VirtualProduction'
import UserDetail from './components/mentors/UserDetails'
import PaymentPage from './pages/PaymentPage'
import StageUnreal from './pages/course/StageUnreal'
import CFA from './pages/course/CFA'
import RajKumar from './components/mentors/RajKumar'
import Prasanna from './components/mentors/Prasanna'
import Sirinivas from './components/mentors/Sirinivas'
import MultiStepForm from './pages/form/MultiStepForm'
import AranthaiManiyan from './components/mentors/AranthaiManiyan'
import RajaMohammad from './components/mentors/RajaMohammad'
import MuniRaj from './components/mentors/Muniraj'
import DI from './pages/course/DI'
import Bebin from './components/mentors/Bebin'
import Workshop from './pages/Workshop'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'
import Refund from './pages/Refund'
import BlogMain from './pages/blog/BlogMain'
import Popup from './pages/Popup'
import Whatsapp from './components/Whatsapp';
import LiveChat from './components/LiveChat';

// import Refund from './pages/Refund';


const App = () => {




  return (


    <>

      <>

        <HelmetProvider>
          <Router className=''>
            <LiveChat />
            <Whatsapp />
            <Progressbar />

            <Header />

            <ToastContainer position="top-right" />
            <Routes>
              <Route path='/' element={<Home />} />

              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/admission' element={<Admission />} />
              <Route path='/apply' element={<MultiStepForm />} />
              <Route path='/workshops' element={<Workshop />} />
              <Route path='/cinema_factory_blog' element={<BlogMain />} />
              <Route path='/terms&conditions' element={<Terms />} />
              <Route path='/privacy_policy' element={<Privacy />} />
              <Route path='/cancellation&refund' element={<Refund />} />


              {/* ----------------------------- mentors pages ----------------------- */}

              <Route path="/:username" element={<UserDetail />} />


              {/* -------- courses pages --------- */}

              <Route path='/courses' element={<AllCourse />} />
              <Route path='/direction' element={<Direction />} />
              <Route path='/cinematography' element={<Cinematography />} />
              <Route path='/editing' element={<Editing />} />
              <Route path='/acting' element={<Acting />} />
              <Route path='/vfx' element={<Vfx />} />
              <Route path='/photography' element={<StillPhotography />} />
              <Route path='/virtual_production' element={<VirtualProduction />} />
              <Route path='/di' element={<DI />} />
              <Route path='/virtual_production/stage_unreal' element={<StageUnreal />} />
              <Route path='/virtual_production/cfa' element={<CFA />} />

              <Route path='/payment' element={<PaymentPage />} />

              {/* <Route path="/admin/*" element={<Admin />} /> */}

            </Routes>

            <Footer />

          </Router >
        </HelmetProvider>

      </>
      {/* )} */}
    </>

  )
}


export default App
