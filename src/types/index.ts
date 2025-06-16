// Theme Types
export interface ThemeColors {
  primary: string
  secondary: string
  accent: string
  background: string
  surface: string
  text: string
  textLight: string
  border: string
  success: string
  warning: string
  error: string
  info: string
  dark: {
    background: string
    surface: string
    text: string
    textLight: string
  }
}

export interface ThemeTypography {
  fontFamily: {
    heading: string
    body: string
    mono: string
  }
  fontSize: {
    xs: string
    sm: string
    base: string
    lg: string
    xl: string
    '2xl': string
    '3xl': string
    '4xl': string
  }
  fontWeight: {
    normal: number
    medium: number
    semibold: number
    bold: number
  }
  lineHeight: {
    normal: number
    relaxed: number
    tight: number
  }
}

export interface ThemeSpacing {
  xs: string
  sm: string
  md: string
  lg: string
  xl: string
  '2xl': string
  '3xl': string
}

export interface ThemeBorderRadius {
  none: string
  sm: string
  md: string
  lg: string
  xl: string
  full: string
}

export interface ThemeShadows {
  sm: string
  md: string
  lg: string
}

export interface ThemeTransitions {
  normal: string
  fast: string
  slow: string
}

export interface ThemeZIndex {
  hide: number
  base: number
  dropdown: number
  sticky: number
  fixed: number
  modal: number
  popover: number
  tooltip: number
}

export interface ThemeBreakpoints {
  xs: string
  sm: string
  md: string
  lg: string
  xl: string
  '2xl': string
}

export interface ThemeContainer {
  sm: string
  md: string
  lg: string
  xl: string
  '2xl': string
}

export interface Theme {
  colors: ThemeColors
  typography: ThemeTypography
  spacing: ThemeSpacing
  borderRadius: ThemeBorderRadius
  shadows: ThemeShadows
  transitions: ThemeTransitions
  zIndex: ThemeZIndex
  breakpoints: ThemeBreakpoints
  container: ThemeContainer
}

// Component Props Types
export interface HeadingProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  margin?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  children: React.ReactNode
}

export interface TextProps {
  as?: 'p' | 'span' | 'div'
  variant?: 'body' | 'small' | 'caption' | 'lead'
  children: React.ReactNode
}

export interface LinkProps {
  href: string
  variant?: 'primary' | 'secondary' | 'muted'
  children: React.ReactNode
  className?: string
  target?: string
  rel?: string
  style?: React.CSSProperties
}

export interface ListProps {
  spacing?: 'tight' | 'normal' | 'loose'
  listStyle?: 'disc' | 'circle' | 'square' | 'none' | 'custom'
  children: React.ReactNode
  style?: React.CSSProperties
}

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
}

export interface CardProps {
  children: React.ReactNode
  title?: string
  padding?: string
}

export interface ContainerProps {
  children: React.ReactNode
  maxWidth?: string
  padding?: string
}

export interface NavbarProps {
  children?: React.ReactNode
}

export interface ThemeToggleProps {
  children?: React.ReactNode
}

export interface TooltipProps {
  trigger: React.ReactNode
  items: Array<{
    label: string
    href: string
  }>
  isOpen: boolean
  onClose: () => void
  onItemClick: (href: string) => void
}

export interface BreadcrumbProps {
  items: Array<{
    label: string
    href?: string
  }>
}

// Theme Context Types
export interface ThemeContextType {
  isDarkMode: boolean
  toggleTheme: () => void
  theme: Theme
}

// Styled Components Props
export interface StyledProps {
  $variant?: string
  $margin?: string
  $spacing?: string
  $listStyle?: string
  $isDarkMode?: boolean
} 