# wizmn

A one-page contact site: a Discord button over a 3D helicopter intro (three.js), with background music.

## Put it online with GitHub Pages (free)

1. Upload everything in this folder to a GitHub repository (keep the folders as they are).
2. In the repository: **Settings → Pages**.
3. Under "Build and deployment", pick **Deploy from a branch**, branch **main**, folder **/ (root)**, then **Save**.
4. After a minute the site is live at `https://YOUR-USERNAME.github.io/REPO-NAME/`.

To use your own domain (like wizmn.com): in **Settings → Pages → Custom domain**, type the domain and follow
GitHub's DNS instructions at your domain provider.

## What's in here

| File / folder | What it is |
|---|---|
| `index.html` | The whole page (layout, animations, 3D scene, music player) |
| `music.mp3` | Background music (starts on the visitor's first click, volume control bottom-right) |
| `heli/` | The Black Hawk 3D model and its textures |
| `assets/` | Sky photo (lighting), ground and metal textures |

Change the Discord link: search `discord.com/users/` in `index.html`.
Change the music: replace `music.mp3` with another file of the same name.

## Credits

- Helicopter: "US Army UH-60M Black Hawk low poly model" by Yi Tsung Lee
  ([Sketchfab](https://sketchfab.com/3d-models/us-army-uh-60m-black-hawk-low-poly-model-854bf0feee5b42dc92ac5329976f7942)),
  [CC BY 4.0](http://creativecommons.org/licenses/by/4.0/). Material converted for three.js.
- Sky "Kloppenheim 06", textures "Aerial Grass Rock" and "Green Metal Rust": [Poly Haven](https://polyhaven.com), CC0.
- 3D engine: [three.js](https://threejs.org) (MIT), loaded from a CDN.
