import React from 'react'
import { NavbarStyled, Profile } from './Navbar.styled'

import ThemeToggle from './ThemeToggle';

import { initialsFromName } from '../utils/data'
import { data } from '../constants/dummyData'

const Navbar = () => {
  return (
    <NavbarStyled>
      <div className='float-end m-1 mx-3 d-flex align-items-center justify-content-center'>
        <ThemeToggle />
        <Profile>
          <div>
            { initialsFromName(data.profile.name) }
          </div>
          {/* <div className='profileName'>
            { data.profile.name }
          </div> */}
        </Profile>
      </div>
    </NavbarStyled>
  )
}

export default Navbar