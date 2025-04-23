import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import BePartners from './Components/BecomApartners';
import AboutUs from './Components/About';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import TermsAndConditions from './Components/TermsAndConditions';
import PrivacyAndPolicy from './Components/PrivacyAndPolicy';
import Imprint from './Components/Imprint';
import Careers from './Components/Careers';
import JobOpportunities from './Components/JobOpportunities';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/BePartners' element={<BePartners />} />
          <Route path='/About' element={<AboutUs />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/TermsAndConditions' element={<TermsAndConditions />} />
          <Route path='/PrivacyAndPolicy' element={<PrivacyAndPolicy />} />
          <Route path='/Imprint' element={<Imprint />} />
          <Route path='/Careers' element={<Careers />} />
          <Route path='/Jobs' element={<Careers />} />
          <Route path="/TableOfJobs" element={<JobOpportunities />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
