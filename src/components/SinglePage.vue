<template>
  <section>
    <vs-tabs class="nav-home" vs-color="rgb(233, 98, 89)" >
      <vs-tab vs-label="Home">
        <div class="con-tab-Home">
          <Banner/>
          <Actualy/>
          <div class="separador-linea">
            <img src="../assets/lineas.png" alt="" width="30%">
          </div>
          <Eventos/>
        </div>
      </vs-tab>
      <vs-tab vs-label="Apps">
        <div class="con-tab-ejemplo">
          Apps
        </div>
      </vs-tab>
      <vs-tab vs-label="Ingresar">
        <div class="con-tab-ejemplo">
          <Login/>
        </div>
      </vs-tab>
      <vs-tab vs-label="Publica tu evento">
        <div class="con-tab-ejemplo">
          <PublicarEvento/>
        </div>
      </vs-tab>
    </vs-tabs>
    <Footer/>
  </section>
</template>

<script>
  import Banner from '@/components/Banner'
  import Actualy from '@/components/Actualy'
  import Eventos from '@/components/Eventos'
  import Footer from '@/components/Footer'
  import Login from '@/components/Login'
  import PublicarEvento from '@/components/PublicarEvent'
    export default {
        name: "single-page",
        components:  {
          Banner,
          Actualy,
          Eventos,
          Footer,
          Login,
          PublicarEvento
        }
    }
</script>

<style lang="scss">
  body {
    background-color: #2a333c;
    color: #c05b5b;
  }
  .nav-home {
    .ul-tabs {
      justify-content: flex-end;
      list-style: none;
      .tab-activo {
        background: white !important;
        border-radius: 0 !important;
        list-style: none;
      }
      .tabtext {
        color: white;
      }
    }
  }

</style>
