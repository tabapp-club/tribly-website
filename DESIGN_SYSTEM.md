# Tribly Design System

## Typography

### Font Families

- **Primary**: Clash Grotesk (Headings, Large Text)
- **Secondary**: Manrope (Body Text, Navigation)

### Font Sizes

```css
- Heading 1: 80px / 60px (tablet) / 40px (mobile)
- Heading 2: 48px
- Heading 3: 40px
- Heading 4: 32px
- Heading 5: 24px
- Body Large: 24px
- Body: 18px
- Body Small: 16px
- Caption: 14px
- Tiny: 10px
```

### Font Weights

- Regular: 400
- Medium: 500
- Semibold: 600
- Bold: 700

## Colors

### Brand Colors

```css
Primary Purple: #9747ff
Primary Dark: #862ef8
```

### Accent Colors

```css
Green: #5abb80
Light Green: #eafff2
Green Dark: #022610

Purple Light: #e2cbff
Purple Extra Light: #f1ecff
Purple Muted: #e1d8ff

Blue: #023e8a
Blue Light: #e2f1fd
Blue Pale: #b2deff

Pink: #feb9ff
Coral: #ffb9ba
```

### Neutral Colors

```css
Black: #090909
Dark Gray: #061026
Background: #F2F2F2
White: #FFFFFF
```

### Status Colors

```css
Success: #13923d
Error: #e51919
Warning: #FFCB45
```

## Spacing Scale

Based on 4px grid system:

```css
xs: 4px
sm: 8px
md: 12px
lg: 16px
xl: 24px
2xl: 32px
3xl: 40px
4xl: 48px
5xl: 64px
6xl: 80px
```

## Border Radius

```css
sm: 8px
md: 16px
lg: 24px
xl: 32px
2xl: 40px
full: 99px (pill shape)
circle: 50% (perfect circle)
```

## Components

### Buttons

#### Primary Button
- Background: #9747ff
- Text: White
- Border: 1px solid #9747ff
- Padding: 24px 24px
- Border Radius: 99px
- Font Size: 20px
- Font Weight: Medium

#### Secondary Button
- Background: White
- Text: #9747ff
- Border: 1px solid #9747ff
- Padding: 24px 24px
- Border Radius: 99px
- Font Size: 20px
- Font Weight: Medium

### Cards

#### Feature Card
- Background: White
- Border: 0.5px solid (varies by section)
- Padding: 24px
- Border Radius: 24px
- Shadow: None (flat design)

#### Testimonial Card
- Height: 200px
- Border: 1px solid black
- Border Radius: 999px (full)
- Padding: 12px

### Navigation

#### Navbar
- Background: White/50% (glassmorphism)
- Backdrop Filter: blur(2.5px)
- Border Radius: 99px
- Padding: 16px 16px
- Shadow: Subtle

### Sections

#### Section Container
- Max Width: 1440px
- Padding: 80px 24px
- Background: Varies by section

#### Feature Section
- Background: Gradient (section-specific)
- Border Radius: 40px
- Padding: 48px

## Animation Guidelines

### Entrance Animations

```css
Duration: 0.5-0.8s
Easing: ease-out
Effects: fade-in, slide-up, scale
```

### Hover Effects

```css
Duration: 0.3s
Easing: ease-in-out
Effects: scale(1.05), translate
```

### Scroll Animations

```css
Trigger: viewport intersection
Once: true (don't repeat)
Stagger: 0.1-0.2s between elements
```

## Grid System

### Breakpoints

```css
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1440px
```

### Layout Grid

- Desktop: 12 columns
- Tablet: 8 columns
- Mobile: 4 columns
- Gap: 24px (desktop), 16px (tablet/mobile)

## Icons

### Size Scale

```css
xs: 16px
sm: 20px
md: 24px
lg: 32px
xl: 48px
2xl: 64px
```

### Style

- Line icons
- Stroke width: 2px
- Rounded caps and joins

## Imagery

### Aspect Ratios

- Hero Images: 16:9
- Feature Images: 4:3
- Avatars: 1:1
- Industry Cards: Custom (based on design)

### Border Radius

- Standard Images: 32px
- Avatars: 50% (circle)
- Feature Images: 24px

## Accessibility

### Contrast Ratios

- Body Text: Minimum 4.5:1
- Large Text (18px+): Minimum 3:1
- Interactive Elements: Minimum 3:1

### Focus States

- Outline: 2px solid #9747ff
- Offset: 2px

### Touch Targets

- Minimum Size: 44x44px
- Spacing: Minimum 8px between targets

## Best Practices

### Do's

✅ Use consistent spacing from the scale
✅ Follow the typography hierarchy
✅ Maintain brand colors
✅ Use subtle animations
✅ Ensure sufficient contrast
✅ Test responsive behavior

### Don'ts

❌ Mix different button styles
❌ Use arbitrary spacing values
❌ Overuse animations
❌ Ignore accessibility guidelines
❌ Break the grid system
❌ Use low-contrast color combinations

## Implementation

All design tokens are defined in `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    DEFAULT: "#9747ff",
    dark: "#862ef8",
  },
  // ... more colors
}
```

Use Tailwind classes following the design system:

```tsx
<button className="bg-primary text-white px-6 py-3 rounded-5xl">
  Button Text
</button>
```

