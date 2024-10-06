import React from 'react'
import styled from 'styled-components'

function JobCategories({ categories }) {
   
    return (
        <Container>
            <h3>
                <span>Countless Career Options </span>
                Are Waiting For You To Explore
            </h3>

            <CategoriesCard>
                {categories.slice(0, 8).map((c) => (
                    <Cards key={c._id}>
                        <img src='/assets/ArtIcon-abc0c65a.svg' />
                        <p className='categoryName'>{c.name}</p>
                        <p className='jobCount'>{c.postCounts} Jobs</p>
                    </Cards>
                ))}
            </CategoriesCard>
        </Container>
    )
}

export default JobCategories

const Container = styled.div`
    padding: 20px;
    font-size: 30px;
    text-align: center;

    span {
        color: #3E52CA;
    }
`

const CategoriesCard = styled.div`
    font-size: 20px;
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
    border-radius: 15px;
    transition: all 250ms;
    background: linear-gradient(180deg,#edebff,hsla(0,0%,100%,0));
    padding: 20px 20px;
    cursor: pointer;
    border: 1px solid #fff; 

    .categoryName{
        color: #3E52CA;
        font-size: 16px;
    }

    .jobCount{
        color: gray;
        font-size: 16px;
    }

    &:hover{
        box-shadow: #0000003d 0 3px 8px;
    }
`