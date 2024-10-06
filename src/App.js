import { useEffect, useState } from 'react';
import './App.css';
import JobCategories from './components/JobCategories';
import NavBar from './components/NavBar';
import LatestJobs from './components/LatestJobs';

function App() {

  const [categories, setCategories] = useState([])
  const [latestJobs, setLatestJobs] = useState([]);

  useEffect(() => {
    fetch("https://backend-prod.app.hiringmine.com/api/categories/all")
      .then((res) => res.json())
      .then((data) => setCategories(data.data))

    fetch("https://backend-prod.app.hiringmine.com/api/jobAds/all?limit=10&pageNo=1&keyWord=&category=")
      .then((res) => res.json())
      .then((data) => setLatestJobs(data.data))
  }, [])

  // const categories = "https://backend-prod.app.hiringmine.com/api/categories/all";
  // const tenJobs = "https://backend-prod.app.hiringmine.com/api/jobAds/all?limit=10&pageNo=1&keyWord=&category="

  return (
    <div>
      <NavBar />

      <JobCategories categories={categories} />

      <LatestJobs latestJobs={latestJobs} />
    </div>
  );
}

export default App;
