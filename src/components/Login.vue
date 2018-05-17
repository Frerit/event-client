<template>
  <vs-row vs-w="12">
    <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-lg="4" vs-sm="6" vs-xs="12" >
      asdsadsad asd a
    </vs-col>
    <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-lg="8" vs-sm="6" vs-xs="12">
      <div class="secitonlef-login">
        <vs-row vs-w="12">
          <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-lg="6" vs-sm="12" vs-xs="12" >
            <div class="centerx">
              <vs-input
                :vs-valid.sync="validos.email"
                vs-success-text="Correo Valido"
                vs-color="rgb(213, 14, 151)"
                vs-danger-text="The email does not meet the requirements"
                vs-type="email" vs-label-placeholder="Email" v-model="value1"/>

              <vs-input
                :vs-valid.sync="validos.number"
                vs-success-text="Numero Valido"
                vs-danger-text="The minimum is 10 and the maximum 20"
                vs-max="20"
                vs-min="10"
                vs-type="number"
                vs-label-placeholder="Number" v-model="value2"/>

              <vs-input
                :vs-valid.sync="validos.url"
                vs-success-text="Correo Valido"
                vs-danger-text="The email does not meet the requirements"
                vs-type="url"
                vs-label-placeholder="url" v-model="value3"/>

              <vs-input
                :vs-valid.sync="validos.password"
                vs-success-text="Password Valida"
                vs-danger-text="The password must have at least 8 characters, 1 number, 1 special character"
                vs-type="password"
                vs-label-placeholder="Password" v-model="value4"/>

              <vs-input
                :vs-valid.sync="validos.custom"
                vs-success-text="Field is valid"
                vs-danger-text="Field must have at least 5 characters"
                :vs-validation-function="(value) => value.length > 5"
                vs-type="custom" vs-label-placeholder="Custom" v-model="value5"/>
            </div>
          </vs-col>
          <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-lg="6" vs-sm="12" vs-xs="12">
            <div class="formslogin">

            </div>
          </vs-col>
        </vs-row>
      </div>
    </vs-col>
  </vs-row>
</template>

<script>
    export default {
        name: "login",
      data(){
        return {
          value1:'',
          value2:'',
          value3:'',
          value4:'',
          value5:'',
          validos:{
            email:false,
            number:false,
            url:false,
            password:false,
            custom: false
          },
        }
      }
    }
</script>

<style lang="scss">
  .secitonlef-login {
    background: white;
    width: 100%;
  }
</style>
