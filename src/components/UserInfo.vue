<template>
  <div>
    <div v-if="isSmaller" class="page-title mt-0 mb-8">
      <h2>填寫資料</h2>
    </div>
    <div class="all-forms">
      <div>
        <div class="moneyTotal">結帳金額NT$ {{ sumnumber }}</div>
        <div class="order-info">
          <div class="order-title mb-1">
            <v-icon
              style="font-size: 22px; padding-bottom: 6px; color: #526161"
            >
              mdi-file</v-icon
            >
            訂購資料
          </div>
          <v-divider class="mb-4"></v-divider>
          <v-text-field
            type="text"
            disabled
            placeholder="訂購人名稱"
            label="*訂購人名稱"
            v-model="username"
          >
          </v-text-field>
          <v-text-field
            type="text"
            disabled
            placeholder="訂購人信箱"
            label="*訂購人信箱"
            v-model="useremail"
          >
          </v-text-field>
          <v-text-field
            type="number"
            required
            placeholder="訂購人手機號碼"
            label="*訂購人手機號碼"
            v-model="userNum"
            :error-messages="userNumErrors"
            @blur="$v.userNum.$touch()"
          ></v-text-field>
        </div>

        <div class="order-info">
          <div class="order-title mb-1">
            <v-icon
              style="font-size: 22px; padding-bottom: 4px; color: #526161"
            >
              mdi-truck</v-icon
            >
            送貨資料
          </div>
          <v-divider class="mb-4"></v-divider>
          <v-text-field
            type="text"
            required
            placeholder="收件人名稱"
            label="*收件人名稱"
            v-model="recipient"
            :error-messages="recipientErrors"
            @input="$v.recipient.$touch()"
            @blur="$v.recipient.$touch()"
          >
          </v-text-field>
          <v-text-field
            type="number"
            required
            placeholder="訂購人手機號碼"
            label="*訂購人手機號碼"
            v-model="recipientNum"
            :error-messages="recipientNumErrors"
            @blur="$v.recipientNum.$touch()"
          ></v-text-field>
          <v-text-field
            type="text"
            required
            placeholder="收件地址"
            label="*收件地址"
            v-model="shippingAddress"
            :error-messages="shippingAddressErrors"
            @input="$v.shippingAddress.$touch()"
            @blur="$v.shippingAddress.$touch()"
          ></v-text-field>
        </div>
        <div
          class="moneyTotal mb-8"
          style="
            text-decoration-line: none;
            background-color: #f5efe1;
            color: #915233;
          "
        >
          進到下一步前，請檢查上方表格資訊是否正確！
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";
import { helpers } from "vuelidate/lib/validators";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const alpha = helpers.regex("alpha", /^09[0-9]{8}$/);

export default {
  mixins: [validationMixin],
  data() {
    return {
      windowWidth: window.innerWidth,
      userName: "",
      userNum: "",
      recipient: "",
      recipientNum: "",
      shippingAddress: "",
      somethingError: true,
      isDataLoaded: false,
    };
  },
  props: ["sumnumber", "username", "useremail"],
  validations: {
    // userName: { required, },
    userNum: { alpha, required },
    recipient: { required },
    recipientNum: { alpha, required },
    shippingAddress: { required },
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
    userNumErrors() {
      const errors = [];
      if (!this.$v.userNum.$dirty) return errors;
      !this.$v.userNum.alpha && errors.push("格式不符(09開頭，共10個數字)!");
      !this.$v.userNum.required && errors.push("必填欄位!");
      return errors;
    },
    recipientErrors() {
      const errors = [];
      if (!this.$v.recipient.$dirty) return errors;
      !this.$v.recipient.required && errors.push("必填欄位!");
      return errors;
    },
    recipientNumErrors() {
      const errors = [];
      if (!this.$v.recipientNum.$dirty) return errors;
      !this.$v.recipientNum.alpha &&
        errors.push("格式不符(09開頭，共10個數字)!");
      !this.$v.recipientNum.required && errors.push("必填欄位!");
      return errors;
    },
    shippingAddressErrors() {
      const errors = [];
      if (!this.$v.shippingAddress.$dirty) return errors;
      !this.$v.shippingAddress.required && errors.push("必填欄位!");
      return errors;
    },
  },
  methods: {
    checkError() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        console.log("error");
      }
    },
    emitEvent() {
      this.$v.$touch();
      // 有錯誤所以不能結帳
      if (this.$v.$invalid) {
        this.somethingError = true;
        console.log("sth wrong");
      } else {
        // 沒錯誤 結帳時要把資料庫資料刪除 spinner設定在這邊
        this.$store.state.spinner.addSpinner = true;
        this.somethingError = false;
        this.deleteCertinCart();
      }
    },
    async deleteCertinCart() {
      this.isDataLoaded = false;
      let user = firebase.auth().currentUser;
      const dbGetUser = firebase
        .firestore()
        .collection("userdata")
        .where("email", "==", user.email)
        .get();
      await dbGetUser.then((doc) => {
        doc.forEach((element) => {
          element.ref.delete();
        });
        return (this.isDataLoaded = true);
      });
      if (this.isDataLoaded) {
        //spinner 取消
        setTimeout(() => {
          this.$store.state.spinner.addSpinner = false;
          this.$emit("readyToGo");
        }, 4000);
      }
    },
  },
  // inject: ["addSpinner"]
};
</script>

<style scoped>
.order-info {
  border: 1px solid gray;
  padding: 20px;
  margin: 20px 0;
}

.order-title {
  color: #526161;
  font-size: 22px;
}

.moneyTotal {
  background-color: #dce6e6;
  padding: 20px;
  text-decoration-line: underline;
  text-align: center;
  width: 420px;
}

.all-forms {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media only screen and (max-width: 600px) {
  .moneyTotal {
    width: 300px;
  }

  .order-info {
    border: 1px solid gray;
    padding: 5px;
    margin: 20px 0;
    width: 300px;
  }
}

@media only screen and (max-width: 420px) {
  .moneyTotal {
    width: 180px;
  }

  .order-info {
    border: 1px solid gray;
    padding: 5px;
    margin: 20px 0;
    width: 180px;
  }
}

@media only screen and (max-width: 330px) {
  .moneyTotal {
    width: 120px;
  }

  .order-info {
    border: 1px solid gray;
    padding: 5px;
    margin: 20px 0;
    width: 120px;
  }
}
</style>
