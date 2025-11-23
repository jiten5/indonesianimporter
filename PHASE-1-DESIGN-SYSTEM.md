# PHASE 1 DESIGN SYSTEM

## Design Tokens

### Color Palette
| Color Name          | Hex Code  |
|---------------------|-----------|
| Primary Color       | #1E90FF   |
| Secondary Color     | #FF6347   |
| Accent Color        | #FFD700   |
| Background Color    | #FFFFFF   |
| Text Color          | #333333   |

### Typography Scale
| Type                | Font Size  | Weight   |
|---------------------|------------|----------|
| H1                  | 2.5rem     | 700      |
| H2                  | 2rem       | 600      |
| H3                  | 1.75rem    | 500      |
| Body                | 1rem       | 400      |
| Small               | 0.875rem   | 400      |

### Spacing System
| Size                | Value (px) |
|---------------------|------------|
| 0                   | 0          |
| XS                  | 4          |
| SM                  | 8          |
| MD                  | 16         |
| LG                  | 32         |
| XL                  | 64         |

### Shadows
| Shadow              | CSS Value             |
|---------------------|-----------------------|
| Shadow 1            | `0 1px 3px rgba(0, 0, 0, 0.1)` |
| Shadow 2            | `0 3px 6px rgba(0, 0, 0, 0.15)`|
| Shadow 3            | `0 10px 15px rgba(0, 0, 0, 0.2)`|

### Borders
| Border              | CSS Value             |
|---------------------|-----------------------|
| Border Radius       | `4px`                 |
| Border Width        | `1px`                 |
| Border Color        | `#CCCCCC`             |

## Implementation Notes
### Next.js
- Use the `<ThemeProvider>` from `styled-components` to utilize design tokens.

### React
- Create a theme context to provide design tokens across the app.

### TypeScript
- Define types for design tokens to ensure proper usage throughout the app.

### Tailwind CSS
- Extend Tailwind's default configuration to include design tokens for seamless integration.

---

This document serves as a guideline for implementing the design system across the Indonesia Trade Intelligence Platform. Adjustments may be needed based on evolving requirements.