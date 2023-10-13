<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 2
      h1 Servicios de red

    .row.justify-content-center.mb-4 
      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/25.svg', alt='')       
      .col-lg-8.my-3
        p(data-aos="fade-down") El objetivo principal de una red de datos o computadoras, es ofrecer una serie de servicios que facilitan los procesos internos de la organización a la cual pertenece, y que permiten:
        .bg1.brad.p-4.py-3
          .row.justify-content-center.align-items-center(data-aos="fade-left")
            .col.my-3     
              ul.lista-ul.fa-ul.mb-0.text-bold
                li 
                  i.fas.fa-project-diagram.c1
                  | El intercambio de archivos.
                li 
                  i.fas.fa-project-diagram.c1
                  | Compartir aplicaciones e impresoras.
                li.mb-0 
                  i.fas.fa-project-diagram.c1
                  | Recibir correo electrónico y demás.
            .col-lg-auto.my-3
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/26.svg', alt='')      

    Separador 
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.1 Conceptualización 
    p(data-aos="fade-down").mb-4 Los servicios de red son un conjunto de prestaciones ofrecidas por una serie de software y hardware de red interconectados entre sí, ya sea de manera inalámbrica o no y cuya finalidad es facilitar el intercambio de información, compartir recursos y establecer comunicación entre todos los integrantes de una organización.

    .row.justify-content-center.align-items-end.mb-4 
      .col-lg-8.my-2
        .bg1.brad.p-4.py-3      
          p(data-aos="fade-down") Internet es un claro ejemplo de los servicios ofrecidos por una red, esta WAN ofrece la posibilidad de comunicación en tiempo real con cualquier parte del globo, enviar y recibir correos electrónicos, compartir contenido audiovisual y demás. Entre los usos más destacados de los servicios de red se encuentran:

          .row.justify-content-center.align-items-center(data-aos="fade-left")
            .col.my-3     
              ul.lista-ul.fa-ul.mb-0.text-bold
                li 
                  i.fas.fa-project-diagram.c1
                  | Compartir datos.
                li 
                  i.fas.fa-project-diagram.c1
                  | Ejecutar aplicaciones.
                li 
                  i.fas.fa-project-diagram.c1
                  | Correo electrónico.
                li 
                  i.fas.fa-project-diagram.c1
                  | Acceso remoto.
                li 
                  i.fas.fa-project-diagram.c1
                  span.mb-0 Internet #[i working].
                li.mb-0 
                  i.fas.fa-project-diagram.c1
                  | Internet e Intranet.
            .col-lg-auto.my-3
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/27.svg', alt='')

      .col-lg-4.my-2
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/28.svg', alt='')

    Separador 
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.2 Redes wifi como servicio de red
    p(data-aos="fade-down").mb-4 Las redes inalámbricas pueden considerarse como un tipo especial o diferente de servicio de red, debido a que permiten acceder a los recursos ofrecidos por la red principal; sin embargo, esta funciona como una red tradicional, lo que significa que debe contar con los componentes necesarios para funcionar, los cuales son:   
    .row.justify-content-center.mb-4 
      .col-lg-4.my-2.d-none.d-lg-block
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/29.svg', alt='')
      .col-lg-8.my-2
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg13")
          div(titulo="Emisor") Es el encargado de enviar peticiones o solicitudes para unirse a la red.   
          div(titulo="Codificador") Es el encargado de codificar la señal que lleva la información hacia un destino final.                                         
          div(titulo="Línea") Para una red wifi, los datos se envían usando ondas de radiofrecuencia o los infrarrojos. La línea es responsable de enviar la información recibida a la dirección del dispositivo especificada en la interfaz.                                         
          div(titulo="Decodificador") Este sistema se encarga de realizar la conversión de los pulsos eléctricos en datos que pueden ser procesados por el destinatario de la información.                                         
          div(titulo="Receptor") Es el encargado finalmente de recibir la información emitida por el emisor, este dispositivo recibe los datos que han sido transmitidos y procesados a través de la red.                                         
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

<style lang="sass"></style>
