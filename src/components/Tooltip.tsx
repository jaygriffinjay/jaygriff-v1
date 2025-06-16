import styled from 'styled-components'
import { TooltipProps } from '../types'

const TooltipContainer = styled.div`
  position: relative;
  display: inline-block;
`

const TooltipContent = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  background-color: ${props => props.theme.colors.surface};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.md};
  padding: ${props => props.theme.spacing.xs};
  margin-top: ${props => props.theme.spacing.xs};
  min-width: 160px;
  box-shadow: ${props => props.theme.shadows.md};
`

const TooltipList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

const TooltipItem = styled.li`
  padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.sm};
  color: ${props => props.theme.colors.textLight};
  font-size: ${props => props.theme.typography.fontSize.sm};
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    color: ${props => props.theme.colors.primary};
    background-color: ${props => props.theme.colors.background};
  }
`

const Tooltip = ({ trigger, items, isOpen, onClose, onItemClick }: TooltipProps) => {
  if (!isOpen) return trigger

  return (
    <TooltipContainer>
      {trigger}
      <TooltipContent>
        <TooltipList>
          {items.map((item, index) => (
            <TooltipItem 
              key={index}
              onClick={() => {
                onItemClick?.(item.href)
                onClose?.()
              }}
            >
              {item.label}
            </TooltipItem>
          ))}
        </TooltipList>
      </TooltipContent>
    </TooltipContainer>
  )
}

export default Tooltip 