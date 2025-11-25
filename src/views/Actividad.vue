<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Alistamiento y mantenimiento de equipos',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Identificar importancia de las etapas del alistamiento y mantenimiento de equipos con base en normas de seguridad industrial.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            'El alistamiento se refiere a la preparación y organización previa de todos los equipos, herramientas, insumos y personal necesarios para iniciar procesos de transformación del grano.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Su respuesta evidencia que identifica la importancia de las etapas del alistamiento y mantenimiento de equipos de transformación del grano.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            'Asegurar que los equipos estén en condiciones óptimas para evitar interrupciones durante la producción es uno de los objetivos del alistamiento.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Su respuesta evidencia que identifica la importancia de las etapas del alistamiento y mantenimiento de equipos de transformación del grano.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            'La verificación es la primera fase del alistamiento, donde se determina qué equipos se van a utilizar, en qué orden y qué recursos se necesitan para el proceso del día.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Su respuesta evidencia que identifica la importancia de las etapas del alistamiento y mantenimiento de equipos de transformación del grano.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            'La fase de comunicación es fundamental para que todo el equipo humano esté al tanto del estado de los equipos y las condiciones de operación.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Su respuesta evidencia que identifica la importancia de las etapas del alistamiento y mantenimiento de equipos de transformación del grano.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            'La limpieza exhaustiva tiene como objetivo eliminar residuos de procesos anteriores, polvo, grasas, humedad o cualquier material extraño que pueda afectar la calidad del producto o contaminar el entorno de trabajo.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Su respuesta evidencia que identifica la importancia de las etapas del alistamiento y mantenimiento de equipos de transformación del grano.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            'La seguridad industrial es el conjunto de normas, acciones y herramientas destinadas a prevenir accidentes, proteger la salud de los trabajadores y garantizar un entorno de trabajo seguro durante cualquier proceso productivo.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Su respuesta evidencia que identifica la importancia de las etapas del alistamiento y mantenimiento de equipos de transformación del grano.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            'La señalización es esencial para alertar, guiar y advertir a los trabajadores sobre peligros o condiciones especiales en una planta de producción.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Su respuesta evidencia que identifica la importancia de las etapas del alistamiento y mantenimiento de equipos de transformación del grano.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            'La higiene y orden en el área de trabajo es una responsabilidad compartida entre la empresa y los trabajadores. Se basa en identificar riesgos, tomar medidas preventivas y capacitar continuamente al personal.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Su respuesta evidencia que identifica la importancia de las etapas del alistamiento y mantenimiento de equipos de transformación del grano.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            'El mantenimiento preventivo es el conjunto de acciones planificadas y sistemáticas que se realizan a los equipos e instalaciones antes de que se presenten fallas.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Su respuesta evidencia que identifica la importancia de las etapas del alistamiento y mantenimiento de equipos de transformación del grano.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            'En el mantenimiento preventivo de equipos utilizados en la transformación del cacao, es fundamental contar con las herramientas y materiales adecuados para realizar intervenciones seguras, eficaces y conforme a los estándares técnicos e higiénicos del sector agroindustrial.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Su respuesta evidencia que identifica la importancia de las etapas del alistamiento y mantenimiento de equipos de transformación del grano.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Identifica procesos de alistamiento y mantenimiento preventivo con base en protocolos de seguimiento, normas de seguridad industrial y bitácoras de mantenimiento.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
