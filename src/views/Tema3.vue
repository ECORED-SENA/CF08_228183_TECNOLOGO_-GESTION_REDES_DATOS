<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bg8
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 3
      h1 Tipos de servicios de red

    .row.justify-content-center.align-items-center.mb-4           
      .col.my-3
        .bg9.p-4.brad   
          p(data-aos="fade-down").mb-0 Los servicios que ofrece una malla informática o de datos se discriminan de acuerdo con su naturaleza y función, es decir, cada uno está implementado con una serie de protocolos que facilitan su uso y estabilidad a la hora de ser requeridos por los usuarios finales. #[b Estos servicios se encuentran diseñados para cumplir una tarea específica dentro del funcionamiento global de la red y algunos se pueden complementar con otros. Según García (2014)], los servicios más relevantes ofrecidos por la red son:
      .col-lg-auto.my-3.d-none.d-lg-block
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/31.svg', alt='')

    .bgw.p-4.brad(data-aos="fade-left") 
      SlyderA(tipo="b")
        .row.justify-content-center
          .col-lg-5.my-3
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/33.png', alt='')            
          .col-lg-7.my-3
            h4.tb DHCP - Protocolo de configuración dinámica de #[i host] 
            p Permite la configuración automática de los parámetros de red de los nodos, es un protocolo de red TCP/IP. 

            p Es de tipo cliente/servidor, permite gestionar la asignación de direcciones IP y otros parámetros de red mediante permisos.

            p Cuando una dirección IP no está en uso, esta puede ser asignada a otro nodo en red.  
        .row.justify-content-center
          .col-lg-5.my-3
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/34.png', alt='')            
          .col-lg-7.my-3
            h4.tb DNS - #[i Domain Name System]  
            p Gestiona y mantiene de forma distribuida las direcciones de Internet y los nombres de dominio asociados en una red TCP/IP. 

            p Un servidor DNS tiene registros de los nombres de dominio y de los servicios que tienen bajo su autoridad delegada (pueden administrar y/o configurar directamente).
        .row.justify-content-center
          .col-lg-5.my-3
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/35.png', alt='')            
          .col-lg-7.my-3
            h4.tb SSH - #[i Secure Shell] 
            p Es una herramienta que basa su seguridad en criptografía, permite realizar conexiones seguras entre equipos conectados en una red de datos como Internet y da soporte seguro sobre cualquier protocolo que funciona sobre TCP.
        .row.justify-content-center
          .col-lg-5.my-3
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/36.png', alt='')            
          .col-lg-7.my-3
            h4.tb Protocolo de transferencia de archivos (FTP)  
            p Está basado en el protocolo FTP, del inglés #[i File Transfer Protocol] o Protocolo de Transferencia de Ficheros en redes tipo TCP/IP. 

            p Este protocolo proporciona un mecanismo estándar para la transferencia de archivos entre nodos, a través de conexiones de redes TCP/IP.
        .row.justify-content-center
          .col-lg-5.my-3
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/37.png', alt='')            
          .col-lg-7.my-3
            h4.tb Gestión de servicios de correo electrónico  
            p Los correos electrónicos están conformados por dos subsistemas, uno de ellos son los agentes de usuarios y el otro los agentes de transferencia de mensajes.

            p Es un sistema de mensajería interpersonal y modular por seguir el modelo cliente/servidor de la arquitectura TCP/IP. 

            p Los clientes de correo se encargan de la elaboración, así como de la gestión de la descarga de los correos.
        .row.justify-content-center
          .col-lg-5.my-3
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/38.png', alt='')            
          .col-lg-7.my-3
            h4.tb Gestión de servidores web 
            p La #[i World Wide Web] (Red Global Mundial, www) es un sistema de documentos enlazados entre sí, accesibles a través de Internet.

            p Estos documentos pueden ser solo de texto, llamados hipertextos o multimedia y/o interactivos, en este caso llamados hipermedios. 
        .row.justify-content-center
          .col-lg-5.my-3
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/39.png', alt='')            
          .col-lg-7.my-3
            h4.tb Redes inalámbricas 
            p Las redes inalámbricas no solo se emplean para realizar conexiones de datos, con frecuencia se usan para la conexión de cualquier dispositivo (como electrodomésticos), permiten las conexiones en áreas donde es costoso realizar conexiones cableadas. 

            p Los datos viajan por medio de ondas electromagnéticas, la transmisión y recepción se realiza a través de puertos destinados para tal fin.
        .row.justify-content-center
          .col-lg-5.my-3
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/40.png', alt='')            
          .col-lg-7.my-3
            h4.tb Voz IP 
            p El protocolo Voz IP, también llamado Voz sobre Protocolo de Internet, Voz sobre IP, VozIP, Voype (en América, en #[i spanglish]) o VoIP, es un grupo de recursos (protocolos, códecs, etc.) para enviar la señal de voz a través de Internet.            
                                                                                            
      

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

<style lang="sass"></style>
