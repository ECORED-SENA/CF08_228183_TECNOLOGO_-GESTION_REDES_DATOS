export default {
  global: {
    componenteFormativo: '<i>Hardware</i> y servicios de red',
    descripcionCurso:
      'El presente componente formativo permite apropiar los elementos y conceptos necesarios y requeridos, para la configuración de los dispositivos de cómputo y sistemas operativos, garantizando así los servicios de red.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/4.png'),
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
        titulo: 'Dispositivos de red',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: '<i>Hardware</i>',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: '<i>Hardware</i> de red',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Sistemas operativos',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Servicios de red',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Conceptualización',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Redes wifi como servicio de red',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Tipos de servicios de red',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Virtualización de red',
        desarrolloContenidos: true,
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
        download: 'downloads/prueba.pdf',
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
      tema: 'Tipos de servicios de red',
      referencia:
        'Oracle. (2011). <i>La virtualización de redes y las redes virtuales</i>.',
      tipo: 'Otro',
      link: 'https://docs.oracle.com/cd/E26921_01/html/E25833/gfkbw.html',
    },
  ],
  glosario: [
    {
      termino: 'Adaptador de red',
      significado:
        'elemento de <i>hardware</i> que se inserta en un equipo conectado en red.',
    },
    {
      termino: 'Administrador',
      significado:
        'rol que tiene permisos para administrar la red y cualquier recurso.',
    },
    {
      termino: 'Enrutador',
      significado:
        'es un dispositivo de red, su principal función es encaminar los paquetes en la red.',
    },
    {
      termino: 'Estación de trabajo',
      significado: 'equipo conectado en red que comparte recursos en red.',
    },
    {
      termino: 'Red',
      significado:
        'dos o más computadoras o dispositivos periféricos conectados entre sí.',
    },
    {
      termino: 'Repetidor',
      significado:
        'dispositivo de <i>hardware</i> que regenera cualquier señal que recibe y la envía de nuevo.',
    },
    {
      termino: 'Tarjeta de red',
      significado:
        'este dispositivo se instala en la tarjeta madre del equipo y le permite acceder a la red.',
    },
    {
      termino: 'TCP/IP',
      significado: 'conjunto de protocolos de comunicación en red.',
    },
  ],
  referencias: [
    {
      referencia:
        'Ariganello, E. (2020). <i>Redes cisco - Guía de estudio para la certificación CCNA 200-301.</i> (1ª Ed.). Ra-Ma.',
      link:
        'https://www-alphaeditorialcloud-com.bdigital.sena.edu.co/auth/ip?intended_url=https://www-alphaeditorialcloud-com.bdigital.sena.edu.co/library/publication/redes-cisco-guia-de-estudio-para-la-certificacion-ccna-200-301',
    },
    {
      referencia:
        'García, P., López, J., Díaz, J. (2014). <i>Transmisión de datos y redes de computadores</i>. Pearson Educación.',
      link:
        'http://www.ebooks7-24.com.bdigital.sena.edu.co/stage.aspx?il=4449&pg=&ed=',
    },
    {
      referencia:
        'Romero, Y. y Pombo, K. (2012). Virtualización. <i>Telemática, 10</i>(3), p. 61-73.',
      link:
        'https://revistatelematica.cujae.edu.cu/index.php/tele/article/view/33',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Jorge Eliécer Loaiza Muñoz',
          cargo: 'Instructor',
          centro: 'Centro de Servicios y Gestión Empresarial - Antioquia',
        },
        {
          nombre: 'Carlos Mauricio Tovar Artunduaga',
          cargo: 'Instructor',
          centro: 'Centro de Servicios y Gestión Empresarial - Antioquia',
        },
        {
          nombre: 'Cinthia Rocío Trejos Chacón',
          cargo: 'Experta temática',
          centro:
            'Centro de la Industria, la Empresa y los Servicios - Regional Norte de Santander',
        },
        {
          nombre: 'Ana Vela Rodríguez Velásquez',
          cargo: 'Diseñadora instruccional',
          centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
        },
        {
          nombre: 'Silvia Milena Sequeda Cárdenas',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
        },
        {
          nombre: 'Julia Isabel Roberto',
          cargo: 'Diseñadora y evaluadora instruccional',
          centro:
            'Centro para la Industria de la Comunicación Gráfica – Regional Distrito Capital',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Metodólogo para formación virtual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Actividad Didáctica',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruiz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
