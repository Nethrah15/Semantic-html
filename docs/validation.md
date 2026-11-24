# Validation Report - SWYNEX Task 3

## W3C HTML Validator
- Tool: https://validator.w3.org/nu/
- File tested: index.html
- Result: 0 Errors, 0 Warnings
- Date: 24 Nov 2026

## Checks Passed
- [x] DOCTYPE html present
- [x] lang="en" on html
- [x] meta charset + viewport present
- [x] All images have alt (no images used, decorative none)
- [x] All inputs have label / aria-label
- [x] Table has caption, thead, tbody, scope="col"
- [x] Dialogs have aria-modal="true" + aria-labelledby
- [x] Skip link targets #main, main has id="main"
- [x] No outline:none anywhere
- [x] Form error uses role="alert" + aria-live="assertive"

## Keyboard Test
- Tab / Shift+Tab - moves through all links, buttons, inputs in logical order
- Enter - activates buttons, opens modal
- Esc - closes modal, focus returns to trigger button
- No keyboard trap - user can Tab out of modal and close it

## Screen Reader Test
- NVDA / VoiceOver reads landmarks: banner, navigation, complementary, main, contentinfo
- Headings in order: h1 > h2 > h3 > h4, no skipped levels
- Form hints announced via aria-describedby
- Required fields announced via aria-required + required

## Contrast
- Body text #1a1a1a on #ffffff = 15.9:1 - PASS (WCAG AAA)
- Header #ffffff on #0f172a = 17.4:1 - PASS
- Focus outline #2563eb - 3px solid, visible

## Conclusion
Project passes Semantic HTML5 + WCAG 2.1 AA requirements.
