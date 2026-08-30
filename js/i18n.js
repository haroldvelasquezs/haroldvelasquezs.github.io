(function () {
  var STORAGE_KEY = 'hvs-lang';

  var translations = {
    en: {
      'nav.toggle': 'Toggle navigation',
      'nav.services': 'Services',
      'nav.consulting': 'Consulting',
      'nav.courses': 'Courses',
      'nav.knowledge-base': 'Knowledge Base',
      'nav.resourcegeo': 'Resourcegeo',
      'nav.blog': 'Blog',
      'nav.about': 'About',
      'ribbon.home-sub': 'Spatial Data Science, Resource Modeling, Geoscience',
      'ribbon.about': 'About',
      'ribbon.about-sub': 'Resource geologist and spatial data scientist',
      'ribbon.consulting': 'Consulting',
      'ribbon.consulting-sub': 'Resource modeling, audits, and geoscience data products',
      'ribbon.courses': 'Courses',
      'ribbon.courses-sub': 'Applied geostatistics for mineral resources',
      'ribbon.blog': 'Blog',
      'ribbon.blog-sub': 'Technical notes',
      'ribbon.tags': 'Tags',
      'ribbon.page-not-found': 'Page not found',
      'home.lead': 'Resource geology and spatial data science for the mineral industry.',
      'home.writing': 'Writing',
      'home.latest': 'Latest writing',
      'about.lead': 'Harold Velasquez Sanchez is a resource geologist and spatial data scientist with more than ten years leading mineral resource work across exploration, operations, and consulting. His work covers geological modeling, geostatistics, QA/QC, and geoscience data products, including support to Qualified Persons on NI 43-101 updates, resource audits, and due diligence.',
      'about.leadership': 'He leads technical work from interpretation through resource evaluation and ore control, and he works with geology, data, and operations teams so the methods stay in use after delivery.',
      'about.education': 'He completed an MSc in Mining Engineering at the University of Alberta in January 2023 and was a graduate research assistant at the Centre for Computational Geostatistics (CCG) from May 2021 to January 2023. He holds a B.Eng. in Geological Engineering from the National University of Engineering, Peru (December 2015).',
      'about.credentials': 'Working languages: Spanish (native) and English.',
      'consulting.lead': 'Resource modeling, audits, and geoscience data products for exploration and mining teams, from interpretation through resource evaluation and ore control. The work is built for technical review and for day-to-day geology, not a one-off study.',
      'consulting.exp1.title': 'Resource geology and geostatistics',
      'consulting.exp1.body': 'Geological modeling, exploratory data analysis, variography, and geostatistical estimation and simulation for mineral resources. Support for NI 43-101 documentation, resource audits, and due diligence. Strongest background in gold and precious metals, with additional work in copper and nickel.',
      'consulting.exp2.title': 'Geoscience data products and systems',
      'consulting.exp2.body': 'Design and delivery of geoscience data products and the databases and applications behind them. Integration of geological and geoscience data so exploration and operations teams work from a single, usable source.',
      'consulting.exp3.title': 'Sensors, remote sensing, and machine learning',
      'consulting.exp3.body': 'Corescan and sensor workflows: RGB, hyperspectral, XRF, and magnetic susceptibility. Remote-sensing and raster stacks (satellite and airborne imagery, geophysics, and seismic) for prospectivity mapping and targeting. Predictive geochemistry, computer-vision logging of core and chips, and machine-learning models for exploration and resource decisions.',
      'consulting.exp4.title': 'Ore control',
      'consulting.exp4.body': 'Ore-control modeling that connects the resource model to daily geology: production data, short-term grade updates, and a clear view of grade and risk.',
      'consulting.close': 'Delivery includes knowledge transfer, technical briefings, and documentation so teams can run and improve the work.',
      'courses.title': 'Courses',
      'courses.lead': 'Applied geostatistics for mineral resources.',
      'ui.posted-on': 'Posted on',
      'ui.read-more': '[Read\u00a0More]',
      'ui.tags': 'Tags:',
      'ui.newer': '&larr; Newer Posts',
      'ui.older': 'Older Posts &rarr;',
      'ui.previous': '&larr; Previous Post',
      'ui.next': 'Next Post &rarr;',
      'ui.email': 'Email',
      'ui.share': 'Share',
      'footer.rights': 'All rights reserved.',
      'notfound.body': 'The page you requested is not available.',
      'notfound.home': 'Return home'
    },
    es: {
      'nav.toggle': 'Mostrar menú',
      'nav.services': 'Servicios',
      'nav.consulting': 'Consultoría',
      'nav.courses': 'Cursos',
      'nav.knowledge-base': 'Base de conocimiento',
      'nav.resourcegeo': 'Resourcegeo',
      'nav.blog': 'Blog',
      'nav.about': 'Acerca de',
      'ribbon.home-sub': 'Ciencia de Datos Espaciales, Modelado de Recursos, Geociencia',
      'ribbon.about': 'Acerca de',
      'ribbon.about-sub': 'Geólogo de recursos y científico de datos espaciales',
      'ribbon.consulting': 'Consultoría',
      'ribbon.consulting-sub': 'Modelado de recursos, auditorías y productos de datos geocientíficos',
      'ribbon.courses': 'Cursos',
      'ribbon.courses-sub': 'Geoestadística aplicada a recursos minerales',
      'ribbon.blog': 'Blog',
      'ribbon.blog-sub': 'Notas técnicas',
      'ribbon.tags': 'Etiquetas',
      'ribbon.page-not-found': 'Página no encontrada',
      'home.lead': 'Geología de recursos y ciencia de datos espaciales para la industria mineral.',
      'home.writing': 'Notas',
      'home.latest': 'Últimas notas',
      'about.lead': 'Harold Velasquez Sanchez es geólogo de recursos y científico de datos espaciales, con más de diez años liderando trabajo de recursos minerales en exploración, operaciones y consultoría. Su trabajo cubre modelamiento geológico, geoestadística, QA/QC y productos de datos geocientíficos, incluido el apoyo a Personas Calificadas en actualizaciones NI 43-101, auditorías de recursos y due diligence.',
      'about.leadership': 'Lidera el trabajo técnico desde la interpretación hasta la evaluación de recursos y el control de mineral, y trabaja con equipos de geología, datos y operaciones para que los métodos sigan en uso después de la entrega.',
      'about.education': 'Completó una maestría (MSc) en Ingeniería de Minas en la University of Alberta en enero de 2023 y fue asistente de investigación de posgrado en el Centre for Computational Geostatistics (CCG) de mayo de 2021 a enero de 2023. Es Ingeniero Geólogo por la Universidad Nacional de Ingeniería, Perú (diciembre de 2015).',
      'about.credentials': 'Idiomas de trabajo: español (nativo) e inglés.',
      'consulting.lead': 'Modelado de recursos, auditorías y productos de datos geocientíficos para equipos de exploración y minería, desde la interpretación hasta la evaluación de recursos y el control de mineral. El trabajo está pensado para revisión técnica y para la geología del día a día, no para un estudio aislado.',
      'consulting.exp1.title': 'Geología de recursos y geoestadística',
      'consulting.exp1.body': 'Modelamiento geológico, análisis exploratorio de datos, variografía, y estimación y simulación geoestadística de recursos minerales. Apoyo a documentación NI 43-101, auditorías de recursos y due diligence. Experiencia más fuerte en oro y metales preciosos, con trabajo adicional en cobre y níquel.',
      'consulting.exp2.title': 'Productos de datos geoientíficos y sistemas',
      'consulting.exp2.body': 'Diseño y entrega de productos de datos geoientíficos y de las bases de datos y aplicaciones que los sostienen. Integración de datos geológicos y geocientíficos para que los equipos de exploración y operaciones trabajen desde una única fuente usable.',
      'consulting.exp3.title': 'Sensores, teledetección y aprendizaje automático',
      'consulting.exp3.body': 'Flujos de corescan y sensores: RGB, hiperespectral, XRF y susceptibilidad magnética. Capas raster y de teledetección (imágenes satelitales y aerotransportadas, geofísica y sísmica) para mapeo de prospectividad y targeting. Geoquímica predictiva, registro de testigos y chips por visión computacional, y modelos de aprendizaje automático para decisiones de exploración y de recursos.',
      'consulting.exp4.title': 'Control de mineral',
      'consulting.exp4.body': 'Modelamiento de control de mineral que conecta el modelo de recursos con la geología diaria: datos de producción, actualizaciones de leyes de corto plazo, y una vista clara de leyes y riesgo.',
      'consulting.close': 'La entrega incluye transferencia de conocimiento, briefings técnicos y documentación para que los equipos puedan operar y mejorar el trabajo.',
      'courses.title': 'Cursos',
      'courses.lead': 'Geoestadística aplicada a recursos minerales.',
      'ui.posted-on': 'Publicado el',
      'ui.read-more': '[Leer\u00a0más]',
      'ui.tags': 'Etiquetas:',
      'ui.newer': '&larr; Publicaciones más recientes',
      'ui.older': 'Publicaciones anteriores &rarr;',
      'ui.previous': '&larr; Publicación anterior',
      'ui.next': 'Publicación siguiente &rarr;',
      'ui.email': 'Correo',
      'ui.share': 'Compartir',
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

  window.__hvsToggleLang = toggle;

  function bind() {
    if (window.__hvsI18nBound) {
      return;
    }
    window.__hvsI18nBound = true;
    var btn = document.getElementById('lang-toggle');
    if (btn) {
      btn.onclick = function (e) {
        if (e) {
          e.preventDefault();
          e.stopPropagation();
        }
        toggle();
        return false;
      };
    }
    apply(getLang());
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bind);
  } else {
    bind();
  }
})();
