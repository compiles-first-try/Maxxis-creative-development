# 📓 Changelog

Every time the game gets better, bump the version and add a line here.

**How to bump:** change the one line `const GAME_VERSION = 'v0.1';` near the
top of the `<script>` in `index.html`, then rebuild the standalone file.

---

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
