(function () {
  var STORAGE_KEY = 'hvs-lang';

  var translations = {
    en: {
      'nav.toggle': 'Toggle navigation',
      'nav.consulting': 'Consulting',
      'nav.knowledge-base': 'Knowledge Base',
      'nav.resourcegeo': 'Resourcegeo',
      'nav.blog': 'Blog',
      'nav.about': 'About',
      'ribbon.home-sub': 'Spatial Data Science, Resource Modeling, Geoscience',
      'ribbon.about': 'About',
      'ribbon.about-sub': 'Resource geologist and spatial data scientist',
      'ribbon.consulting': 'Consulting',
      'ribbon.consulting-sub': 'Resource modeling, geoscience data, and applied analytics',
      'ribbon.blog': 'Blog',
      'ribbon.blog-sub': 'Technical notes',
      'ribbon.tags': 'Tags',
      'ribbon.page-not-found': 'Page not found',
      'home.lead': 'I am a resource geologist and spatial data scientist. I work with exploration and mining teams on mineral resource estimation, geological modeling, and geostatistics — transparent workflows they can use and defend.',
      'home.writing': 'Writing',
      'home.latest': 'Latest writing',
      'about.lead': 'Harold Velasquez Sanchez is a resource geologist and spatial data scientist with more than ten years in mineral resource estimation, geological modeling, variography, kriging and simulation, and QA/QC — across exploration, operations, and consulting. His background is strongest in gold and precious metals, multi-deposit modeling, and NI 43-101–aligned resource reporting.',
      'about.education': 'He completed an MSc in Mining Engineering at the University of Alberta in January 2023 and was a graduate research assistant at the Centre for Computational Geostatistics (CCG) from May 2021 to January 2023. He holds a B.Eng. in Geological Engineering from the National University of Engineering, Peru (December 2015).',
      'about.credentials': 'Working languages: Spanish (native) and English.',
      'consulting.lead': 'I work with exploration and mining teams who need models, data products, and analytical workflows they can use — and defend — from early interpretation through resource evaluation and ore control.',
      'consulting.exp1.title': 'Resource geology and geostatistics',
      'consulting.exp1.body': 'Geological modeling, exploratory data analysis, variography, and geostatistical estimation and simulation (kriging and simulation) for mineral resources. Categorical and grade modeling across multi-deposit and multi-vintage datasets; uncertainty quantification; and CIM-aligned classification in support of NI 43-101 reporting, audits, and due diligence. Strongest background in gold and precious metals.',
      'consulting.exp2.title': 'Geoscience data products and systems',
      'consulting.exp2.body': 'Design and delivery of geoscience data products and the databases and applications behind them. Integration of geological, assay, and geoscience data so exploration and geology teams work from a single, queryable source of truth — with QA/QC, documentation, and training built in, not added later.',
      'consulting.exp3.title': 'Sensors, geochemistry, and machine learning',
      'consulting.exp3.body': 'Multimodal corescan and sensor workflows — RGB, hyperspectral (SWIR/VNIR), XRF, and magnetic susceptibility — collocated and governed for mineral-system interpretation. Predictive geochemistry, computer-vision logging of core and chips, and machine-learning models that stay explainable, reproducible, and fit for exploration and resource decisions.',
      'consulting.exp4.title': 'Ore control',
      'consulting.exp4.body': 'Ore-control modeling that connects the resource model to daily geology: blast-hole and production data, short-term grade updates, and a clear view of grade performance and risk. Built for geology teams — not one-off studies.',
      'consulting.close': 'Methods go from experimental design into use: validation against logging and assays, statistical frameworks that can be audited, and knowledge transfer so geoscientists and developers can run and improve the work. Mentoring, technical briefings, and clear documentation are part of delivery.',
      'ui.posted-on': 'Posted on',
      'ui.read-more': '[Read\u00a0More]',
      'ui.tags': 'Tags:',
      'ui.newer': '&larr; Newer Posts',
      'ui.older': 'Older Posts &rarr;',
      'ui.previous': '&larr; Previous Post',
      'ui.next': 'Next Post &rarr;',
      'ui.email': 'Email',
      'ui.share': 'Share: ',
      'footer.rights': 'All rights reserved.',
      'notfound.body': 'The page you requested is not available.',
      'notfound.home': 'Return home'
    },
    es: {
      'nav.toggle': 'Mostrar menú',
      'nav.consulting': 'Consultoría',
      'nav.knowledge-base': 'Base de conocimiento',
      'nav.resourcegeo': 'Resourcegeo',
      'nav.blog': 'Blog',
      'nav.about': 'Acerca de',
      'ribbon.home-sub': 'Ciencia de Datos Espaciales, Modelado de Recursos, Geociencia',
      'ribbon.about': 'Acerca de',
      'ribbon.about-sub': 'Geólogo de recursos y científico de datos espaciales',
      'ribbon.consulting': 'Consultoría',
      'ribbon.consulting-sub': 'Modelado de recursos, datos geocientíficos y analítica aplicada',
      'ribbon.blog': 'Blog',
      'ribbon.blog-sub': 'Notas técnicas',
      'ribbon.tags': 'Etiquetas',
      'ribbon.page-not-found': 'Página no encontrada',
      'home.lead': 'Soy geólogo de recursos y científico de datos espaciales. Trabajo con equipos de exploración y minería en estimación de recursos minerales, modelamiento geológico y geoestadística — flujos de trabajo transparentes que pueden usar y defender.',
      'home.writing': 'Notas',
      'home.latest': 'Últimas notas',
      'about.lead': 'Harold Velasquez Sanchez es geólogo de recursos y científico de datos espaciales, con más de diez años en estimación de recursos minerales, modelamiento geológico, variografía, kriging y simulación, y QA/QC — en exploración, operaciones y consultoría. Su experiencia es más fuerte en oro y metales preciosos, modelamiento de múltiples yacimientos y reportes de recursos alineados con NI 43-101.',
      'about.education': 'Completó una maestría (MSc) en Ingeniería de Minas en la University of Alberta en enero de 2023 y fue asistente de investigación de posgrado en el Centre for Computational Geostatistics (CCG) de mayo de 2021 a enero de 2023. Es Ingeniero Geólogo por la Universidad Nacional de Ingeniería, Perú (diciembre de 2015).',
      'about.credentials': 'Idiomas de trabajo: español (nativo) e inglés.',
      'consulting.lead': 'Trabajo con equipos de exploración y minería que necesitan modelos, productos de datos y flujos analíticos que puedan usar — y defender — desde la interpretación temprana hasta la evaluación de recursos y el control de mineral.',
      'consulting.exp1.title': 'Geología de recursos y geoestadística',
      'consulting.exp1.body': 'Modelamiento geológico, análisis exploratorio de datos, variografía, y estimación y simulación geoestadística (kriging y simulación) de recursos minerales. Modelamiento categórico y de leyes en conjuntos de datos de múltiples yacimientos y múltiples campañas; cuantificación de incertidumbre; y clasificación alineada con CIM en apoyo de reportes NI 43-101, auditorías y due diligence. Experiencia más fuerte en oro y metales preciosos.',
      'consulting.exp2.title': 'Productos de datos geoientíficos y sistemas',
      'consulting.exp2.body': 'Diseño y entrega de productos de datos geoientíficos y de las bases de datos y aplicaciones que los sostienen. Integración de datos geológicos, de leyes y geocientíficos para que los equipos de exploración y geología trabajen desde una única fuente de verdad consultable — con QA/QC, documentación y capacitación incluidos, no añadidos después.',
      'consulting.exp3.title': 'Sensores, geoquímica y aprendizaje automático',
      'consulting.exp3.body': 'Flujos de trabajo multimodales de corescan y sensores — RGB, hiperespectral (SWIR/VNIR), XRF y susceptibilidad magnética — colocalizados y gobernados para la interpretación de sistemas minerales. Geoquímica predictiva, registro de testigos y chips por visión computacional, y modelos de aprendizaje automático interpretables, reproducibles y aptos para decisiones de exploración y de recursos.',
      'consulting.exp4.title': 'Control de mineral',
      'consulting.exp4.body': 'Modelamiento de control de mineral que conecta el modelo de recursos con la geología diaria: datos de taladros de producción, actualizaciones de leyes de corto plazo, y una vista clara del desempeño de leyes y del riesgo. Pensado para equipos de geología — no para estudios aislados.',
      'consulting.close': 'Los métodos van del diseño experimental a su uso: validación frente a logs y leyes, marcos estadísticos auditables, y transferencia de conocimiento para que geocientíficos y desarrolladores puedan operar y mejorar el trabajo. La mentoría, los briefings técnicos y la documentación clara forman parte de la entrega.',
      'ui.posted-on': 'Publicado el',
      'ui.read-more': '[Leer\u00a0más]',
      'ui.tags': 'Etiquetas:',
      'ui.newer': '&larr; Publicaciones más recientes',
      'ui.older': 'Publicaciones anteriores &rarr;',
      'ui.previous': '&larr; Publicación anterior',
      'ui.next': 'Publicación siguiente &rarr;',
      'ui.email': 'Correo',
      'ui.share': 'Compartir: ',
      'footer.rights': 'Todos los derechos reservados.',
      'notfound.body': 'La página que solicitó no está disponible.',
      'notfound.home': 'Volver al inicio'
    }
  };

  function getLang() {
    try {
      return localStorage.getItem(STORAGE_KEY) === 'es' ? 'es' : 'en';
    } catch (e) {
      return 'en';
    }
  }

  function saveLang(lang) {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}
  }

  function setVisible(el, show) {
    if (!el) {
      return;
    }
    el.hidden = !show;
    el.style.display = show ? '' : 'none';
  }

  function applyLangPairs(lang) {
    var nodes = document.querySelectorAll('[data-lang]');
    for (var i = 0; i < nodes.length; i++) {
      setVisible(nodes[i], nodes[i].getAttribute('data-lang') === lang);
    }
  }

  function applyPostBody(lang) {
    var article = document.querySelector('article.blog-post');
    if (!article) {
      return;
    }
    var esBlock = article.querySelector('[data-lang="es"]');
    if (!esBlock) {
      return;
    }
    var showEs = lang === 'es';
    var kids = article.children;
    for (var i = 0; i < kids.length; i++) {
      var kid = kids[i];
      if (kid === esBlock || kid.contains(esBlock)) {
        continue;
      }
      setVisible(kid, !showEs);
    }
  }

  function apply(lang) {
    var dict = translations[lang] || translations.en;
    document.documentElement.lang = lang;
    document.documentElement.setAttribute('data-site-lang', lang);

    var nodes = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < nodes.length; i++) {
      var key = nodes[i].getAttribute('data-i18n');
      if (dict[key] != null) {
        nodes[i].innerHTML = dict[key];
      }
    }

    applyLangPairs(lang);
    applyPostBody(lang);

    var btn = document.getElementById('lang-toggle');
    if (btn) {
      btn.textContent = lang === 'en' ? 'ES' : 'EN';
      btn.setAttribute('aria-label', lang === 'en' ? 'Cambiar a español' : 'Switch to English');
    }
  }

  function toggle() {
    var next = getLang() === 'en' ? 'es' : 'en';
    saveLang(next);
    apply(next);
  }

  function bind() {
    document.addEventListener('click', function (e) {
      var btn = e.target.closest ? e.target.closest('#lang-toggle') : null;
      if (!btn) {
        return;
      }
      e.preventDefault();
      toggle();
    });
    apply(getLang());
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bind);
  } else {
    bind();
  }
})();
