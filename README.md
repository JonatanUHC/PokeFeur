# PokeFeur Trainer Viewer

<div align="center">
[![Website](https://img.shields.io/badge/Website-Open_PokeFeur-4FC3F7?style=for-the-badge)](https://jonatanuhc.github.io/PokeFeur/)
[![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-Static_site-222222?style=for-the-badge&logo=github)](https://pages.github.com/)
[![No Backend](https://img.shields.io/badge/No_backend-Local_files_only-A78BFA?style=for-the-badge)](https://github.com/)

[English](#english) | [Français](#français)

</div>

---

## Table of Contents / Table des matières

- [English](#english)
  - [What It Is](#what-it-is)
  - [Open the Site](#open-the-site)
  - [Supported Inputs](#supported-inputs)
  - [Quick Start](#quick-start)
  - [Main Viewer](#main-viewer)
  - [Vanilla Browser](#vanilla-browser)
  - [Custom ROM Folders and Archives](#custom-rom-folders-and-archives)
  - [Layout and Display Options](#layout-and-display-options)
  - [Version Detection](#version-detection)
  - [Development Notes](#development-notes)
  - [Mobile Use](#mobile-use)
  - [Troubleshooting](#troubleshooting)
  - [Sources, Dependencies, and Thanks](#sources-dependencies-and-thanks)
  - [Legal Notice](#legal-notice)
- [Français](#français)
  - [Ce que c'est](#ce-que-cest)
  - [Ouvrir le site](#ouvrir-le-site)
  - [Formats supportés](#formats-supportés)
  - [Utilisation rapide](#utilisation-rapide)
  - [Viewer principal](#viewer-principal)
  - [Navigateur vanilla](#navigateur-vanilla)
  - [Dossiers et archives de ROM custom](#dossiers-et-archives-de-rom-custom)
  - [Options d'affichage](#options-daffichage)
  - [Détection de version](#détection-de-version)
  - [Notes de développement](#notes-de-développement)
  - [Utilisation mobile](#utilisation-mobile)
  - [Dépannage](#dépannage)
  - [Sources, dépendances et remerciements](#sources-dépendances-et-remerciements)
  - [Avertissement légal](#avertissement-légal)

---

<a name="english"></a>
# English

PokeFeur is a static web trainer viewer for Pokemon trainer data.

It can load built-in vanilla datasets, Universal Pokemon Randomizer logs, DS/3DS ROMs when supported by the local parsers, and extracted mod folders for several modern games. The goal is simple: inspect trainer teams quickly, with levels, moves, types, abilities, held items, weaknesses, resistances, IVs, EVs, stats, sprites, and search tools.

The site provides **no ROMs, no game dumps, no copyrighted game files, and no way to obtain them**. You must use your own legally obtained files.

## What It Is

- A browser-based Pokemon trainer viewer.
- A static GitHub Pages site: HTML, CSS, JavaScript, and local data files.
- A visual companion for randomizer runs, ROM checks, route planning, and spoiler inspection.
- A local-file tool: selected files are read by your browser. There is no server upload in this project.

## Open the Site

Main entry:

```text
https://jonatanuhc.github.io/PokeFeur/
```

Direct pages:

```text
https://jonatanuhc.github.io/PokeFeur/trainer_viewer_6_1.html?lang=en
https://jonatanuhc.github.io/PokeFeur/vanilla.html?lang=en
```

French:

```text
https://jonatanuhc.github.io/PokeFeur/trainer_viewer_6_1.html?lang=fr
https://jonatanuhc.github.io/PokeFeur/vanilla.html?lang=fr
```

Local use:

```powershell
cd C:\Users\Jonatan\Documents\GitHub\PokeFeur
python -m http.server 4173
```

Then open:

```text
http://127.0.0.1:4173/vanilla.html?lang=fr
```

## Supported Inputs

| Input | Status | Notes |
| --- | --- | --- |
| Built-in vanilla datasets | Supported | Available from the Vanilla menu. |
| `.json` trainer datasets | Supported | Includes generated datasets with `meta` and `trainers`. |
| `.log` randomizer logs | Supported | Useful for Universal Pokemon Randomizer-style logs. |
| `.txt` logs | Supported | Parsed as text logs when the format matches. |
| `.nds` | Supported for known DS games | Uses DS header/game code and local parser support. |
| `.3ds` / `.cxi` | Supported for known 3DS games | Uses NCSD/NCCH metadata, Product Code, and Title ID. |
| `.nsp` / `.xci` / `.nca` | Version detection only | Uses filename/Title ID to load the matching vanilla dataset. It does not extract full Switch game content. |
| BDSP / Luminescent folders | Supported | Uses folder signatures and known BDSP/Luminescent data layout. |
| BDSP / Luminescent archives | Supported | `.zip`, `.rar`, `.7z` when the archive contains the expected files. |
| Sword / Shield folders | Supported | Reads extracted `romfs` trainer data and randomizer reports when available. |
| Sword / Shield archives | Supported | `.zip`, `.rar`, `.7z` with compatible `romfs` content. |
| Scarlet / Violet folders | Supported | Supports compatible randomizer exports, loose binaries, and known dump signatures. |
| Scarlet / Violet archives | Supported | `.zip`, `.rar`, `.7z` with compatible files. |

## Quick Start

1. Open the site.
2. Choose the language with the `FR` / `EN` toggle if needed.
3. Use `Vanilla` to browse built-in datasets, or use `Options` to load a file/folder/archive.
4. Select a trainer on the left.
5. Select a team/version button at the top of the trainer detail.
6. Use the Pokemon search to find a species across that trainer's teams.
7. Switch layout, sprite mode, or language from the options menu.

## Main Viewer

The main viewer is intended for mixed inputs: logs, ROMs, generated JSON files, and extracted custom folders.

It shows:

- Trainer portrait when known.
- Trainer name, class, team number, and route/order information when available.
- Pokemon sprites, names, forms, level, type badges, ability, and held item.
- Move cards with type, category, PP, power, and accuracy when data exists.
- Weaknesses, resistances, and immunities.
- IVs, EVs, and calculated stats.
- A trainer list and Pokemon search panel.

## Vanilla Browser

The Vanilla page focuses on built-in game datasets.

It is useful when you want to browse trainer teams without loading your own files every time. The available entries depend on the datasets included in `vanilla_exports/manifest.js`.

Typical supported families include:

- Diamond / Pearl / Platinum.
- HeartGold / SoulSilver.
- Black / White / Black 2 / White 2.
- X / Y.
- Omega Ruby / Alpha Sapphire.
- Sun / Moon / Ultra Sun / Ultra Moon.
- Sword / Shield.
- Brilliant Diamond / Shining Pearl.
- Scarlet / Violet.
- Luminescent Platinum-style datasets when available.

## Custom ROM Folders and Archives

For modern games, the most useful input is usually an extracted folder or archive, not the full packaged game file.

### Sword / Shield

The SWSH bridge looks for files such as:

```text
romfs/bin/trainer/trainer_data/trainer_data_*.bin
romfs/bin/trainer/trainer_poke/trainer_poke_*.bin
romfs/bin/pml/personal/personal_total.bin
romfs/bin/pml/waza_oboe/wazaoboe_total.bin
romfs/randomizer-report.json
```

`randomizer-report.json` is useful but not mandatory for version detection. The viewer also checks folder names, paths, and known Title IDs:

```text
0100ABF008968000 = Pokemon Sword
01008DB008C2C000 = Pokemon Shield
```

### Brilliant Diamond / Shining Pearl / Luminescent

The BDSP bridge checks the expected Unity/AssetAssistant structure and known signatures.

It can also use Title IDs:

```text
0100000011D90000 = Pokemon Brilliant Diamond
010018E011D92000 = Pokemon Shining Pearl
```

### Scarlet / Violet

The SV bridge checks compatible randomizer exports, loose binaries, and known dump signatures.

It can also use Title IDs:

```text
0100A3D008C5C000 = Pokemon Scarlet
01008F6008C5E000 = Pokemon Violet
```

## Layout and Display Options

The options menu includes:

- Language switching.
- Sprite mode switching.
- Main horizontal layout inspired by Smogon-style pages.
- Vertical layout, especially useful on mobile.
- Built-in vanilla game selection.
- Custom folder/archive loaders for supported games.

The stat bars use colored lines while values stay readable. The horizontal layout is designed to show several Pokemon at once on desktop, while mobile switches to a more usable stacked layout.

## Version Detection

PokeFeur tries to detect the game from the strongest available signal first:

1. Explicit metadata from JSON datasets.
2. Switch Title IDs in filenames or paths.
3. 3DS Title IDs and Product Codes.
4. DS header game codes.
5. Folder/archive names.
6. Log headers and randomizer summaries.
7. Species-generation fallback when no better signal exists.

Examples:

| Signal | Detected game |
| --- | --- |
| `ADAF` | Pokemon Diamond |
| `CPUE` | Pokemon Platinum |
| `IRBF` | Pokemon Black |
| `IREO` | Pokemon Black 2 |
| `CTR-P-BNEA` | Pokemon Moon |
| `CTR-P-ECLA` | Pokemon Alpha Sapphire |
| `0100ABF008968000` | Pokemon Sword |
| `01008DB008C2C000` | Pokemon Shield |
| `0100A3D008C5C000` | Pokemon Scarlet |

## Development Notes

This project is intentionally a static site, but it still has several specialized parsing layers.

### Main Files

| File / folder | Role |
| --- | --- |
| `index.html` | Small landing page and language-aware entry point. |
| `trainer_viewer_6_1.html` | Main viewer shell. |
| `vanilla.html` | Vanilla-focused page using the same app code. |
| `assets/css/app.css` | Full responsive UI, desktop horizontal layout, mobile layout, type/stat styling. |
| `assets/js/app.js` | Core state, rendering, search, file loading, version detection, stat display, vanilla loader. |
| `vanilla_exports/manifest.js` | Catalog of built-in vanilla datasets. |
| `vanilla_exports/*.js` | Prebuilt trainer datasets loaded dynamically by slug. |
| `bw_vanilla_data.js` | Legacy Black/White vanilla data support. |
| `nds_rom_parser.js` | DS ROM parser for supported `.nds` files. |
| `nds_text_tables.js` | DS text lookup tables used by the DS parser. |

### Game Bridges

| File | Purpose |
| --- | --- |
| `assets/js/bdsp-folder-bridge.js` | Folder/archive bridge for BDSP and Luminescent-style data. |
| `assets/js/swsh-folder-bridge.js` | Folder/archive bridge for Sword/Shield `romfs` trainer data. |
| `assets/js/sv-folder-bridge.js` | Folder/archive bridge for Scarlet/Violet custom exports, loose binaries, and dump signatures. |
| `assets/js/sv-browser-support.js` | Browser support helpers/data for Scarlet/Violet parsing. |

### Parsers and IO

The browser cannot use Node-style filesystem APIs, so all IO is done through browser APIs:

- `FileReader` for direct file loading.
- Directory inputs with `webkitdirectory` for extracted folders.
- `libarchive.js` for `.zip`, `.rar`, and `.7z` archives.
- `ArrayBuffer` / `DataView` for binary parsing.
- Dynamic `<script>` loading for large generated datasets.
- `localStorage` for UI preferences such as language, sprite mode, and layout.

Specialized parser files:

| File | Purpose |
| --- | --- |
| `assets/js/parsers/bdsp-custom-parser.browser.js` | Browser module parser for custom BDSP/Luminescent bundles. |
| `assets/js/parsers/bdsp-custom-parser.global.js` | Global fallback/build of the BDSP/Luminescent parser. |
| `assets/js/parsers/sv-bin-parser.browser.js` | Browser parser for Scarlet/Violet loose binary trainer/personal data. |

The BDSP/Luminescent parser is used for Unity `AssetAssistant` bundles such as master data, personal data, battle data, and message bundles. The SV parser handles compatible randomizer JSON exports and loose binaries such as `trdata_array.bin` and `personal_array.bin`.

### Data Files and Visual Assets

| File / folder | Purpose |
| --- | --- |
| `assets/js/local-dex-data.js` | Local Pokemon, move, item, ability, and sprite metadata. |
| `assets/js/version-data.js` | Version-related metadata and helpers. |
| `assets/js/trainer-portrait-data.js` | Trainer portrait lookup data. |
| `assets/sprites/` | Local sprite pack used by the viewer. |
| `gen4/`, `gen5/`, `gen6/` | Generation-specific custom sprite fallback folders. |
| `spritespokemonanime/` | Animated/anime-style sprite fallback folder. |
| `assets/vendor/libarchivejs/` | Archive reader runtime and worker assets. |

### Development Workflow

Useful local checks:

```powershell
node --check assets\js\app.js
node --check assets\js\bdsp-folder-bridge.js
node --check assets\js\swsh-folder-bridge.js
node --check assets\js\sv-folder-bridge.js
git diff --check
```

For local visual testing:

```powershell
python -m http.server 4173
```

Then open:

```text
http://127.0.0.1:4173/vanilla.html?lang=fr
```

When JavaScript or CSS changes are pushed to GitHub Pages, bump the cache query version in `trainer_viewer_6_1.html`, `vanilla.html`, and `APP_ASSET_VERSION` in `assets/js/app.js`.

## Mobile Use

The site has a dedicated mobile layout.

On smaller screens:

- The sidebar becomes a compact top section.
- Pokemon cards stack vertically.
- Moves become easier to scan.
- Stats, IVs, and EVs are shown below the Pokemon data.
- The desktop horizontal layout is replaced by a more practical stacked view.

For large team comparisons, desktop is still the best experience.

## Troubleshooting

### The GitHub Pages version does not update

Hard refresh the page:

```text
Ctrl + F5
```

The project also uses cache-busting query strings such as `?v=105` on scripts and styles.

### My Switch `.nsp` or `.xci` does not show randomized trainers

Packaged Switch files are not fully extracted by the viewer. If you load a `.nsp`, `.xci`, or `.nca`, the viewer can detect the version and load the vanilla dataset, but it cannot inspect all modified trainer files from the package.

For modded trainer data, load an extracted compatible `romfs` folder or an archive containing the expected files.

### The wrong game is detected

Use a more explicit folder/archive name, or load a folder path containing the Title ID when possible. For generated randomizer folders, keeping `randomizer-report.json` helps, but the viewer also has fallback detection without it.

### Sprites are missing

Sprite availability depends on local sprite packs and the selected generation. If a specific form does not exist locally, the viewer falls back through several sprite paths.

### A log loads but some move/item data is incomplete

Logs do not always contain full structured data. ROM folders, JSON datasets, or built-in vanilla data usually provide richer details.

## Sources, Dependencies, and Thanks

### Runtime and Tooling

| Project | Link | Used for |
| --- | --- | --- |
| GitHub Pages | [pages.github.com](https://pages.github.com/) | Static hosting |
| JavaScript | [developer.mozilla.org/javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) | Browser runtime |
| File API | [developer.mozilla.org/docs/Web/API/File_API](https://developer.mozilla.org/en-US/docs/Web/API/File_API) | Local file and folder reading in the browser |
| Web Storage API | [developer.mozilla.org/docs/Web/API/Web_Storage_API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API) | Persisting viewer preferences |
| libarchive.js | [github.com/nika-begiashvili/libarchivejs](https://github.com/nika-begiashvili/libarchivejs) | Reading supported archives in browser |
| Google Fonts | [fonts.google.com](https://fonts.google.com/) | UI fonts |
| Node.js | [github.com/nodejs/node](https://github.com/nodejs/node) | Local syntax checks and development utilities |

### Pokemon Data and References

| Project | Link | Used for |
| --- | --- | --- |
| Pokemon Showdown | [github.com/smogon/pokemon-showdown](https://github.com/smogon/pokemon-showdown) | Public Pokemon/move/item naming references and sprite ecosystem |
| Smogon Strategy Dex | [smogon.com/dex](https://www.smogon.com/dex/) | Visual/stat-page inspiration and public strategic references |
| PokeAPI | [pokeapi.co](https://pokeapi.co/) | Public Pokemon data reference |
| pkNX | [github.com/kwsch/pkNX](https://github.com/kwsch/pkNX) | Pokemon file-structure ecosystem reference |
| PKHeX | [github.com/kwsch/PKHeX](https://github.com/kwsch/PKHeX) | Pokemon data and legality ecosystem reference |
| PokeRandoZX / Universal Pokemon Randomizer ZX | [github.com/Ajarmar/universal-pokemon-randomizer-zx](https://github.com/Ajarmar/universal-pokemon-randomizer-zx) | Randomizer log format reference, DS/3DS ROM randomizer ecosystem reference, and compatibility target for user-provided logs/ROMs |
| Team Luminescent / Lumi devs | [luminescent.team](https://luminescent.team/) / [Nexus credits](https://www.nexusmods.com/pokemonbdsp/mods/1) | Luminescent Platinum project, documentation, BDSP/Luminescent-style data reference, and full developer credits |
| Luminescent Platinum docs | [teamlumi.github.io/luminescent-team-dev](https://teamlumi.github.io/luminescent-team-dev/) | Public documentation and feature reference for compatible user-provided Luminescent files |

Special thanks to the **Team Luminescent / Lumi dev team** for the Luminescent Platinum project and its public documentation. PokeFeur only reads compatible user-provided files; all Luminescent Platinum ownership, credits, permissions, and distribution rules belong to Team Luminescent and the contributors listed on their official pages.

Special thanks as well to the **Universal Pokemon Randomizer ZX / PokeRandoZX** project and contributors. PokeFeur uses its ecosystem as an important compatibility target for logs and randomized DS/3DS ROM workflows; PokeFeur is not affiliated with that project.

## Legal Notice

This project is an unofficial fan-made tool.

Pokemon is a trademark of Nintendo, Game Freak, and The Pokemon Company. This project is not affiliated with, endorsed by, sponsored by, or approved by Nintendo, Game Freak, or The Pokemon Company.

This repository does not provide ROMs, game dumps, copyrighted game files, keys, firmware, or instructions to obtain them.

Use your own legally obtained copies and files. Do not share generated folders or archives that contain copyrighted game data.

---

<a name="français"></a>
# Français

PokeFeur est un viewer web statique pour les données de dresseurs Pokemon.

Il peut charger des datasets vanilla intégrés, des logs de randomizer, des ROMs DS/3DS quand elles sont prises en charge par les parseurs locaux, et des dossiers de mods extraits pour plusieurs jeux modernes. Le but est simple: inspecter rapidement les équipes de dresseurs, avec niveaux, attaques, types, talents, objets, faiblesses, résistances, IV, EV, stats, sprites et recherche.

Le site ne fournit **aucune ROM, aucun dump de jeu, aucun fichier Nintendo, aucun fichier protégé, et aucun moyen de les obtenir**. Tu dois utiliser tes propres fichiers légalement obtenus.

## Ce Que C'est

- Un viewer de dresseurs Pokemon dans le navigateur.
- Un site statique GitHub Pages: HTML, CSS, JavaScript et données locales.
- Un outil visuel pour vérifier une run randomizer, préparer une route, lire un spoiler log, ou comparer des équipes.
- Un outil local côté navigateur: les fichiers sélectionnés sont lus par ton navigateur. Ce projet n'upload pas tes fichiers sur un serveur.

## Ouvrir Le Site

Page d'accueil:

```text
https://jonatanuhc.github.io/PokeFeur/
```

Pages directes:

```text
https://jonatanuhc.github.io/PokeFeur/trainer_viewer_6_1.html?lang=fr
https://jonatanuhc.github.io/PokeFeur/vanilla.html?lang=fr
```

Utilisation locale:

```powershell
cd C:\Users\Jonatan\Documents\GitHub\PokeFeur
python -m http.server 4173
```

Puis ouvre:

```text
http://127.0.0.1:4173/vanilla.html?lang=fr
```

## Formats Supportés

| Format | Statut | Notes |
| --- | --- | --- |
| Datasets vanilla intégrés | Supporté | Disponibles depuis le menu Vanilla. |
| Datasets dresseurs `.json` | Supporté | Inclut les datasets avec `meta` et `trainers`. |
| Logs `.log` | Supporté | Utile pour les logs de randomizers type Universal Pokemon Randomizer. |
| Logs `.txt` | Supporté | Parsé comme un log texte si le format correspond. |
| `.nds` | Supporté pour les jeux DS connus | Utilise le code interne de l'en-tête DS et le parseur local. |
| `.3ds` / `.cxi` | Supporté pour les jeux 3DS connus | Utilise les métadonnées NCSD/NCCH, Product Code et Title ID. |
| `.nsp` / `.xci` / `.nca` | Détection de version seulement | Utilise le nom/Title ID pour charger le dataset vanilla correspondant. N'extrait pas le contenu Switch complet. |
| Dossiers BDSP / Luminescent | Supporté | Utilise les signatures de dossiers et la structure BDSP/Luminescent attendue. |
| Archives BDSP / Luminescent | Supporté | `.zip`, `.rar`, `.7z` si l'archive contient les bons fichiers. |
| Dossiers Épée / Bouclier | Supporté | Lit les données de dresseurs `romfs` extraites et les rapports randomizer quand ils existent. |
| Archives Épée / Bouclier | Supporté | `.zip`, `.rar`, `.7z` avec contenu `romfs` compatible. |
| Dossiers Écarlate / Violet | Supporté | Exports randomizer compatibles, binaires loose, et signatures de dump connues. |
| Archives Écarlate / Violet | Supporté | `.zip`, `.rar`, `.7z` avec fichiers compatibles. |

## Utilisation Rapide

1. Ouvre le site.
2. Choisis `FR` ou `EN` si besoin.
3. Utilise `Vanilla` pour parcourir les datasets intégrés, ou `Options` pour charger un fichier, dossier ou archive.
4. Sélectionne un dresseur à gauche.
5. Sélectionne une équipe/version en haut du détail.
6. Utilise la recherche Pokemon pour retrouver une espèce dans les équipes du dresseur.
7. Change la disposition, les sprites ou la langue depuis le menu options.

## Viewer Principal

Le viewer principal est pensé pour les entrées mixtes: logs, ROMs, JSON générés et dossiers custom extraits.

Il affiche:

- Portrait du dresseur quand il est connu.
- Nom, classe, numéro d'équipe et informations d'ordre/route quand disponibles.
- Sprites, noms, formes, niveaux, types, talent et objet tenu.
- Cartes d'attaques avec type, catégorie, PP, puissance et précision quand les données existent.
- Faiblesses, résistances et immunités.
- IV, EV et stats calculées.
- Liste des dresseurs et recherche Pokemon.

## Navigateur Vanilla

La page Vanilla sert à parcourir les datasets intégrés sans recharger tes fichiers à chaque fois.

Les entrées disponibles dépendent des datasets présents dans `vanilla_exports/manifest.js`.

Familles typiques:

- Diamant / Perle / Platine.
- HeartGold / SoulSilver.
- Noir / Blanc / Noir 2 / Blanc 2.
- X / Y.
- Rubis Oméga / Saphir Alpha.
- Soleil / Lune / Ultra-Soleil / Ultra-Lune.
- Épée / Bouclier.
- Diamant Étincelant / Perle Scintillante.
- Écarlate / Violet.
- Datasets de style Luminescent Platinum quand disponibles.

## Dossiers Et Archives De ROM Custom

Pour les jeux modernes, l'entrée la plus utile est souvent un dossier extrait ou une archive, pas le fichier de jeu complet.

### Épée / Bouclier

Le bridge SWSH cherche par exemple:

```text
romfs/bin/trainer/trainer_data/trainer_data_*.bin
romfs/bin/trainer/trainer_poke/trainer_poke_*.bin
romfs/bin/pml/personal/personal_total.bin
romfs/bin/pml/waza_oboe/wazaoboe_total.bin
romfs/randomizer-report.json
```

`randomizer-report.json` aide, mais il n'est pas obligatoire pour détecter la version. Le viewer vérifie aussi les noms de dossiers, les chemins et les Title IDs connus:

```text
0100ABF008968000 = Pokemon Épée
01008DB008C2C000 = Pokemon Bouclier
```

### Diamant Étincelant / Perle Scintillante / Luminescent

Le bridge BDSP vérifie la structure Unity/AssetAssistant attendue et des signatures connues.

Il peut aussi utiliser les Title IDs:

```text
0100000011D90000 = Pokemon Diamant Étincelant
010018E011D92000 = Pokemon Perle Scintillante
```

### Écarlate / Violet

Le bridge SV vérifie les exports randomizer compatibles, les binaires loose et les signatures de dump connues.

Il peut aussi utiliser les Title IDs:

```text
0100A3D008C5C000 = Pokemon Écarlate
01008F6008C5E000 = Pokemon Violet
```

## Options D'affichage

Le menu options contient:

- Changement de langue.
- Changement de mode de sprites.
- Disposition horizontale principale inspirée des pages type Smogon.
- Disposition verticale, surtout utile sur mobile.
- Sélection des jeux vanilla intégrés.
- Chargeurs de dossiers/archives custom pour les jeux supportés.

Les barres de stats utilisent des lignes colorées tandis que les valeurs restent lisibles. La disposition horizontale est pensée pour voir plusieurs Pokemon à la fois sur desktop, et le mobile passe sur une disposition empilée plus pratique.

## Détection De Version

PokeFeur essaie de détecter le jeu avec le signal le plus fiable disponible:

1. Métadonnées explicites des datasets JSON.
2. Title IDs Switch dans les noms ou chemins.
3. Title IDs et Product Codes 3DS.
4. Codes internes des en-têtes DS.
5. Noms de dossiers/archives.
6. En-têtes de logs et résumés de randomizer.
7. Fallback par génération d'espèces quand rien de mieux n'existe.

Exemples:

| Signal | Jeu détecté |
| --- | --- |
| `ADAF` | Pokemon Diamant |
| `CPUE` | Pokemon Platine |
| `IRBF` | Pokemon Noir |
| `IREO` | Pokemon Noir 2 |
| `CTR-P-BNEA` | Pokemon Lune |
| `CTR-P-ECLA` | Pokemon Saphir Alpha |
| `0100ABF008968000` | Pokemon Épée |
| `01008DB008C2C000` | Pokemon Bouclier |
| `0100A3D008C5C000` | Pokemon Écarlate |

## Notes De Développement

Le projet est un site statique, mais il contient quand même plusieurs couches de parsing spécialisées.

### Fichiers Principaux

| Fichier / dossier | Rôle |
| --- | --- |
| `index.html` | Petite page d'accueil et point d'entrée avec langue. |
| `trainer_viewer_6_1.html` | Structure du viewer principal. |
| `vanilla.html` | Page centrée vanilla, avec le même code applicatif. |
| `assets/css/app.css` | UI responsive complète, layout horizontal desktop, layout mobile, styles types/stats. |
| `assets/js/app.js` | État principal, rendu, recherche, chargement de fichiers, détection de version, stats, loader vanilla. |
| `vanilla_exports/manifest.js` | Catalogue des datasets vanilla intégrés. |
| `vanilla_exports/*.js` | Datasets dresseurs pré-générés chargés dynamiquement. |
| `bw_vanilla_data.js` | Support legacy des données vanilla Noir/Blanc. |
| `nds_rom_parser.js` | Parseur ROM DS pour les `.nds` supportés. |
| `nds_text_tables.js` | Tables de textes DS utilisées par le parseur DS. |

### Bridges Par Jeu

| Fichier | Utilisation |
| --- | --- |
| `assets/js/bdsp-folder-bridge.js` | Bridge dossiers/archives pour BDSP et données de style Luminescent. |
| `assets/js/swsh-folder-bridge.js` | Bridge dossiers/archives pour les données dresseurs `romfs` Épée/Bouclier. |
| `assets/js/sv-folder-bridge.js` | Bridge dossiers/archives pour exports custom, binaires loose et signatures de dump Écarlate/Violet. |
| `assets/js/sv-browser-support.js` | Helpers/données navigateur pour le parsing Écarlate/Violet. |

### Parseurs Et IO

Le navigateur ne peut pas utiliser les APIs filesystem de Node, donc toute l'IO passe par des APIs web:

- `FileReader` pour charger les fichiers directs.
- Inputs dossiers avec `webkitdirectory` pour les dossiers extraits.
- `libarchive.js` pour les archives `.zip`, `.rar` et `.7z`.
- `ArrayBuffer` / `DataView` pour lire les binaires.
- Chargement dynamique de `<script>` pour les gros datasets générés.
- `localStorage` pour garder les préférences UI: langue, sprites et layout.

Fichiers de parseurs spécialisés:

| Fichier | Utilisation |
| --- | --- |
| `assets/js/parsers/bdsp-custom-parser.browser.js` | Parseur module navigateur pour bundles custom BDSP/Luminescent. |
| `assets/js/parsers/bdsp-custom-parser.global.js` | Build global/fallback du parseur BDSP/Luminescent. |
| `assets/js/parsers/sv-bin-parser.browser.js` | Parseur navigateur pour binaires loose Écarlate/Violet trainer/personal. |

Le parseur BDSP/Luminescent sert à lire des bundles Unity `AssetAssistant`: master data, personal data, battle data et messages. Le parseur SV sert pour les exports JSON randomizer compatibles et les binaires loose comme `trdata_array.bin` et `personal_array.bin`.

### Données Et Assets Visuels

| Fichier / dossier | Utilisation |
| --- | --- |
| `assets/js/local-dex-data.js` | Métadonnées locales Pokemon, attaques, objets, talents et sprites. |
| `assets/js/version-data.js` | Métadonnées et helpers liés aux versions. |
| `assets/js/trainer-portrait-data.js` | Données de portraits de dresseurs. |
| `assets/sprites/` | Pack de sprites local utilisé par le viewer. |
| `gen4/`, `gen5/`, `gen6/` | Dossiers fallback de sprites spécifiques par génération. |
| `spritespokemonanime/` | Dossier fallback de sprites animés/anime. |
| `assets/vendor/libarchivejs/` | Runtime de lecture d'archives et assets worker. |

### Workflow De Dev

Commandes utiles:

```powershell
node --check assets\js\app.js
node --check assets\js\bdsp-folder-bridge.js
node --check assets\js\swsh-folder-bridge.js
node --check assets\js\sv-folder-bridge.js
git diff --check
```

Test local visuel:

```powershell
python -m http.server 4173
```

Puis ouvre:

```text
http://127.0.0.1:4173/vanilla.html?lang=fr
```

Quand du JavaScript ou du CSS change et doit partir sur GitHub Pages, il faut bump la version de cache dans `trainer_viewer_6_1.html`, `vanilla.html`, et `APP_ASSET_VERSION` dans `assets/js/app.js`.

## Utilisation Mobile

Le site a une vraie disposition mobile.

Sur petit écran:

- La barre latérale devient une section compacte en haut.
- Les cartes Pokemon s'empilent verticalement.
- Les attaques sont plus faciles à lire.
- Les stats, IV et EV passent sous les données du Pokemon.
- La disposition horizontale desktop est remplacée par une version plus pratique.

Pour comparer beaucoup d'équipes d'un coup, le desktop reste plus confortable.

## Dépannage

### GitHub Pages n'affiche pas la dernière version

Fais un hard refresh:

```text
Ctrl + F5
```

Le projet utilise aussi des versions de cache comme `?v=105` sur les scripts et styles.

### Mon `.nsp` ou `.xci` Switch n'affiche pas les dresseurs randomisés

Les fichiers Switch packagés ne sont pas entièrement extraits par le viewer. Si tu charges un `.nsp`, `.xci` ou `.nca`, le viewer peut détecter la version et charger le dataset vanilla, mais il ne lit pas tous les fichiers dresseurs modifiés dans le package.

Pour les données de dresseurs modifiées, charge un dossier `romfs` compatible extrait ou une archive contenant les fichiers attendus.

### Le mauvais jeu est détecté

Utilise un nom de dossier/archive plus explicite, ou charge un chemin contenant le Title ID quand c'est possible. Pour les dossiers générés par randomizer, garder `randomizer-report.json` aide, mais le viewer possède aussi une détection de secours sans JSON.

### Des sprites manquent

La disponibilité des sprites dépend des packs locaux et de la génération sélectionnée. Si une forme précise n'existe pas localement, le viewer essaie plusieurs chemins de fallback.

### Un log se charge mais certaines attaques/objets sont incomplets

Les logs ne contiennent pas toujours des données structurées complètes. Les dossiers ROM, les datasets JSON ou les données vanilla intégrées donnent généralement plus de détails.

## Sources, Dépendances Et Remerciements

### Runtime Et Outillage

| Projet | Lien | Utilisation |
| --- | --- | --- |
| GitHub Pages | [pages.github.com](https://pages.github.com/) | Hébergement statique |
| JavaScript | [developer.mozilla.org/javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) | Runtime navigateur |
| File API | [developer.mozilla.org/docs/Web/API/File_API](https://developer.mozilla.org/en-US/docs/Web/API/File_API) | Lecture locale des fichiers et dossiers dans le navigateur |
| Web Storage API | [developer.mozilla.org/docs/Web/API/Web_Storage_API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API) | Sauvegarde des préférences du viewer |
| libarchive.js | [github.com/nika-begiashvili/libarchivejs](https://github.com/nika-begiashvili/libarchivejs) | Lecture d'archives supportées dans le navigateur |
| Google Fonts | [fonts.google.com](https://fonts.google.com/) | Polices de l'interface |
| Node.js | [github.com/nodejs/node](https://github.com/nodejs/node) | Vérifications syntaxiques locales et outils de développement |

### Données Pokemon Et Références

| Projet | Lien | Utilisation |
| --- | --- | --- |
| Pokemon Showdown | [github.com/smogon/pokemon-showdown](https://github.com/smogon/pokemon-showdown) | Références publiques de noms Pokemon, attaques, objets et sprites |
| Smogon Strategy Dex | [smogon.com/dex](https://www.smogon.com/dex/) | Inspiration visuelle/stat-page et références stratégiques publiques |
| PokeAPI | [pokeapi.co](https://pokeapi.co/) | Référence publique de données Pokemon |
| pkNX | [github.com/kwsch/pkNX](https://github.com/kwsch/pkNX) | Référence de l'écosystème de structures de fichiers Pokemon |
| PKHeX | [github.com/kwsch/PKHeX](https://github.com/kwsch/PKHeX) | Référence de l'écosystème Pokemon pour données et légalité |
| PokeRandoZX / Universal Pokemon Randomizer ZX | [github.com/Ajarmar/universal-pokemon-randomizer-zx](https://github.com/Ajarmar/universal-pokemon-randomizer-zx) | Référence de formats de logs randomizer, de l'écosystème ROMs DS/3DS randomisées, et cible de compatibilité pour logs/ROMs fournis par l'utilisateur |
| Team Luminescent / devs Lumi | [luminescent.team](https://luminescent.team/) / [crédits Nexus](https://www.nexusmods.com/pokemonbdsp/mods/1) | Projet Luminescent Platinum, documentation, référence de données BDSP/Luminescent et crédits complets des développeurs |
| Documentation Luminescent Platinum | [teamlumi.github.io/luminescent-team-dev](https://teamlumi.github.io/luminescent-team-dev/) | Documentation publique et référence de features pour les fichiers Luminescent compatibles fournis par l'utilisateur |

Merci spécialement à **Team Luminescent / aux devs Lumi** pour Luminescent Platinum et sa documentation publique. PokeFeur lit seulement des fichiers compatibles fournis par l'utilisateur; la propriété, les crédits, les permissions et les règles de distribution de Luminescent Platinum restent ceux de Team Luminescent et des contributeurs listés sur leurs pages officielles.

Merci aussi au projet **Universal Pokemon Randomizer ZX / PokeRandoZX** et à ses contributeurs. PokeFeur s'en sert comme cible importante de compatibilité pour les logs et workflows de ROMs DS/3DS randomisées; PokeFeur n'est pas affilié à ce projet.

## Avertissement Légal

Ce projet est un outil fan-made non officiel.

Pokemon est une marque de Nintendo, Game Freak et The Pokemon Company. Ce projet n'est pas affilié, approuvé, sponsorisé ou validé par Nintendo, Game Freak ou The Pokemon Company.

Ce dépôt ne fournit aucune ROM, aucun dump de jeu, aucun fichier protégé, aucune clé, aucun firmware et aucune instruction pour en obtenir.

Utilise tes propres copies et fichiers légalement obtenus. Ne partage pas de dossiers ou archives générés contenant des données de jeu protégées.











[![Discord](https://img.shields.io/badge/Discord-Join_the_server-5865F2?style=for-the-badge&logo=discord&logoColor=white)](https://discord.gg/bSUKYEJE)
