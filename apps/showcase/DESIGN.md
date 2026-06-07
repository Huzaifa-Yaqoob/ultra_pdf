---
name: Crimson Precision
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f4'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#5c3f3f'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f0f1f1'
  outline: '#906f6e'
  outline-variant: '#e5bdbb'
  surface-tint: '#bf0128'
  primary: '#91001b'
  on-primary: '#ffffff'
  primary-container: '#be0027'
  on-primary-container: '#ffcbc9'
  inverse-primary: '#ffb3b1'
  secondary: '#5f5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e2dfde'
  on-secondary-container: '#636262'
  tertiary: '#004c6a'
  on-tertiary: '#ffffff'
  tertiary-container: '#00658c'
  on-tertiary-container: '#aedeff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad8'
  primary-fixed-dim: '#ffb3b1'
  on-primary-fixed: '#410007'
  on-primary-fixed-variant: '#92001c'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474746'
  tertiary-fixed: '#c6e7ff'
  tertiary-fixed-dim: '#88cffb'
  on-tertiary-fixed: '#001e2d'
  on-tertiary-fixed-variant: '#004c6b'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  display-xl:
    fontFamily: oxanium
    fontSize: 72px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  display-lg:
    fontFamily: oxanium
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: oxanium
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-lg-mobile:
    fontFamily: oxanium
    fontSize: 28px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: outfit
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: outfit
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: outfit
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.1em
  caption:
    fontFamily: outfit
    fontSize: 12px
    fontWeight: '400'
    lineHeight: '1.4'
spacing:
  unit: 4px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  container-max: 1280px
---

## Brand & Style

This design system embodies a high-contrast, precision-engineered aesthetic. It targets a sophisticated, tech-forward audience that values clarity, speed, and architectural rigor. The brand personality is authoritative yet modern, utilizing a "Sharp Minimalism" style that rejects the trend of rounded softness in favor of geometric confidence.

The emotional response should be one of focused intensity. By stripping away decorative shadows and radii, the UI emphasizes content and action. The aesthetic draws from modern Swiss design and brutalist architecture, refined through a premium lens of luxury technology. High-quality whitespace is used not just as a separator, but as a structural element to frame deep crimson accents.

## Colors

The palette is anchored by a stark, high-contrast relationship between pure white surfaces and a deep, authoritative ruby red.

- **Primary (#BE0027):** A rich, sophisticated red used exclusively for primary calls to action, critical status indicators, and key brand moments.
- **Secondary (#1A1A1A):** An "Off-Black" used for primary text and thin structural borders to maintain readability without the harshness of pure black.
- **Neutral (#FFFFFF):** The foundation of the system. Used for all primary backgrounds to ensure a clean, expansive feel.
- **Accent (#F5F5F5):** A subtle light grey used for secondary containers or hover states to provide depth without breaking the high-contrast narrative.

## Typography

The typography strategy leverages the tension between the technical, sharp-angled nature of the display face and the humanist clarity of the body face.

**Oxanium** is used for all headlines and large display moments. Its geometric, sharp-angled construction mirrors the sharp-edged UI components. Headlines should use tight tracking and leading to create a dense, "blocky" feel that commands attention.

**Outfit** is used for all functional text. It provides a necessary balance, offering high legibility and a contemporary breathability that prevents the design from feeling overly aggressive. Labels and small headers in Outfit should be set in uppercase with increased letter spacing to enhance the architectural feel of the layout.

## Layout & Spacing

The layout follows a strict 12-column fixed-grid system on desktop, shifting to a single-column fluid flow on mobile. The spacing rhythm is based on a 4px baseline, ensuring all elements align with mathematical precision.

- **Grid:** Use a 24px gutter to provide significant "air" between content blocks.
- **Margins:** Desktop margins are generous (64px) to center the content and evoke a gallery-like feeling.
- **Alignment:** Elements should favor "Hard-Edge" alignment. Avoid centered text for long-form content; maintain left-alignment to reinforce the vertical axes of the sharp-edged containers.
- **Sectioning:** Use horizontal rules (1px, #1A1A1A) instead of background color changes to separate major sections, keeping the canvas primarily white.

## Elevation & Depth

This design system explicitly rejects shadows and blurs. Hierarchy is established through **Tonal Layering** and **Thin Outlines**.

- **Surfaces:** Use 1px solid borders (#1A1A1A) for all cards and containers.
- **Layering:** Depth is achieved by "stacking" white containers on top of one another using borders. When an element is "active" or "raised," increase the border weight to 2px rather than adding a shadow.
- **Interactions:** Hover states should utilize solid color fills (e.g., a white button filling with ruby red) rather than moving the element on a Z-axis. This preserves the 2D, architectural integrity of the screen.

## Shapes

The shape language is strictly **Sharp (0px)**. There are no exceptions to this rule.

Every UI element—including buttons, input fields, images, and dropdown menus—must have 90-degree corners. This creates a cohesive, engineered look. To prevent the interface from feeling "stiff," use generous internal padding (at least 16px) within these sharp containers to ensure the content inside has room to breathe.

## Components

- **Buttons:** Large, rectangular blocks. Primary buttons feature a ruby red background with white text. Secondary buttons are white with a 1px black border. On hover, primary buttons should darken slightly, and secondary buttons should fill with the primary red.
- **Input Fields:** 1px black borders on all sides. Labels should be placed above the field in uppercase Outfit. Focus states are indicated by a 2px ruby red border.
- **Cards:** White background, 1px black border. Content should be padded by 32px. Do not use shadows; use a subtle #F5F5F5 background fill to denote a secondary card.
- **Chips/Tags:** Sharp-edged small boxes. Use ruby red text on a white background with a ruby red border for high-visibility tags.
- **Lists:** Separated by 1px horizontal lines. No vertical lines between list items. Use a ruby red square "bullet" for decorative lists.
- **Navigation:** Top-tier navigation should be minimal, utilizing the label-md typography style. The active state is indicated by a 2px ruby red underline that spans the width of the nav item.