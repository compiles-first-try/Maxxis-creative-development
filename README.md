# 🚀 Space Explorer — v1.9

A 3D space game you fly in your browser. Five galaxies, each a black hole ringed
by star systems, filled with richly-textured worlds you can actually land on.
**Out of early access — this is the full release, now with multiplayer.**

## 👥 Multiplayer

On the start screen pick **Host** (you get a network password like `nova-4821`)
or **Join** (type the host's password). Everyone who types the *same password*
shares one universe and sees each other's ships fly around live. A wrong password
just puts you in a different room, so the password controls who can join.

> **v1.6:** multiplayer is now **real internet play** — when the page is online it
> uses **Supabase Realtime**, so friends anywhere who type your password join your
> universe (shown as 🌐). If Supabase can't load (the offline single file with no
> internet), it automatically falls back to **same-browser** rooms (shown as 🖥️).

## ☁️ Hosting

The hosted version is just `index.html` + `vendor/` served as static files (see
`vercel.json`) — deploy the repo to **Vercel** and it runs as a web app with
internet multiplayer. The downloadable **`Space-Explorer.html`** remains a single
offline file for double-click play.

## 🔴 Also in this repo: Mars Terraform (intro level)

A second game lives here too. You're stranded in a station **orbiting a barren
Mars** at **Terraformation Index 0**. Float around in first person, find the
**2 missing batteries**, drag one into your **✋ hand slot**, feed both into the
**Power Box**, then **click the button** — the lasers fire for 5 seconds, Mars
heats up and changes texture, and you're **teleported to the surface**.

| Key / input | Action |
|---|---|
| **Mouse** | Look (click to lock the pointer) |
| **W A S D** | Move around the station |
| **F** | Pick up a battery · insert it into the Power Box |
| **E** | Open / close your 10-slot inventory |
| **Left-click + drag** | Move items between slots (only the ✋ hand slot can *use* an item) |
| **Left-click** | Press the glowing Power Box button to fire the lasers |

### 🌱 Chapter 2 — Terraform the surface

Once you land, the real game begins. The ground has **hills and valleys** (the
low valleys are where **Quartz** hides). The **Terraformation Index** is now
uncapped — it climbs as you mine and build, and a powered drill keeps raising it.
Every **5 minutes, two random rock types respawn** so you never run dry.

| Key / input | Action |
|---|---|
| **X** | Pull out / put away the **mining tool** (starts at Lv 1) |
| **Click** | Mine the rock you're aiming at (or place a building) |
| **M** | **Material map** — top-down view of where each rock is |
| **B** | **Build menu** — craft & place structures |
| **F** | Open a nearby **storage chest** |

**Rocks** (mining-tool only): 🪨 Iron (gray, 1–2), ⚙️ Titanium (dark gray, 1–2),
🔷 Silicon (blue, for glass, 1–3), and uncommon 💎 Quartz (found in valleys).

**Buildables** — Tier 1 is available from the start; Tier 2 and the Rain
Generator **unlock by Terraformation Index** (the build menu shows a 🔒 with the
number until you reach it):

| Item | Cost | Unlocks at | Does |
|---|---|---|---|
| 🛠️ T1 Pressure Drill | 2 iron · 1 titanium | start | **+1 Index every 10s** (always, no power needed) + mines nearby rocks |
| 🔋 T1 Solar Panel | 2 silicon · 1 iron | start | Produces 10⚡ |
| 🏠 T1 Habitation Module | 5 iron · 1 silicon | start | Solid dome (can't walk through) · unlimited oxygen |
| 🚪 Pressure Lock Door | 3 silicon · 1 titanium · 2 iron | start | Placed on a dome — opens it so you can walk inside |
| 📦 T1 Storage Chest | 1 iron | start | 20 storage slots |
| ⛏️ T2 Pressure Drill | 4 iron · 2 titanium | **500** | **+2 Index every 8s** · bigger, steel look |
| 🧰 T2 Storage Chest | 2 iron · 1 silicon | **500** | 40 storage slots · bigger |
| 🏛️ T2 Habitation Base | 5 iron · 2 silicon · 2 titanium | **500** | Even bigger glassy dome |
| 🌧️ T1 Rain Generator | 2 quartz · 2 iron · 2 silicon | **1500** | Each adds **+5% rain chance** (2=10%, 3=15%, 4=20%) — rain speeds terraforming |
| 🔆 T2 Solar Panel | 5 silicon · 2 iron | **1500** | Produces 25⚡ · bigger, darker |

**The planet transforms as the Index climbs:**

- **500** → the sky starts turning from dusty red toward **blue**, clouds fade
  in, and Tier 2 unlocks.
- **1500** → **Rain Generators** and the T2 Solar Panel unlock.
- **2000** → the sky is **fully blue** and the **oceans are full** (water fills
  the valleys). 🌍

Play it by opening **`Mars-Terraform.html`** (single offline file) or
**`mars-terraform.html`** (dev version, uses `vendor/three.min.js`).

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
