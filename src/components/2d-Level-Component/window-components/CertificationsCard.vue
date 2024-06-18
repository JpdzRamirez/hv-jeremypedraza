<script>
import {
    defineComponent
} from "vue";


export default defineComponent({
    name: 'CertificationCardComponent',
    mounted: function () {

    },
    props: ['styleCard'],


});
</script>

<template>
<div>

  <el-popover
    :width="220"
    trigger="hover"
    transition="el-fade-in-linear"
    :effect=styleCard
    placement="right"
  >
      <template #reference>
          <el-button class="m-2">Ver Más</el-button>
      </template>
      
          <div class="card " style="width: 12rem;">
                <div class="card-header offLigths text-center">
                  Auditoria Interna de Calidad
                </div>
                <img src="/src/assets/img/card-cert-1.jpg" class="card-img-top" alt="Sena Auditoría">
                <div class="card-body offLigths d-flex flex-column justify-content-center">
                    <h5 class="card-title text-center"> Año 2024</h5>
                    <p class="card-text text-center">Fundamentos para realizar aunditorias.</p>
                    <a target="_blank" href="/src/assets/img/card-cert-1.jpg" class="btn btn-primary btn-sm">Ampliar Certificado</a>
                </div>
            </div>
  </el-popover>


</div>
</template>

<style lang="scss" scoped>

</style>