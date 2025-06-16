import styled from 'styled-components'
import { LinkProps, StyledProps } from '../../types'

const StyledLink = styled.a<StyledProps>`
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
  transition: all ${props => props.theme.transitions.normal};
  
  &:hover {
    color: ${props => props.theme.colors.secondary};
    text-decoration: none;
  }
  
  /* Variants */
  ${props => props.$variant === 'secondary' && `
    color: ${props.theme.colors.secondary};
    
    &:hover {
      color: ${props.theme.colors.accent};
    }
  `}
  
  ${props => props.$variant === 'muted' && `
    color: ${props.theme.colors.textLight};
    
    &:hover {
      color: ${props.theme.colors.text};
    }
  `}
`

const Link = ({ href, variant = 'primary', children, ...props }: LinkProps) => {
  return (
    <StyledLink href={href} $variant={variant} {...props}>
      {children}
    </StyledLink>
  )
}

export default Link 