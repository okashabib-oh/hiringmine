import React, { useState } from 'react'
import { DarkModeSwitch } from 'react-toggle-dark-mode'
import styled from 'styled-components'

function NavBar() {

    const [isDarkMode, setDarkMode] = useState(false);

    const toggleDarkMode = (checked) => {
        setDarkMode(checked);
    };

    return (
        <Container>
            <Nav>
                <div>
                    <Logo src="/assets/app-logo.png" />
                </div>
                <NavMenu>
                    <a>
                        <span>About Us</span>
                    </a><a>
                        <span>People</span>
                    </a><a>
                        <span>Jobs</span>
                    </a><a>
                        <span>Login</span>
                    </a><a>
                        <span>Join Now</span>
                    </a><a>
                        <span className='purple'>Employee / Post Job</span>
                    </a>
                </NavMenu>
                <DarkTheme isDarkMode={isDarkMode}>
                    <DarkModeSwitch
                        checked={isDarkMode}
                        onChange={toggleDarkMode}
                        size={20}
                    />
                </DarkTheme>
            </Nav>
        </Container>
    )
}

export default NavBar

const Container = styled.div`
    display: flex;
    justify-content: center;
    padding: 12px 0;

    @media (max-width: 1024px) {
        font-size: 12px;
    }

    // For small screens (mobile)
    @media (max-width: 768px) {
        font-size: 10px;
    }

    // For extra small screens
    @media (max-width: 480px) {
    }
`

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const NavMenu = styled.ul`
    display: flex;
    margin-left: 25px;

    a{
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;

        span{
            letter-spacing: 0.5px;
        }

        .purple{
            color: #3E52CA;
        }

    }

    @media (max-width: 768px) {
        display: none;
    }

`

const Logo = styled.img`
    width: 200px;

    @media (max-width: 768px) {
        width: 150px;
    }
`

const DarkTheme = styled.div`
    background-color: ${props => props.isDarkMode ? '#3E52CA' : ''};
    display: flex;
    align-items: center;
    margin-left: 40px;
    border-radius: 10px;
`