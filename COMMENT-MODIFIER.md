# Comment modifier le site

Ce guide explique comment changer le contenu du site **sans être informaticien**.
Pour la mise en ligne, voir `GUIDE-MISE-EN-LIGNE.md`.

---

## Les 3 règles à retenir

### Règle n° 1 — Ne modifie que le texte, jamais les chevrons

Une page web est faite de **balises** entre chevrons `< >` qui donnent la mise
en forme, et de **texte** entre ces balises. Modifie uniquement le texte :

```
<h3>Écologie des grands prédateurs marins</h3>
    └───────── modifie seulement ceci ──────┘
```

### Règle n° 2 — Les commentaires sont invisibles sur le site

Un bloc qui commence par `<!--` et se termine par `-->` est un **commentaire** :
il n'apparaît **jamais** sur le site. Le code en contient beaucoup, ce sont les
explications écrites pour toi. Tu peux les lire, les ignorer, mais ne les
supprime pas : ils t'aideront la prochaine fois.

### Règle n° 3 — Toujours répercuter en anglais

| Fichier | Contenu |
|---|---|
| `index.html` | La page en **français** |
| `en/index.html` | La **même page, traduite en anglais** |

Les deux ont exactement la même structure. Si tu modifies un texte dans l'un,
fais la même modification dans l'autre.

---

## Recettes courantes

### Changer un texte

1. Ouvre `index.html`
2. **Ctrl + F**, cherche le texte tel qu'il apparaît sur le site
3. Remplace-le
4. Fais de même dans `en/index.html`

### Changer un chiffre clé (le bandeau sous l'accueil)

Cherche `3. CHIFFRES CLÉS`. Tu verras :

```html
<div class="chiffre reveler"><b>9 ans</b><span>d'expérience de terrain</span></div>
```

- `<b>` contient le **grand chiffre** en turquoise
- `<span>` contient le **texte descriptif** en dessous

### Ajouter une nouvelle publication

Cherche `9. PRODUCTIONS`. Copie un bloc complet de `<li class="publi reveler">`
jusqu'à `</li>`, colle-le juste en dessous, puis adapte le contenu.

Pour le petit badge de statut, trois choix possibles :

| Code à utiliser | Affiche |
|---|---|
| `publi__statut--publie` | **Publié** (vert) |
| `publi__statut--soumis` | **Soumis** (bleu) |
| `publi__statut--prep` | **En préparation** (gris) |

Pour ajouter un lien vers l'article, garde ce bloc — sinon, supprime-le :

```html
<a class="publi__lien" href="https://doi.org/TON-DOI" target="_blank" rel="noopener noreferrer">
  Lire l'article (DOI) <span aria-hidden="true">→</span>
</a>
```

### Ajouter une conférence

Cherche `liste-conf`, puis copie un bloc :

```html
<li class="conf reveler">
  <span class="conf__annee">2027</span>
  <p><strong>Titre de la conférence.</strong><br>
    Nom de l'événement, lieu.</p>
</li>
```

### Ajouter une étape au parcours (la frise)

**Comment fonctionne la frise.** Chaque **ligne** de la frise est une **année**.
C'est ce qui aligne horizontalement les trois pistes : une étape de 2018 en
Formation se retrouve exactement à la même hauteur qu'une étape de 2018 en
Professionnel.

Deux réglages seulement pilotent la position d'une carte :

| Réglage | Rôle |
|---|---|
| `data-piste="formation"` | La **colonne** : `formation`, `pro` ou `asso` |
| `style="--annee: 2018"` | La **hauteur** : l'année de début de l'étape |

Cherche `7. PARCOURS`, copie un bloc `<article class="jalon">` … `</article>`
entier, colle-le dans la bonne piste et adapte-le :

```html
<article class="jalon reveler" data-piste="pro" style="--annee: 2027">
  <p class="jalon__date">2027</p>
  <h4 class="jalon__titre">Titre du poste ou de la mission</h4>
  <p class="jalon__lieu">Nom de la structure</p>
  <p class="jalon__texte">Description en deux ou trois phrases.</p>
  <ul class="etiquettes etiquettes--fines">
    <li>Méthode 1</li><li>Outil 2</li><li>Compétence 3</li>
  </ul>
</article>
```

> ⚠️ **Deux règles à respecter**
>
> 1. **Deux cartes de la même piste ne doivent pas avoir la même année**, sinon
>    elles se superposeraient. Décale l'une d'un an : le texte de la carte,
>    lui, continue d'afficher les vraies dates. C'est déjà le cas pour la carte
>    « Doctorant et enseignant », placée sur 2019 alors qu'elle affiche
>    « 2018 à 2022 », pour ne pas chevaucher le stage de Master 2.
> 2. **Si tu utilises une année plus récente que celles déjà présentes**, ajoute
>    aussi son étiquette dans le « ruban des années », juste au début du bloc
>    `<div class="frise">`.

Pour ajouter un logo à côté du nom de la structure, écris plutôt :

```html
<p class="jalon__lieu">
  <img class="jalon__logo" src="images/logos/mon-logo.png" alt="Nom de la structure" loading="lazy">
  Nom de la structure
</p>
```

*(dans `en/index.html`, le chemin devient `../images/logos/mon-logo.png`)*

Pour une liste à puces dans une carte (comme les chantiers de conservation) :

```html
<ul class="jalon__liste">
  <li>Première action, avec <strong>le partenaire</strong></li>
  <li>Deuxième action</li>
</ul>
```

Sur téléphone, la frise se replie automatiquement en une seule colonne
(Formation, puis Professionnel, puis Associatif) et le ruban des années
disparaît. Tu n'as rien à faire pour ça.

### Ajouter une compétence

Cherche `6. COMPÉTENCES`, puis ajoute simplement une ligne dans la bonne
famille : `<li>Ma nouvelle compétence</li>`

### Ajouter ou modifier un bloc de la section « Qui je suis »

Cette section est faite de **blocs récit** : un paragraphe de texte d'un côté,
une image ou un logo de l'autre. Un bloc sur deux a son image à gauche.

Cherche `4. PROFIL`, puis copie un `<article class="recit__bloc">` entier :

```html
<article class="recit__bloc reveler">
  <div class="recit__texte">
    <p>Ton paragraphe ici.</p>
  </div>
  <div class="recit__media">
    <figure class="media-cadre">
      <img src="images/photos/ma-photo.jpg" alt="Description de la photo"
           width="640" height="427" loading="lazy">
      <figcaption>Légende de la photo</figcaption>
    </figure>
  </div>
</article>
```

Pour placer l'image **à gauche** du texte, ajoute `recit__bloc--inverse` :
`<article class="recit__bloc recit__bloc--inverse reveler">`

Sur téléphone, les blocs se mettent automatiquement en une seule colonne, avec
le texte au-dessus de l'image. Tu n'as rien à faire pour ça.

### Changer une photo

**Le plus simple** : donne à ta nouvelle photo **exactement le même nom** que
l'ancienne et remplace le fichier dans `images/photos/`. Il n'y a rien d'autre
à faire.

| Fichier | Où il apparaît |
|---|---|
| `hero-lagon.jpg` | La grande photo de l'accueil |
| `tuit-tuit.jpg` | Section « Qui je suis », bloc sur le tuit-tuit |
| `juan-de-nova.jpg` | Section « Qui je suis », bloc sur les îles Éparses |
| `petrel-barau.jpg` | Section « Qui je suis », bloc sur le pétrel |
| `bivouac-terrain.jpg` | Non utilisée actuellement, disponible |
| `foret-tropicale.jpg` | Non utilisée actuellement, disponible |
| `portrait.jpg` | Portrait *(réservé aux partages sur les réseaux)* |

> ⚠️ **Crédit photo.** La photo du tuit-tuit est signée **J. Martinez** et sa
> légende porte la mention `© J. Martinez`. Ne la retire pas, et pense à créditer
> de la même façon toute photo qui n'est pas de toi.

### Modifier le schéma de la thèse

Le schéma de la section « Qui je suis » n'est pas une photo : c'est un dessin
écrit en code, dans `images/schema-these.svg` (et sa traduction
`images/schema-these-en.svg`). Tu peux ouvrir ces fichiers avec le Bloc-notes et
modifier les textes qu'ils contiennent, ou les remplacer par une vraie image en
changeant le `src="..."` dans les deux pages HTML.

⚠️ **Compresse d'abord la photo** sur **https://squoosh.app** :
vise moins de **300 Ko** pour environ **1200 pixels** de large. Une photo non
compressée rend le site très lent sur mobile.

Si tu utilises un **nom de fichier différent**, il faut aussi modifier la ligne
`src="..."` correspondante dans `index.html` **et** dans `en/index.html`, et
mettre à jour le texte `alt="..."` qui décrit l'image (important pour Google et
pour les personnes malvoyantes).

### Changer ton adresse e-mail

Cherche `florian.hoarau.m@gmail.com`. Elle apparaît à **plusieurs endroits** :
dans le bloc de données Google en haut du fichier, et dans la section Contact.
Remplace-les **toutes**, dans les deux fichiers.

### Changer les couleurs du site

Ouvre `css/style.css`. Tout en haut, la partie **« 1. LES COULEURS DU SITE »**
regroupe toutes les couleurs. Modifie uniquement les codes couleur — tout le
site suit automatiquement.

```css
--turquoise:  #45D1C4;   /* accent principal */
--abysse:     #060F1A;   /* fond de la page  */
```

Pour trouver un code couleur, cherche « sélecteur de couleur » sur Google.

### Retirer la mention « Disponible pour missions »

Cherche `pastille` et supprime la ligne entière :

```html
<p class="pastille"><span class="pastille__point"></span> Disponible pour missions</p>
```

---

## Faire apparaître les blocs préparés

Plusieurs blocs sont **déjà écrits mais désactivés** (donc invisibles sur le
site). Ils sont prêts pour tes futures mises à jour :

| Bloc | Où le trouver |
|---|---|
| **Tarifs** | `index.html`, section `8. SERVICES` |
| **Bouton CV en PDF** | `index.html`, section `9. PRODUCTIONS` |
| **Téléphone et réseaux sociaux** | `index.html`, section `11. CONTACT` |
| **Adresse postale** | `mentions-legales.html` |
| **Mention de TVA** | `mentions-legales.html` |

**Pour activer l'un d'eux :** repère le bloc, puis supprime la ligne
d'**ouverture** de commentaire au-dessus et la ligne de **fermeture** en
dessous. Le contenu apparaît alors sur le site. Complète ensuite les
informations manquantes (les `XXX`, les montants…).

Chaque bloc contient sa propre notice explicative juste au-dessus.

> ⚠️ **À FAIRE EN PRIORITÉ : ton adresse postale.**
> La page `mentions-legales.html` est en ligne et contient déjà ton SIRET
> (10184120300017), mais la loi française impose aussi l'**adresse déclarée de
> l'entreprise**. Ouvre `mentions-legales.html`, cherche
> `ADRESSE POSTALE À COMPLÉTER` et suis les instructions. Tant que ce n'est
> pas fait, tes mentions légales restent incomplètes.

---

## Vérifier son travail avant de publier

Après chaque modification, ouvre `index.html` **en double-cliquant dessus** sur
ton ordinateur : il s'affiche dans ton navigateur, exactement comme en ligne.

À vérifier :

- [ ] Aucun texte bizarre du type `-->` ou `<div` n'apparaît à l'écran
- [ ] La mise en page n'est pas cassée
- [ ] Réduis la fenêtre du navigateur au maximum : le site doit rester lisible
- [ ] Le menu et les boutons fonctionnent toujours

> ⚠️ **Si du texte apparaît alors qu'il ne devrait pas**, c'est presque toujours
> un commentaire mal refermé. Vérifie que chaque `<!--` a bien son `-->`.

---

## Structure des fichiers

```
site/
├── index.html                → LA PAGE FRANÇAISE (ton fichier principal)
├── mentions-legales.html     → page légale (SIRET, hébergeur, RGPD)
├── en/
│   └── index.html            → la page anglaise
├── css/
│   └── style.css             → couleurs et mise en page
├── js/
│   └── script.js             → menu, filtres, animations
├── images/
│   ├── photos/               → les photos du site
│   ├── logos/                → les logos (ECORUN, universités, partenaires)
│   ├── schema-these.svg      → le schéma de la thèse (français)
│   └── schema-these-en.svg   → le schéma de la thèse (anglais)
├── robots.txt                → instructions pour Google
├── sitemap.xml               → plan du site pour Google
├── .nojekyll                 → réglage technique GitHub (à ne pas toucher)
├── GUIDE-MISE-EN-LIGNE.md    → comment publier le site
└── COMMENT-MODIFIER.md       → ce fichier
```

---

## Règles d'écriture du site

Pour garder un texte naturel et professionnel, deux conventions ont été
appliquées partout. Respecte-les quand tu ajoutes du texte :

- **Pas de tiret long** (le trait `—`) au milieu des phrases. Utilise des
  virgules, des parenthèses ou deux-points. Le site n'en contient aucun.
- **Pas de caractère invisible** (espace insécable, espace fine). Une phrase
  s'écrit avec des espaces normales.

Si tu copies-colles du texte depuis Word ou depuis un site web, ces caractères
peuvent s'inviter sans que tu les voies. Le plus sûr est de coller ton texte
dans le Bloc-notes d'abord, puis de le recopier de là vers le code.
