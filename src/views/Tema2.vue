<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Seguridad industrial

    .bloque-texto-g.bg7.p-3.p-sm-4.p-md-5.mb-4(data-aos="zoom-in-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/Tema2/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        br
        p.mb-0 La seguridad industrial es el conjunto de normas, acciones y herramientas destinadas a prevenir accidentes, proteger la salud de los trabajadores y garantizar un entorno de trabajo seguro durante cualquier proceso productivo. En la industria del cacao, donde se usan equipos calientes, cuchillas, maquinaria pesada, y productos químicos para limpieza, la seguridad es fundamental.
          br
          br
    
    .tarjeta.color-primario.p-3.mb-2
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/Tema2/play.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-1 Seguridad industrial en Colombia
              p.mb-0 Para ampliar y profundizar los contenidos abordados, se recomienda consultar el siguiente enlace.
            .col-sm-auto
              a.boton.bg8.texto-blanco(:href="('https://www.youtube.com/watch?v=3tOXor13c3g')" target="_blank")
                span Ir al sitio
                i.fas.fa-file-video

    separador
    #t_2_1.titulo-segundo.mb-5(data-aos="zoom-in-left")
      h2 2.1 Elementos de protección personal (EPP)

    .row.justify-content-center.mb-3
      .col-lg-1.col-3.mb-3 
        img(src="@/assets/curso/Tema2/img02.svg")
      .col-lg-11
        p Son equipos diseñados para proteger al trabajador de posibles riesgos físicos, químicos o biológicos durante su jornada laboral. Su uso adecuado es esencial para prevenir accidentes, enfermedades ocupacionales y garantizar la seguridad en cada etapa del proceso productivo. Entre los EPP más comunes se encuentran los guantes, gafas de seguridad, protectores auditivos, mascarillas, botas con puntera reforzada y ropa de trabajo resistente, los cuales deben seleccionarse según el tipo de tarea y los riesgos presentes en el entorno laboral.

    .row.justify-content-center.align-items-center.fondo01.mb-4(data-aos="zoom-in-left")
      .col-lg-12
        .row.justify-content-center.align-items-center
          .col-lg-8
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
              h5 Tabla 2. 
              span #[em Equipos de protección personal según el tipo de riesgo]

            .tabla-a.color-acento-contenido(alt="La tabla relaciona los principales riesgos presentes en el proceso de transformación del cacao con el equipo de protección personal adecuado y su uso específico, destacando medidas para prevenir quemaduras, inhalación de partículas, ruidos, cortes, lesiones oculares y contaminación cruzada. ")
              table
                thead
                  tr
                    th.w-30.bg6 Riesgo
                    th.w-35.bg6 EPP recomendado
                    th.w-35.bg6 Uso específico

                tbody
                  tr
                    td.text-start.bg9 Contacto con superficies calientes.
                    td.text-start.bg9 Guantes resistentes al calor.
                    td.text-start.bg9 Manipulación de tostadoras.

                  tr
                    td.text-start.bg10 Exposición a partículas finas (polvo de cacao).
                    td.text-start.bg10 Mascarilla con filtro o tapabocas.
                    td.text-start.bg10 Durante la molienda o empaque.

                  tr
                    td.text-start.bg9 Ruidos fuertes de maquinaria.
                    td.text-start.bg9 Protectores auditivos.
                    td.text-start.bg9 En áreas con molinos o trituradoras.

                  tr
                    td.text-start.bg10 Riesgo de cortes.
                    td.text-start.bg10 Guantes anticorte.
                    td.text-start.bg10 Limpieza o mantenimiento de cuchillas.

                  tr
                    td.text-start.bg9 Riesgo ocular.
                    td.text-start.bg9 Gafas de seguridad.
                    td.text-start.bg9 En manipulación de químicos o molienda.

                  tr
                    td.text-start.bg10 Contaminación cruzada.
                    td.text-start.bg10 Ropa de trabajo limpia, cofia, botas.
                    td.text-start.bg10 Todo el proceso para mantener inocuidad.

    .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
      .col-lg-10.bg11.p-3
        .row.justify-content-center.align-items-center
          .col-lg-1.col-3.mb-3.col-md-2
            img(src='@/assets/curso/Tema1/atencion.svg', alt='')  
          .col-lg-11
            p #[b Ejemplo:] antes de operar la máquina tostadora, el operario debe colocarse guantes térmicos, gafas de seguridad y ropa sin partes sueltas que puedan engancharse.

    separador
    #t_2_2.titulo-segundo.mb-5(data-aos="zoom-in-left")
      h2 2.2 Señalización de seguridad

    p.mb-4 La señalización es esencial para alertar, guiar y advertir a los trabajadores sobre peligros o condiciones especiales en una planta de producción.

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
      .col-lg-8
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 1. 
          span #[em Señalización en empresa]
        img(src='@/assets/curso/Tema2/fig1.svg', alt='Representación de los principales tipos de señalización utilizados en entornos empresariales. Clasifica las señales según su propósito: advertencia, obligación, prohibición y emergencia, indicando las características que permiten diferenciarlas y los ejemplos correspondientes a cada categoría. ') 

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/Tema1/cacao.svg")
          h3.bg3.py-2.w-card-text Aplicación en la planta de cacao

    .row.mb-2
        .col-md-6.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/Tema2/1.svg' alt='')
            .tarjeta.bg1
              .p-4
                p.mb-0.text-center Cerca de la tostadora: señal de “Superficie caliente” y “Uso obligatorio de guantes térmicos”.

        .col-md-6.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/Tema2/2.svg' alt='')
            .tarjeta.bg1
              .p-4
                p.mb-0.text-center En zonas de molienda: señal de “Uso obligatorio de protección auditiva”.

        .col-md-6.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/Tema2/3.svg' alt='')
            .tarjeta.bg1
              .p-4
                p.mb-0.text-center Almacenamiento de productos químicos: señal de “Riesgo químico” y “Uso obligatorio de guantes y mascarilla”.


    .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in-left")
      .col-lg-7.bg12.p-3
        .row.justify-content-center.align-items-center
          .col-lg-1.col-3.mb-3.col-md-2
            img(src='@/assets/curso/Tema2/hoja.svg', alt='')  
          .col-lg-10
            p.text-white #[b Nota:] la señalización debe colocarse a la altura de los ojos, estar bien iluminada, ser duradera y en idioma comprensible por los operarios.

    separador
    #t_2_3.titulo-segundo.mb-5(data-aos="zoom-in-left")
      h2 2.3 Manejo seguro de sustancias químicas

    .bloque-texto-g.bloque-texto-g--inverso.bg13.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/Tema2/img02.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        br
        p.mb-0 En el proceso de transformación del cacao, los productos químicos se utilizan principalmente para la limpieza y desinfección de equipos y superficies. Un uso inadecuado puede provocar intoxicaciones, quemaduras o contaminación del producto, afectando la seguridad del personal y la calidad del alimento.
          br
          br
       
    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/Tema1/cacao.svg")
          h3.bg3.py-2.w-card-text Buenas prácticas para el manejo de sustancias químicas

    .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
        .col-lg-3.col-8.mb-3.col-md-6
          img(src="@/assets/curso/Tema2/img03.png")
        .col-lg-9
         SlyderF.circl-arrow.mb-4(columnas="col-lg-6 col-xl-4")
          .tarjeta.bg1.p-4
            .row.justify-content-center.mb-3
              .col-6.col-md-4.col-lg-6
                img(src='@/assets/curso/Tema2/01.svg' alt='')
            p.text-center Leer siempre la Hoja de Datos de Seguridad de Materiales (MSDS) antes de utilizar cualquier producto.
          .tarjeta.bg1.p-4
            .row.justify-content-center.mb-3
              .col-6.col-md-4.col-lg-6
                img(src='@/assets/curso/Tema2/02.svg' alt='')
            p.text-center Utilizar los elementos de protección personal adecuados: guantes, gafas y mascarilla.
          
          .tarjeta.bg1.p-4
            .row.justify-content-center.mb-3
              .col-6.col-md-4.col-lg-6
                img(src='@/assets/curso/Tema2/03.svg' alt='')
            p.text-center Evitar mezclar sustancias sin conocimiento técnico previo.
          
          .tarjeta.bg1.p-4
            .row.justify-content-center.mb-3
              .col-6.col-md-4.col-lg-6
                img(src='@/assets/curso/Tema2/04.svg' alt='')
            p.text-center Etiquetar correctamente cada recipiente, indicando el nombre del producto y sus advertencias.
          
          .tarjeta.bg1.p-4
            .row.justify-content-center.mb-3
              .col-6.col-md-4.col-lg-6
                img(src='@/assets/curso/Tema2/05.svg' alt='')
            p.text-center Almacenar los químicos en lugares ventilados, alejados de fuentes de calor y de las zonas de producción.

          .tarjeta.bg1.p-4
            .row.justify-content-center.mb-3
              .col-6.col-md-4.col-lg-6
                img(src='@/assets/curso/Tema2/06.svg' alt='')
            p.text-center Capacitar al personal sobre los procedimientos de actuación en caso de derrames o contacto con la piel.


    .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in-left")
      .col-lg-10.bg4.p-3
        .row.justify-content-center.align-items-center
          .col-lg-1.col-3.mb-3.col-md-2
            img(src='@/assets/curso/Tema1/atencion.svg', alt='')  
          .col-lg-11
            p #[b Ejemplo práctico:] durante la desinfección del molino, el operario debe emplear guantes de nitrilo, gafas de seguridad y diluir el desinfectante siguiendo las instrucciones del fabricante, garantizando así un manejo seguro y una limpieza efectiva.

    separador
    #t_2_4.titulo-segundo.mb-5(data-aos="zoom-in-left")
      h2 2.4 Higiene y orden en el área de trabajo

    p.mb-4 Mantener la limpieza y el orden en el área de trabajo es fundamental para garantizar la eficiencia, prevenir accidentes y asegurar la inocuidad del producto final durante el proceso de transformación del cacao. Un ambiente limpio y organizado contribuye a que las operaciones se realicen con mayor seguridad, precisión y productividad. 

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/Tema1/cacao.svg")
          h3.bg3.py-2.w-card-text Buenas prácticas para conservar la limpieza y el orden

    .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
      .col-lg-5.col-11
        img(src='@/assets/curso/Tema2/img04.png', alt='')
      .col-lg-7
        .row
          .col-lg-2.mb-3.col-3.col-md-2
            img(src='@/assets/curso/Tema2/img05.svg', alt='')
          .col-lg-12
            ul.lista-ul--color
              li.d-flex
                i.fas.fa-angle-right2
                p.mb-0 Retirar los residuos de cacao, polvo y manteca al finalizar cada jornada laboral.
              li.d-flex
                i.fas.fa-angle-right2
                p.mb-0 Mantener pasillos y zonas de acceso libres de obstáculos.

              li.d-flex
                i.fas.fa-angle-right2
                p.mb-0 Evitar dejar herramientas o cables sueltos en el piso.

              li.d-flex
                i.fas.fa-angle-right2
                p.mb-0 Usar contenedores correctamente etiquetados para separar residuos comunes y peligrosos.

              li.d-flex
                i.fas.fa-angle-right2
                p.mb-0 Establecer rutinas diarias de limpieza con responsables definidos

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/Tema1/cacao.svg")
          h3.bg3.py-2.w-card-text Metodología 5S: origen y aplicación

    p.mb-4 La metodología #[b 5S] proviene del #[b idioma japonés] y fue desarrollada en Japón como parte del sistema de gestión de calidad y producción eficiente de Toyota. Su objetivo es mejorar el entorno laboral mediante el orden, la limpieza y la disciplina. Cada “S” representa una palabra japonesa que resume un principio de acción:

     .row.mb-3(data-aos="zoom-in-left")
      .col-sm-6.col-lg.d-flex.mb-3
        .tarjeta--boton.bg1.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/Tema2/11.svg', alt='Texto que describa la imagen')
          p.mb-0 #[b #[em Seiri] (clasificar):] separar los elementos necesarios de los innecesarios y eliminar lo que no se utiliza en el área de trabajo.

      .col-sm-6.col-lg.d-flex.mb-3
        .tarjeta--boton.bg1.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/Tema2/12.svg', alt='Texto que describa la imagen')
          p.mb-0 #[b #[em Seiton] (ordenar):] ubicar cada herramienta, material o documento en el lugar que le corresponde para facilitar su localización y uso.

      .col-sm-6.col-lg.d-flex.mb-3
        .tarjeta--boton.bg1.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/Tema2/13.svg', alt='Texto que describa la imagen')
          p.mb-0 #[b #[em Seiso] (limpiar):] mantener las superficies, equipos y zonas de trabajo libres de residuos, polvo o grasa.

      .col-sm-6.col-lg.d-flex.mb-3
        .tarjeta--boton.bg1.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/Tema2/14.svg', alt='Texto que describa la imagen')
          p.mb-0 #[b #[em Seiketsu] (estandarizar):] establecer normas, procedimientos y horarios para conservar el orden y la limpieza de manera constante.

      .col-sm-6.col-lg.d-flex.mb-3
        .tarjeta--boton.bg1.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/Tema2/14.svg', alt='Texto que describa la imagen')
          p.mb-0 #[b #[em Shitsuke] (sostener o disciplina):] fomentar hábitos y compromiso en el personal para mantener las buenas prácticas y mejorar continuamente.

    .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in-left")
      .col-lg-10.bg4.p-3
        .row.justify-content-center.align-items-center
          .col-lg-1.col-3.mb-3.col-md-2
            img(src='@/assets/curso/Tema1/atencion.svg', alt='')  
          .col-lg-11
            p #[b Ejemplo práctico:] después de la molienda, el operario limpia la tolva, barre los restos de cacao del suelo, guarda las herramientas en su lugar correspondiente y verifica que todo quede en condiciones adecuadas para la siguiente jornada. De esta forma, aplica los principios de la metodología 5S, promoviendo un ambiente de trabajo seguro, eficiente y con estándares de calidad.


    separador
    #t_2_5.titulo-segundo.mb-5(data-aos="zoom-in-left")
      h2 2.5 Prevención de accidentes

    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-left")
      .col-lg-5.col-md-8
        img(src='@/assets/curso/Tema2/img06.png', alt='')
      .col-lg-7
        p.mb-3 La prevención de accidentes es una responsabilidad compartida entre la empresa y los trabajadores. Se basa en identificar riesgos, tomar medidas preventivas y capacitar continuamente al personal.
        .row.bg1.p-3
          h5 Estrategias clave: 
          ul.lista-ul--color
                li.d-flex
                  i.fas.fa-angle-right2
                  p.mb-0 Realizar inspecciones periódicas de equipos y áreas de trabajo.

                li.d-flex
                  i.fas.fa-angle-right2
                  p.mb-0 Aplicar mantenimientos preventivos a maquinaria (evita fallos peligrosos).


                li.d-flex
                  i.fas.fa-angle-right2
                  p.mb-0 Ofrecer capacitaciones constantes en temas de seguridad.


                li.d-flex
                  i.fas.fa-angle-right2
                  p.mb-0 Implementar un sistema de reporte de incidentes (para aprender de los errores).


                li.d-flex
                  i.fas.fa-angle-right2
                  p.mb-0 Diseñar y practicar planes de emergencia y evacuación.
                li.d-flex
                  i.fas.fa-angle-right2
                  p.mb-0 Supervisar el cumplimiento del uso de EPP.

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
      .col-lg-10.bg4.p-3
        .row.justify-content-center.align-items-center
          .col-lg-1.col-3.mb-3.col-md-2
            img(src='@/assets/curso/Tema1/atencion.svg', alt='')  
          .col-lg-11
            p #[b Ejemplo:] un trabajador notifica a su supervisor que el cableado del motor del molino presenta desgaste. El mantenimiento actúa antes de que ocurra una electrocución o incendio.




































</template>

<script>
export default {
  name: 'Tema2',
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
