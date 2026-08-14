/* =====================================================================
   SITE ECORUN, JAVASCRIPT (les petites interactions de la page)
   =====================================================================

   CE QUE FAIT CE FICHIER, DANS L'ORDRE :
     1. Ombre sur l'en-tête quand on descend dans la page
     2. Ouverture / fermeture du menu sur mobile (bouton hamburger)
     3. Surlignage du lien du menu correspondant à la section visible
     4. Apparition en fondu des éléments quand on les fait défiler
     5. Filtres de la frise chronologique (Formation / Pro / Associatif)
     6. Bouton « retour en haut »
     7. Mise à jour automatique de l'année dans le pied de page

   BON À SAVOIR
     • Ce fichier est identique pour la version française et anglaise.
     • Le site reste entièrement lisible même si ce fichier ne se charge
       pas : rien d'essentiel ne dépend du JavaScript.
     • Tout ce qui est entre // ou entre barre-oblique-étoile et
       étoile-barre-oblique est un commentaire, non exécuté.
   ===================================================================== */


/* "use strict" demande au navigateur d'être rigoureux : il signale
   les erreurs au lieu de les ignorer silencieusement. */
"use strict";


/* On attend que toute la page soit chargée avant d'agir, sinon le
   script chercherait des éléments qui n'existent pas encore. */
document.addEventListener("DOMContentLoaded", function () {


  /* ===================================================================
     1. EN-TÊTE : ombre et fond plus opaque dès qu'on descend
     =================================================================== */

  var entete = document.getElementById("entete");
  var boutonHaut = document.getElementById("haut");

  /* Cette fonction est appelée à chaque défilement de la page. */
  function auDefilement() {
    var position = window.pageYOffset || document.documentElement.scrollTop;

    /* Au-delà de 40 pixels vers le bas, on ajoute la classe
       "entete--defile" (définie dans le CSS partie 4). */
    if (entete) {
      if (position > 40) {
        entete.classList.add("entete--defile");
      } else {
        entete.classList.remove("entete--defile");
      }
    }

    /* Le bouton « retour en haut » apparaît après 600 pixels. */
    if (boutonHaut) {
      if (position > 600) {
        boutonHaut.classList.add("haut--visible");
      } else {
        boutonHaut.classList.remove("haut--visible");
      }
    }
  }

  /* { passive: true } indique au navigateur que ce code ne bloquera
     pas le défilement : la page reste fluide, surtout sur mobile. */
  window.addEventListener("scroll", auDefilement, { passive: true });
  auDefilement();   /* on l'exécute une fois au chargement */


  /* ===================================================================
     2. MENU MOBILE : le bouton hamburger ouvre et ferme le menu
     =================================================================== */

  var burger = document.getElementById("burger");
  var nav = document.getElementById("nav");

  /* Ce même fichier sert aux deux versions du site. On regarde donc la
     langue déclarée dans la balise <html lang="..."> pour écrire les
     textes d'accessibilité dans la bonne langue. */
  var estAnglais = document.documentElement.lang === "en";
  var texteOuvrir = estAnglais ? "Open menu" : "Ouvrir le menu";
  var texteFermer = estAnglais ? "Close menu" : "Fermer le menu";

  if (burger && nav) {

    burger.addEventListener("click", function () {
      /* aria-expanded indique aux lecteurs d'écran si le menu est
         ouvert. On lit sa valeur puis on l'inverse. */
      var ouvert = burger.getAttribute("aria-expanded") === "true";

      burger.setAttribute("aria-expanded", ouvert ? "false" : "true");
      burger.setAttribute("aria-label", ouvert ? texteOuvrir : texteFermer);
      nav.classList.toggle("nav--ouvert", !ouvert);
    });

    /* Quand on clique sur un lien du menu, on referme le panneau
       (sinon il resterait ouvert par-dessus la section visée). */
    var liensMenu = nav.querySelectorAll("a");
    for (var i = 0; i < liensMenu.length; i++) {
      liensMenu[i].addEventListener("click", function () {
        burger.setAttribute("aria-expanded", "false");
        burger.setAttribute("aria-label", texteOuvrir);
        nav.classList.remove("nav--ouvert");
      });
    }

    /* La touche Échap referme aussi le menu. */
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("nav--ouvert")) {
        burger.setAttribute("aria-expanded", "false");
        burger.setAttribute("aria-label", texteOuvrir);
        nav.classList.remove("nav--ouvert");
        burger.focus();
      }
    });
  }


  /* ===================================================================
     3. SURLIGNAGE DU MENU selon la section affichée à l'écran
     (on appelle ça un « scroll-spy »)
     =================================================================== */

  var liensAncre = document.querySelectorAll('.nav__lien[href^="#"]');
  var sections = [];

  /* Pour chaque lien du menu, on retrouve la section correspondante. */
  for (var j = 0; j < liensAncre.length; j++) {
    var cible = document.querySelector(liensAncre[j].getAttribute("href"));
    if (cible) {
      sections.push({ lien: liensAncre[j], element: cible });
    }
  }

  function majMenuActif() {
    /* On repère la section dont le haut vient de passer sous l'en-tête. */
    var position = (window.pageYOffset || document.documentElement.scrollTop) + 140;
    var actuelle = null;

    for (var k = 0; k < sections.length; k++) {
      if (sections[k].element.offsetTop <= position) {
        actuelle = sections[k];
      }
    }

    /* On enlève le surlignage partout, puis on le remet au bon endroit. */
    for (var m = 0; m < sections.length; m++) {
      sections[m].lien.classList.remove("nav__lien--actif");
    }
    if (actuelle) {
      actuelle.lien.classList.add("nav__lien--actif");
    }
  }

  if (sections.length > 0) {
    window.addEventListener("scroll", majMenuActif, { passive: true });
    majMenuActif();
  }


  /* ===================================================================
     4. APPARITION EN FONDU des éléments au défilement
     Concerne tous les éléments qui portent la classe "reveler".
     =================================================================== */

  var aReveler = document.querySelectorAll(".reveler");

  /* IntersectionObserver = outil du navigateur qui prévient dès qu'un
     élément entre dans l'écran. Tous les navigateurs modernes le
     connaissent ; sinon on affiche simplement tout d'un coup. */
  if ("IntersectionObserver" in window) {

    var observateur = new IntersectionObserver(function (entrees) {

      for (var n = 0; n < entrees.length; n++) {
        if (entrees[n].isIntersecting) {
          entrees[n].target.classList.add("reveler--visible");
          /* Une fois révélé, on arrête de surveiller cet élément. */
          observateur.unobserve(entrees[n].target);
        }
      }

    }, {
      /* L'élément est considéré visible quand il dépasse de 60 px
         par le bas de l'écran : l'animation démarre juste avant. */
      rootMargin: "0px 0px -60px 0px",
      threshold: 0.05
    });

    for (var p = 0; p < aReveler.length; p++) {
      observateur.observe(aReveler[p]);
    }

    /* FILET DE SÉCURITÉ, très important.
       Dans quelques situations rares (onglet ouvert en arrière-plan,
       navigateur exotique, extension qui bloque l'animation), la
       détection ci-dessus peut ne jamais se déclencher : le contenu
       resterait alors invisible. Au bout de 3 secondes, on force donc
       l'affichage de tout ce qui n'a pas encore été révélé. */
    window.setTimeout(function () {
      var restants = document.querySelectorAll(".reveler:not(.reveler--visible)");
      for (var z = 0; z < restants.length; z++) {
        restants[z].classList.add("reveler--visible");
      }
    }, 3000);

  } else {
    /* Navigateur ancien : on affiche tout immédiatement. */
    for (var q = 0; q < aReveler.length; q++) {
      aReveler[q].classList.add("reveler--visible");
    }
  }


  /* ===================================================================
     5. FILTRES DE LA FRISE CHRONOLOGIQUE
     Les boutons « Formation / Professionnel / Associatif » affichent
     ou masquent les colonnes correspondantes.
     =================================================================== */

  var boutonsFiltre = document.querySelectorAll(".filtre");
  var frise = document.getElementById("frise");

  for (var r = 0; r < boutonsFiltre.length; r++) {

    boutonsFiltre[r].addEventListener("click", function () {

      /* data-filtre vaut "tout", "formation", "pro" ou "asso".
         Il est écrit dans le HTML sur chaque bouton. */
      var choix = this.getAttribute("data-filtre");

      /* On déplace le style "actif" sur le bouton cliqué. */
      for (var s = 0; s < boutonsFiltre.length; s++) {
        boutonsFiltre[s].classList.remove("filtre--actif");
      }
      this.classList.add("filtre--actif");

      /* Tout le travail d'affichage est fait par le CSS : il suffit
         d'écrire le choix sur la frise, et les règles
         .frise[data-filtre="..."] (partie 10 du CSS) s'appliquent. */
      if (frise) {
        frise.setAttribute("data-filtre", choix);
      }
    });
  }


  /* ===================================================================
     6. BOUTON « RETOUR EN HAUT »
     =================================================================== */

  if (boutonHaut) {
    boutonHaut.addEventListener("click", function () {

      /* On vérifie si le visiteur a demandé à réduire les animations. */
      var animationsReduites =
        window.matchMedia &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (window.scrollTo && !animationsReduites) {
        /* try/catch : certains vieux navigateurs refusent l'objet
           { behavior: "smooth" }. On retombe alors sur un saut direct. */
        try {
          window.scrollTo({ top: 0, behavior: "smooth" });
          return;
        } catch (err) {
          /* on continue vers la solution de secours ci-dessous */
        }
      }
      window.scrollTo(0, 0);
    });
  }


  /* ===================================================================
     7. ANNÉE AUTOMATIQUE dans le pied de page
     Évite d'avoir à modifier le site chaque 1er janvier.
     =================================================================== */

  var annee = document.getElementById("annee");
  if (annee) {
    annee.textContent = new Date().getFullYear();
  }


});
