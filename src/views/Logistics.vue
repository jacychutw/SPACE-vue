<template>
  <div class="all-products">
    <v-divider></v-divider>
    <div class="page-title mt-8">
      <h2>關於我們</h2>
    </div>
    <div class="logistics-quote mt-4 mb-4">
      <p>
        SPACE 與 SUPER-FAST
        物流合作，當我們確認收到您的匯款且有現貨，會開始跑完整的出貨流程。<br /><br />
        平均十個工作天內可以會送到您指定的地址。<br />
        若是離市區較遠的地區，平均需要十五個工作天。<br /><br />
        由於貨品體積較大，請收到貨品時確實檢查。若有毀損之處請立即反應，<br />
        若已確認收貨，將不提供退換貨服務。謝謝配合！
      </p>
    </div>
    <div class="ml-16 mr-16">
      <v-img
        class="logistics-img"
        :src="`${publicPath}img/logistics.png`"
        alt="logistics"
      />
    </div>
    <div class="mt-8 mb-8">
      <img
        class="threedots-center"
        src="../assets/threedots.png"
        alt="threedots"
      />
    </div>
  </div>
</template>

<script>
// import VLazyImage from "v-lazy-image/v2/v-lazy-image.es.js";

export default {
  data() {
    return {
      publicPath: process.env.BASE_URL,
    };
  },
  components: {
    // VLazyImage,
  },
};
</script>

<style scoped>
.page-title {
  display: flex;
  justify-content: center;
  color: dimgray;
}

.logistics-quote {
  margin: 20px;
  color: #526161;
  display: flex;
  justify-content: center;
}

.logistics-quote p {
  margin: 20px;
  font-size: 18px;
}

.logistics-img {
  display: block;
  margin: auto;
  width: 100%;
  max-width: 800px;
}

.threedots-center {
  display: block;
  width: 60px;
  margin: auto;
}
</style>
