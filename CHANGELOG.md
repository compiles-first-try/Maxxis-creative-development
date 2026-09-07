# 📓 Changelog

Every time the game gets better, bump the version and add a line here.

**How to bump:** change the one line `const GAME_VERSION = 'v0.1';` near the
top of the `<script>` in `index.html`, then rebuild the standalone file.

---

## v0.8.1 — aim-to-fly controls
- 🎯 Right-drag now AIMS the ship in full 3D (yaw + pitch): it flies wherever
  you look, and the chase camera follows the ship's nose
- 🚀 The ship model now orients to its true flight direction (nose up/down)
- ⌨️ Dive is now **F** instead of Ctrl (space and surface)

## v0.8 — galaxies, black holes, richer worlds
- 🌌 Three galaxies, each a black hole ringed by 5–7 star systems, placed
  ~130M units apart; the portal menu is grouped by galaxy → system
- 🕳️ Every galaxy has a black hole (event horizon + photon ring + glowing
  accretion disk) that also marks the galaxy from far away; it's solid
- 🪐 Much richer planet textures (earth/gas/ice/lava/toxic/rocky/craters/
  desert with fractal blobs, clouds, storms, ice caps) + atmosphere glow
- ☀️ A planet's surface sky now shows its system's 1, 2, or 3 suns
- ⚡ Hyperspeed is far faster (3000× thrust) and you can fly between
  galaxies directly, not just via portals
- 💡 One distance-limited light per system so many systems stay performant

## v0.7.5 — 30× galaxy & hyperspeed
- 🌌 Every star system now sits 30× farther apart (`SYSTEM_SPREAD = 30`);
  far plane and starfield grown to match
- 🔦 Beacons now hold a constant on-screen size so distant systems stay
  findable across millions of units, and fade out once you arrive
- ⚡ Hold **Q + W** for hyperspeed — a huge thrust multiplier plus a
  FOV "whoosh" and a HYPERSPEED indicator — to cross the galaxy fast

## v0.7 — eight systems, portals & multi-star systems
- 🌌 Eight named star systems (up from three), spread far across space
- ⭐ Systems can have one, two, or three suns orbiting the centre
- 🪐 Some planets are now lumpy — a random bulge deforms the sphere
- 🌀 Every system has a portal: fly to it, press **E**, and pick any system
  to travel to instantly
- 🧭 A top-centre readout shows the system you're in, and an "ENTERING …"
  banner appears each time you arrive in a new system

## v0.6.7 — cratered regolith surface texture
- 🌑 Crater worlds' SURFACE now uses a dense procedural cratered-regolith
  texture (embossed craters, seamless tiling), grayscale so it tints to
  each planet's colour; applied only to the surface ground of crater worlds

## v0.6.6 — craters carved into the ground (bug fix)
- 🕳️ Craters are now sculpted INTO the terrain instead of sitting on top:
  the ground mesh is subdivided and its vertices are pushed down into
  cone-shaped pits (sharp point at the centre), coloured via vertex colors
  and shaded by recomputed normals — still non-overlapping

## v0.6.5 — deep craters, capsule ship, farther systems
- 🕳️ Surface craters are now real 3-D bowls with depth, placed via
  rejection sampling so they never overlap
- 🚀 Ship remodeled as a Starliner-style gumdrop capsule (white body,
  domed nose, dark service module, metallic docking ring)
- 🌌 The three star systems are pushed much farther apart; far plane and
  starfield grown to match, star points enlarged to stay visible

## v0.6 — binary star, surface rings, surface craters
- ⭐⭐ The red system (Ember) is now a **binary star** — two stars orbiting
  the system centre, each casting its own light; the no-land zone wraps both
- 💍 Landing on a **ringed planet** now shows its rings arcing across the sky
- 🌑 Crater-textured planets got **multi-colored craters** in their texture,
  and landing on one scatters real **craters across the ground**

## v0.5 — three star systems, unique planet textures
- 🎚️ Up/down thrust is now much gentler via a `VERT_SENS = 0.35` dial
- 🌌 Three separate star systems placed far apart; system 0 is where you spawn
- 🔦 Each system has a faint glowing beacon halo that fades in from far away
  (and out as you approach) so you can hunt for systems across the dark
- 🪐 Each system holds a random 3–7 planets, each with its own procedural
  texture (bands, rocky, craters, swirl, ice, patches, lava, dunes) and hue
- 🔢 "Bodies visited" total is now computed from the actual world count
- 🔭 Far plane, starfield radius, and per-system point lights scaled up to suit

## v0.4.6 — vertical jerk fix, first-person, tight fast-follow
- 🎢 Fixed hard jerk when climbing/diving: the chase camera now tracks its
  target much tighter (no lag-then-snap on fast vertical moves)
- 👁️ Press **P** to toggle first-person (cockpit) view; ship hides while inside
- 🏎️ Camera follows tighter the faster you fly (`glue` term), staying right
  next to the ship at speed while turns stay smooth

## v0.4.5 — smoother camera (bug fix)
- 🎥 Fixed sharp/whippy camera swings while turning: the chase camera now
  eases its follow-yaw (wrap-safe, shortest-path) and aims at a smoothed
  look-target instead of snapping rigidly behind the ship

## v0.4 — split size & distance dials
- 🔀 Split the single `WORLD` dial into two: `BODY_SCALE = 10` (how big
  planets & star are) and `DIST_SCALE = 20` (how far apart everything sits)
- 🌌 Planets now orbit **20× further** out and moons sit 20× further from
  their planets — same-size worlds, twice the spacing of v0.3
- 🚀 Ship thrust, start position, and starfield radius follow `DIST_SCALE`
  so travel stays snappy and stars stay behind the worlds

## v0.3 — landable surface worlds
- 🌍 Touching a planet or moon now drops you into a **separate flat world**
  painted with that body's color + a procedural terrain texture and matching
  hazy sky/fog
- 🛬 Land and drive around on the surface (gentle gravity holds you down)
- 🚀 Climb past `LIFTOFF_HEIGHT` (1500) to blast back into the solar system,
  popping out right next to the world you left (2s no-re-land cooldown)
- 🎥 Camera snaps cleanly on each room switch; surface HUD shows altitude

## v0.2 — giant worlds & free-look
- 🪐 Planets & star scaled up **10×** (`WORLD = 10`); orbit distances and the
  starfield grow to match so nothing overlaps, and the ship stays tiny
- 🚀 Ship thrust scaled to the bigger world so travel stays snappy
- 🖱️ **Right-click + drag to look around** the ship (free-orbit camera);
  it drifts back behind you when you thrust forward
- 💡 Sun light reaches the now-distant planets; log depth buffer added

## v0.1 — first playable
- ☀️ Glowing sun in the center (always the biggest body)
- 🪐 Five well-separated planets: Rustar, Verda, Azuria, Cirene, Ferox
- 🌙 Moons: Lume (Verda), Vex + Nyx (Cirene)
- 🚀 Ship flown with W/A/S/D + Space + Ctrl, plus Shift boost
- 🛬 Land on any planet or moon; "LANDED" banner + visited counter (0/7)
- 🌍 Huge planet radii so surfaces look flat while staying spheres
- 📦 Single-file offline build (`Space-Explorer.html`)
- 🔢 Version badge shown on screen (bottom-right)
- 🚀 Ship scaled way down (0.4×), camera pulled in to match
- 🐢 Global slow-mo dial (`MOTION = 0.12`) — orbits & spins way slower
