import { Button, Pagination, Stack } from "@mui/material";
import JobCard from "../../components/JobCard";
import { useEffect, useState } from "react";
import Filter from "../../components/Filter";
import useDataFetch from "../../CustomHooks/useDataFetch";

function Jobs() {

    const [jobs, setJobs] = useState([])
    const [pages, setPage] = useState(1)
    const [keyword, setKeyword] = useState("")
    const [loader, setLoader] = useState(false)

    const getJobs = () => {
        setLoader(true)
        fetch(`https://backend-prod.app.hiringmine.com/api/jobAds/all?limit=10&pageNo=${pages}&keyWord=${keyword}&category=`)
            .then(res => res.json())
            .then((data) => {
                setJobs(data.data);
                setLoader(false);
            })
    }
    const [{ data: filterations } = {}, filterationErr] = useDataFetch(`https://backend-prod.app.hiringmine.com/api/filterations/all`)

    useEffect(() => {
        getJobs()
    }, [pages])

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <div style={{
                display: 'flex',
                overflowX: 'auto',
                padding: '10px',
                width: '100%',
                boxSizing: 'border-box',
                scrollbarWidth: 'thin',
                scrollbarColor: '#6c63ff #e0e0e0',
                msScrollbarArrowColor: '#6c63ff',
                alignItems: 'center',
            }}>
                {filterations?.filteration?.map((filter, index) => (
                    <Filter key={index} filter={filter} />
                ))}
                |
                <Button color="secondary" variant="contained" sx={{ ml: 1 }}>Reset</Button>
            </div>
            {loader ? (
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh'
                }}>
                    <img width={100} height={100} src="/wave.gif" alt="Loading..." />
                </div>
            ) : (
                <JobCard jobData={jobs} />
            )}
            {!loader && (
                <Stack spacing={2} mb={2}>
                    <Pagination color="secondary" count={20} size="small" page={pages} onChange={(e, p) => {
                        setPage(p)
                    }} />
                </Stack>
            )}
        </div>
    )
}

export default Jobs;