import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { THEMES } from '../constants/THEMES';

import { ToggleBall, ToggleButton } from './ThemeToggle.styled'

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <ToggleButton>
      <input 
        type="checkbox" 
        checked={theme === THEMES.DARK}
        onChange={e => setTheme(e.target.checked ? THEMES.DARK : THEMES.LIGHT)}
        className="themeToggleInput m-3" 
        id="themeToggleInput" />
      <label htmlFor="themeToggleInput" className="label">
        <i className="fas fa-moon"></i>
        <i className='fas fa-sun'></i>
        <ToggleBall></ToggleBall>
      </label>
    </ToggleButton>
  )
}

export default ThemeToggle