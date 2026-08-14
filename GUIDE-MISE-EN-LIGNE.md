# Guide : mettre le site en ligne avec GitHub Pages

Ce guide est adapté à **ta configuration réelle**, celle qui est déjà en place
sur ton ordinateur. Aucune connaissance technique n'est nécessaire.

## Ta configuration

| | |
|---|---|
| **Compte GitHub** | `neufofa` (déjà créé) |
| **Dépôt** | `github.com/neufofa/ecorun` (déjà créé, encore vide) |
| **Adresse du site** | **https://neufofa.github.io/ecorun/** |
| **Dossier sur ton PC** | `Bureau\microentreprise\ecorun\site` |
| **Coût** | 0 € |

> **C'est entièrement gratuit et sans limite de visiteurs.** GitHub Pages est
> le service d'hébergement de GitHub (propriété de Microsoft). Il n'y a rien
> à payer, jamais, et aucune publicité.

---

## Sommaire

1. [Comprendre en 1 minute](#1-comprendre-en-1-minute)
2. [Envoyer les fichiers sur GitHub](#2-envoyer-les-fichiers-sur-github)
3. [Activer la mise en ligne](#3-activer-la-mise-en-ligne)
4. [Vérifier que tout fonctionne](#4-vérifier-que-tout-fonctionne)
5. [Modifier le site plus tard](#5-modifier-le-site-plus-tard)
6. [Se faire référencer sur Google](#6-se-faire-référencer-sur-google)
7. [Plus tard : une adresse plus courte ou un domaine perso](#7-plus-tard--une-adresse-plus-courte-ou-un-domaine-perso)
8. [Problèmes fréquents](#8-problèmes-fréquents)

---

## 1. Comprendre en 1 minute

Trois mots de vocabulaire, et c'est tout :

| Mot | Ce que ça veut dire vraiment |
|---|---|
| **GitHub** | Un site web où l'on range des dossiers de fichiers. Comme un Google Drive, mais pour du code. |
| **Dépôt** (*repository*, ou *repo*) | Un dossier sur GitHub. Ton site est le dépôt `ecorun`. |
| **GitHub Pages** | La fonction de GitHub qui transforme un dépôt en véritable site web public. |

**Le principe :** tu déposes tes fichiers dans le dépôt → GitHub les affiche
comme un site web → chaque fois que tu modifies un fichier, le site se met à
jour tout seul en une minute environ.

---

## 2. Envoyer les fichiers sur GitHub

Deux méthodes. **La méthode A est la plus simple** si tu n'as jamais utilisé Git.

### Méthode A : par le navigateur (recommandée la première fois)

1. Va sur **https://github.com/neufofa/ecorun**
2. Clique sur le lien **« uploading an existing file »**
   *(ou va directement sur https://github.com/neufofa/ecorun/upload/main)*
3. Ouvre le dossier `Bureau\microentreprise\ecorun\site` sur ton ordinateur
4. Sélectionne les éléments du tableau ci-dessous et fais-les glisser dans la
   zone pointillée du navigateur
5. En bas, écris un message, par exemple `Première version du site`
6. Clique sur le bouton vert **Commit changes**

| ✅ À ENVOYER | Rôle |
|---|---|
| `index.html` | La page d'accueil en français |
| `mentions-legales.html` | La page légale (obligatoire) |
| `css` *(le dossier entier)* | Les couleurs et la mise en page |
| `js` *(le dossier entier)* | Le menu, les filtres, les animations |
| `images` *(le dossier entier)* | Photos et logos optimisés |
| `en` *(le dossier entier)* | La version anglaise |
| `robots.txt` | Instructions pour Google |
| `sitemap.xml` | Plan du site pour Google |
| `.nojekyll` | Réglage technique GitHub (fichier vide) |

| ❌ À NE PAS ENVOYER | Pourquoi |
|---|---|
| `information_site.odt` | **Contient tes informations personnelles, il serait public et lisible par n'importe qui.** |
| `photo_moi1.jpg` à `photo_moi4.jpg` | Originaux lourds ; les versions optimisées sont déjà dans `images` |
| `flo_petrel.jpg`, `jdn.jpg`, `mt180.png`, `Tuit-tuit-JaimeMARTINEZ.jpg` | Idem : déjà recadrés et allégés dans `images/photos` |
| `logo_*.png`, `logo_*.jpg`, `Logo_bestrun.jpg` | Idem : déjà optimisés dans `images/logos` |
| `image_these_mt180.pdf` | Document de travail |
| `.claude` | Dossier de travail, inutile en ligne |
| `GUIDE-MISE-EN-LIGNE.md` et `COMMENT-MODIFIER.md` | Tes notes perso (tu *peux* les envoyer, ça ne gêne pas) |

> 💡 **Le glisser-déposer de dossiers entiers** fonctionne dans Chrome, Edge et
> Firefox. Sélectionne `css`, `js`, `images`, `en` et les fichiers, et
> fais-les glisser d'un seul coup.
>
> Le fichier `.nojekyll` commence par un point : sous Windows il peut être
> masqué. Dans l'explorateur de fichiers, onglet **Affichage** → coche
> **Éléments masqués** pour le voir.

### Méthode B : en ligne de commande

Le dépôt local est **déjà prêt et le commit est déjà créé** sur ton
ordinateur. Il ne reste qu'à l'envoyer. Ouvre un terminal dans le dossier du
site et lance :

```bash
git push -u origin main
```

Git va ouvrir une fenêtre pour te demander de te connecter à GitHub
(**Sign in with your browser**). Accepte, et l'envoi se fait.

> Si la fenêtre ne s'ouvre pas ou si l'envoi échoue, utilise la méthode A :
> le résultat est exactement le même.

---

## 3. Activer la mise en ligne

⚠️ **Cette étape est obligatoire.** Contrairement à un dépôt nommé
`neufofa.github.io`, un dépôt ordinaire comme `ecorun` ne se publie pas tout
seul : il faut activer GitHub Pages une fois.

1. Va sur **https://github.com/neufofa/ecorun/settings/pages**
   *(ou : dans le dépôt, onglet **Settings**, puis **Pages** dans le menu de gauche)*
2. Dans la section **Build and deployment** :
   - **Source** → choisis `Deploy from a branch`
   - **Branch** → choisis `main`, et le dossier `/ (root)`
3. Clique sur **Save**

⏱️ Patiente 1 à 3 minutes, puis rafraîchis la page. Un bandeau vert apparaît :
*« Your site is live at https://neufofa.github.io/ecorun/ »*

> **Le dépôt doit être Public.** L'hébergement de sites privés est réservé aux
> comptes payants. « Public » signifie simplement que le *code* du site est
> visible, ce qui est le cas de la majorité des sites vitrines et ne présente
> aucun risque : il n'y a ni mot de passe ni donnée sensible dedans. C'est
> aussi la raison pour laquelle `information_site.odt` ne doit pas être envoyé.
>
> Pour vérifier : **Settings** → tout en bas → si tu lis « Change visibility »
> avec la mention « currently public », c'est bon.

---

## 4. Vérifier que tout fonctionne

Ouvre **https://neufofa.github.io/ecorun/** et contrôle :

- [ ] La photo du lagon s'affiche en haut à droite
- [ ] Le menu du haut fonctionne (clique sur « Parcours »)
- [ ] Dans la frise, les années sont bien alignées sur les trois colonnes
- [ ] Le petit drapeau britannique en haut à droite amène à la version anglaise
- [ ] Sur la version anglaise, le drapeau français ramène à la version française
- [ ] Les logos s'affichent en bas de page
- [ ] Le lien « Mentions légales » du pied de page fonctionne
- [ ] Le bouton e-mail ouvre bien ta messagerie
- [ ] **Sur ton téléphone** : le menu s'ouvre avec le bouton à trois barres

> 🔄 **Si le site s'affiche mal après une modification**, ton navigateur garde
> souvent l'ancienne version en mémoire. Force le rechargement avec
> **Ctrl + F5** (Windows) ou **Cmd + Maj + R** (Mac).

---

## 5. Modifier le site plus tard

C'est le point important : **tu n'as besoin d'aucun logiciel.** Tout se fait
depuis le site GitHub, dans ton navigateur.

### Modifier un texte

1. Va sur ton dépôt : **https://github.com/neufofa/ecorun**
2. Clique sur le fichier `index.html`
3. Clique sur l'icône **crayon** ✏️ en haut à droite
4. Utilise **Ctrl + F** pour retrouver le texte à changer, puis modifie-le
5. En haut à droite, clique sur **Commit changes...**
6. Écris ce que tu as changé (ex. `Mise à jour de la présentation`), puis **Commit changes**

⏱️ Le site public est mis à jour **en une minute environ**.

> ⚠️ **N'oublie pas la version anglaise !** Si tu modifies un texte dans
> `index.html`, modifie le texte correspondant dans `en/index.html`.

### Ajouter une photo

1. Dans le dépôt, ouvre le dossier `images`, puis `photos`
2. Bouton **Add file** → **Upload files**
3. Fais glisser ta photo, puis **Commit changes**
4. Modifie ensuite `index.html` pour l'afficher (voir `COMMENT-MODIFIER.md`)

> 💡 **Compresse toujours tes photos avant de les envoyer** : une photo
> d'appareil photo pèse 3 à 5 Mo, ce qui rend le site très lent, surtout en
> 4G. Passe-la sur **https://squoosh.app** (gratuit, sans inscription) et
> vise **moins de 300 Ko** pour une largeur d'environ 1200 pixels.

### En cas de fausse manœuvre

Rien n'est jamais perdu : GitHub conserve **tout l'historique**. Onglet
**Commits** (ou l'horloge ↩️) → tu peux consulter et restaurer n'importe
quelle version précédente du site.

---

## 6. Se faire référencer sur Google

Mettre le site en ligne ne suffit pas : il faut le **déclarer** à Google.
Sans cela, il peut mettre des semaines à être trouvé — voire ne jamais l'être.

### Étape 6.1 — Google Search Console *(15 minutes, indispensable)*

1. Va sur **https://search.google.com/search-console**
2. Connecte-toi avec ton compte Google (`florian.hoarau.m@gmail.com`)
3. Choisis le type **Préfixe d'URL** (colonne de droite)
4. Saisis `https://neufofa.github.io/ecorun/` puis **Continuer**
5. **Validation :** choisis la méthode **Balise HTML**. Google te donne une
   ligne de code à coller. Copie-la, puis :
   - ouvre `index.html` sur GitHub (crayon ✏️),
   - colle cette ligne **juste avant** la ligne `</head>`,
   - **Commit changes**, attends 2 minutes,
   - reviens sur Search Console et clique sur **Valider**.
   - Fais de même dans `en/index.html`.
6. Une fois validé, va dans **Sitemaps** (menu de gauche), saisis `sitemap.xml`
   et clique sur **Envoyer**

✅ Google connaît maintenant ton site. Comptez **quelques jours à 2 semaines**
avant d'apparaître dans les résultats.

### Étape 6.2 — Fiche Google Business Profile *(le plus rentable en local)*

Pour ressortir sur *« consultant écologie La Réunion »*, une fiche
d'établissement est le levier le plus puissant :
**https://www.google.com/business** → crée une fiche au nom d'**ECORUN**,
catégorie « Consultant en environnement », zone desservie « La Réunion »,
et ajoute le lien vers ton site.

### Étape 6.3 — Les liens entrants

Google juge un site sur les sites qui parlent de lui. Chaque lien compte :

- ton profil **LinkedIn** (rubrique « Site web »)
- **ResearchGate**, **ORCID**, **Google Scholar**
- le site de l'association **Best Run**
- ta page personnelle sur le site de l'**Université de La Réunion** ou de l'UMR ENTROPIE
- les annuaires d'associations et de professionnels de l'environnement à La Réunion

### Étape 6.4 — Les mots-clés déjà intégrés au site

Le site est déjà optimisé pour ces recherches :

**En français** — `consultant en écologie La Réunion` · `écologue indépendant 974` ·
`expert biodiversité océan Indien` · `docteur biologie marine Réunion` ·
`études naturalistes Réunion` · `expertise requins La Réunion` ·
`télépilote drone environnement Réunion` · `suivi tortues marines îles Éparses` ·
`lutte espèces exotiques envahissantes Réunion` · `pollution plastique océan Indien`

**En anglais** — `marine ecology consultant Indian Ocean` ·
`shark biology expert consultant` · `freelance marine biologist Reunion Island` ·
`tropical island conservation consultant` · `seabird monitoring Western Indian Ocean`

> 💡 **Pour progresser durablement**, la meilleure action est d'ajouter du
> contenu : un article de temps en temps sur une mission, une espèce, une
> méthode. Google favorise nettement les sites vivants.

---

## 7. Plus tard : une adresse plus courte ou un domaine perso

Si un jour tu veux `https://ecorun.re` au lieu de `.github.io` :

1. Achète le domaine chez un revendeur (**OVH**, **Gandi**, **Infomaniak** —
   compte 15 à 25 € par an pour un `.re`)
2. Dans les réglages DNS du domaine, crée 4 enregistrements **A** pointant vers :
   `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
3. Sur GitHub : **Settings** → **Pages** → **Custom domain** → saisis `ecorun.re` → **Save**
4. Attends que la case **Enforce HTTPS** devienne cochable, puis coche-la
5. Enfin, remplace toutes les adresses `https://neufofa.github.io/ecorun` par
   `https://ecorun.re` dans `index.html`, `en/index.html`, `robots.txt` et `sitemap.xml`

L'hébergement reste gratuit : tu ne paies que le nom de domaine.

---

## 8. Problèmes fréquents

| Symptôme | Cause et solution |
|---|---|
| **Erreur 404** sur l'adresse du site | Le fichier `index.html` n'est pas à la racine du dépôt, mais dans un sous-dossier. Il doit être visible dès la page d'accueil du dépôt. |
| **La page s'affiche sans couleurs**, texte noir sur blanc | Le dossier `css` n'a pas été envoyé, ou a été renommé. Vérifie que `css/style.css` existe bien dans le dépôt. |
| **Les images ne s'affichent pas** | Le dossier `images` manque, ou les noms de fichiers ont été modifiés. ⚠️ Les majuscules comptent en ligne : `Photo.JPG` ≠ `photo.jpg`. |
| **La version anglaise est en erreur 404** | Le dossier `en` n'a pas été envoyé, ou son fichier ne s'appelle pas exactement `index.html`. |
| **Le site ne se met pas à jour** | 1) Patiente 2 minutes. 2) Force le rechargement : **Ctrl + F5**. 3) Onglet **Actions** du dépôt : une croix rouge signale un problème de publication. |
| **« Your site is live » ne s'affiche pas** | Le dépôt est en **Private**. Passe-le en Public : **Settings** → tout en bas → **Change visibility**. |
| **Du texte bizarre apparaît sur le site** (ex. `-->`) | Un commentaire du code a été mal refermé lors d'une modification. Annule la modification via l'onglet **Commits**. |

---

## Récapitulatif

| | |
|---|---|
| **Adresse du site** | `https://neufofa.github.io/ecorun/` |
| **Adresse du dépôt** | `https://github.com/neufofa/ecorun` |
| **Réglage Pages** | `https://github.com/neufofa/ecorun/settings/pages` |
| **Coût** | 0 € |
| **Délai de mise à jour** | ~1 minute après chaque modification |
| **Pour modifier un texte** | Dépôt → `index.html` → crayon ✏️ → *Commit changes* |
| **Ne jamais publier** | `information_site.odt` |

Pour modifier le contenu du site lui-même (textes, photos, sections),
consulte le fichier **`COMMENT-MODIFIER.md`**.
