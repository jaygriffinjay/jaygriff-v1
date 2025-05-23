import styled from 'styled-components'

const StyledCard = styled.div`
  background-color: ${props => props.theme.colors.surface};
  border-radius: ${props => props.theme.borderRadius.lg};
  padding: ${props => props.theme.spacing.lg};
  box-shadow: ${props => props.theme.shadows.md};
  margin: ${props => props.theme.spacing.md};
`

const Card = ({ title, children, ...props }) => {
  return (
    <StyledCard {...props}>
      {title && <h2>{title}</h2>}
      {children}
    </StyledCard>
  )
}

export default Card 