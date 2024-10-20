import React from 'react'
import styled from 'styled-components';
import { formatDistance } from 'date-fns';

function JobCard({ jobData }) {

    return (
        <Container>
            <JobsCard>
                {jobData?.map(({ _id, companyName, designation, payRangeStart, salaryCurrency, city, country, createdAt, views }) => (
                    <Cards key={_id}>
                        <CardHead>
                            <div>
                                <h2>{companyName || "Anonymous"}</h2>
                                <p>{designation}</p>
                                <b>{payRangeStart > 0 ? salaryCurrency : ""} {payRangeStart || "No Salary Mentioned"}</b>
                            </div>

                            <div>
                                <img src='/favicon.png' alt='Company Logo' />
                            </div>
                        </CardHead>

                        <CardMid>
                            {city && country ? (
                                <b>{city}, {country}</b>
                            ) : <b>Location Not Mentioned</b>}
                        </CardMid>

                        <CardFooter>
                            <div>
                                {formatDistance(createdAt, new Date(), { addSuffix: true })}
                            </div>
                            <div>
                                <p>{views} views</p>
                            </div>
                        </CardFooter>
                    </Cards>
                ))}
            </JobsCard>
        </Container>
    )
}

export default JobCard

const Container = styled.div`
`

const JobsCard = styled.div`
    margin-top: 80px;
    font-size: 10px;
    display: grid;
    grid-gap: 15px;
    grid-template-columns: repeat(2, minmax(500px, 1fr)); 
    max-width: 1200px;
    margin-bottom: 20px;

    @media (max-width: 1024px) {
        grid-template-columns: repeat(2, minmax(300px, 1fr)); 
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, minmax(200px, 1fr)); 
    }

    @media (max-width: 480px) {
        grid-template-columns: repeat(1, minmax(200px, 1fr)); 
    }
`


const Cards = styled.div`
    border: 1px solid rgb(238, 238, 238);
    box-shadow: 0 6px 12px #0000001a;
    border-radius: 10px;
    transition: all 250ms;
    padding: 20px;
    cursor: pointer;
    border: 1px solid #3E52CA;
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