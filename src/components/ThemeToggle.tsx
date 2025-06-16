import styled from 'styled-components'
import { useTheme } from '../contexts/ThemeContext'
import SunIcon from './icons/SunIcon'
import MoonIcon from './icons/MoonIcon'

const ToggleButton = styled.button`
  background: none;
  border: none;
  padding: ${props => props.theme.spacing.sm};
  cursor: pointer;
  color: ${props => props.theme.colors.textLight};
  transition: all ${props => props.theme.transitions.normal};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${props => props.theme.borderRadius.full};
  
  &:hover {
    color: ${props => props.theme.colors.primary};
    background-color: ${props => props.theme.colors.surface};
    transform: scale(1.1);
  }

  svg {
    transition: transform ${props => props.theme.transitions.normal};
  }

  &:hover svg {
    transform: rotate(15deg);
  }
`

const IconWrapper = styled.div<{ $isVisible: boolean }>`
  position: absolute;
  opacity: ${props => props.$isVisible ? 1 : 0};
  transform: ${props => props.$isVisible ? 'rotate(0deg)' : 'rotate(-90deg)'};
  transition: all ${props => props.theme.transitions.normal};
`

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme()
  
  return (
    <ToggleButton onClick={toggleTheme} aria-label="Toggle theme">
      <IconWrapper $isVisible={!isDarkMode}>
        <SunIcon size={20} />
      </IconWrapper>
      <IconWrapper $isVisible={isDarkMode}>
        <MoonIcon size={20} />
      </IconWrapper>
    </ToggleButton>
  )
}

export default ThemeToggle 