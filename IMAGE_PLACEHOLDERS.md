# Updated Image Placeholder Guide

This guide shows where to add your images to replace the placeholders throughout the AltaServ website.

---

## 📍 About Section

**Location**: `/src/components/About.jsx`

**Placeholder**: AI + Human Collaboration visual (🤝 emoji)

**To Replace**:
Find this comment:
```jsx
{/* Replace with: <img src="/img/about-visual.svg" alt="AI Transformation" className="w-full h-full object-contain" /> */}
```

**Your Image**:
- Path: `/public/img/about-visual.svg` (or `.png`)
- Size: 600x600px
- Type: Illustration or diagram showing AI-human collaboration
- Style: Modern, technical, matches brand colors

---

## 📍 Service Icons

**Location**: `/src/components/Services.jsx`

**Placeholders**: Lightning bolt SVG icons (appears on all 4 service cards)

**To Replace**:
Find this comment:
```jsx
{/* Icon placeholder - replace with your icons */}
```

You can either:
1. Replace the SVG code with custom SVG icons
2. Use image files: `<img src="/img/icon-strategy.svg" className="w-6 h-6" />`

**Services needing icons**:
- AI Strategy
- Automation Design  
- Custom Agentic Systems
- Application development

---

## 📍 Impact/Beliefs Section

**Location**: `/src/components/CaseStudies.jsx`

**Placeholders**: Currently trying to load images from `/img/case-1.png` through `/img/case-4.png`

**Your Images**:
Add these 4 images to `/public/img/`:
- `case-1.png` - "We hire the best" 
- `case-2.png` - "We use AI (a lot)"
- `case-3.png` - "We charge on outcomes"
- `case-4.png` - "We pay on outcomes"

**Size**: 300x200px each
**Type**: Photos, graphics, or illustrations

---

## 📍 Team Section

**Location**: `/src/components/Team.jsx`

**Placeholder**: Team photo (👥 emoji)

**To Replace**:
Find this comment:
```jsx
{/* Replace with: <img src="/img/team-visual.jpg" alt="Our Team" className="w-full h-full object-cover rounded-xl" /> */}
```

**Your Image**:
- Path: `/public/img/team-visual.jpg` (or `.png`)
- Size: 800x500px
- Type: Professional team photo or company values graphic
- Style: Professional, welcoming

---

## 📍 Value Propositions (About Section)

**Status**: ✅ Already using emoji icons (🔒, 📈, 🎯)

You can replace these with custom icons if desired by editing the icon values in the array in `About.jsx`.

---

## Quick Reference

| Section | Location | Placeholder | Image Path | Size |
|---------|----------|-------------|------------|------|
| About | About.jsx | 🤝 | `/img/about-visual.svg` | 600x600px |
| Services | Services.jsx | ⚡ | `/img/icon-*.svg` | 64x64px |
| Impact Cards | CaseStudies.jsx | Images | `/img/case-1.png` - `case-4.png` | 300x200px |
| Team | Team.jsx | 👥 | `/img/team-visual.jpg` | 800x500px |

---

## How to Add Images

1. Create the `/public/img/` directory if it doesn't exist
2. Add your image files with the exact names mentioned above
3. The website will automatically load them
4. No code changes needed - just replace the files!

---

## Optional: Contact Section

You could also add an illustration above the contact form if desired. Location: `Contact.jsx`
