<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bg7
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 1
      h1 Dispositivos de red
      
    .row.justify-content-center.mb-4           
      .col-lg-4.my-3
        .bg1.p-4.h-100(data-aos="fade-left")
          p(data-aos="fade-down").mb-0 Conforman una parte esencial en las infraestructuras tecnológicas, están presentes en todas las actividades cotidianas que se realizan hoy en día. La conexión a la red a través de un dispositivo terminal permite registrar, consultar y acceder a información que se encuentra en Internet, además de apoyar la interacción y configuración de dispositivos de red, como los son #[i #[b routers, switch, modem,]] entre otros.        
      .col-lg-8.my-3
        .bg2.p-4.h-100(data-aos="fade-right")
          .row.justify-content-center     
            .col-lg-6.my-1   
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/1.svg', alt='')      
            .col-lg-6.my-1.j              
              p(data-aos="fade-down").mb-0 Las redes están integradas por dispositivos de cómputo y sistemas operativos heterogéneos, los cuales se interconectan a través de la red de Internet. Los dispositivos de cómputo pueden variar sus componentes de #[i hardware] y #[i software], haciendo que cada vez sean más eficientes y adaptables a las necesidades de las organizaciones. 

    Separador 
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.1 #[i Hardware]  
    p(data-aos="fade-down").mb-5 En los sistemas informáticos o computacionales, el #[i hardware] hace referencia a toda la parte física o tangible que lo conforma, es decir, #[b.tb el #[i hardware] son todos aquellos elementos palpables. Algunos de estos son:]

    .tj1.p-4.mb-5.pb-0
      .row.justify-content-center.align-items-center       
        .col-lg-4.d-none.d-lg-block
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/3.svg', alt='')
        .col-lg-8.my-3
          SlyderF(columnas="col-lg-6 col-md-6")(data-aos="fade-right")
            .tarjeta.p-0
              .cont
                img.img-a(src='@/assets/curso/temas/4.png' alt='') 
                .text
                  h4.p-3.mb-0.text-center El disco duro

            .tarjeta.p-0
              .cont
                img.img-a(src='@/assets/curso/temas/5.png' alt='') 
                .text
                  h4.p-3.mb-0.text-center El procesador    

            .tarjeta.p-0
              .cont
                img.img-a(src='@/assets/curso/temas/6.png' alt='') 
                .text
                  h4.p-3.mb-0.text-center La tarjeta madre   

            .tarjeta.p-0
              .cont
                img.img-a(src='@/assets/curso/temas/7.png' alt='') 
                .text
                  h4.p-3.mb-0.text-center La fuente de energía o poder  

            .tarjeta.p-0
              .cont
                img.img-a(src='@/assets/curso/temas/8.png' alt='') 
                .text
                  h4.p-3.mb-0.text-center Los cables  

    p(data-aos="fade-down").mb-5 Existe un #[i hardware] vital para el funcionamiento de un dispositivo electrónico, este se conoce como #[b.tb “crítico”], dicha denominación se debe a que sin este #[i hardware] crítico el sistema es incapaz de arrancar o iniciar. Un ejemplo de ello es el disco duro, donde se aloja el sistema operativo, si un computador no tiene este #[i hardware] o está en mal estado, jamás podrá iniciar sesión alguna.  

    .bg3(data-aos="fade-right")
      .row.justify-content-center     
        .col-lg-4 
          img.img-mov(data-aos="zoom-in")(src='@/assets/curso/temas/9.png', alt='')      
        .col-lg-8.j.p-4.text-white              
          p(data-aos="fade-down").mb-0 Por otro lado, el #[i hardware] no crítico que, aunque hace parte del funcionamiento de un sistema informático no es trascendental para su funcionamiento, un ejemplo de este #[i hardware] es una unidad lectora de DVD.

    Separador 
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.2 #[i Hardware] de red  
    .bg4.pb-5
      p(data-aos="fade-down").mb-5 Conforma los dispositivos informáticos que permiten la interconexión en redes de datos; dentro de algunos de los dispositivos que pueden encontrarse en una red se tienen los siguientes:
      .bgw.p-4.brad(data-aos="fade-right") 
        SlyderA(tipo="b")
          .row.justify-content-center
            .col-lg-5.my-3
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/11.png', alt='')            
            .col-lg-7.my-3
              h4.tb Estaciones de trabajo
              p Así se denominan los equipos de cómputo conectados en red, mediante los cuales se logra acceder a recursos y servicios que son proporcionados en las redes informáticas y a su vez, estos servicios son ofrecidos por otro dispositivo denominado servidor.          
          .row.justify-content-center
            .col-lg-5.my-3
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/12.png', alt='')            
            .col-lg-7.my-3
              h4.tb Servidores  
              p Son dispositivos con características específicas de #[i hardware] y #[i software], ya que su función principal es la de servir o compartir recursos con las estaciones de trabajo.               
          .row.justify-content-center
            .col-lg-5.my-3
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/13.png', alt='')            
            .col-lg-7.my-3
              h4.tb.fst-italic Host  
              p En redes informáticas este término es usado para referirse a cualquier dispositivo que se encuentre conectado a la red y que esté configurado con un respectivo número IP (Internet #[i protocol]), lo que le permite enviar y recibir información.  
          .row.justify-content-center
            .col-lg-5.my-3
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/14.png', alt='')            
            .col-lg-7.my-3
              h4.tb NIC (#[i Network Interface Card] / Tarjeta de Interfaz de Red) 
              p Componente electrónico e informático que se integra con la tarjeta madre de una estación de trabajo, permite la conexión cableada a la red de datos mediante el puerto RJ45 o también a una conexión inalámbrica. Este dispositivo consiste en un transmisor-receptor que prepara los datos que deben transmitirse antes de enviarlos e interpretar los recibidos. Internamente contiene un controlador (#[i driver]) que es el encargado del vínculo entre el dispositivo físico y el sistema operativo de red.         
          .row.justify-content-center
            .col-lg-5.my-3
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/15.png', alt='')            
            .col-lg-7.my-3
              h4.tb #[i Hub] 
              p Es un dispositivo que permite la conexión de varios cables de red, también es conocido como concentrador, su función principal es la de ser el punto central de conexión de entrada y salida para nodos de red que están dispuestos, de acuerdo con una topología física de estrella. Su función sencillamente es la de unir conexiones y no alterar las tramas que le llegan.               
          .row.justify-content-center
            .col-lg-5.my-3
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/16.png', alt='')            
            .col-lg-7.my-3
              h4.tb #[i Router] 
              p También conocido como enrutador, es un dispositivo que funciona en la capa de red, tiene la capacidad de conectar diversos dispositivos en diferentes topologías de red. Este equipo se convierte en un nodo de red que está configurado con su correspondiente dirección IP, que recibe los paquetes de otros nodos, los cuales analiza para luego enrutarlos por la mejor ruta al destino que corresponde. 

              p El #[i router] inalámbrico permite la conexión de dispositivos a la red mediante una red cableada (LAN), red inalámbrica (WLAN) o una red mixta LAN/WLAN, todo dependiendo de las características del fabricante.  
          .row.justify-content-center
            .col-lg-5.my-3
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/17.png', alt='')            
            .col-lg-7.my-3
              h4.tb #[i Switch] (Conmutador) 
              p Es un dispositivo avanzado de propósito especial que combina las funciones de un #[i hub] y de un puente, lo que permite mejorar el rendimiento de la red, esto se debe a que la información solo se reenvía a través del puerto de salida adecuado.         
          .row.justify-content-center
            .col-lg-5.my-3
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/18.png', alt='')            
            .col-lg-7.my-3
              h4.tb #[i Bridge] (Puente) 
              p Fundamentalmente son "repetidores inteligentes que envían el tráfico de un segmento a otro solo cuando este se encuentra designado a otro segmento". Este dispositivo es especialmente útil para ampliar la extensión de la conectividad de la red o el número de nodos que la integran.               
          .row.justify-content-center
            .col-lg-5.my-3
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/19.png', alt='')            
            .col-lg-7.my-3
              h4.tb Nodos 
              p Hacen referencia a cualquier dispositivo físico que se conecte a una red, tienen capacidad de comunicación hacia otros dispositivos y de compartir tanto los componentes de su #[i hardware] como los programas de #[i software], los archivos y datos. 

              p Como ejemplo, el término nodo puede aplicarse a un portátil conectado en red con una impresora, es una red simple y mediante la conexión existente entre ellos (a través de un cable USB) se pueden comunicar y compartir datos.                                 
    Separador 
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.3 Sistemas operativos  
    .row.justify-content-center.mb-4 
      .col-lg-8.my-3
        p(data-aos="fade-down") Es el #[i software] encargado de gestionar la parte lógica y física de un sistema computacional y administra los recursos y características de la máquina, los cuales ofrecen un servicio al usuario. Existe variedad de sistemas operativos que se caracterizan por su naturaleza propietaria y estructural.
        .row.justify-content-center.align-items-center.bg5.brad.p-4.py-3(data-aos="fade-left")       
          .col-lg-auto.my-3
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/21.svg', alt='')          
          .col.my-3     
            p(data-aos="fade-down").mb-0 Uno de los más populares es Linux en sus diferentes versiones, es de fuente abierta, esto significa que sus usuarios pueden modificar el núcleo en aras de mejorarlo y así, aumentar su rendimiento, seguridad y demás características. Se pueden encontrar los siguientes: #[b Windows, iOS, Unix, Solaris,] entre otros. 
      .col-lg-4.my-3.d-none.d-lg-block
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/20.svg', alt='')            
     
      
    .row.justify-content-start.mb-3   
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.svg', alt='')
          .list__txt.bg6.p-0.px-4
            h4.mb-0 Características 

    p(data-aos="fade-down").mb-5 Los sistemas operativos tienen varias características, de acuerdo con la funcionalidad del dispositivo de #[i hardware], estas actualmente son:  

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video.     

    p(data-aos="fade-down").mb-5 De acuerdo con su estructura o #[b.tb kernel], los sistemas operativos se clasifican como se indica a continuación. 

    .titulo-sexto.color-acento-contenido
      h5 Tabla 1.
      span Tipos de sistemas operativos   
    .tabla-a.color-acento-contenido.mb-5(data-aos="fade-left") 
      table 
        tbody
          tr.bgt1.text-center.text-bold
            td Sistema monoprocesador  
            td Sistema multiprocesador  
            td Sistema distribuidos  
          tr.bgw
            td Existe un solo CPU de ejecución de instrucciones.  
            td Existen dos o más CPU, ejecutan varios procesos al mismo tiempo, también son llamados sistemas paralelos. 
            td Presenta una colección de procesadores que se comunican por una red interconectada.
          tr.bgw
            td Ejemplos: MS-DOS, Windows 95.  
            td Ejemplos: Windows NT, Mac OS X, Unix.  
            td Ejemplos: servidores de archivo de red, #[i World Wide Web].                        
                               
    .row.justify-content-start.mb-3   
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.svg', alt='')
          .list__txt.bg6.p-0.px-4
            h4.mb-0 Funciones del sistema operativo 

    .row.justify-content-center.mb-4 
      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/23.svg', alt='')       
      .col-lg-8.my-3
        p(data-aos="fade-down") Los recursos de #[i hardware] son administrados por el sistema operativo, es decir, los dispositivos de entrada y salida, incluyendo la memoria y la CPU. Como analogía imagine el sistema operativo como el conductor de un autobús que brinda el servicio a los usuarios y a la vez, controla todos los recursos del autobús para hacer el trabajo.
        .bgw.brad.p-4
          p(data-aos="fade-down") El núcleo de un equipo es el sistema operativo y sus tareas son diversas, dentro de las cuales se encuentran:
          .row.justify-content-center.align-items-center(data-aos="fade-left")
            .col.my-3     
              ul.lista-ul.fa-ul.mb-0
                li 
                  i.fas.fa-project-diagram.c1
                  span.mb-0 Gestión de #[em hardware]. 
                li 
                  i.fas.fa-project-diagram.c1
                  | De aplicaciones. 
                li 
                  i.fas.fa-project-diagram.c1
                  | De archivos. 
                li 
                  i.fas.fa-project-diagram.c1
                  | GUI.
                li 
                  i.fas.fa-project-diagram.c1
                  | Funciones de red.
                li.mb-0 
                  i.fas.fa-project-diagram.c1
                  | Medidas de seguridad. 
            .col-lg-auto.my-3
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/24.svg', alt='')          

    p(data-aos="fade-down") Para la administración de los recursos y las funcionalidades del equipo que incluyen los dispositivos periféricos como la impresora o el lector de DVD, el sistema operativo realiza la gestión de procesos o recursos, además de garantizar la seguridad que le permita proteger los archivos o programas, y garantizar el correcto funcionamiento del equipo.           
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
