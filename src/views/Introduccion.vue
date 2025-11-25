<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    
    p.mb-4 La transformación del grano de cacao en productos como pasta, licor, manteca o chocolate requiere el uso de equipos especializados, entre ellos tostadoras, molinos, refinadoras, mezcladoras y prensas. El alistamiento de equipos comprende la preparación, inspección y verificación de las condiciones operativas antes del inicio de cada proceso. Este procedimiento permite detectar a tiempo posibles fallas, asegurar que los equipos estén limpios, calibrados y listos para su uso, con el fin de garantizar el cumplimiento de los estándares de higiene y seguridad exigidos en la industria alimentaria.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        img(src='@/assets/curso/portada/img01.png', alt='')
      .col-lg-7
        p.bg1.p-4 Por su parte, el mantenimiento preventivo agrupa las acciones planificadas y periódicas orientadas a conservar los equipos en óptimas condiciones, evitar interrupciones en la producción y prolongar su vida útil. Estas actividades incluyen la limpieza profunda, la lubricación de piezas móviles, el ajuste de componentes mecánicos y eléctricos, así como el reemplazo de partes desgastadas.
        p El aprendizaje y la aplicación de estas prácticas fortalecen las competencias técnicas en el manejo de maquinaria y promueven valores como la responsabilidad, el orden y el cumplimiento de las normas de seguridad e higiene, fundamentales en los procesos de producción agroindustrial.
    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. 

</template>

<script>
export default {
  name: 'Introduccion',
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

<style lang="sass"></style>
