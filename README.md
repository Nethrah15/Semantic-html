# SWYNEX Task 3 - Semantic HTML5 & Accessible Component Architecture

## What is this?
Enterprise Dashboard built with Semantic HTML5 + WCAG 2.1 AA.

## Structure
- index.html - Accessible multi-page layout: header, nav, sidebar, main, table, forms, modals
- css/style.css - Focus-visible, skip-link, high contrast
- js/app.js - Accessible modal dialogs (Esc to close, focus trap)
- docs/validation.md - W3C Validator proof

## Accessibility Features
- Skip to main content link
- Semantic tags: header, nav, main, section, article, aside, footer
- All form controls have <label>, fieldset, legend, aria-describedby
- Tables have caption, scope, thead/tbody
- Modals use <dialog>, aria-modal, Esc to close, focus returns to button
- Visible focus: 2px solid outline, never outline:none

## How to Run
Just open index.html in browser. No install needed.
Test with keyboard only: Tab / Shift+Tab / Enter / Esc - no mouse needed.

## Validation
Validated with W3C HTML Validator - 0 errors. See docs/validation.md
