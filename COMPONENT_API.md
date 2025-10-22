# Component API Documentation

## Navigation Components

### `Navbar`

Main navigation component with glassmorphism effect.

**Props**: None (self-contained)

**Features**:
- Responsive design
- Dropdown menus
- CTA buttons
- Sticky positioning
- Backdrop blur effect

**Usage**:
```tsx
import Navbar from '@/components/Navbar';

<Navbar />
```

---

## Hero Section

### `Hero`

Main hero section with animated headings and CTAs.

**Props**: None

**Features**:
- Animated text reveal
- Responsive typography
- Decorative background elements
- Multiple CTA buttons
- Animated logo elements

**Usage**:
```tsx
import Hero from '@/components/Hero';

<Hero />
```

---

## Feature Sections

### `RetentionSection`

Displays customer retention features with animated insight cards.

**Props**: None

**Features**:
- Animated scrolling cards
- Hover effects
- Gradient backgrounds
- Real-time data visualization

**Usage**:
```tsx
import RetentionSection from '@/components/RetentionSection';

<RetentionSection />
```

### `EngagementSection`

Shows engagement tools and channels.

**Props**: None

**Features**:
- Grid layout of features
- Icon-based cards
- Staggered animations

**Usage**:
```tsx
import EngagementSection from '@/components/EngagementSection';

<EngagementSection />
```

### `CustomerDataSection`

Showcases customer data management features.

**Props**: None

**Features**:
- Feature cards with metrics
- Badge indicators
- Scale animations

**Usage**:
```tsx
import CustomerDataSection from '@/components/CustomerDataSection';

<CustomerDataSection />
```

---

## Product Features

### `AutomationAnalytics`

Dual-card section showing automation and analytics capabilities.

**Props**: None

**Features**:
- Side-by-side cards
- Gradient backgrounds
- Interactive elements
- Staggered list animations

**Usage**:
```tsx
import AutomationAnalytics from '@/components/AutomationAnalytics';

<AutomationAnalytics />
```

---

## Industry Section

### `Industries`

Grid of industry cards showing served verticals.

**Props**: None

**Features**:
- 4-column responsive grid
- Hover lift effects
- Color-coded by industry
- Icon displays

**Usage**:
```tsx
import Industries from '@/components/Industries';

<Industries />
```

---

## Social Proof

### `Testimonials`

Horizontal scrolling testimonial cards.

**Props**: None

**Features**:
- Circular card design
- Avatar display
- Horizontal scroll
- Multiple rows

**Usage**:
```tsx
import Testimonials from '@/components/Testimonials';

<Testimonials />
```

---

## Process Section

### `HowItWorks`

Step-by-step process visualization with statistics.

**Props**: None

**Features**:
- Oval card layouts
- Percentage statistics
- Scroll-triggered animations
- CTA section at bottom

**Usage**:
```tsx
import HowItWorks from '@/components/HowItWorks';

<HowItWorks />
```

---

## Footer

### `Footer`

Comprehensive footer with links and information.

**Props**: None

**Features**:
- Multi-column layout
- Sectioned navigation
- Social media links
- Copyright information
- Responsive grid

**Usage**:
```tsx
import Footer from '@/components/Footer';

<Footer />
```

---

## Animation Patterns

### Common Animation Props

All components use Framer Motion with these common patterns:

#### Fade In from Bottom
```tsx
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.5 }}
```

#### Scale on Hover
```tsx
whileHover={{ scale: 1.05 }}
transition={{ duration: 0.3 }}
```

#### Slide In from Side
```tsx
initial={{ opacity: 0, x: -50 }}
animate={{ opacity: 1, x: 0 }}
transition={{ duration: 0.8 }}
```

#### Staggered Children
```tsx
{items.map((item, index) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
  >
    {item}
  </motion.div>
))}
```

---

## Styling Conventions

### Tailwind Classes

Components follow these patterns:

#### Containers
```tsx
className="max-w-[1440px] mx-auto px-6"
```

#### Sections
```tsx
className="py-20 px-6"
```

#### Cards
```tsx
className="bg-white border rounded-[24px] p-6"
```

#### Buttons
```tsx
className="bg-primary text-white px-6 py-3 rounded-5xl"
```

#### Gradients
```tsx
className="bg-gradient-to-b from-[color1] to-[color2]"
```

---

## Responsive Behavior

All components are responsive by default using Tailwind breakpoints:

```tsx
className="text-[40px] md:text-[60px] lg:text-[80px]"
className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
className="hidden lg:flex"
```

**Breakpoints**:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1440px

---

## Accessibility

### Best Practices Used

- Semantic HTML elements
- Proper heading hierarchy
- Alt text for images (when added)
- Keyboard navigation support
- Focus states on interactive elements
- ARIA labels where needed

### Adding ARIA Labels

```tsx
<button aria-label="Open menu">
  <MenuIcon />
</button>
```

---

## Customization Guide

### Changing Colors

Update `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    DEFAULT: "#9747ff", // Change this
    dark: "#862ef8",
  },
}
```

### Adjusting Animations

Modify animation duration:

```tsx
transition={{ duration: 0.8 }} // Increase for slower
```

Disable animations:

```tsx
// Remove Framer Motion props
// Or set `animate` to match `initial`
```

### Modifying Layout

Change max width:

```tsx
// From
className="max-w-[1440px]"

// To
className="max-w-[1920px]"
```

---

## Performance Tips

### Lazy Loading Components

```tsx
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <Skeleton />,
  ssr: false,
});
```

### Memoization

```tsx
import { memo } from 'react';

const OptimizedComponent = memo(function Component({ data }) {
  return <div>{data}</div>;
});
```

### Image Optimization

```tsx
import Image from 'next/image';

<Image
  src="/image.jpg"
  alt="Description"
  width={600}
  height={400}
  priority // For above-fold images
  loading="lazy" // For below-fold images
/>
```

---

## Testing

### Component Testing Example

```tsx
import { render, screen } from '@testing-library/react';
import Navbar from '@/components/Navbar';

describe('Navbar', () => {
  it('renders logo', () => {
    render(<Navbar />);
    expect(screen.getByText('tribly.')).toBeInTheDocument();
  });
});
```

---

## Future Enhancements

Potential additions to components:

- [ ] Add prop types for customization
- [ ] Create Storybook documentation
- [ ] Add unit tests
- [ ] Implement error boundaries
- [ ] Add loading states
- [ ] Create theme variants
- [ ] Add internationalization
- [ ] Implement dark mode

