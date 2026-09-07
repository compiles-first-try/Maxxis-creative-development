# 🚀 Space Explorer — v1.5

A 3D space game you fly in your browser. Five galaxies, each a black hole ringed
by star systems, filled with richly-textured worlds you can actually land on.
**Out of early access — this is the full release, now with multiplayer.**

## 👥 Multiplayer

On the start screen pick **Host** (you get a network password like `nova-4821`)
or **Join** (type the host's password). Everyone who types the *same password*
shares one universe and sees each other's ships fly around live. A wrong password
just puts you in a different room, so the password controls who can join.

> **Note:** the game is a single offline file with no server, so "same password"
> links players in the **same browser (multiple tabs/windows) or behind one local
> server** — not across the open internet. True internet play would need a relay
> server, which a static HTML file can't run.

## ▶️ Play it

**No install.** Open **`Space-Explorer.html`** in any modern browser
(double-click it). It's one self-contained file — the 3D engine is bundled in,
so it even works with **no internet**.

## 🎮 Controls

| Key / input | Action |
|---|---|
| **W / S** | Thrust forward / back |
| **A / D** | Turn left / right |
| **Right-drag** | Aim the ship (fly wherever you look) |
| **Space** | Climb · **F** Dive |
| **H** | 🛸 Hover (on a planet) — hold altitude without hopping |
| **Shift** | Boost |
| **Q + W** | ⚡ Hyperspeed (cross the galaxy) |
| **E** | 🌀 Open a portal (when near one) to jump to any system |
| **P** | First-person (cockpit) view |

## 🌌 The universe

- **3 galaxies**, each wrapped in a glowing **bubble** and centered on a
  **black hole** (event horizon + accretion disk).
- Inside a galaxy you see only *that* galaxy; fly out into **intergalactic
  space** and every galaxy's bubble appears — pick your next one and fly (or
  portal) there.
- Each galaxy holds **5–7 star systems** with **1, 2, or 3 suns**.
- **Sol** (your start) is always a single yellow star.
- Every system has **3–7 planets**, each with its own procedural texture
  (earth, gas giant, ice, lava, toxic, rocky, craters, desert), atmospheres,
  rings, moons, and some with lumpy bulges.

## 🛬 Landing

Touch any planet or moon to drop onto its **surface** — the ground is painted
and textured to match the world, the sky shows the system's 1–3 suns, ringed
worlds show their rings arcing overhead, and crater worlds have real pits carved
into the terrain. Hold **Space** to climb back into space.

## 🏆 Goal

Explore and **land on every world in the universe** — do it and you'll see
**UNIVERSE COMPLETE!** The counter (top-left) tracks your progress.

## 🛠️ Built with

- [Three.js](https://threejs.org/) (bundled locally — no build step, no internet)
- A single `index.html` (dev) → built into `Space-Explorer.html` (one-file game)
  via `node build-standalone.js`
- See `CHANGELOG.md` for the full v0.1 → v1.0 journey.
