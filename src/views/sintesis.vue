<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El alistamiento y el mantenimiento preventivo de equipos constituyen procesos esenciales para asegurar la seguridad, eficiencia y calidad operativa en cualquier planta de transformación, incluida la agroindustria del cacao. Ambos procedimientos implican la preparación adecuada y el cuidado sistemático de la maquinaria, garantizando su funcionamiento bajo condiciones seguras y óptimas.
    p El alistamiento se centra en la preparación previa de los equipos mediante inspecciones, limpieza y verificación de componentes, cumpliendo con las normas de seguridad industrial y los protocolos de higiene, con el propósito de proteger al personal y preservar la calidad del producto.
    p Por su parte, el mantenimiento preventivo consiste en la ejecución programada de tareas de lubricación, ajuste, sustitución de piezas y revisiones eléctricas, orientadas a prevenir fallas, reducir tiempos de inactividad y evitar accidentes.
    p Ambos procesos requieren el uso de Elementos de Protección Personal (EPP), una señalización adecuada y el manejo seguro de sustancias químicas, lo que contribuye a mantener un entorno laboral ordenado y confiable. Además, la documentación detallada mediante listas de chequeo, bitácoras y reportes técnicos es fundamental para garantizar la trazabilidad, el control y la mejora continua del sistema de mantenimiento y alistamiento.
    p En conjunto, estas prácticas, respaldadas por los principios de seguridad industrial, higiene y gestión documental, aseguran la operatividad eficiente de los equipos, la integridad del personal y la sostenibilidad del proceso productivo.
    
    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Descripción imagen")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
