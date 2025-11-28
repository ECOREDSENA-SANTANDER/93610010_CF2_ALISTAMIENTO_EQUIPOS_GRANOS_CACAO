<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Mantenimiento preventivo de equipos

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
      .col-lg-5.col-10.col-md-8
        img(src='@/assets/curso/Tema3/mg01.png', alt='')
      .col-lg-7
        .row.justify-content-center.align-items-center.mb-3
          .col-lg-2.col-3.mb-3.col-md-2
            img(src='@/assets/curso/Tema3/img02.svg', alt='')
          .col-lg-10
            p El mantenimiento preventivo es el conjunto de acciones planificadas y sistemáticas que se realizan a los equipos e instalaciones antes de que se presenten fallas, con el fin de asegurar su buen funcionamiento, prolongar su vida útil y evitar interrupciones en la producción. 
        .row.bg1.p-3
          h4 Objetivos
          ul.lista-ul--color
            li.d-flex
              i.fas.fa-angle-right2
              p.mb-0 Evitar paradas inesperadas en la producción.
            li.d-flex
              i.fas.fa-angle-right2
              p.mb-0 Prevenir averías que puedan generar accidentes o pérdidas económicas.
            li.d-flex
              i.fas.fa-angle-right2
              p.mb-0 Aumentar la vida útil de los equipos.
            li.d-flex
              i.fas.fa-angle-right2
              p.mb-0 Mantener la calidad del producto transformado (ejemplo: pasta de cacao o chocolate).
            li.d-flex
              i.fas.fa-angle-right2
              p.mb-0 Reducir los costos de reparación correctiva.
            li.d-flex
              i.fas.fa-angle-right2
              p.mb-0 Cumplir con normas de inocuidad y seguridad.


    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/Tema1/cacao.svg")
          h3.bg3.py-2.w-card-text Tipos de mantenimiento

    .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
      .col-lg-1.col-3.mb-3.col-md-3
        img(src="@/assets/curso/Tema3/img03.svg")
      .col-lg-11
        p Existen diversos tipos de mantenimiento que se aplican según las necesidades operativas y el estado de los equipos: mantenimiento preventivo, correctivo y predictivo, siendo el primero el más recomendado en entornos agroindustriales por su enfoque proactivo. Cada uno cumple una función específica y aporta al control de fallas, la optimización de recursos, la seguridad del personal y el cumplimiento de estándares técnicos y sanitarios.
    
    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-left")
        .col-lg-8
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Tabla 3. 
            span #[em Tipo de mantenimiento]
          .tabla-a.color-acento-contenido(alt="Se describen los tipos de mantenimiento industrial: el preventivo se realiza de forma programada para evitar fallas, el predictivo usa datos para anticiparlas y el correctivo se aplica después de una avería. ")
            table
              thead
                tr
                  th.bg1.w-30 Tipo de mantenimiento
                  th.bg1.w-50 Características
              tbody
                tr
                  td.text-start Mantenimiento preventivo programado
                  td.text-start  
                    ul.lista-ul--color
                      li.d-flex
                        i.fas.fa-angle-right2
                        | Se realiza en fechas fijas (diario, semanal, mensual).
                      li.d-flex
                        i.fas.fa-angle-right2
                        | Incluye limpieza, lubricación, inspección visual, ajustes menores.
                     
                tr
                  td.text-start Mantenimiento predictivo
                  td.text-start  
                    ul.lista-ul--color
                      li.d-flex
                        i.fas.fa-angle-right2
                        | Se basa en el análisis de datos (ruido, vibración, temperatura).
                      li.d-flex
                        i.fas.fa-angle-right2
                        | Se usa para anticiparse a fallas antes de que ocurran.
                tr
                  td.text-start Mantenimiento correctivo (no preventivo, pero importante)
                  td.text-start  
                    ul.lista-ul--color
                      li.d-flex
                        i.fas.fa-angle-right2
                        | Se realiza después de una falla, con reparación o sustitución de piezas.
                      li.d-flex
                        i.fas.fa-angle-right2
                        | Es costoso y debe minimizarse con buen mantenimiento preventivo.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/Tema1/cacao.svg")
          h3.bg3.py-2.w-card-text Actividades comunes de mantenimiento


    .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
      .col-lg-7
        p Las actividades comunes de mantenimiento comprenden tareas como limpieza técnica, lubricación, ajustes mecánicos, inspección de componentes eléctricos y sustitución de piezas desgastadas. Todas estas acciones pueden realizarse como parte del mantenimiento preventivo, predictivo o correctivo, dependiendo del estado del equipo y del plan de trabajo establecido por la planta.
        p En equipos para transformación de cacao, estas son las tareas preventivas más comunes:
      .col-lg-5.col-md-9
        img(src="@/assets/curso/Tema3/img04.png")


    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-left")
        .col-lg-8
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Tabla 4. 
            span #[em Actividades y frecuencias de mantenimiento]
          .tabla-a.color-acento-contenido(alt="La tabla presenta las principales actividades de mantenimiento, su frecuencia recomendada y los equipos asociados. Incluye acciones como limpieza diaria, verificación semanal de tornillos, lubricación quincenal, revisión mensual de sistemas eléctricos y correas, y controles trimestrales de cuchillas, sensores y equipos automatizados. ")
            table
              thead
                tr
                  th.bg1 Actividad
                  th.bg1 Frecuencia recomendada
                  th.bg1 Equipo asociado
              tbody
                tr
                  td.text-start Limpieza interna y externa
                  td.text-center  Diaria.
                  td.text-start  Tostadora, molino, mezcladora.
                tr
                  td.text-start Verificación de tornillos y tuercas
                  td.text-center  Semanal.
                  td.text-start  Toda maquinaria.
                tr
                  td.text-start Lubricación de partes móviles
                  td.text-center  Cada 15 días o según fabricante.
                  td.text-start  Molino, agitador, mezcladora.   
                tr
                  td.text-start Revisión de sistema eléctrico
                  td.text-center  Mensual.
                  td.text-start  Tostadora, paneles de control.
                tr
                  td.text-start Inspección de bandas y correas
                  td.text-center  Mensual.
                  td.text-start  Molino o mezcladora.
                tr
                  td.text-start Cambio de cuchillas desgastadas
                  td.text-center  Trimestral o cuando se note pérdida de eficiencia.
                  td.text-start  Molino.
                tr
                  td.text-start Revisión de sensores y controles
                  td.text-center  Trimestral.
                  td.text-start  Tostadora automática.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/Tema1/cacao.svg")
          h3.bg3.py-2.w-card-text Herramientas y materiales utilizados     
            
    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
      .col-lg-7
        p En el mantenimiento preventivo de equipos utilizados en la transformación del cacao, contar con las herramientas y materiales adecuados es fundamental para realizar intervenciones seguras, eficaces y conforme a los estándares técnicos e higiénicos del sector agroindustrial. 
        p.bg9.p-4 Las herramientas permiten realizar tareas como inspección, desmontaje, limpieza, lubricación, ajuste o reemplazo de componentes, mientras que los materiales aseguran que dichas tareas se ejecuten correctamente, sin comprometer la operatividad del equipo ni la inocuidad del producto. 
      .col-lg-5.col-md-9
        img(src="@/assets/curso/Tema3/img05.png")
    
    .row.justify-content-center.align-items-center(data-aos="zoom-in-left")
      .col-lg-10
        .tarjeta--container.row.mb-5
          .col-md.tarjeta.bgizq.p-5
            .row.justify-content-center.mb-4
              .col-5
                figure
                  img(src='@/assets/curso/Tema3/izq.svg', alt='')          
            h2.text-center.text-white Herramientas
            ul.lista-ul--color.text-white
              li.d-flex
                i.fas.fa-angle-right2
                p.mb-0 Juego de llaves y destornilladores.
              li.d-flex
                i.fas.fa-angle-right2
                p.mb-0 Pinzas, alicates, llaves ajustables.
              li.d-flex
                i.fas.fa-angle-right2
                p.mb-0 Multímetro (para verificar sistemas eléctricos).
              li.d-flex
                i.fas.fa-angle-right2
                p.mb-0 Manómetros o termómetros (para equipos térmicos).
      
          
          .col-md.tarjeta.bgder.text-white.p-5
            .row.justify-content-center.mb-4
              .col-5
                figure
                  img(src='@/assets/curso/Tema3/der.svg', alt='')          
            h2.text-center.text-white Materiales
            ul.lista-ul--color.text-white
              li.d-flex
                i.fas.fa-angle-right2
                p.mb-0 Aceites y grasas lubricantes aptos para alimentos.
              li.d-flex
                i.fas.fa-angle-right2
                p.mb-0 Paños limpios, cepillos y detergentes neutros.
              li.d-flex
                i.fas.fa-angle-right2
                p.mb-0 Cinta aislante, tornillos y repuestos menores. 
              li.d-flex
                i.fas.fa-angle-right2
                p.mb-0 EPP: guantes, gafas, ropa de trabajo.
    
    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-left")
      .col-lg-7.bg12.p-3
        .row.justify-content-center.align-items-center
          .col-lg-1.col-3.mb-3.col-md-2
            img(src='@/assets/curso/Tema2/hoja.svg', alt='')  
          .col-lg-10
            p.text-white #[b Nota:] los lubricantes deben ser grado alimentario si hay posibilidad de contacto con el producto.
    
    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/Tema1/cacao.svg")
          h3.bg3.py-2.w-card-text Protocolos de seguimiento
    p.mb-4 Para garantizar que el mantenimiento preventivo se realice correctamente y a tiempo, es fundamental tener protocolos definidos. 
    
    .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
        .col-lg-3.col-8.mb-3.col-md-6
          img(src="@/assets/curso/Tema3/img06.png")
        .col-lg-9
         SlyderF.circl-arrow.mb-4(columnas="col-lg-6 col-xl-4")
          .tarjeta.bg1.p-4
            .row.justify-content-center.mb-3
              .col-6.col-md-4.col-lg-6
                img(src='@/assets/curso/Tema3/1.svg' alt='')
            h5.text-center Calendario de mantenimiento
            p.text-center Tabla donde se programan todas las actividades por equipo y fecha.
          .tarjeta.bg1.p-4
            .row.justify-content-center.mb-3
              .col-6.col-md-4.col-lg-6
                img(src='@/assets/curso/Tema3/2.svg' alt='')
            h5.text-center Lista de chequeo #[em (checklist)]
            p.text-center Documento que enumera los pasos que deben cumplirse en cada mantenimiento.
          
          .tarjeta.bg1.p-4
            .row.justify-content-center.mb-3
              .col-6.col-md-4.col-lg-6
                img(src='@/assets/curso/Tema3/3.svg' alt='')
            h5.text-center Bitácora de mantenimiento
            p.text-center Registro donde se anota qué tareas se realizaron, cuándo, y por quién.
          
          .tarjeta.bg1.p-4
            .row.justify-content-center.mb-3
              .col-6.col-md-4.col-lg-6
                img(src='@/assets/curso/Tema3/4.svg' alt='')
            h5.text-center Control de repuestos y materiales
            p.text-center Inventario actualizado de partes que se deben reemplazar periódicamente.
          
    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
      .col-lg-8.bg4.p-3
        .row.justify-content-center.align-items-center
          .col-lg-1.col-3.mb-3.col-md-2
            img(src='@/assets/curso/Tema1/atencion.svg', alt='')  
          .col-lg-11
            p #[b Ejemplo:] un operario realiza mantenimiento del molino cada lunes. Usa un #[em checklist], firma la bitácora al finalizar y reporta si se encontró alguna anomalía.  
    
    .row.justify-content-start.mb-2(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/Tema1/cacao.svg")
          h3.bg3.py-2.w-card-text Documentación técnica y formatos

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
      .col-lg-7
        p.mb-3 La documentación técnica es esencial para garantizar trazabilidad, cumplir con normativas (como BPM o HACCP) y facilitar auditorías internas o externas.
        .row.bg1.p-3
          h4 Documentos clave
          ul.lista-ul--color
            li.d-flex
              i.fas.fa-angle-right2
              p.mb-0 Manual del fabricante: instrucciones sobre uso, mantenimiento y seguridad.

            li.d-flex
              i.fas.fa-angle-right2
              p.mb-0 Ficha técnica del equipo: especificaciones, capacidades, materiales, conexiones.

            li.d-flex
              i.fas.fa-angle-right2
              p.mb-0 Formato de #[em checklist] de mantenimiento: lista con tareas por equipo.

            li.d-flex
              i.fas.fa-angle-right2
              p.mb-0 Formato de reporte de anomalías: para registrar cualquier irregularidad.

            li.d-flex
              i.fas.fa-angle-right2
              p.mb-0 Bitácora de mantenimiento: historial de actividades realizadas.
      .col-lg-5.col-md-9
        img(src='@/assets/curso/Tema3/img07.png', alt='')  





















































</template>

<script>
export default {
  name: 'Tema3',
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
