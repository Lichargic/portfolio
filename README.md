<div align="center">

![header](https://capsule-render.vercel.app/api?type=waving&color=E09A35&height=160&section=header&text=Aman%20Malik&fontSize=56&fontColor=fff&animation=fadeIn&fontAlignY=42&desc=Full%20Stack%20Developer%20%C2%B7%20UAE%20%2F%20Remote&descAlignY=65&descAlign=50&descSize=18)

[![Live Site](https://img.shields.io/badge/live-lichargic.com-E09A35?style=for-the-badge&logo=vercel&logoColor=white)](https://lichargic.com)

![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![CSS Modules](https://img.shields.io/badge/CSS_Modules-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

</div>

---

Personal portfolio and case study site, built with Next.js, CSS Modules, and custom hooks. No UI framework.

## How it's built

**Static export:** `output: 'export'` in Next.js config. Deploys to Vercel as pure HTML/CSS/JS with no server.

**Design system:** all colours, spacing, and typography as CSS custom properties in `globals.css`. WCAG 2.1 AA contrast across every token.

**No animation library:** scroll reveals via a single `IntersectionObserver` hook, entrance animations in CSS, blob drifts as keyframes. `prefers-reduced-motion` respected throughout.

**Fonts:** Cormorant Garamond (display), DM Mono (labels/code), Geist Sans (body). All loaded via `next/font` with `display: swap`.

**Tests:** Jest + React Testing Library, co-located with source files. 27 tests covering components and hooks.

## Featured project

**[Angie SkyHelper](https://angie.lichargic.com)** is an NPC-to-Bazaar profit tracker for Hypixel SkyBlock. The case study on this site covers the walk-the-book profit engine, ETag/304 conditional polling, and stale-on-failure caching. [Read it](https://lichargic.com/angie)

<div align="center">

![footer](https://capsule-render.vercel.app/api?type=waving&color=E09A35&height=80&section=footer)

</div>
