<template>
  <div class="all-products">
    <v-divider></v-divider>
    <div class="page-title mt-8">
      <h2>精選商品</h2>
    </div>

    <v-container class="white">
      <div class="mt-4 mb-4">
        <p>所有商品>椅子</p>
      </div>
      <v-row>
        <v-col v-for="(item, i) in displayItems" :key="i" cols="6" sm="3">
          <v-card class="pa-2 flashHover" outlined tile>
            <figure>
              <span @click="checkItem(item.img)">
                <v-img
                  class="card-img product-img"
                  :src="`${publicPath}img/elements/${item.img}.jpg`"
                  alt="chair"
                />
              </span>
            </figure>
            <p class="card-title">{{ item.title }}</p>
            <p class="card-price">{{ item.price }}</p>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
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
import info from "../assets/info.json";
// import VLazyImage from "v-lazy-image/v2/v-lazy-image.es.js";

export default {
  data() {
    return {
      displayItems: [],
      publicPath: process.env.BASE_URL,
      infoData: info,
    };
  },
  components: {
    // VLazyImage,
  },
  created() {
    let allitems = [];
    let start = 0;
    let end = Object.keys(this.infoData).length / 2;
    for (let i = start; i < end; i++) {
      allitems.push(Object.keys(this.infoData)[i]);
    }

    let newItems = [];
    for (let i = 0; i < allitems.length; i++) {
      let getInfo = this.infoData[allitems[i]];
      newItems.push({
        img: allitems[i],
        title: getInfo["title"],
        price: getInfo["price"],
        description: getInfo["description"],
      });
    }
    this.displayItems = newItems;
  },
  methods: {
    checkItem(itemName) {
      let reassemblyName = (itemName[0].toUpperCase() + itemName.slice(1))
        .split("", 5)
        .join("");
      this.$router.push({ name: reassemblyName, params: { itemid: itemName } });
    },
  },
};
</script>

<style scoped>
.page-title {
  display: flex;
  justify-content: center;
  color: dimgray;
}

.threedots-center {
  display: block;
  width: 60px;
  margin: auto;
}

.card-price {
  font-size: 10px;
  color: gray;
}

.product-img {
  cursor: pointer;
}

.flashHover figure:hover img {
  opacity: 1;
  -webkit-animation: flash 2s;
  animation: flash 2s;
}
@-webkit-keyframes flash {
  0% {
    opacity: 0.2;
  }
  100% {
    opacity: 1;
  }
}
@keyframes flash {
  0% {
    opacity: 0.2;
  }
  100% {
    opacity: 1;
  }
}
</style>
