<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bg11
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 4
      h1 Virtualización de red
    p(data-aos="fade-down") El constante uso de recursos en red, tanto de #[i hardware] como de #[i software], es una actividad cotidiana en la implementación de tecnologías de la información. A fin de aprovechar al máximo estos recursos se integran en las organizaciones soluciones como la virtualización de redes, cuyo objetivo es facilitar su uso compartido de una forma eficaz, segura y controlada para los nodos conectados en red.

    .row.justify-content-center.align-items-center.mb-4           
      .col-lg-8.my-3
        .row.justify-content-center.align-items-center         
          .col-lg-auto.my-4
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/42.svg', alt='')    
          .col.my-4 
            .bg12.p-4.brad
              p(data-aos="fade-down").mb-0 Al aplicar la virtualización de redes el resultado es una red virtual también conocida como VLAN, esta designa una red lógica basándose en una red física real.
        h4(data-aos="fade-down").mb-4 La VLAN se divide en dos clases principales:
        .bgw.p-4.brad 
          p(data-aos="fade-down") #[b.tb VLAN externas:] constan de varias redes LAN que el #[i software] administra como una única entidad. 
          p(data-aos="fade-down").mb-0 #[b.tb VLAN internas:] constan de un sistema que usa zonas o máquinas virtuales configuradas en al menos una pseudointerfaz de red. Estos contenedores pueden comunicarse entre sí, como si estuvieran en la misma red LAN, por lo que proporcionan una red virtual en un único host               
      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/43.svg', alt='') 

    h4.mb-5(data-aos="fade-down") Según Ariganello (2020), las dos principales arquitecturas de red desarrolladas para soportar los servicios de la virtualización de redes son:

    .row.justify-content-center.align-items-center        
      .col-lg-6(data-aos="fade-right")
        img.img-w(data-aos="zoom-in")(src='@/assets/curso/temas/44.png', alt='') 
        .bgw.p-4.brbott.h-100.text-center
          h4.tb(data-aos="fade-down") SDN
          p(data-aos="fade-down").mb-0 Sus siglas se refieren a Software Defined Networking, que traducido al español significa Redes Definidas por Software, su objetivo principal es permitir una arquitectura de red que facilita la implementación de servicios de red. 

      .col-lg-6(data-aos="fade-left")
        img.img-w(data-aos="zoom-in")(src='@/assets/curso/temas/45.png', alt='') 
        .bgw.p-4.brbott.h-100.text-center
          h4.tb(data-aos="fade-down") ACI CISCO
          p(data-aos="fade-down").mb-0 Sus siglas significan Application Centric Infrastructure, que traducido al español se refiere a la Infraestructura Centrada en Aplicaciones CISCO, que posibilita la agilidad de las aplicaciones y la automatización del centro de datos. 

</template>

<script>
export default {
  name: 'Tema4',
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
