# 🚀 Space Explorer

A tiny 3D space game. One glowing star, five scattered planets (two with moons),
and a ship you fly between them. Land on every world and feel the trick where a
**giant sphere looks like flat ground** under your feet — the same reason Earth
feels flat while being a ball.

## ▶️ How to play

**No install needed.** Just open `index.html` in any modern browser
(double-click it, or drag it into Chrome/Firefox/Edge).

> If a browser ever blocks it, run a tiny local server from this folder:
> `python3 -m http.server` then visit `http://localhost:8000`.

## 🎮 Controls

| Key | Does |
|-----|------|
| **W / S** | Thrust forward / backward |
| **A / D** | Turn left / right |
| **Space** | Climb up |
| **Ctrl** | Dive down |
| **Shift** | Boost (hold with a thrust key) |

Fly toward a planet and get close — the ship rests on the surface and a
**LANDED** banner appears. The proximity bar (top-right) fills up as you near
the closest world.

## 🌍 The worlds

| Body | Type | Notes |
|------|------|-------|
| ☀️ **The Sun** | Star | Always the biggest thing. You can't land on it 🔥 |
| 🪐 **Rustar** | Planet | Rusty red, closest in |
| 🪐 **Verda** | Planet | Green — has a moon: **Lume** 🌙 |
| 🪐 **Azuria** | Planet | Blue, wears a ring 💍 |
| 🪐 **Cirene** | Planet | Purple — has **two** moons: **Vex** and **Nyx** 🌙🌙 |
| 🪐 **Ferox** | Planet | Golden, farthest out |

**Goal:** visit all 7 landable bodies (5 planets + 3 moons). The counter is top-left.

## 🧠 How the "flat but round" illusion works

Think of an ant on a beach ball vs. an ant on a stadium. Same curve rule, but the
stadium is so big the ant sees flat ground. In this game the planets have **huge
radii (70–110 units)**, so when your ship rests on the surface, the curvature is
too gentle to notice — you're genuinely standing on a sphere that just *looks* flat.

## 🛠️ Built with

- [Three.js](https://threejs.org/) (loaded from a CDN — no build step)
- A single `index.html` file. Everything (scene, physics, HUD) lives inside it.
