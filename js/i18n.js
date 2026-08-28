(function () {
  var STORAGE_KEY = 'hvs-lang';

  var translations = {
    en: {
      'nav.toggle': 'Toggle navigation',
      'nav.consulting': 'Consulting',
      'nav.courses': 'Courses',
      'nav.knowledge-base': 'Knowledge Base',
      'nav.resourcegeo': 'Resourcegeo',
      'nav.blog': 'Blog',
      'nav.about': 'About',
      'ribbon.home-sub': 'Geoscience, geostatistics, and data science',
      'ribbon.about': 'About',
      'ribbon.about-sub': 'Geoscience data and analytics for exploration and mining',
      'ribbon.blog': 'Blog',
      'ribbon.blog-sub': 'Technical notes',
      'ribbon.tags': 'Tags',
      'ribbon.page-not-found': 'Page not found',
      'home.lead': 'I am a technical advisor in geoscience, geostatistics, and data science for the mineral resource industry. My work helps exploration and mining teams understand deposits through rigorous modeling, transparent workflows, and modern analytical tools.',
      'home.writing': 'Writing',
      'home.latest': 'Latest writing',
      'about.lead': 'Harold Velasquez Sanchez is a geoscience data and analytics lead and resource geologist. He helps exploration and mining teams turn geological, geochemical, and sensor data into products and models they can use — and defend — from early interpretation through resource evaluation and mine-to-mill decisions.',
      'about.approach': 'His work sits at the intersection of resource geology, geostatistics, geoscience information systems, and machine learning. The emphasis is always the same: geologically grounded methods, production-ready workflows, and results that remain traceable under operational and reporting scrutiny.',
      'about.exp1.title': 'Resource geology and geostatistics',
      'about.exp1.body': 'Geological modeling, exploratory data analysis, and geostatistical estimation and simulation for mineral resources. Categorical and grade modeling across complex, multi-lens, multi-vintage datasets; uncertainty quantification; and CIM-aligned classification in support of NI 43-101 reporting, audits, and due diligence. Experience across gold, copper, and zinc systems.',
      'about.exp2.title': 'Geoscience data products and systems',
      'about.exp2.body': 'Design and delivery of geoscience data products and the databases and applications behind them. Integration of geological, assay, and planning data so exploration and operations teams work from a single, queryable source of truth — with QA/QC, documentation, and training built in, not added later.',
      'about.exp3.title': 'Sensors, geochemistry, and machine learning',
      'about.exp3.body': 'Multimodal corescan and sensor workflows — RGB, hyperspectral (SWIR/VNIR), XRF, and magnetic susceptibility — collocated and governed for mineral-system interpretation. Predictive geochemistry, computer-vision logging of core and chips, and machine-learning models that stay explainable, reproducible, and fit for geometallurgical and exploration decisions.',
      'about.exp4.title': 'From the deposit to the mill',
      'about.exp4.body': 'Ore-control and short-term modeling that connect field geology to extraction and processing. Blast-hole and production data, dig-limit definition, and geometallurgical insight designed for daily operations — not one-off studies. The aim is material that is routed correctly, with grade performance and risk visible to geology, planning, and the plant.',
      'about.close': 'He takes methods from experimental design through production: validation against logging and assays, statistical frameworks that can be audited, and knowledge transfer so geoscientists and developers can run and improve the work. Mentoring, technical briefings, and clear documentation are part of delivery.',
      'about.credentials': 'P.Geo application in progress (Professional Geoscientists Ontario). Working languages: Spanish and English.',
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
      'nav.courses': 'Cursos',
      'nav.knowledge-base': 'Base de conocimiento',
      'nav.resourcegeo': 'Resourcegeo',
      'nav.blog': 'Blog',
      'nav.about': 'Acerca de',
      'ribbon.home-sub': 'Geociencia, geoestadística y ciencia de datos',
      'ribbon.about': 'Acerca de',
      'ribbon.about-sub': 'Datos y analítica geocientífica para exploración y minería',
      'ribbon.blog': 'Blog',
      'ribbon.blog-sub': 'Notas técnicas',
      'ribbon.tags': 'Etiquetas',
      'ribbon.page-not-found': 'Página no encontrada',
      'home.lead': 'Soy un asesor técnico en geociencia, geoestadística y ciencia de datos para la industria de recursos minerales. Mi trabajo ayuda a equipos de exploración y minería a comprender sus yacimientos mediante modelamiento riguroso, flujos de trabajo transparentes y herramientas analíticas modernas.',
      'home.writing': 'Notas',
      'home.latest': 'Últimas notas',
      'about.lead': 'Harold Velasquez Sanchez es líder en datos y analítica geocientífica y geólogo de recursos. Ayuda a equipos de exploración y minería a convertir datos geológicos, geoquímicos y de sensores en productos y modelos que pueden usar — y defender — desde la interpretación temprana hasta la evaluación de recursos y las decisiones de mina a planta.',
      'about.approach': 'Su trabajo se sitúa en la intersección de la geología de recursos, la geoestadística, los sistemas de información geocientífica y el aprendizaje automático. El énfasis es siempre el mismo: métodos con fundamento geológico, flujos de trabajo listos para producción, y resultados trazables bajo el escrutinio operativo y de reporte.',
      'about.exp1.title': 'Geología de recursos y geoestadística',
      'about.exp1.body': 'Modelamiento geológico, análisis exploratorio de datos, y estimación y simulación geoestadística de recursos minerales. Modelamiento categórico y de leyes en conjuntos de datos complejos, de múltiples lentes y múltiples campañas; cuantificación de incertidumbre; y clasificación alineada con CIM en apoyo de reportes NI 43-101, auditorías y due diligence. Experiencia en sistemas de oro, cobre y zinc.',
      'about.exp2.title': 'Productos de datos geoientíficos y sistemas',
      'about.exp2.body': 'Diseño y entrega de productos de datos geoientíficos y de las bases de datos y aplicaciones que los sostienen. Integración de datos geológicos, de leyes y de planificación para que los equipos de exploración y operaciones trabajen desde una única fuente de verdad consultable — con QA/QC, documentación y capacitación incluidos, no añadidos después.',
      'about.exp3.title': 'Sensores, geoquímica y aprendizaje automático',
      'about.exp3.body': 'Flujos de trabajo multimodales de corescan y sensores — RGB, hiperespectral (SWIR/VNIR), XRF y susceptibilidad magnética — colocalizados y gobernados para la interpretación de sistemas minerales. Geoquímica predictiva, registro de testigos y chips por visión computacional, y modelos de aprendizaje automático interpretables, reproducibles y aptos para decisiones geometalúrgicas y de exploración.',
      'about.exp4.title': 'Del yacimiento a la planta',
      'about.exp4.body': 'Control de mineral y modelamiento de corto plazo que conectan la geología de campo con la extracción y el procesamiento. Datos de taladros de producción, definición de límites de excavación e insight geometalúrgico pensado para la operación diaria — no para estudios aislados. El objetivo es material ruteado correctamente, con el desempeño de leyes y el riesgo visibles para geología, planificación y planta.',
      'about.close': 'Lleva los métodos desde el diseño experimental hasta la producción: validación frente a logs y leyes, marcos estadísticos auditables, y transferencia de conocimiento para que geocientíficos y desarrolladores puedan operar y mejorar el trabajo. La mentoría, los briefings técnicos y la documentación clara forman parte de la entrega.',
      'about.credentials': 'Solicitud de P.Geo en curso (Professional Geoscientists Ontario). Idiomas de trabajo: español e inglés.',
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

  function apply(lang) {
    var dict = translations[lang] || translations.en;
    document.documentElement.lang = lang;

    var nodes = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < nodes.length; i++) {
      var key = nodes[i].getAttribute('data-i18n');
      if (dict[key] != null) {
        nodes[i].innerHTML = dict[key];
      }
    }

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

  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('lang-toggle');
    if (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        toggle();
      });
    }
    apply(getLang());
  });
})();
