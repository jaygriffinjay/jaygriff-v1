import styled from 'styled-components'

const StyledContainer = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.md};
`

const Container = ({ children, ...props }) => {
  return (
    <StyledContainer {...props}>
      {children}
    </StyledContainer>
  )
}

export default Container 