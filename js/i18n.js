/* ==========================================================================
   Simple i18n switcher for Raziyeh Dehbozorgi's site.
   English is the default markup already in index.html.
   Selecting DE/FR swaps translatable text; selecting FA only swaps
   the name and university names (everything else stays in English
   on purpose, as requested).
   ========================================================================== */
(function () {
  var translations = {
    de: {
      "nav.home": "Startseite",
      "nav.about": "Über mich",
      "nav.publications": "Publikationen",
      "nav.education": "Ausbildung",
      "nav.contact": "Kontakt",

      "hero.tagline": "Ph.D. in Angewandter Mathematik — PDE- und IE-basierte Modellierung, numerische Analysis &amp; tiefe generative Modelle",
      "hero.cta": "Meine Arbeit entdecken",

      "svc.education.title": "Ausbildung",
      "svc.education.desc": "Ph.D. Angewandte Mathematik (IUST), M.Sc. (Rafsanjan), B.Sc. (Shiraz)",
      "svc.contact.title": "Kontakt",
      "svc.interests.title": "Forschungsinteressen",
      "svc.interests.desc": "PDEs, numerische Analysis und tiefe generative Modelle",
      "svc.pubs.title": "Publikationen",
      "svc.pubs.desc": "7 Q1-Fachzeitschriftenartikel &amp; 7 Konferenzbeiträge",
      "svc.exp.title": "Erfahrung",
      "svc.exp.desc": "6+ Jahre Postdoc-Forschung am IASBS",
      "svc.toolkit.title": "Werkzeuge",
      "svc.toolkit.desc": "Sprachen, Frameworks &amp; wissenschaftliche Rechenwerkzeuge",

      "slide.1.title": "Numerische Analysis &amp; PDEs",
      "slide.2.title": "Wissenschaftliches Rechnen",
      "slide.3.title": "Tiefe generative Modelle",

      "about.heading": "Über mich",
      "about.lede": "Angewandte Mathematikerin und Deep-Learning-Forscherin, seit über sechs Jahren an der Schnittstelle von wissenschaftlichem Rechnen und generativer KI.",
      "about.bio1": "Meine Kernkompetenz umfasst PDE- und IE-basierte Modellierung, numerische Analysis und tiefe generative Modelle &mdash; einschließlich CGANs und Diffusionsmodellen wie DDPM, DDIM, LDM, DBSM und DBM &mdash; angewendet auf inverse Probleme, computergestützte Pathologie und medizinische Bildgebung.",
      "about.bio2": "Autorin von 7 begutachteten Fachzeitschriftenartikeln (5 davon Q1) und 7 Konferenzbeiträgen, mit 2 weiteren Arbeiten in Begutachtung. Ich möchte diesen wissenschaftlichen ML/DL-Hintergrund in angewandte Forschung, F&amp;E oder wissenschaftliches Rechnen in der Industrie einbringen.",

      "stats.journals": "Q1-Fachzeitschriftenartikel",
      "stats.conf": "Konferenzbeiträge",
      "stats.years": "Jahre Postdoc-Forschung",
      "stats.review": "Artikel in Begutachtung",

      "interests.heading": "Forschungsinteressen",
      "interests.lede": "Das Bindeglied zwischen rigoroser numerischer Analysis und moderner generativer Modellierung.",
      "tag.1": "Numerische Analysis / Approximationstheorie",
      "tag.2": "Tiefe generative Modelle",
      "tag.3": "Finite-/Spektralelement-Methoden",
      "tag.4": "Stochastische Differentialgleichungen",
      "tag.5": "PDE-basierte Modellierung",
      "tag.6": "Nichtlineare, nichtlokale &amp; neuronale Operatoren",
      "tag.7": "Fraktionale PDEs / Integralgleichungen",
      "tag.8": "Inverse Probleme",
      "tag.9": "Optimalsteuerung / Optimierung",
      "tag.10": "Computer Vision",

      "toolkit.heading": "Werkzeuge",
      "toolkit.lede": "Sprachen, Frameworks und wissenschaftliche Rechenwerkzeuge aus Forschung und Lehre.",
      "toolkit.cat1": "Sprachen &amp; ML-Frameworks",
      "toolkit.cat2": "Wissenschaftliche &amp; weitere Werkzeuge",

      "pubs.heading": "Publikationen",
      "pubs.lede": "7 Q1-Fachzeitschriftenartikel, 7 Konferenzbeiträge und laufende Arbeiten zur generativen Modellierung für die Wissenschaft.",
      "filter.all": "Alle",
      "filter.journal": "Fachzeitschrift (Q1)",
      "filter.conf": "Konferenz",
      "filter.review": "In Begutachtung",
      "tagword.conference": "Konferenz",
      "tagword.review": "In Begutachtung",
      "tagword.q1journal": "Q1-Fachzeitschrift",
      "tagword.q3journal": "Q3-Fachzeitschrift",

      "contact.heading": "Kontakt aufnehmen",
      "contact.lede": "Offen für angewandte Forschung, F&amp;E und wissenschaftliches Rechnen. Melden Sie sich direkt oder nutzen Sie das Formular unten.",

      "footer.note": "(Fügen Sie oben in den &lt;a&gt;-Tags Ihre echten Links zu Scholar / LinkedIn / GitHub / ResearchGate ein)",
      "footer.gettouch": "Kontakt",
      "footer.rights": "Alle Rechte vorbehalten."
    },

    fr: {
      "nav.home": "Accueil",
      "nav.about": "À propos",
      "nav.publications": "Publications",
      "nav.education": "Formation",
      "nav.contact": "Contact",

      "hero.tagline": "Doctorat en mathématiques appliquées — modélisation basée sur les EDP et EI, analyse numérique &amp; modèles génératifs profonds",
      "hero.cta": "Découvrir mon travail",

      "svc.education.title": "Formation",
      "svc.education.desc": "Doctorat en mathématiques appliquées (IUST), Master (Rafsanjan), Licence (Chiraz)",
      "svc.contact.title": "Contact",
      "svc.interests.title": "Intérêts de recherche",
      "svc.interests.desc": "EDP, analyse numérique et modèles génératifs profonds",
      "svc.pubs.title": "Publications",
      "svc.pubs.desc": "7 articles de revue Q1 &amp; 7 articles de conférence",
      "svc.exp.title": "Expérience",
      "svc.exp.desc": "6+ ans de recherche postdoctorale à l'IASBS",
      "svc.toolkit.title": "Outils",
      "svc.toolkit.desc": "Langages, frameworks &amp; outils de calcul scientifique",

      "slide.1.title": "Analyse numérique &amp; EDP",
      "slide.2.title": "Calcul scientifique",
      "slide.3.title": "Modèles génératifs profonds",

      "about.heading": "À propos de moi",
      "about.lede": "Mathématicienne appliquée et chercheuse en deep learning, avec plus de six ans à l'intersection du calcul scientifique et de l'IA générative.",
      "about.bio1": "Mon expertise couvre la modélisation basée sur les EDP et EI, l'analyse numérique et les modèles génératifs profonds &mdash; y compris les CGAN et les modèles de diffusion tels que DDPM, DDIM, LDM, DBSM et DBM &mdash; appliqués aux problèmes inverses, à la pathologie computationnelle et à l'imagerie médicale.",
      "about.bio2": "Autrice de 7 articles de revue à comité de lecture (5 classés Q1) et de 7 articles de conférence, avec 2 travaux supplémentaires en cours d'évaluation. Je souhaite désormais mettre ce bagage scientifique en ML/DL au service de la recherche appliquée, de la R&amp;D ou du calcul scientifique dans l'industrie.",

      "stats.journals": "Articles de revue Q1",
      "stats.conf": "Articles de conférence",
      "stats.years": "Ans de recherche postdoctorale",
      "stats.review": "Articles en évaluation",

      "interests.heading": "Intérêts de recherche",
      "interests.lede": "Le lien entre l'analyse numérique rigoureuse et la modélisation générative moderne.",
      "tag.1": "Analyse numérique / théorie de l'approximation",
      "tag.2": "Modèles génératifs profonds",
      "tag.3": "Méthodes des éléments finis / spectraux",
      "tag.4": "Équations différentielles stochastiques",
      "tag.5": "Modélisation basée sur les EDP",
      "tag.6": "Opérateurs non linéaires, non locaux &amp; neuronaux",
      "tag.7": "EDP fractionnaires / équations intégrales",
      "tag.8": "Problèmes inverses",
      "tag.9": "Contrôle optimal / optimisation",
      "tag.10": "Vision par ordinateur",

      "toolkit.heading": "Outils",
      "toolkit.lede": "Langages, frameworks et outils de calcul scientifique utilisés en recherche et en enseignement.",
      "toolkit.cat1": "Langages &amp; frameworks ML",
      "toolkit.cat2": "Outils scientifiques &amp; autres",

      "pubs.heading": "Publications",
      "pubs.lede": "7 articles de revue Q1, 7 articles de conférence, et des travaux en cours sur la modélisation générative pour la science.",
      "filter.all": "Tout",
      "filter.journal": "Revue (Q1)",
      "filter.conf": "Conférence",
      "filter.review": "En évaluation",
      "tagword.conference": "Conférence",
      "tagword.review": "En évaluation",
      "tagword.q1journal": "Revue Q1",
      "tagword.q3journal": "Revue Q3",

      "contact.heading": "Me contacter",
      "contact.lede": "Ouverte à des postes en recherche appliquée, R&amp;D ou calcul scientifique. Contactez-moi directement ou utilisez le formulaire ci-dessous.",

      "footer.note": "(Ajoutez vos vrais liens Scholar / LinkedIn / GitHub / ResearchGate dans les balises &lt;a&gt; ci-dessus)",
      "footer.gettouch": "Me contacter",
      "footer.rights": "Tous droits réservés."
    },

    /* Persian: only the name and university names are translated, per request.
       Everything else intentionally falls back to English. */
    fa: {
      "hero.name": "راضیه ده‌بزرگی",
      "edu.phd.degree": "Ph.D., Applied Mathematics",
      "edu.phd.uni": "دانشگاه علم و صنعت ایران &middot; 2014&ndash;2018",
      "edu.phd.uniname": "دانشگاه علم و صنعت ایران",
      "edu.msc.uni": "دانشگاه رفسنجان &middot; 2010&ndash;2013",
      "edu.msc.uniname": "دانشگاه رفسنجان",
      "edu.bsc.uni": "دانشگاه شیراز &middot; 2005&ndash;2009",
      "edu.bsc.uniname": "دانشگاه شیراز",
      "aff.iasbs": "دانشگاه تحصيلات تکمیلی زنجان (IASBS)",
      "aff.azad": "دانشگاه آزاد، تهران"
    }
  };

  function cacheOriginals() {
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      if (el.dataset.i18nOriginal === undefined) {
        el.dataset.i18nOriginal = el.innerHTML;
      }
    });
  }

  function setLang(lang) {
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var dict = translations[lang];
      if (lang === 'en' || !dict || !dict[key]) {
        el.innerHTML = el.dataset.i18nOriginal;
      } else {
        el.innerHTML = dict[key];
      }
    });
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
    document.documentElement.setAttribute('lang', lang);
  }

  document.addEventListener('DOMContentLoaded', function () {
    cacheOriginals();
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        setLang(btn.getAttribute('data-lang'));
      });
    });
  });
})();
