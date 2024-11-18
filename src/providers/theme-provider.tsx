'use client'

import * as React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
// import type { ThemeProviderProps } from "next-themes/dist/types";

interface Props {
  children: React.ReactNode
  /** Type of attribute used in theme selection (e.g., class, data-*) */
  attribute?: 'class' | 'data-theme'
  /** Default theme name (system, light, dark, or custom) */
  defaultTheme?: string
  /** Enable system theme detection */
  enableSystem?: boolean
  /** Disable theme transitions on page load */
  disableTransitionOnChange?: boolean
  /** Force theme switching */
  forcedTheme?: string
  /** Disable storing theme setting in localStorage */
  disableLocalStorage?: boolean
  /** Theme value storage key */
  storageKey?: string
  /** List of themes */
  themes?: string[]
  /** Element to apply theme attributes to */
  nonce?: string
}

export function ThemeProvider({ children, ...props }: Props) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
