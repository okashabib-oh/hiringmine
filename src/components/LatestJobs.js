import { formatDistance } from 'date-fns';
import React from 'react'
import styled from 'styled-components'

function LatestJobs({ latestJobs }) {
    console.log(latestJobs);

    return (
        <Container>
            <h3>
                <span>Latest and Top </span>
                Job Openings
            </h3>

            <JobsCard>
                {latestJobs.slice(0, 8).map((jobs) => (
                    <Cards key={jobs?._id}>
                        <CardHead>
                            <div>
                                <h2>{jobs?.companyName || "Anonymous"}</h2>
                                <p>{jobs?.designation}</p>
                                <b>{jobs?.payRangeStart > 0 ? jobs?.salaryCurrency : ""} {jobs?.payRangeStart || "No Salary Mentioned"}</b>
                            </div>

                            <div>
                                <img src='/favicon.png' />
                            </div>
                        </CardHead>

                        <CardMid>
                            {jobs?.city && jobs?.country ? (
                                <b>{jobs?.city}, {jobs?.country}</b>
                            ) : <b>Location Not Mentioned</b>}
                        </CardMid>

                        <CardFooter>
                            <div>
                                {formatDistance(jobs?.createdAt, new Date(), { addSuffix: true })}
                            </div>
                            <div>
                                <p>{jobs?.views} views</p>
                            </div>
                        </CardFooter>
                    </Cards>
                ))}
            </JobsCard>
        </Container>
    )
}

export default LatestJobs

const Container = styled.div`

    padding: 20px;

    h3{
        text-align: center;
        font-size: 30px;
    }

    span {
        color: #3E52CA;
    }
`

const JobsCard = styled.div`
    font-size: 10px;
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr));

    @media (max-width: 1024px) {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    // For small screens (mobile)
    @media (max-width: 768px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    // For extra small screens
    @media (max-width: 480px) {
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }
`

const Cards = styled.div`
    border: 1px solid rgb(238, 238, 238);
    box-shadow: 0 6px 12px #0000001a;
    border-radius: 10px;
    transition: all 250ms;
    padding: 20px;
    cursor: pointer;

`

const CardHead = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    b {
        color: #3E52CA;
    }

`

const CardMid = styled.div`
    margin: 10px 0;

`

const CardFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0 0;
    font-size: 12px;
    color: #3f3f3f;
`