### Using the `ActionButton` Component

The `ActionButton` is a polymorphic component, meaning it can render as
different HTML elements or React components depending on the `as` prop.

#### 1. Render as a standard `<button>` (default)

```tsx
<ActionButton label="Click Me" onClick={() => console.log("clicked")} />
```

#### 2. Render as a Gatsby `<Link>`

```tsx
<ActionButton as={Link} to="/order" label="Order Now" />
```

#### 3. Render as an `<a>` tag

```tsx
<ActionButton as="a" href="https://example.com" label="Visit Site" />
```

#### 4. Add an icon

```tsx
<ActionButton
  label="Get Started"
  icon={<ChevronIcon />}
  onClick={handleClick}
/>
```

#### 5. Change the variant (color scheme)

```tsx
<ActionButton
  label="Primary Action"
  variant="pink"  // default
/>

<ActionButton
  label="Secondary Action"
  variant="teal"
/>
```

### Props

| Prop      | Type                 | Default     | Description                                 |
| --------- | -------------------- | ----------- | ------------------------------------------- |
| `label`   | `string`             | _required_  | The button text                             |
| `icon`    | `React.ReactNode`    | `undefined` | Optional icon to display before the label   |
| `variant` | `"pink"` \| `"teal"` | `"pink"`    | Color scheme variant                        |
| `as`      | `React.ElementType`  | `"button"`  | The element or component to render as       |
| `to`      | `string`             | `undefined` | Path for Gatsby Link (use with `as={Link}`) |
| `href`    | `string`             | `undefined` | URL for anchor tag (use with `as="a"`)      |
| `onClick` | `() => void`         | `undefined` | Click handler function                      |

### Examples

**Full example with all options:**

```tsx
import { ActionButton } from "../components/ActionButton/ActionButton";
import { Link } from "gatsby";
import StarIcon from "../assets/star-icon.svg";

// Button with icon and pink variant
<ActionButton
  label="Order Wings"
  icon={<StarIcon />}
  variant="pink"
  onClick={() => handleOrder()}
/>

// Gatsby Link with teal variant
<ActionButton
  as={Link}
  to="/menu"
  label="View Menu"
  variant="teal"
/>
```
