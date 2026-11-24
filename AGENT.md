# AGENT.md — post-x-the-agent-builds-a-game-from-20261122-1709

## The task

Make a short video about an AI coding agent building a tiny browser game from a single prompt, while the user watches, and post it on X as a native video. The post itself is the entry: its views, likes, reposts, quotes and replies decide the ranking, and the top 10 share the $20 reward.

## The one prompt

> Build a tiny browser game called STAR CATCHER: a basket at the bottom moves left and right with arrow keys or mouse, golden stars fall from the sky, catch a star for +10 points, avoid the grey rocks (a rock costs one of 3 lives), 60 seconds on the clock, show the score, lives and time, and a game-over screen with the final score and a Play Again button.

## The game

`game.html` is the whole game in one self-contained file (HTML + inline CSS + inline JS, no external resources). A basket slides along the bottom (arrow keys or mouse), golden stars fall and are worth +10 each, grey rocks cost one of three lives, and a 60-second clock counts down to a game-over screen with the final score and a Play Again button. I verified it in a headless browser: it loads with no console errors, and a real play session scored 20 points with all 3 lives intact.

## The video

`video.mp4` — 1920×1080, H.264, 22 seconds, four scenes in order:

1. **The prompt (4s)** — the full prompt on screen, so the viewer knows exactly what the agent was asked.
2. **The agent working (6s)** — a code editor with real lines from `game.html` being typed out, with a blinking cursor.
3. **The finished game running (8s)** — real gameplay footage captured from a headless browser: stars falling, the basket moving, the score going up.
4. **The end card (4s)** — make.fun's referral end card from the press pack, used exactly as supplied, with the referral code `dehpqxrn` typed into its field, and the line "Come build on make.fun".

## The entry files

- `game.html` — the game.
- `video.mp4` — the video (the post's attachment; not committed to the repo, it is too large and the repo only needs the program files).
- `main.ts` — Node 22, standard library only. Copies `POST.json` from the repo root to the output directory, byte for byte.
- `POST.json` — the URL of the X post carrying the video. Filled in with the real post URL after the video is posted on X.
- `README.md` — what the entry is, how the game plays, how the program runs.
- `LICENSE` — MIT.

## How it is submitted

1. Post `video.mp4` on X from a public account. The post text carries make.fun (a link or a tag of @makefunai) and the play code `makefun-firefly-conch-pennant`.
2. Put the post's URL into `POST.json`.
3. Push the repo (root commit holds only `.makefun/freshness.json`) and submit with the source bundle.
4. The post stays up and public until the results are out.
