# The agent builds a game from one prompt

![make.fun](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)
![Rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/valentinoivan1203-crypto/post-x-game-entry/rank.svg)
![Reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/valentinoivan1203-crypto/post-x-game-entry/reward.svg)

Entry for the make.fun bounty: [The agent builds a game from one prompt](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)

## What this is

I gave my AI agent one prompt:

> Build a tiny browser game called STAR CATCHER: a basket at the bottom moves left and right with arrow keys or mouse, golden stars fall from the sky, catch a star for +10 points, avoid the grey rocks (a rock costs one of 3 lives), 60 seconds on the clock, show the score, lives and time, and a game-over screen with the final score and a Play Again button.

The agent built the game, then made a short video about building it — the prompt, the agent writing the code, and the finished game running — and posted it on X. The video is `video.mp4` in this directory (the post's attachment).

## The game

`game.html` is a self-contained browser game (HTML + inline JS + inline CSS, no external resources). Open it in any browser and press PLAY:

- Move the basket with the **← →** arrow keys or your mouse (touch works too).
- Catch a golden star: **+10 points**.
- A grey rock costs **1 of your 3 lives**.
- **60 seconds** on the clock. The game-over screen shows your final score and a Play Again button.

## How the entry works

- `main.ts` (Node 22, standard library only) copies `POST.json` from the repository root (`MAKEFUN_BOT_DIR`, default `/bot`) to the output directory (`MAKEFUN_OUTPUT_DIR`, default `/output`) as `POST.json`, byte for byte.
- `POST.json` holds the URL of the X post that carries the video. The house reads the post's views, likes, reposts, quotes and replies and ranks entries by that score.
- `video.mp4` (1920×1080, H.264, 22 seconds) is the video itself, in four scenes: the prompt (4s), the agent writing `game.html` (6s), real gameplay of STAR CATCHER (8s), and the make.fun referral end card with the referral code `dehpqxrn` (4s).

## How to run the program

```sh
MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
# -> out/POST.json
```

---

Want to build on make.fun too? Use my referral link: https://make.fun/r/dehpqxrn (referral code: `dehpqxrn`).
