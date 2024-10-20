import { useEffect, useState } from 'react';
import './App.css';
import JobCategories from './components/JobCategories';
import NavBar from './components/NavBar/NavBar';
import LatestJobs from './components/LatestJobs';
import { Route, Routes } from 'react-router-dom';
import Jobs from './Pages/jobs';

function App() {

  const [categories, setCategories] = useState([])
  const [latestJobs, setLatestJobs] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    fetch("https://backend-prod.app.hiringmine.com/api/categories/all")
      .then((res) => res.json())
      .then((data) => setCategories(data.data))

    fetch("https://backend-prod.app.hiringmine.com/api/jobAds/all?limit=10&pageNo=1&keyWord=&category=")
      .then((res) => res.json())
      .then((data) => setLatestJobs(data.data))
  }, [])

  return (
    <div>
      <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Routes>
        <Route
          path='/'
          element={
            <>
              <JobCategories categories={categories} />
              <LatestJobs latestJobs={latestJobs} />
            </>
          }
        />
        <Route path='/jobs' element={<Jobs />} />
      </Routes>
    </div>
  );
}

export default App;
