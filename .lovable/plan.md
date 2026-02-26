

# Make DevCycleQA More "IT Nerd" Themed

## Overview
Transform the current clean corporate aesthetic into a developer/engineer-focused experience with dark theme, terminal aesthetics, monospace typography, and code-inspired visual elements -- while keeping it professional.

## Key Changes

### 1. Dark Theme as Default
- Switch the page to a dark background (near-black like `#0a0a0f` or `#0d1117` -- GitHub-dark inspired)
- Use green/cyan/amber terminal-style accent colors alongside the existing yellow
- Subtle grid or dot-matrix background pattern (CSS only, no images)

### 2. Terminal-Style Hero Section
- Replace the current heading with a typing/typewriter animation effect: `> initializing qa_pipeline...`
- Show the tagline as a "terminal output" with monospace font and a blinking cursor
- Stats rendered as key-value pairs: `coverage: 3x | regressions: -85% | velocity: +60%`
- CTAs styled as terminal commands: `$ book --strategy-session` and `$ demo --ai-testing`

### 3. Monospace + Code Typography
- Add a monospace font (JetBrains Mono or Fira Code) for headings, labels, and chips
- Service labels styled as inline code tags with backtick styling (e.g., `` `AI Agents` ``)
- Section headings prefixed with `//` comment syntax or `#` like markdown

### 4. Code-Inspired Service Cards
- Replace the yellow/white gradient animation containers with dark cards that look like mini code editors (dark bg, top bar with red/yellow/green dots)
- Service descriptions could have subtle syntax-highlighting style (keywords in different colors)
- Replace the CrashTestLogo chip labels with `<tag>` style brackets: `<AI Agents />`

### 5. Animations Rethemed
- Animation containers styled as terminal windows or IDE panels with a title bar
- Use green-on-dark or cyan-on-dark color scheme for animation elements
- Add a subtle scanline or CRT effect overlay (very faint, CSS only)

### 6. ASCII / Code Decorative Elements
- Replace the scroll indicator chevrons with ASCII art arrows or `v v` characters
- Add faint background code snippets or binary patterns as decorative watermarks
- Section dividers as `// --------` or `/* --- */` styled comment lines instead of gray borders

### 7. Header Restyle
- Logo text in monospace: `DevCycleQA_`  with a blinking underscore cursor
- "Get in Touch" button styled as a terminal command button: `> connect`
- Header background: frosted dark glass effect instead of white

### 8. Footer as Terminal
- Style footer like a terminal session with `$` prompts for links
- Copyright as a code comment: `// (c) 2026 DevCycleQA`

### 9. Quality Impact Section
- Stat cards styled as JSON objects or config values
- Quality meter reimagined as a CLI progress bar: `[=========>    ] 7/10 services active`

### 10. Contact Section
- Form styled as a dark-themed IDE input panel
- Input fields with monospace text and terminal-style labels
- Submit button as `$ submit --request`

## Technical Approach

### Files to modify:
- **`src/index.css`** -- Dark theme variables, monospace font import, grid background, scanline effects, terminal-style utility classes
- **`tailwind.config.ts`** -- Add monospace font family, new keyframes for typing/cursor blink animations
- **`src/components/home/HeroSection.tsx`** -- Terminal-style hero with typing effect and command-style CTAs
- **`src/components/Header.tsx`** -- Dark glass header, monospace logo with cursor
- **`src/components/ServiceSection.tsx`** -- Code-editor styled animation containers, tag-style labels
- **`src/components/home/ServicesSection.tsx`** -- Comment-style heading, updated section styling
- **`src/components/home/QualityImpactSection.tsx`** -- JSON/config-style stat cards
- **`src/components/home/ClientExperienceSection.tsx`** -- Dark theme adaptation
- **`src/components/Contact.tsx`** -- Terminal-themed form styling
- **`src/components/Footer.tsx`** -- Terminal-session style footer
- **`src/components/contact/ContactForm.tsx`** -- Dark input styling
- **`src/components/contact/ContactInfo.tsx`** -- Terminal-style contact info
- **All animation files** -- Recolor from yellow/warm to green/cyan/amber on dark backgrounds

### New additions:
- **Typing animation component** -- Reusable typewriter effect for the hero
- **Terminal window wrapper** -- Reusable component with title bar (dots) wrapping animation panels

### No new dependencies needed
All effects achievable with CSS animations, Tailwind, and existing React patterns.

