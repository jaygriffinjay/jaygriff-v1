import styled from 'styled-components'

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  
  /* Spacing between items */
  ${props => props.$spacing === 'tight' && `
    li + li {
      margin-top: ${props.theme.spacing.xs};
    }
  `}
  
  ${props => props.$spacing === 'normal' && `
    li + li {
      margin-top: ${props.theme.spacing.sm};
    }
  `}
  
  ${props => props.$spacing === 'loose' && `
    li + li {
      margin-top: ${props.theme.spacing.md};
    }
  `}
  
  /* List styles */
  ${props => props.$listStyle === 'disc' && `
    list-style: disc;
    padding-left: ${props.theme.spacing.lg};
  `}
  
  ${props => props.$listStyle === 'circle' && `
    list-style: circle;
    padding-left: ${props.theme.spacing.lg};
  `}
  
  ${props => props.$listStyle === 'square' && `
    list-style: square;
    padding-left: ${props.theme.spacing.lg};
  `}
  
  ${props => props.$listStyle === 'none' && `
    list-style: none;
    padding-left: 0;
  `}
  
  /* Custom bullet styles */
  ${props => props.$listStyle === 'custom' && `
    list-style: none;
    padding-left: 0;
    
    li {
      position: relative;
      padding-left: ${props.theme.spacing.lg};
      
      &:before {
        content: "•";
        position: absolute;
        left: 0;
        color: ${props.theme.colors.primary};
      }
    }
  `}
`

const List = ({ 
  children, 
  spacing = 'normal', 
  listStyle = 'disc',
  ...props 
}) => {
  // Use $ prefix for styled-components props to prevent them from being passed to DOM
  return (
    <StyledList $spacing={spacing} $listStyle={listStyle} {...props}>
      {children}
    </StyledList>
  )
}

export default List 