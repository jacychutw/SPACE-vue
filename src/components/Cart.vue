<template>
  <div>
    <div v-if="isSmaller" class="page-title mt-0 mb-8">
      <h2>購物車</h2>
    </div>
    <v-data-table
      v-if="isDataLoaded"
      :headers="shoppingHeaders"
      :items="products"
      hide-default-footer
      disable-pagination
      @input="(event) => inputAnnotation(event, props.item.img)"
      style="border: 1px solid lightgray"
    >
      <template v-slot:item.img="{ item }">
        <img
          class="pt-1"
          width="45"
          :src="`${publicPath}img/elements/${item.img}.jpg`"
        />
      </template>
      <template v-slot:item.eachsum="{ item }">
        {{ item.eachsum }}
      </template>
      <template v-slot:item.delete="{ item }">
        <v-icon
          color="#8DA69D"
          @click="
            deleteId = item.img;
            deleteTitle = item.title;
            openCheckDialog = true;
          "
        >
          mdi-delete
        </v-icon>
      </template>
    </v-data-table>

    <div
      v-if="checkEmptyCart()"
      class="mt-8"
      style="display: flex; justify-content: center; color: #915233"
    >
      購物車目前是空的，去逛逛吧！
    </div>

    <div
      class="mt-4 mb-2"
      style="display: flex; justify-content: center; color: #526161"
    >
      <div>結帳金額：NT$ {{ sumnumber }}</div>
    </div>

    <div
      v-if="checkBill()"
      class="mb-2"
      style="display: flex; justify-content: center; color: rgb(177, 81, 81)"
    >
      您的結帳金額超過 5 萬元(大量訂購)，欲購買請直接致電與我們聯繫！
    </div>

    <!-- ====== delete-dialog ====== -->
    <check-dialog :openDialog="openCheckDialog">
      <template slot="content">
        <span style="text-align: center"
          >確定移除商品: {{ deleteTitle }}？</span
        >
      </template>
      <template slot="action">
        <v-btn
          depressed
          style="
            padding: 24px 20px 20px 20px;
            background-color: rgb(227, 230, 230);
          "
          @click="openCheckDialog = false"
        >
          取消
        </v-btn>
        <v-btn
          depressed
          style="
            padding: 24px 20px 20px 20px;
            background-color: rgb(227, 230, 230);
          "
          @click="deleteFromCart"
        >
          確定
        </v-btn>
      </template>
    </check-dialog>
    <!-- ====== end of delete-dialog ====== -->
  </div>
</template>

<script>
import CheckDialog from "../components/CheckDialog";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export default {
  data() {
    return {
      PayGateWay: {},
      trade: {},
      tradeWithPage: {},
      publicPath: process.env.BASE_URL,
      products: [],
      sumnumber: 0,
      username: "",
      useremail: "",
      timestamp: "",
      isDataLoaded: false,
      deleteId: null,
      deleteTitle: null,
      openCheckDialog: false,
      shoppingHeaders: [
        {
          text: "圖示",
          align: "center",
          sortable: false,
          value: "img",
        },
        {
          text: "商品名稱",
          align: "center",
          sortable: false,
          value: "title",
        },
        {
          text: "單價",
          align: "center",
          sortable: false,
          value: "price",
        },
        {
          text: "數量",
          align: "center",
          sortable: false,
          value: "count",
        },
        {
          text: "價格",
          align: "center",
          sortable: false,
          value: "eachsum",
        },
        {
          text: "刪除",
          align: "center",
          sortable: false,
          value: "delete",
        },
      ],
      windowWidth: window.innerWidth,
      toNextStep: true,
    };
  },
  components: {
    "check-dialog": CheckDialog,
  },
  mounted() {
    window.addEventListener("resize", () => {
      this.windowWidth = document.documentElement.clientWidth;
    });
  },
  computed: {
    isSmaller() {
      return this.windowWidth < 960;
    },
  },
  methods: {
    checkEmptyCart() {
      if (this.products.length == 0) {
        return true;
      } else {
        return false;
      }
    },
    checkBill() {
      if (this.sumnumber > 50000) {
        return true;
      } else {
        return false;
      }
    },
    checkToStep2() {
      if (this.products.length == 0 || this.sumnumber > 50000) {
        this.toNextStep = false;
        this.$emit("toStepTwo", false, this.sumnumber);
      } else {
        this.toNextStep = true;
        this.$emit(
          "toStepTwo",
          true,
          this.sumnumber,
          this.username,
          this.useremail
        );
        return false;
      }
    },
    async readData() {
      let user = firebase.auth().currentUser;
      this.username = user.displayName;
      this.useremail = user.email;
      const dbGetUser = firebase
        .firestore()
        .collection("userdata")
        .where("email", "==", this.useremail);
      await dbGetUser.get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          let num = doc.data().price.replace(/^.*?(\d+).*/, "$1");
          let eachsum = num * doc.data().count;
          this.sumnumber += parseInt(eachsum);
          const newData = { ...doc.data(), eachsum: "NT$ " + eachsum };
          this.products.push(newData);
        });
      });
      this.isDataLoaded = true;
      this.checkToStep2();
    },
    async deleteFromCart() {
      this.isDataLoaded = false;
      let user = firebase.auth().currentUser;
      let deleteId = this.deleteId;
      const dbGetUser = firebase
        .firestore()
        .collection("userdata")
        .where("email", "==", user.email)
        .where("img", "==", deleteId)
        .get();
      await dbGetUser.then((doc) => {
        doc.forEach((element) => {
          element.ref.delete();
        });
        return (this.isDataLoaded = true);
      });
      if (this.isDataLoaded) {
        this.reRender();
        this.openCheckDialog = false;
      }
      this.checkToStep2();
    },
    reRender() {
      setTimeout(() => {
        this.$router.go();
      }, 300);
    },
  },
  created() {
    this.readData();
    this.timestamp = Math.floor(Date.now() / 1000);
  },
};
</script>
