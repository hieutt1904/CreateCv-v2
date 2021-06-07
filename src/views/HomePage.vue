// This is ver 2
<template>
  <div id="main">
    <div>
      <b-row style="background-color: rgba(28, 154, 213, 255)">
        <img style="width: 100px" src="../assets/1567680493-cmc-global.jpg" />
      </b-row>
      <b-row class="title">
        <span class="text-title"> CURRICULUM VITAE </span>
      </b-row>
      <div class="mg">
        <b-col>
          <span class="text-color div-tittle">PERSONAL DETAILS</span>
        </b-col>
        <b-col class="mg">
          <div style="width: 100px; display: inline-grid">Name</div>
          <b-input class="h25" style="margin-left: 50px" v-model="name">
          </b-input>
        </b-col>
        <b-col class="mg">
          <span style="width: 100px; display: inline-grid">Nationality</span>
          <b-input class="h25" style="margin-left: 50px" v-model="nationality">
          </b-input>
        </b-col>
        <b-col class="mg">
          <span style="width: 100px; display: inline-grid">Sex</span>
          <input
            style="margin-left: 50px"
            type="radio"
            id="one"
            value="1"
            v-model="sex"
          />
          <label style="margin-left: 10px" for="one">Male</label>
          <input
            style="margin-left: 50px"
            type="radio"
            id="two"
            value="0"
            v-model="sex"
          />
          <label style="margin-left: 10px" for="two">Female</label>
        </b-col>
        <b-col class="mg">
          <span style="width: 100px; display: inline-grid">Marital status</span>
          <input
            style="margin-left: 50px"
            type="radio"
            id="one"
            value="1"
            v-model="status"
          />
          <label style="margin-left: 10px" for="one">Married</label>
          <input
            style="margin-left: 30px"
            type="radio"
            id="two"
            value="0"
            v-model="status"
          />
          <label style="margin-left: 10px" for="two">Not married</label>
        </b-col>

        <b-col class="mg25">
          <div class="text-color div-tittle">OBJECTTIVE</div>
          <b-button style="margin-left: 150px" @click="onClickOpenModal(1)"
            >Add</b-button
          >
        </b-col>
        <div class="mg-2" v-for="(item, index) in lstObject" :key="index">
          <div class="div-remove">
            <b-input class="h25" v-model="item.value" disabled></b-input>
            <b-button
              style="margin-left: 80px; margin-top: 10px; display: inline"
              @click="onClickRemoveObject(index)"
              >Remove</b-button
            >
          </div>
        </div>

        <b-col class="mg25">
          <div class="text-color div-tittle">PROFESSIONAL SUMMARY</div>
          <b-button style="margin-left: 150px" @click="onClickOpenModal(2)"
            >Add</b-button
          >
        </b-col>
        <div class="mg-2" v-for="(item, index) in lstProfession" :key="index">
          <div class="div-remove">
            <b-input class="h25" v-model="item.value" disabled></b-input>
            <b-button
              style="margin-left: 80px; margin-top: 10px; display: inline"
              @click="onClickRemoveProfession(index)"
              >Remove</b-button
            >
          </div>
        </div>
        <b-col class="mg25">
          <div class="text-color div-tittle">EDUCATION & CERTIFICATIONS</div>
          <b-button style="margin-left: 150px" @click="onClickOpenModalEdu()"
            >Add</b-button
          >
        </b-col>
        <div class="mg-2" v-for="(item, index) in lstEdu" :key="index">
          <div class="div-remove">
            <b-row>
              <b-input class="h25-v2" v-model="item.from" disabled></b-input>
              <b-input class="h25-v2" v-model="item.to" disabled></b-input>
            </b-row>
            <b-row>
              <b-input class="h25-v3" v-model="item.school" disabled></b-input>
              <b-input class="h25-v3" v-model="item.major" disabled></b-input>
            </b-row>
            <b-button
              style="margin-left: 80px; margin-top: 10px; display: inline"
              @click="onClickRemoveEdu(index)"
              >Remove</b-button
            >
          </div>
        </div>
      </div>
      <div>
        <b-modal
          id="modal-profession"
          ref="modal"
          title="Submit Your Infor"
          @ok="handleOk"
        >
          <form ref="form" @submit.stop.prevent="onClickAddProfession">
            <b-form-group>
              <b-form-input
                v-model="data"
                :state="validation.value.rule"
                v-b-tooltip.hover.right.v-danger
                :title="$t(validation.value.msg())"
              ></b-form-input>
            </b-form-group>
          </form>
        </b-modal>
      </div>
      <div>
        <b-modal
          id="modal-edu"
          ref="modal"
          title="Submit Your Infor"
          @ok="handleOkEdu"
        >
          <form ref="form" @submit.stop.prevent="onClickAddProfession">
            <b-form-group>
              <label for="from"> From</label>
              <b-form-input
                id="from"
                v-model="newDataEdu.from"
                type="number"
                :state="validationEdu.from.rule"
                v-b-tooltip.hover.right.v-danger
                :title="$t(validationEdu.from.msg())"
              ></b-form-input>
              <label for="to"> To</label>
              <b-form-input
                id="to"
                type="number"
                v-model="newDataEdu.to"
                :state="validationEdu.to.rule"
                v-b-tooltip.hover.right.v-danger
                :title="$t(validationEdu.to.msg())"
              ></b-form-input>
              <label for="school"> School</label>
              <b-form-input
                id="school"
                v-model="newDataEdu.school"
                :state="validationEdu.school.rule"
                v-b-tooltip.hover.right.v-danger
                :title="$t(validationEdu.school.msg())"
              ></b-form-input>
              <label for="major"> Major</label>
              <b-form-input
                id="major"
                v-model="newDataEdu.major"
                :state="validationEdu.major.rule"
                v-b-tooltip.hover.right.v-danger
                :title="$t(validationEdu.major.msg())"
              ></b-form-input>
            </b-form-group>
          </form>
        </b-modal>
      </div>
    </div>
  </div>
</template>

<style scoped>
.intro-custom {
  width: calc(100% - 20px);
  border: none !important;
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AdminLayout from "../layouts/AdminLayout.vue";
import CustomTable2 from "../components/CustomTable2/index.vue";
import * as validate from "./rule";
import * as validateEdu from "./eduRule";
import { Education } from "@/models/education";
import { Work } from "@/models/work";

@Component({
  components: {
    AdminLayout,
    CustomTable2,
  },
})
export default class HomePage extends Vue {
  $router: any;
  $store: any;
  $t: any;
  public name = "";
  public nationality = "";
  public sex = "";
  public status = "";

  public lstObject: any[] = [];
  public lstProfession: any[] = [];
  public lstEdu: Education[] = [];
  public lstWork: Work[] = [];
  public isValidate = false;
  public data = "";
  public modal = 0;
  public newDataEdu = new Education();

  get validation(): any {
    return !this.isValidate
      ? validate.validation()
      : validate.validation(this.data);
  }
  get validationEdu(): any {
    return !this.isValidate
      ? validateEdu.validation()
      : validateEdu.validation(this.newDataEdu);
  }
  public onClickRemoveObject(index: number) {
    this.lstObject.splice(index, 1);
  }

  public onClickOpenModal(modal: number) {
    this.data = "";
    this.modal = modal;
    this.$bvModal.show("modal-profession");
  }
  public onClickOpenModalEdu() {
    this.newDataEdu = new Education();
    this.$bvModal.show("modal-edu");
  }

  public handleOk(bvModalEvt: any) {
    // Prevent modal from closing
    bvModalEvt.preventDefault();
    // Trigger submit handler
    this.onClickAddProfessionAndObject();
  }
  public handleOkEdu(bvModalEvt: any) {
    // Prevent modal from closing
    bvModalEvt.preventDefault();
    // Trigger submit handler
    this.onClickAddEdu();
  }

  public onClickAddEdu() {
    this.isValidate = true;
    if (!this.validationEdu.isValid()) {
      return;
    }
    this.lstEdu.push(this.newDataEdu);
    this.$nextTick(() => {
      this.$bvModal.hide("modal-edu");
    });
  }

  public onClickAddProfessionAndObject() {
    this.isValidate = true;
    if (!this.validation.isValid()) {
      return;
    }

    if (this.modal === 1) {
      const item: any = { value: this.data };
      this.lstObject.push(item);
    }

    if (this.modal === 2) {
      const item: any = { value: this.data };
      this.lstProfession.push(item);
    }
    this.$nextTick(() => {
      this.$bvModal.hide("modal-profession");
    });
  }

  public onClickRemoveProfession(index: number) {
    this.lstProfession.splice(index, 1);
  }

  public onClickRemoveEdu(index: number) {
    this.lstEdu.splice(index, 1);
  }
}
</script>

<style scoped>
.title {
  height: 25px;
  text-align: center;
  margin-top: 20px;
  background-color: #09bced;
  padding-top: 5px;
}
.text-title {
  font-weight: bold;
  color: #fff;
}
.content {
  width: 80%;
  height: auto;
  padding: 2% 5% 0 5%;
}
.mg {
  margin-top: 25px;
  margin-left: 5%;
  text-align: left;
}
.mg-2 {
  margin-top: 15px;
  margin-left: 5%;
  text-align: left;
  width: 200px;
}

.h25 {
  height: 25px;
  width: 500px;
  margin-top: 15px;
  display: inline;
}
.h25-v2 {
  height: 25px;
  width: 150px;
  margin-top: 15px;
  display: inline;
}

.h25-v3 {
  height: 25px;
  width: 400px;
  margin-top: 15px;
  display: inline;
}

.text-color {
  font-weight: bold;
  color: #09bced;
}
.div-tittle {
  display: inline-grid;
  width: 300px;
}
.div-remove {
  display: inline-flex;
  width: 700px;
}
.mg25 {
  margin-top: 25px;
}

#main >>> .modal-delete {
  font-family: "Montserrat", "Helvetica Neue", Arial, sans-serif;
}
#main >>> .modal-delete .btn {
  color: #fff !important;
  padding: 15px 15px;
  font-size: 13px;
}
#main >>> .modal-delete .btn-secondary {
  background: #6c757d;
}
#main >>> .modal-delete .btn-secondary:hover {
  background: #919aa0;
}
#main >>> .modal-delete .btn-primary {
  background: #007bff;
}
#main >>> .modal-delete .btn-primary:hover {
  background: #005ab9;
}
</style>
