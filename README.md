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

Once you land, the real game begins on a **big world ringed by tall mountains**.
The ground has **hills and valleys** (the low valleys are where **Quartz**
hides). The **Terraformation Index** is uncapped — it climbs as you mine, heat,
and build. Every **1 minute, 10 random rocks appear near your base** so you
never run dry.

**🫧 Oxygen (Survival mode):** you land in a **capsule** that keeps you alive.
Step away from it and you've got **60 seconds of oxygen** (shown top-centre) —
get back to the capsule, or inside a **Habitation Module** (build one with a
door), to refill. Run out and you're rescued back to the capsule. In **Creative**
mode oxygen is infinite. **At Terraformation Index 2,800 the whole planet's air
becomes breathable** — the suit timer disappears and you have **infinite oxygen
everywhere**, free to roam without a capsule or base. 🌬️

| Key / input | Action |
|---|---|
| **X** | Pull out / put away the **mining tool** (starts at Lv 1) |
| **Hold click** | Mine the rock you're aiming at — **hold ~5 seconds** (progress bar) |
| **Click** | Place a building (when one is selected) |
| **M** | **Material map** — top-down view of where each rock is |
| **B** | **Build menu** — craft & place structures |
| **Scroll wheel** | Rotate the building you're about to place |
| **F** | Open a nearby **storage chest** |

**Rocks** (mining-tool only): 🪨 Iron (gray, 1–2) — now **by far the most common**,
⚙️ Titanium (dark gray, 1–2), 🔷 Silicon (blue, for glass, 1–3), and 💎 Quartz
(found in valleys, now **a bit more common** than before). **Mining takes about
5 seconds** — aim a rock and **hold** the mine button; a progress bar fills, and
the rock breaks when it's full.

**Buildables** — Tier 1 is available from the start; Tier 2 and the Rain
Generator **unlock by Terraformation Index** (the build menu shows a 🔒 with the
number until you reach it):

| Item | Cost | Unlocks at | Does |
|---|---|---|---|
| 🔥 T1 Heater | 2 iron | start | Starter build — warms Mars: **+2 Index every 8s** |
| 🛠️ T1 Pressure Drill | 2 iron · 1 titanium | start | **+1 Index every 10s** (always, no power needed) + mines nearby rocks |
| 🔋 T1 Solar Panel | 2 silicon · 1 iron | start | Produces 10⚡ |
| 🏠 T1 Habitation Module | 5 iron · 1 silicon | start | Solid dome (can't walk through) · unlimited oxygen |
| 🚪 Pressure Lock Door | 3 silicon · 1 titanium · 2 iron | start | Placed on a dome — opens it so you can walk inside |
| 📦 T1 Storage Chest | 1 iron | start | 20 storage slots |
| ⛏️ T2 Pressure Drill | 4 iron · 2 titanium | **500** | **+2 Index every 8s** · bigger, steel look |
| 🧰 T2 Storage Chest | 2 iron · 1 silicon | **500** | 40 storage slots · bigger |
| ♨️ T2 Heater | 3 iron · 1 silicon | **500** | +4 Index every 7s |
| 🌋 T3 Heater | 5 iron · 2 silicon · 1 titanium | **1350** | +6 Index every 6s |
| 🏛️ T2 Habitation Base | 5 iron · 2 silicon · 2 titanium | **500** | Even bigger glassy dome |
| 🌧️ T1 Rain Generator | 2 quartz · 2 iron · 2 silicon | **1500** | Each adds **+5% rain chance** — rain speeds terraforming |
| 🔆 T2 Solar Panel | 5 silicon · 2 iron | **1500** | Produces 25⚡ · bigger, darker |
| 🌱 T1 Plant Generator | 3 silicon · 2 iron · 1 quartz | **3000** | Grows grass every 6s, a tree every 12s |
| 🌿 T2 Plant Generator | 5 silicon · 3 iron · 2 quartz | **3500** | 2× grass & trees each cycle |
| 🌳 T3 Plant Generator | 8 silicon · 5 iron · 2 titanium · 3 quartz | **4000** | 3× grass & trees each cycle |
| 🗄️ T3 Storage Chest | 3 iron · 2 silicon | **4250** | 60 storage slots |
| ⛈️ T2 Rain Generator | 4 quartz · 3 iron · 3 silicon | **4250** | Each adds **+10% rain chance** (cap 50%) |
| ⚒️ T3 Pressure Drill | 7 iron · 3 titanium · 1 quartz | **5000** | **+3 Index every 6s** · biggest |
| ☀️ T3 Solar Panel | 8 silicon · 4 iron | **5000** | Produces 50⚡ |
| 🏙️ T3 Habitation Base | 8 iron · 4 silicon · 3 titanium | **5000** | Huge glassy dome (radius 12) |

Trees from Plant Generators now sprout **anywhere on dry land** across the map
(not just by the generator), up to **20 trees** total.

**The planet transforms as the Index climbs:**

- **500** → the sky starts turning from dusty red toward **blue**, clouds fade
  in, and Tier 2 unlocks.
- **1500** → **Rain Generators** and the T2 Solar Panel unlock.
- **2000** → the sky is **fully blue** and the **oceans are full** (water fills
  the valleys). 🌍
- **2800** → the **air becomes breathable** — infinite oxygen everywhere, no more
  suit timer. 🌬️
- **3000** → **Plant Generators** unlock. Build them to grow grass and trees.
- **4250** → **T3 Chest** and **T2 Rain Generator** unlock.
- **4500** → the **ground turns green** in **random spots across the dry land**
  (and along the water's edge) over time — needs a **Plant Generator** built.
- **5000** → **Tier 3** unlocks: T3 Drill, T3 Solar, T3 Base.
- **🏆 Win / end the game:** reach **20,000 Terraformation Index**. You're
  teleported back to the space station, and looking out the window you see a
  living, blue-and-green terraformed Mars (10-second look, then back to the
  menu). Trees and grass are now just for life/decoration — they don't end the
  game.

> **v0.5 big update:** Tier 3 everything (drill, solar, chest, habitat base) +
> a T2 Rain Generator, trees now sprout anywhere on the map (max 20), and the
> grass (a little darker) spreads from Index 4,500 once you've built a Plant
> Generator.
>
> **Latest tuning:** 🪨 iron is now by far the most common rock (quartz a little
> more common too), mining a rock takes **~5 seconds of holding** (progress bar),
> grass now appears as **random spots across the land** at Index 4,500, and the
> game now ends at **20,000 Index**.

### 🎛️ Two ways to play (menu at the start)

- **🚀 Survival** — the full story: station → lasers → mine & build your way up.
- **✦ Creative** — everything unlocked, **unlimited resources**. Mars still
  starts barren, so you still have to terraform it (reach 20,000 Index to win) —
  just without the grind.

### 📱 Mobile / touch

Works on phones and tablets. On a touch screen you get an on-screen **joystick**
(bottom-left) to move, **drag anywhere** to look around, and tap buttons
(bottom-right) for **USE** (mine / place / fire), **F**, **BAG**, **TOOL**,
**MAP**, and **BUILD**. Inventory drag-and-drop works with your finger too.

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
