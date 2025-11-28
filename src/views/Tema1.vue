<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Alistamiento de equipos
    
      .row.justify-content-center.mb-4(data-aos="zoom-in-left")
        .col-lg-7
          .row.justify-content-center.align-items-center.bg2.p-4.mb-3
            .col-lg-4.col-6.mb-3.col-md-5
              img(src='@/assets/curso/Tema1/img01.svg', alt='') 
            .col-lg-8
              p En la transformación del cacao, el alistamiento comprende el conjunto de actividades previas destinadas a la preparación, verificación y organización de los equipos, herramientas, insumos y del personal involucrado en las etapas del proceso productivo las cuales son: fermentación, secado, tostado, molienda y elaboración de productos derivados tales como pasta, licor, manteca o chocolate.
          p Este procedimiento busca garantizar que todas las condiciones técnicas, higiénicas y operativas sean adecuadas antes de iniciar la producción, asegurando así la calidad y eficiencia del proceso.
        .col-lg-5.col-10.col-md-9
          img(src='@/assets/curso/Tema1/img01.png', alt='')      


      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-lg-7.col-md-12.col-12
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/Tema1/cacao.svg")
            h3.bg3.py-2.w-card-text Objetivos del alistamiento

      .row.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-left")
        .col-lg-3.col-6.mb-3.col-md-5
          img(src='@/assets/curso/Tema1/img02.png', alt='')  
        .col-lg-9
          ol.lista-ol--cuadro.d-flex.mb-0
            li
            .lista-ol--cuadro__vineta
              span 1
            p Asegurar la operatividad óptima de los equipos para prevenir fallas o interrupciones durante la producción.
          ol.lista-ol--cuadro.d-flex.mb-0
            li
            .lista-ol--cuadro__vineta
              span 2
            p Evitar la contaminación cruzada o el deterioro del producto mediante la limpieza, desinfección y disposición adecuada de las áreas y utensilios de trabajo.
          ol.lista-ol--cuadro.d-flex.mb-0
            li
            .lista-ol--cuadro__vineta
              span 3
            p Optimizar la eficiencia del proceso productivo, garantizando que cada máquina opere conforme a sus parámetros técnicos y de rendimiento establecidos.
          
          ol.lista-ol--cuadro.d-flex.mb-0
            li
            .lista-ol--cuadro__vineta
              span 4
            p Proteger la seguridad del personal operativo, verificando el correcto funcionamiento de los dispositivos de seguridad y la disponibilidad de los elementos de protección personal (EPP).

      separador
      #t_1_1.titulo-segundo.mb-5(data-aos="zoom-in-left")
        h2 1.1 Fases del alistamiento de equipos

      .row.justify-content-center.mb-4
        .col-lg-1.col-4.mb-3
          img(src='@/assets/curso/Tema1/img03.svg', alt='')    
        .col-lg-11
          p El proceso de alistamiento de equipos en la transformación del cacao es una etapa esencial que garantiza la eficiencia, la seguridad y la calidad del producto final. A través de diversas fases (planificación, preparación, verificación, comunicación y ejecución) se asegura que cada equipo esté en condiciones óptimas para operar, que el personal conozca su rol y que los recursos necesarios estén disponibles. Con ello se previenen fallas técnicas, se reducen tiempos improductivos, que finalmente contribuye al cumplimiento de los estándares higiénicos y sanitarios de la industria alimentaria.

      .row.justify-content-left.align-items-left.mb-3(data-aos="zoom-in-left")
        .col-lg-12
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Tabla 1.
            span #[em Fases de alistamiento, actividades y ejemplos]
          .tabla-a.color-acento-contenido(alt="La tabla sintetiza las fases del alistamiento de equipos en el proceso de transformación del cacao, que incluyen planificación, preparación, verificación, comunicación y ejecución. En cada una se describen las actividades principales y un ejemplo práctico, destacando la organización de recursos, limpieza y revisión técnica, pruebas de funcionamiento, registro de observaciones y desarrollo del proceso productivo. En conjunto, representa una guía operativa para garantizar eficiencia, seguridad y calidad en la producción.")
            table
              thead
                tr
                  th.w-15.bg1 Fase
                  th.w-30.bg1 Descripción
                  th.w-35.bg1 Actividades clave
                  th.w-20.bg1 Ejemplo práctico
              tbody
                tr
                  td.text-start #[b Planificación]
                  td.text-start Primera fase donde se define qué equipos se usarán, en qué orden y qué recursos se requieren para el proceso del día.
                  td.text-start
                    ul.lista-ul--color
                      li.d-flex
                        i.fas.fa-angle-right2
                        | Revisar el plan de producción y volumen de cacao a procesar.
                      li.d-flex
                        i.fas.fa-angle-right2
                        | Identificar los equipos requeridos: fermentador, secador, tostador, descascarillador, molino, mezclador, máquina de conchado y templado.
                      li.d-flex
                        i.fas.fa-angle-right2
                        | Asignar personal técnico a cada equipo.
                      li.d-flex
                        i.fas.fa-angle-right2
                        | Verificar disponibilidad de insumos: energía, agua, combustibles, lubricantes y productos de limpieza.
                  td.text-start Se programa el uso del molino y la mezcladora para molienda y mezclado, asegurando disponibilidad y ausencia de mantenimientos pendientes.

                tr
                  td.text-start #[b Preparación]
                  td.text-start Fase donde se realizan acciones físicas y técnicas para dejar los equipos en condiciones seguras y eficientes de operación.
                  td.text-start
                    ul.lista-ul--color
                      li.d-flex
                        i.fas.fa-angle-right2
                        | Limpieza profunda de los equipos.
                      li.d-flex
                        i.fas.fa-angle-right2
                        | Revisión de componentes críticos (cuchillas, sensores, correas, conexiones).
                      li.d-flex
                        i.fas.fa-angle-right2
                        | Verificación de niveles de lubricación y ajustes.
                      li.d-flex
                        i.fas.fa-angle-right2
                        | Organización del área de trabajo y eliminación de obstáculos.
                  td.text-start En el molino se limpian las cámaras, se revisan cuchillas, se lubrican cojinetes y se organiza el entorno para evitar contaminación cruzada.

                tr
                  td.text-start #[b Verificación]
                  td.text-start Consiste en probar los equipos antes de iniciar la producción, asegurando su correcto funcionamiento.
                  td.text-start
                    ul.lista-ul--color
                      li.d-flex
                        i.fas.fa-angle-right2
                        | Realizar pruebas en vacío.
                      li.d-flex
                        i.fas.fa-angle-right2
                        | Verificar calibraciones de temperatura, velocidad y tiempos.
                      li.d-flex
                        i.fas.fa-angle-right2
                        | Confirmar funcionamiento de sistemas de seguridad.
                      li.d-flex
                        i.fas.fa-angle-right2
                        | Corregir anomalías antes de iniciar producción.
                  td.text-start En la tostadora, se verifica que alcance 120 °C y que el tambor gire correctamente.

                tr
                  td.text-start #[b Comunicación]
                  td.text-start Permite informar al equipo humano sobre el estado operativo de los equipos y las condiciones de trabajo.
                  td.text-start
                    ul.lista-ul--color
                      li.d-flex
                        i.fas.fa-angle-right2
                        | Comunicar qué equipos están listos o requieren revisión.
                      li.d-flex
                        i.fas.fa-angle-right2
                        | Registrar observaciones en formatos o checklists.
                      li.d-flex
                        i.fas.fa-angle-right2
                        | Asignar responsables de monitoreo durante la producción.
                  td.text-start El técnico comunica que el molino tuvo una ligera vibración ajustada y recomienda seguimiento durante la jornada.

                tr
                  td.text-start #[b Ejecución]
                  td.text-start Última fase donde se inicia el proceso productivo, una vez verificado el alistamiento completo.
                  td.text-start
                    ul.lista-ul--color
                      li.d-flex
                        i.fas.fa-angle-right2
                        | Cargar equipos con materia prima.
                      li.d-flex
                        i.fas.fa-angle-right2
                        | Supervisar los primeros minutos de operación.
                      li.d-flex
                        i.fas.fa-angle-right2
                        | Registrar el inicio de producción y observaciones.
                      li.d-flex
                        i.fas.fa-angle-right2
                        | Activar controles de calidad.
                  td.text-start Se inicia la molienda del cacao; el operario verifica la textura de la pasta y registra el inicio en la bitácora.

      separador
      #t_1_2.titulo-segundo.mb-5(data-aos="zoom-in-left")
        h2 1.2 Procedimientos básicos

      .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-left")
        .col-lg-3.col-8.mb-3.col-md-7
          img(src='@/assets/curso/Tema1/img04.png', alt='')  
        .col-lg-9 
          p Los procedimientos básicos de alistamiento son aquellas acciones técnicas y operativas esenciales que se deben realizar antes de iniciar cualquier proceso de transformación del grano de cacao. Estas actividades garantizan que los equipos estén limpios, funcionales, calibrados y correctamente asignados al personal, con el fin de prevenir fallas, asegurar la inocuidad del producto y optimizar la eficiencia de la jornada productiva.
          p Aplicar correctamente estos procedimientos contribuye al cumplimiento de normativas de seguridad industrial, Buenas Prácticas de Manufactura (BPM), y a mantener la calidad organoléptica del cacao transformado.
      
      AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
        .row.justify-content-center(titulo="Limpieza exhaustiva")
          .col-lg-6.mb-3.mb-md-0
            p La limpieza es el primer paso antes de operar cualquier equipo agroindustrial. Su objetivo es eliminar residuos de procesos anteriores, polvo, grasas, humedad o cualquier material extraño que pueda afectar la calidad del producto o contaminar el entorno de trabajo.
            h5 Acciones clave:
            ul.lista-ul--color
              li.d-flex
                i.fas.fa-angle-right2
                p.mb-0 Remover restos de cacao, #[em nibs], cáscaras, grasas o azúcares de equipos como molinos, mezcladoras y tostadoras.
              li.d-flex
                i.fas.fa-angle-right2
                p.mb-0 Utilizar productos de limpieza grado alimentario que no dejen residuos tóxicos ni olores.
              li.d-flex
                i.fas.fa-angle-right2
                p.mb-0 Limpiar también los accesorios y utensilios (bandejas, espátulas, tolvas).
              li.d-flex
                i.fas.fa-angle-right2
                p.mb-0 Verificar la limpieza del área de trabajo (pisos, mesas, bandejas, superficies de contacto).
          .col-lg-5.col-md-9
            figure
              img(src='@/assets/curso/Tema1/img05.png', alt='')
          .col-lg-11
            .row.justify-content-center.align-items-center.bg4.p-2
              .col-lg-1.col-3.mb-3.col-md-2
                img(src='@/assets/curso/Tema1/atencion.svg', alt='')
              .col-lg-10
                p #[b Ejemplo:] en la tostadora, se retiran los residuos de granos quemados de los tambores, se limpian las paredes internas con cepillo seco y se desinfecta con un paño húmedo antes del precalentamiento.

   

        .row.justify-content-center(titulo="Revisión mecánica")
          .col-lg-6.mb-3.mb-md-0
            p Consiste en inspeccionar los componentes físicos y mecánicos de cada equipo, para detectar posibles desgastes, daños o elementos que deban ser ajustados o reemplazados antes de iniciar su uso.
            h5 Acciones clave:
            ul.lista-ul--color
              li.d-flex
                i.fas.fa-angle-right2
                p.mb-0 Verificar que cuchillas del molino estén afiladas, limpias y correctamente alineadas.
              li.d-flex
                i.fas.fa-angle-right2
                p.mb-0 Comprobar el estado de correas, bandas, engranajes, poleas y rodamientos.
              li.d-flex
                i.fas.fa-angle-right2
                p.mb-0 Asegurar que no haya piezas sueltas, tornillos faltantes o elementos deteriorados que comprometan la operación.
              li.d-flex
                i.fas.fa-angle-right2
                p.mb-0 Lubricar partes móviles según recomendaciones del fabricante.
          .col-lg-5.col-md-9
            figure
              img(src='@/assets/curso/Tema1/img06.png', alt='')
          .col-lg-11
            .row.justify-content-center.align-items-center.bg4.p-2
              .col-lg-1.col-3.mb-3.col-md-2
                img(src='@/assets/curso/Tema1/atencion.svg', alt='')
              .col-lg-10
                p #[b Ejemplo:] en el molino, se revisa que las cuchillas no tengan mellas o desgaste desigual, lo cual podría generar una molienda irregular y elevar la temperatura del producto por fricción excesiva.
        
        .row.justify-content-center(titulo="Chequeo eléctrico")
          .col-lg-6.mb-3.mb-md-0
            p Es fundamental garantizar que los sistemas eléctricos estén en buenas condiciones para evitar riesgos de cortocircuitos, descargas eléctricas, fallas en sensores o paradas inesperadas durante la operación.
            h5 Acciones clave:
            ul.lista-ul--color
              li.d-flex
                i.fas.fa-angle-right2
                p.mb-0 Revisar visualmente los cables, enchufes y conexiones en busca de desgaste, sobrecalentamiento o peladuras.
              li.d-flex
                i.fas.fa-angle-right2
                p.mb-0 Verificar que los interruptores, botones de encendido y sistemas de emergencia funcionen correctamente.
              li.d-flex
                i.fas.fa-angle-right2
                p.mb-0 Confirmar el correcto funcionamiento de tableros eléctricos, variadores de frecuencia o controladores digitales.
              li.d-flex
                i.fas.fa-angle-right2
                p.mb-0 Usar multímetro o #[em tester] para comprobar continuidad eléctrica si es necesario.
          .col-lg-5.col-md-9
            figure
              img(src='@/assets/curso/Tema1/img07.png', alt='')
          .col-lg-11
            .row.justify-content-center.align-items-center.bg4.p-2
              .col-lg-1.col-3.mb-3.col-md-2
                img(src='@/assets/curso/Tema1/atencion.svg', alt='')
              .col-lg-10
                p #[b Ejemplo:] en la refinadora de cacao, se inspeccionan los contactos del panel de control, asegurando que todos los sensores de temperatura estén enviando señal correctamente al controlador.
        
        .row.justify-content-center(titulo="Calibración")
          .col-lg-6.mb-3.mb-md-0
            p La calibración garantiza que los equipos funcionen con los parámetros técnicos adecuados para cada proceso, permitiendo que el cacao se transforme de manera uniforme y dentro de los estándares de calidad deseados.
            h5 Acciones clave:
            ul.lista-ul--color
              li.d-flex
                i.fas.fa-angle-right2
                p.mb-0 Ajustar temperaturas en tostadoras (por ejemplo, entre 110 °C y 130 °C según el perfil de sabor deseado).
              li.d-flex
                i.fas.fa-angle-right2
                p.mb-0 Verificar tiempos de mezclado, molienda o conchado, según el tipo de producto final (licor, chocolate, etc.).
              li.d-flex
                i.fas.fa-angle-right2
                p.mb-0 Ajustar la velocidad de molienda y el grosor final del producto si el equipo lo permite.
              li.d-flex
                i.fas.fa-angle-right2
                p.mb-0 Confirmar la sensibilidad de sensores de temperatura o humedad en secadoras.
          .col-lg-5.col-md-9
            figure
              img(src='@/assets/curso/Tema1/img08.png', alt='')
          .col-lg-11
            .row.justify-content-center.align-items-center.bg4.p-2
              .col-lg-1.col-3.mb-3.col-md-2
                img(src='@/assets/curso/Tema1/atencion.svg', alt='')
              .col-lg-10
                p #[b Ejemplo:]  la tostadora se calibra para alcanzar y mantener una temperatura de 120 °C durante 25 minutos, con el tambor girando a velocidad media para lograr un tostado parejo sin quemar los granos.
        
        .row.justify-content-center(titulo="Asignación de roles")
          .col-lg-6.mb-3.mb-md-0
            p Asignar responsabilidades al personal operativo es fundamental para garantizar que cada etapa del proceso esté controlada y que los equipos sean manejados correctamente.
            h5 Acciones clave:
            ul.lista-ul--color
              li.d-flex
                i.fas.fa-angle-right2
                p.mb-0 Designar quién estará encargado de operar cada equipo.
              li.d-flex
                i.fas.fa-angle-right2
                p.mb-0 Definir responsables de supervisión y control de calidad durante la jornada.

              li.d-flex
                i.fas.fa-angle-right2
                p.mb-0 Establecer quién será el responsable de registrar datos en las bitácoras o formularios.

              li.d-flex
                i.fas.fa-angle-right2
                p.mb-0 Informar sobre precauciones específicas del equipo y medidas de seguridad.
          .col-lg-5.col-md-9
            figure
              img(src='@/assets/curso/Tema1/img09.png', alt='')
          .col-lg-11
            .row.justify-content-center.align-items-center.bg4.p-2
              .col-lg-1.col-3.mb-3.col-md-2
                img(src='@/assets/curso/Tema1/atencion.svg', alt='')
              .col-lg-10
                p #[b Ejemplo:] se asigna a un operario con experiencia para manejar la refinadora, mientras otro técnico es responsable de revisar cada hora la temperatura del licor de cacao. Un supervisor coordina el seguimiento de parámetros y registros en las listas de control.

      separador
      #t_1_3.titulo-segundo.mb-5(data-aos="zoom-in-left")
        h2 1.3 Los documentos técnicos 

      p Son instrumentos fundamentales para garantizar la correcta operación, mantenimiento y control de los equipos utilizados en la transformación del cacao. Su consulta y aplicación aseguran la eficiencia del proceso y el cumplimiento de las normas de calidad e inocuidad.

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/Tema1/cacao.svg")
            h3.bg3.py-2.w-card-text Principales documentos

      .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
        .col-lg-8
         ul.lista-ul--color
          li.d-flex
            i.fas.fa-angle-right2
            p.mb-0 #[b Manual de operación de la tostadora de cacao:] describe los parámetros técnicos de funcionamiento (tiempos, temperaturas, capacidad, ajustes y mantenimiento). Su lectura previa permite configurar el equipo según la variedad y el grado de humedad del grano, evitando sobrecalentamientos o pérdidas de aroma.
          li.d-flex
            i.fas.fa-angle-right2
            p.mb-0 #[b Lista de chequeo para molienda:] establece los pasos de verificación previos y posteriores al uso del molino, incluyendo limpieza, calibración, inspección de piezas y medidas de seguridad.
          li.d-flex
            i.fas.fa-angle-right2
            p.mb-0 #[b Plan de mantenimiento preventivo:] define el cronograma y los procedimientos de revisión, limpieza, lubricación y sustitución de partes críticas, con el fin de prolongar la vida útil de los equipos y prevenir fallas operativas.
          li.d-flex
            i.fas.fa-angle-right2
            p.mb-0 #[b Procedimientos de seguridad industrial:] reúnen las normas y precauciones necesarias para el uso seguro de maquinaria y equipos eléctricos, minimizando riesgos de accidentes laborales.
          li.d-flex
            i.fas.fa-angle-right2
            p.mb-0 #[b Registros de control de calidad:] documentan variables críticas como temperaturas, tiempos de procesamiento y condiciones ambientales, permitiendo la trazabilidad y verificación de los estándares del producto final.
         .row.justify-content-center.align-items-center.bg5.p-2
            .col-lg-1.col-3.mb-3.col-md-2
              img(src='@/assets/curso/Tema1/atencion.svg', alt='')
            .col-lg-11
              p #[b Ejemplo técnico:] antes de iniciar la producción, el operador debe consultar el manual de la tostadora y ajustar los parámetros de tiempo y temperatura de acuerdo con la variedad y la humedad del cacao, asegurando el proceso de tostado uniforme y una calidad organoléptica óptima.
        .col-lg-4.col-8.col-md-6
          img(src="@/assets/curso/Tema1/img10.png")

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/Tema1/cacao.svg")
            h3.bg3.py-2.w-card-text Herramientas y recursos necesarios

      p.mb-4 La ejecución eficiente de las labores de alistamiento y mantenimiento requiere disponer de los siguientes elementos:

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-3.col-8.mb-3.col-md-6
          img(src="@/assets/curso/Tema1/img11.png")
        .col-lg-9
         SlyderF.circl-arrow.mb-4(columnas="col-lg-6 col-xl-4")
          .tarjeta.bg1.p-4
            .row.justify-content-center.mb-3
              .col-6.col-md-4.col-lg-6
                img(src='@/assets/curso/Tema1/1.svg' alt='')
            h4.text-center.bg6.p-1 Herramientas técnicas
            p.text-center Llaves, destornilladores, cepillos y brochas especiales para la limpieza y ajuste de componentes mecánicos.
          .tarjeta.bg1.p-4
            .row.justify-content-center.mb-3
              .col-6.col-md-4.col-lg-6
                img(src='@/assets/curso/Tema1/2.svg' alt='')
            h4.text-center.bg6.p-1 Equipos de protección personal (EPP)
            p.text-center Guantes térmicos, gafas de seguridad, tapabocas o mascarillas contra polvo y calzado antideslizante, indispensables para garantizar la seguridad del operario.
          
          .tarjeta.bg1.p-4
            .row.justify-content-center.mb-3
              .col-6.col-md-4.col-lg-6
                img(src='@/assets/curso/Tema1/3.svg' alt='')
            h4.text-center.bg6.p-1 Materiales de apoyo
            p.text-center Productos de limpieza inocuos para uso alimentario, lubricantes de grado alimenticio y paños absorbentes.
          
          .tarjeta.bg1.p-4
            .row.justify-content-center.mb-3
              .col-6.col-md-4.col-lg-6
                img(src='@/assets/curso/Tema1/4.svg' alt='')
            h4.text-center.bg6.p-1 Recurso humano calificado
            p.text-center Técnicos u operarios con formación en manejo, calibración y mantenimiento de equipos de transformación del cacao.
          
          .tarjeta.bg1.p-4
            .row.justify-content-center.mb-3
              .col-6.col-md-4.col-lg-6
                img(src='@/assets/curso/Tema1/5.svg' alt='')
            h4.text-center.bg6.p-1 Documentación técnica
            p.text-center Manuales de operación, listas de chequeo, protocolos de seguridad y fichas de mantenimiento actualizadas.
          



































  </template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass">
.circl-arrow .slyder-f__btn i
  font-size: 1.2rem
  background-color: #2A0F2B
  //background-color: $color-acento-contenido
  color: $white
  height: 46px
  width: 46px
  padding: 5px
  border-radius: 500px
  display: flex
  justify-content: center
  align-items: center
</style>
