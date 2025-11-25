export default {
  global: {
    Name: 'Alistamiento y mantenimiento preventivo de equipos',
    Description:
      'Alistamiento y mantenimiento preventivo de equipos son procesos fundamentales para asegurar el buen funcionamiento, la seguridad y la eficiencia de los equipos antes y durante su uso. El alistamiento consiste en preparar, inspeccionar y verificar que los equipos estén en condiciones óptimas para operar, mientras que el mantenimiento preventivo incluye acciones programadas como limpieza, lubricación, ajuste y cambio de piezas para evitar fallas y prolongar la vida útil de los equipos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.jpg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Alistamiento de equipos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Fases del alistamiento de equipos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Procedimientos básicos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Los documentos técnicos',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Seguridad industrial',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Elementos de protección personal (EPP)',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Señalización de seguridad',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Manejo seguro de sustancias químicas',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Higiene y orden en el área de trabajo',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Prevención de accidentes',
            hash: 't_2_5',
          },
        ],
      },

      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Mantenimiento preventivo de equipos',
        desarrolloContenidos: true,
        subMenu: [],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Alistamiento',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2022, 5 diciembre). Ejecución y evaluación de operación de equipos [Vídeo]. YouTube. ',
      tipo: 'Video',
      link: 'https://youtu.be/zKNlZRGFhPQ',
    },
    {
      tema: 'Mantenimiento preventivo de equipos',
      referencia:
        'Explainerstv. (2016). Cómo funciona el Mantenimiento preventivo [Video]. YouTube',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=zckd-GcguKU',
    },
  ],
  glosario: [
    {
      termino: 'Afilado',
      significado:
        'Proceso de restaurar el filo de herramientas o cuchillas de corte.',
    },
    {
      termino: 'Alistamiento',
      significado:
        'Preparación previa de equipos y áreas para su correcto funcionamiento.',
    },
    {
      termino: 'Anomalía',
      significado:
        'Cualquier desviación o falla respecto al funcionamiento normal de un equipo.',
    },
    {
      termino: 'Área de trabajo',
      significado:
        'Espacio físico destinado a la operación o mantenimiento de maquinaria.',
    },
    {
      termino: 'Bitácora',
      significado:
        'Registro diario de actividades, inspecciones o mantenimiento.',
    },
    {
      termino: 'Correctivo',
      significado: 'Tipo de mantenimiento que se realiza después de una falla.',
    },
    {
      termino: 'Desgaste',
      significado: 'Deterioro gradual de componentes por uso continuo.',
    },
    {
      termino: 'Diagnóstico',
      significado:
        'Evaluación técnica del estado o funcionamiento de un equipo.',
    },
    {
      termino: 'Documentación técnica',
      significado:
        'Manuales, planos o registros que respaldan el uso y mantenimiento de equipos.',
    },
    {
      termino: 'Electricidad estática',
      significado:
        'Acumulación de carga eléctrica que puede dañar equipos o causar accidentes.',
    },
    {
      termino: 'Enchufe',
      significado:
        'Dispositivo para conectar eléctricamente un equipo a la red.',
    },
    {
      termino: 'Ensamble',
      significado: 'Unión de partes o piezas que forman un equipo completo.',
    },
    {
      termino: 'Funcionalidad',
      significado: 'Capacidad de un equipo para cumplir su propósito previsto.',
    },
    {
      termino: 'Herramientas',
      significado:
        'Utensilios utilizados para ajustar, reparar o revisar maquinaria.',
    },
    {
      termino: 'Higiene',
      significado:
        'Limpieza y orden necesarios para evitar riesgos en el área de trabajo.',
    },
    {
      termino: 'Inspección',
      significado:
        'Revisión detallada de equipos para detectar fallas o verificar estado.',
    },
    {
      termino: 'Instructivo',
      significado:
        'Documento que guía la operación o mantenimiento de equipos.',
    },
    {
      termino: 'Interruptor',
      significado:
        'Dispositivo que permite abrir o cerrar un circuito eléctrico.',
    },
    {
      termino: 'Limpieza técnica',
      significado:
        'Remoción de suciedad en equipos con productos y técnicas especializadas.',
    },
    {
      termino: 'Lubricación',
      significado:
        'Aplicación de aceites o grasas para reducir fricción en partes móviles.',
    },
    {
      termino: 'Manual de usuario',
      significado:
        'Guía elaborada por el fabricante para operar y mantener un equipo.',
    },
    {
      termino: 'Mantenimiento',
      significado:
        'Conjunto de acciones para conservar el buen estado de los equipos.',
    },
    {
      termino: 'Mecánico',
      significado:
        'Relativo a las partes móviles o estructurales de un equipo.',
    },
    {
      termino: 'Monitoreo',
      significado: 'Supervisión continua del funcionamiento de un equipo.',
    },
    {
      termino: 'Reparación',
      significado: 'Acción de corregir un daño en el equipo.',
    },
    {
      termino: 'Riesgo',
      significado: 'Posibilidad de que ocurra un evento no deseado.',
    },
  ],
  referencias: [
    {
      referencia:
        'Cooperación Alemana al Desarrollo – GIZ. (2013, agosto). Catálogo de maquinaria para procesamiento de cacao [PDF]. Lima, Perú: GIZ.',
      link: 'https://energypedia.info/images/0/08/Maquinaria_para_Cacao.pdf',
    },
    {
      referencia:
        'Grupo Zingal. (s. f.). Maquinaria para el procesamiento de cacao.',
      link: 'https://grupozingal.co/maquinaria-procesamiento-cacao/',
    },
    {
      referencia:
        'Inscripciones SENA. (s. f.). Alistamiento y operación de maquinaria para la producción industrial.',
      link:
        'https://inscripcionessena.co/alistamiento-y-operacion-de-maquinaria-para-la-produccion-industrial/#google_vignette',
    },
    {
      referencia:
        'Vulcanotec Chocolate. (s. f.). Maquinaria para cacao & chocolate.',
      link: 'https://www.cacaomachines.com/es/maquinaria-para-cacao-chocolate/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Andrés Javier Pacheco Wandurraga',
          cargo: 'Experto temático',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Sandra Paola Morales Páez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yuly Andrea Rey Quiñonez',
          cargo: 'Diseñadora de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Leonardo Castellanos Rodriguez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth Ibette Gonzalez Quintero',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
