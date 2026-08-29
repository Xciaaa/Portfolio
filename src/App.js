import { useState } from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Work from './components/Work';
import Hardware from './components/Work/Hardware';
import Software from './components/Work/Software';
import ProjectDetail from './components/Work/ProjectDetail';
import LoadingScreen from './components/LoadingScreen';
import { Analytics } from "@vercel/analytics/react";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="App">
    <>
      {loading && <LoadingScreen onFinish={() => setLoading(false)} />}
      <Routes>
       <Route path="/" element={<Layout />}>
         <Route index element={<Home />} />
         <Route path="/about" element={<About />}/>
         <Route path="/Contact" element={<Contact />}/>
         <Route path="/Work" element={<Work />}/>
         <Route path="/Work/hardware" element={<Hardware />}/>
         <Route path="/Work/software" element={<Software />}/>
         <Route path="/Work/project/:projectId" element={<ProjectDetail />}/>
       </Route>
      </Routes>
      <Analytics />
    </>
    </div>
   );
 }

export default App;
