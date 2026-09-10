/* ==========================================================================
   i18n switcher for Raziyeh Dehbozorgi's site.
   English is the default markup already in index.html (used as fallback).
   DE / FR / FA are now fully translated across every section.
   ========================================================================== */
(function () {
  var translations = {
    de: {
      "nav.home": "Startseite", "nav.about": "Über mich", "nav.publications": "Publikationen",
      "nav.education": "Ausbildung", "nav.contact": "Kontakt",

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

      "stats.journals": "Q1-Fachzeitschriftenartikel", "stats.conf": "Konferenzbeiträge",
      "stats.years": "Jahre Postdoc-Forschung", "stats.review": "Artikel in Begutachtung",

      "interests.heading": "Forschungsinteressen",
      "interests.lede": "Das Bindeglied zwischen rigoroser numerischer Analysis und moderner generativer Modellierung.",
      "tag.1": "Numerische Analysis / Approximationstheorie", "tag.2": "Tiefe generative Modelle",
      "tag.3": "Finite-/Spektralelement-Methoden", "tag.4": "Stochastische Differentialgleichungen",
      "tag.5": "PDE-basierte Modellierung", "tag.6": "Nichtlineare, nichtlokale &amp; neuronale Operatoren",
      "tag.7": "Fraktionale PDEs / Integralgleichungen", "tag.8": "Inverse Probleme",
      "tag.9": "Optimalsteuerung / Optimierung", "tag.10": "Computer Vision",

      "toolkit.heading": "Werkzeuge",
      "toolkit.lede": "Sprachen, Frameworks und wissenschaftliche Rechenwerkzeuge aus Forschung und Lehre.",
      "toolkit.cat1": "Sprachen &amp; ML-Frameworks", "toolkit.cat2": "Wissenschaftliche &amp; weitere Werkzeuge",

      "pubs.heading": "Publikationen",
      "pubs.lede": "7 Q1-Fachzeitschriftenartikel, 7 Konferenzbeiträge und laufende Arbeiten zur generativen Modellierung für die Wissenschaft.",
      "filter.all": "Alle", "filter.journal": "Fachzeitschrift (Q1)", "filter.conf": "Konferenz", "filter.review": "In Begutachtung",
      "tagword.conference": "Konferenz", "tagword.review": "In Begutachtung",
      "tagword.q1journal": "Q1-Fachzeitschrift", "tagword.q3journal": "Q3-Fachzeitschrift",

      "contact.heading": "Kontakt aufnehmen",
      "contact.lede": "Offen für angewandte Forschung, F&amp;E und wissenschaftliches Rechnen. Melden Sie sich direkt oder nutzen Sie das Formular unten.",
      "contact.email": "E-Mail", "contact.whatsapp": "WhatsApp (freiberuflich)", "contact.telegram": "Telegram (freiberuflich)",

      "exp.heading": "Akademische &amp; Lehrerfahrung",
      "exp.lede": "Postdoktorandenforschung, Lehrtätigkeit und Assistenzstellen über mehr als sechs Jahre.",
      "exp.postdoc2.title": "Postdoktorandin, Institute for Advanced Studies in Basic Sciences (IASBS)",
      "exp.postdoc2.desc": "Entwicklung eines Deep-Ritz-Lernrahmens zur Lösung elliptischer PDEs mittels Finite-Elemente-Datensätzen (FreeFem++), getestet an Poisson- und Schrödinger-Gleichungen gegen klassische FEM-Baselines.",
      "exp.postdoc1.title": "Postdoktorandin, IASBS",
      "exp.postdoc1.desc": "Entwicklung einer adaptiven hp-Kollokationsmethode für nichtlineare Abel-Inverse-Probleme sowie eines Galerkin-FEM/SEM-Lösers für nichtlineare fraktionale Randwertprobleme.",
      "exp.azad.title": "Teilzeitdozentin, Azad-Universitäten, Teheran",
      "exp.azad.desc": "Unterrichtete 6 Kernkurse in Mathematik für Kohorten von 40–60 Studierenden.",
      "exp.uast.title": "Teilzeitdozentin, University of Applied Sciences &amp; Technology",
      "exp.uast.desc": "Unterrichtete Analysis I/II, gewöhnliche Differentialgleichungen und numerische Analysis für Kohorten von 40–60 Studierenden.",
      "exp.ta.title": "Wissenschaftliche Hilfskraft, Iran University of Science and Technology",
      "exp.ta.desc": "Unterstützte den Unterricht in 4 fortgeschrittenen Kursen und betreute mindestens 7 Masterstudierende.",
      "exp.freelance.title": "Freiberufliche Programmierung &amp; Nachhilfe",
      "exp.freelance.desc": "Projektbasierter Unterricht, Forschung und Beratung in Python, MATLAB, C++, Java, ML/DL, Datenanalyse, Power BI und Arduino.",
      "exp.present": "heute",

      "activities.heading": "Berufliche Aktivitäten &amp; Anerkennung",
      "activities.lede": "Gutachtertätigkeit, Mitgliedschaften, Auszeichnungen und ausgewählte KI-Projekte.",
      "activities.reviewing.title": "Gutachtertätigkeit &amp; Mitgliedschaft",
      "activities.reviewing.desc": "Gutachterin für AMS MathSciNet, Journal of Computational and Applied Mathematics, JAMP, FILOMAT, Mathematical Modeling Journal und Mathematical Science Journal. Konferenzgutachterin, 51. Iranische Mathematikkonferenz (2021). Mitglied der American Mathematical Society &amp; Iranian Mathematical Society. Buchredakteurin, „Introduction to Mathematics&quot; (Prof. Sepehri, Universität Shiraz).",
      "activities.awards.title": "Auszeichnungen &amp; Erfolge",
      "activities.awards.desc": "Erstplatzierte Studierende über alle Abschlüsse hinweg (GPA ≈ 4,0). Rang 23 von ~8.000 bei der landesweiten Ph.D.-Aufnahmeprüfung. Ph.D.-, M.Sc.- und B.Sc.-Regierungsstipendien (2005–2018).",
      "activities.projects.title": "Ausgewählte KI-Projekte",
      "activities.projects.desc": "Segmentierung von Hirnregionen zur MS-Diagnose mittels VGG19, VGG16 und ResNet50. Sprachsignalverarbeitung mittels FFT und Wavelet-Transformationen. Bildabruf mittels invarianter Krawtchouk-Momente.",

      "certs.heading": "Zertifizierungen, Kurse &amp; Seminare",
      "certs.lede": "Kontinuierliches Lernen in maschinellem Lernen, generativen Modellen und angewandter KI.",
      "certs.coursera": "Machine Learning — Andrew Ng, Coursera", "certs.certification": "Zertifizierung",
      "certs.mila": "MILA-Kurse: Representation Learning, Applied Machine Learning, Advanced Structured Prediction &amp; Optimization, Deep Learning for Computational Pathology",
      "certs.kuleshov": "Machine Learning, generative Modelle, KI für die Wissenschaft — Volodymyr Kuleshov (Cornell Tech), UCLA &amp; Stanford",
      "certs.oneworld": "[One World ML] Math of Machine Learning Seminare", "certs.present": "2021–heute",

      "footer.note": "(Fügen Sie oben in den &lt;a&gt;-Tags Ihre echten Links zu Scholar / LinkedIn / GitHub / ResearchGate ein)",
      "footer.gettouch": "Kontakt", "footer.rights": "Alle Rechte vorbehalten."
    },

    fr: {
      "nav.home": "Accueil", "nav.about": "À propos", "nav.publications": "Publications",
      "nav.education": "Formation", "nav.contact": "Contact",

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

      "slide.1.title": "Analyse numérique &amp; EDP", "slide.2.title": "Calcul scientifique",
      "slide.3.title": "Modèles génératifs profonds",

      "about.heading": "À propos de moi",
      "about.lede": "Mathématicienne appliquée et chercheuse en deep learning, avec plus de six ans à l'intersection du calcul scientifique et de l'IA générative.",
      "about.bio1": "Mon expertise couvre la modélisation basée sur les EDP et EI, l'analyse numérique et les modèles génératifs profonds &mdash; y compris les CGAN et les modèles de diffusion tels que DDPM, DDIM, LDM, DBSM et DBM &mdash; appliqués aux problèmes inverses, à la pathologie computationnelle et à l'imagerie médicale.",
      "about.bio2": "Autrice de 7 articles de revue à comité de lecture (5 classés Q1) et de 7 articles de conférence, avec 2 travaux en cours d'évaluation. Je souhaite mettre ce bagage scientifique en ML/DL au service de la recherche appliquée, de la R&amp;D ou du calcul scientifique dans l'industrie.",

      "stats.journals": "Articles de revue Q1", "stats.conf": "Articles de conférence",
      "stats.years": "Ans de recherche postdoctorale", "stats.review": "Articles en évaluation",

      "interests.heading": "Intérêts de recherche",
      "interests.lede": "Le lien entre l'analyse numérique rigoureuse et la modélisation générative moderne.",
      "tag.1": "Analyse numérique / théorie de l'approximation", "tag.2": "Modèles génératifs profonds",
      "tag.3": "Méthodes des éléments finis / spectraux", "tag.4": "Équations différentielles stochastiques",
      "tag.5": "Modélisation basée sur les EDP", "tag.6": "Opérateurs non linéaires, non locaux &amp; neuronaux",
      "tag.7": "EDP fractionnaires / équations intégrales", "tag.8": "Problèmes inverses",
      "tag.9": "Contrôle optimal / optimisation", "tag.10": "Vision par ordinateur",

      "toolkit.heading": "Outils",
      "toolkit.lede": "Langages, frameworks et outils de calcul scientifique utilisés en recherche et en enseignement.",
      "toolkit.cat1": "Langages &amp; frameworks ML", "toolkit.cat2": "Outils scientifiques &amp; autres",

      "pubs.heading": "Publications",
      "pubs.lede": "7 articles de revue Q1, 7 articles de conférence, et des travaux en cours sur la modélisation générative pour la science.",
      "filter.all": "Tout", "filter.journal": "Revue (Q1)", "filter.conf": "Conférence", "filter.review": "En évaluation",
      "tagword.conference": "Conférence", "tagword.review": "En évaluation",
      "tagword.q1journal": "Revue Q1", "tagword.q3journal": "Revue Q3",

      "contact.heading": "Me contacter",
      "contact.lede": "Ouverte à des postes en recherche appliquée, R&amp;D ou calcul scientifique. Contactez-moi directement ou utilisez le formulaire ci-dessous.",
      "contact.email": "E-mail", "contact.whatsapp": "WhatsApp (freelance)", "contact.telegram": "Telegram (freelance)",

      "exp.heading": "Expérience académique et d'enseignement",
      "exp.lede": "Recherche postdoctorale, enseignement et assistanat sur plus de six ans.",
      "exp.postdoc2.title": "Chercheuse postdoctorale, Institute for Advanced Studies in Basic Sciences (IASBS)",
      "exp.postdoc2.desc": "Conception d'un cadre d'apprentissage Deep Ritz pour résoudre des EDP elliptiques à l'aide de jeux de données par éléments finis (FreeFem++), testé sur les équations de Poisson et de Schrödinger.",
      "exp.postdoc1.title": "Chercheuse postdoctorale, IASBS",
      "exp.postdoc1.desc": "Développement d'une méthode de collocation hp adaptative pour les problèmes inverses non linéaires d'Abel, et conception d'un solveur Galerkin FEM/SEM pour des problèmes aux limites fractionnaires non linéaires.",
      "exp.azad.title": "Chargée de cours, universités Azad, Téhéran",
      "exp.azad.desc": "Enseignement de 6 cours fondamentaux de mathématiques à des cohortes de 40 à 60 étudiants.",
      "exp.uast.title": "Chargée de cours, University of Applied Sciences &amp; Technology",
      "exp.uast.desc": "Enseignement de l'analyse, des équations différentielles ordinaires et de l'analyse numérique à des cohortes de 40 à 60 étudiants.",
      "exp.ta.title": "Assistante d'enseignement, Iran University of Science and Technology",
      "exp.ta.desc": "Soutien à l'enseignement dans 4 cours avancés et co-encadrement d'au moins 7 étudiants de master.",
      "exp.freelance.title": "Programmation et tutorat en freelance",
      "exp.freelance.desc": "Enseignement, recherche et conseil basés sur des projets en Python, MATLAB, C++, Java, ML/DL, analyse de données, Power BI et Arduino.",
      "exp.present": "aujourd'hui",

      "activities.heading": "Activités professionnelles et distinctions",
      "activities.lede": "Évaluation par les pairs, adhésions, distinctions et projets d'IA sélectionnés.",
      "activities.reviewing.title": "Évaluation par les pairs et adhésions",
      "activities.reviewing.desc": "Évaluatrice pour AMS MathSciNet, Journal of Computational and Applied Mathematics, JAMP, FILOMAT, Mathematical Modeling Journal et Mathematical Science Journal. Membre de l'American Mathematical Society et de l'Iranian Mathematical Society. Éditrice du livre « Introduction to Mathematics » (Prof. Sepehri, Université de Chiraz).",
      "activities.awards.title": "Distinctions et réussites",
      "activities.awards.desc": "Première du classement toutes filières confondues (moyenne ≈ 4,0). 23e sur ~8000 au concours national d'entrée en doctorat. Bourses gouvernementales de doctorat, master et licence (2005–2018).",
      "activities.projects.title": "Projets d'IA sélectionnés",
      "activities.projects.desc": "Segmentation de régions cérébrales pour le diagnostic de la sclérose en plaques via VGG19, VGG16 et ResNet50. Traitement du signal vocal par FFT et ondelettes. Recherche d'images par moments de Krawtchouk invariants.",

      "certs.heading": "Certifications, cours et séminaires",
      "certs.lede": "Formation continue en apprentissage automatique, modèles génératifs et IA appliquée.",
      "certs.coursera": "Machine Learning — Andrew Ng, Coursera", "certs.certification": "Certification",
      "certs.mila": "Cours MILA : Representation Learning, Applied Machine Learning, Advanced Structured Prediction &amp; Optimization, Deep Learning for Computational Pathology",
      "certs.kuleshov": "Machine learning, modèles génératifs, IA pour la science — Volodymyr Kuleshov (Cornell Tech), UCLA et Stanford",
      "certs.oneworld": "Séminaires [One World ML] Math of Machine Learning", "certs.present": "2021–aujourd'hui",

      "footer.note": "(Ajoutez vos vrais liens Scholar / LinkedIn / GitHub / ResearchGate dans les balises &lt;a&gt; ci-dessus)",
      "footer.gettouch": "Me contacter", "footer.rights": "Tous droits réservés."
    },

    fa: {
      "nav.home": "خانه", "nav.about": "درباره من", "nav.publications": "مقالات",
      "nav.education": "تحصیلات", "nav.contact": "تماس",

      "hero.name": "راضیه دهبزرگی",
      "hero.tagline": "دکترای ریاضی کاربردی — مدل‌سازی مبتنی بر معادلات دیفرانسیل و انتگرال، تحلیل عددی و مدل‌های مولد عمیق",
      "hero.cta": "مشاهده کارها",

      "svc.education.title": "تحصیلات",
      "svc.education.desc": "دکترای ریاضی کاربردی (علم و صنعت)، کارشناسی ارشد (رفسنجان)، کارشناسی (شیراز)",
      "svc.contact.title": "تماس",
      "svc.interests.title": "علایق پژوهشی",
      "svc.interests.desc": "معادلات دیفرانسیل با مشتقات جزئی، تحلیل عددی و مدل‌های مولد عمیق",
      "svc.pubs.title": "مقالات",
      "svc.pubs.desc": "۷ مقاله‌ی مجله‌ی Q1 و ۷ مقاله‌ی کنفرانسی",
      "svc.exp.title": "سوابق کاری",
      "svc.exp.desc": "بیش از ۶ سال پژوهش پسادکترا در IASBS",
      "svc.toolkit.title": "ابزارها",
      "svc.toolkit.desc": "زبان‌ها، فریم‌ورک‌ها و ابزارهای محاسبات علمی",

      "slide.1.title": "تحلیل عددی و معادلات دیفرانسیل",
      "slide.2.title": "محاسبات علمی",
      "slide.3.title": "مدل‌های مولد عمیق",

      "about.heading": "درباره من",
      "about.lede": "ریاضی‌دان کاربردی و پژوهشگر یادگیری عمیق، با بیش از شش سال فعالیت در تلاقی محاسبات علمی و هوش مصنوعی مولد.",
      "about.bio1": "تخصص اصلی من شامل مدل‌سازی مبتنی بر معادلات دیفرانسیل و انتگرال، تحلیل عددی و مدل‌های مولد عمیق است؛ از جمله CGAN و مدل‌های دیفیوژن مانند DDPM، DDIM، LDM، DBSM و DBM که در مسائل معکوس، پاتولوژی محاسباتی و تصویربرداری پزشکی به‌کار گرفته شده‌اند.",
      "about.bio2": "نویسنده‌ی ۷ مقاله‌ی داوری‌شده (۵ مورد در رتبه‌ی Q1) و ۷ مقاله‌ی کنفرانسی، همراه با ۲ مقاله‌ی دیگر در حال داوری. اکنون به‌دنبال به‌کارگیری این پیشینه‌ی علمی ML/DL در پژوهش کاربردی، تحقیق و توسعه، یا محاسبات علمی در صنعت هستم.",

      "stats.journals": "مقاله‌ی مجله‌ی Q1", "stats.conf": "مقاله‌ی کنفرانسی",
      "stats.years": "سال پژوهش پسادکترا", "stats.review": "مقاله در حال داوری",

      "interests.heading": "علایق پژوهشی",
      "interests.lede": "پیوند میان تحلیل عددی دقیق و مدل‌سازی مولد نوین.",
      "tag.1": "تحلیل عددی / نظریه‌ی تقریب", "tag.2": "مدل‌های مولد عمیق",
      "tag.3": "روش‌های المان محدود / طیفی", "tag.4": "معادلات دیفرانسیل تصادفی",
      "tag.5": "مدل‌سازی مبتنی بر معادلات دیفرانسیل با مشتقات جزئی",
      "tag.6": "عملگرهای غیرخطی، غیرموضعی و عصبی", "tag.7": "معادلات دیفرانسیل و انتگرال کسری",
      "tag.8": "مسائل معکوس", "tag.9": "کنترل بهینه / بهینه‌سازی", "tag.10": "بینایی کامپیوتر",

      "toolkit.heading": "ابزارها",
      "toolkit.lede": "زبان‌ها، فریم‌ورک‌ها و ابزارهای محاسبات علمی مورد استفاده در پژوهش و تدریس.",
      "toolkit.cat1": "زبان‌ها و فریم‌ورک‌های یادگیری ماشین", "toolkit.cat2": "ابزارهای علمی و سایر ابزارها",

      "pubs.heading": "مقالات",
      "pubs.lede": "۷ مقاله‌ی مجله‌ی Q1، ۷ مقاله‌ی کنفرانسی، و کارهای در حال انجام در مدل‌سازی مولد برای علم.",
      "filter.all": "همه", "filter.journal": "مجله (Q1)", "filter.conf": "کنفرانس", "filter.review": "در حال داوری",
      "tagword.conference": "کنفرانس", "tagword.review": "در حال داوری",
      "tagword.q1journal": "مجله Q1", "tagword.q3journal": "مجله Q3",

      "contact.heading": "در تماس باشید",
      "contact.lede": "آماده‌ی همکاری در پژوهش کاربردی، تحقیق و توسعه، یا محاسبات علمی هستم. مستقیم پیام بدید یا از فرم زیر استفاده کنید.",
      "contact.email": "ایمیل", "contact.whatsapp": "واتس‌اپ (فریلنسری)", "contact.telegram": "تلگرام (فریلنسری)",

      "edu.phd.degree": "دکترای ریاضی کاربردی",
      "edu.phd.uni": "دانشگاه علم و صنعت ایران &middot; 2014&ndash;2018",
      "edu.phd.uniname": "دانشگاه علم و صنعت ایران",
      "edu.msc.degree": "کارشناسی ارشد ریاضی کاربردی",
      "edu.msc.uni": "دانشگاه رفسنجان &middot; 2010&ndash;2013",
      "edu.msc.uniname": "دانشگاه رفسنجان",
      "edu.bsc.degree": "کارشناسی ریاضی کاربردی",
      "edu.bsc.uni": "دانشگاه شیراز &middot; 2005&ndash;2009",
      "edu.bsc.uniname": "دانشگاه شیراز",
      "aff.iasbs": "پژوهشگاه دانش‌های بنیادی (IASBS)",
      "aff.azad": "دانشگاه آزاد، تهران",

      "exp.heading": "سوابق آموزشی و پژوهشی",
      "exp.lede": "پژوهش پسادکترا، تدریس و دستیاری آموزشی در طول بیش از شش سال.",
      "exp.postdoc2.title": "پژوهشگر پسادکترا، پژوهشگاه دانش‌های بنیادی (IASBS)",
      "exp.postdoc2.desc": "طراحی چارچوب یادگیری Deep Ritz برای حل معادلات دیفرانسیل بیضوی با استفاده از داده‌های المان محدود (FreeFem++)، آزمایش‌شده روی معادلات پواسون و شرودینگر در مقایسه با روش‌های کلاسیک FEM.",
      "exp.postdoc1.title": "پژوهشگر پسادکترا، IASBS",
      "exp.postdoc1.desc": "توسعه‌ی روش کولوکیشن hp تطبیقی برای مسائل معکوس غیرخطی آبل، و طراحی حل‌کننده‌ی گالرکین FEM/SEM برای مسائل مقداری مرزی کسری غیرخطی.",
      "exp.azad.title": "مدرس پاره‌وقت، دانشگاه‌های آزاد تهران",
      "exp.azad.desc": "تدریس ۶ درس اصلی ریاضی به گروه‌های ۴۰ تا ۶۰ نفره.",
      "exp.uast.title": "مدرس پاره‌وقت، دانشگاه علمی‌کاربردی",
      "exp.uast.desc": "تدریس حساب دیفرانسیل و انتگرال، معادلات دیفرانسیل معمولی و تحلیل عددی به گروه‌های ۴۰ تا ۶۰ نفره.",
      "exp.ta.title": "دستیار آموزشی، دانشگاه علم و صنعت ایران",
      "exp.ta.desc": "پشتیبانی تدریس در ۴ درس پیشرفته و راهنمایی حداقل ۷ دانشجوی کارشناسی ارشد.",
      "exp.freelance.title": "برنامه‌نویسی و تدریس خصوصی آزاد",
      "exp.freelance.desc": "تدریس، پژوهش و مشاوره‌ی پروژه‌محور در پایتون، متلب، ++C، جاوا، یادگیری ماشین/عمیق، تحلیل داده، Power BI و آردوینو.",
      "exp.present": "تاکنون",

      "activities.heading": "فعالیت‌های حرفه‌ای و افتخارات",
      "activities.lede": "داوری، عضویت، جوایز و پروژه‌های منتخب هوش مصنوعی.",
      "activities.reviewing.title": "داوری و عضویت",
      "activities.reviewing.desc": "داور مجلات AMS MathSciNet، JAMP، FILOMAT و چند مجله‌ی دیگر. داور کنفرانس، پنجاه‌ویکمین کنفرانس سالانه‌ی ریاضی ایران (۲۰۲۱). عضو انجمن ریاضی آمریکا و انجمن ریاضی ایران. ویراستار کتاب «مقدمه‌ای بر ریاضیات» (پروفسور سپهری، دانشگاه شیراز).",
      "activities.awards.title": "جوایز و افتخارات",
      "activities.awards.desc": "رتبه‌ی اول دانشجویی در تمام مقاطع تحصیلی. رتبه‌ی ۲۳ از حدود ۸۰۰۰ نفر در آزمون سراسری دکترا. بورسیه‌ی تحصیلی دولتی دکترا، کارشناسی ارشد و کارشناسی (۲۰۰۵–۲۰۱۸).",
      "activities.projects.title": "پروژه‌های منتخب هوش مصنوعی",
      "activities.projects.desc": "قطعه‌بندی نواحی مغز برای تشخیص ام‌اس با استفاده از VGG19، VGG16 و ResNet50. پردازش سیگنال گفتار با استفاده از FFT و تبدیل ویولت. بازیابی تصویر با استفاده از ممان‌های ناوردای کراوچوک.",

      "certs.heading": "گواهینامه‌ها، دوره‌ها و سمینارها",
      "certs.lede": "یادگیری مستمر در زمینه‌ی یادگیری ماشین، مدل‌های مولد و هوش مصنوعی کاربردی.",
      "certs.coursera": "یادگیری ماشین — اندرو انگ، Coursera", "certs.certification": "گواهینامه",
      "certs.mila": "دوره‌های MILA: یادگیری بازنمایی، یادگیری ماشین کاربردی، پیش‌بینی ساختاریافته، یادگیری عمیق برای پاتولوژی محاسباتی",
      "certs.kuleshov": "یادگیری ماشین، مدل‌های مولد، هوش مصنوعی برای علم — ولودیمیر کولشوف (Cornell Tech)، UCLA و استنفورد",
      "certs.oneworld": "سمینارهای [One World ML] ریاضیات یادگیری ماشین", "certs.present": "۲۰۲۱–تاکنون",

      "footer.note": "(لینک‌های واقعی Scholar / LinkedIn / GitHub / ResearchGate خود را در تگ‌های &lt;a&gt; بالا اضافه کنید)",
      "footer.gettouch": "تماس با من", "footer.rights": "تمام حقوق محفوظ است."
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
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'fa' ? 'rtl' : 'ltr');
    var select = document.getElementById('langSelect');
    if (select && select.value !== lang) { select.value = lang; }
  }

  document.addEventListener('DOMContentLoaded', function () {
    cacheOriginals();
    var select = document.getElementById('langSelect');
    if (select) {
      select.addEventListener('change', function () {
        setLang(select.value);
      });
    }
  });
})();
