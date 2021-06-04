// This is ver 2
<template>
  <div id="main">
     <div>
    <b-row style="background-color: rgba(28,154,213,255);">
      <img style="width: 100px;" src="../assets/1567680493-cmc-global.jpg">
    </b-row>
    <b-row class="title">
      <span class="text-title"> CURRICULUM VITAE </span>
    </b-row>
      <div class="mg">
        <!-- <b-col>
          <span>1111</span>
          <b-button @click="onClickadd()">Add</b-button>
        </b-col>
          <div class="mg-2" v-for="(item, index) in arrays" :key="index">
            <b-input class="h25"  v-model="item.value"> </b-input>
        </div> -->
          <b-col>
            <span class="text-color div-tittle" >PERSONAL DETAILS</span>
          </b-col>
          <b-col class="mg">
            <div style="width: 100px;  display: inline-grid;">Name</div>
            <b-input class="h25" style="margin-left: 50px" v-model="name"> </b-input>
          </b-col>
          <b-col class="mg">
            <span  style="width: 100px;  display: inline-grid;">Nationality</span>
            <b-input class="h25" style="margin-left: 50px" v-model="nationality"> </b-input>
          </b-col>
          <b-col class="mg">
            <span  style="width: 100px;  display: inline-grid;">Sex</span>
            <input style="margin-left: 50px" type="radio" id="one" value="1" v-model="sex">
            <label style="margin-left: 10px" for="one">Male</label>
            <input style="margin-left: 50px" type="radio" id="two" value="0" v-model="sex">
            <label style="margin-left: 10px" for="two">Female</label>
          </b-col>
          <b-col class="mg">
            <span  style="width: 100px;  display: inline-grid;">Marital status</span>
              <input style="margin-left: 50px" type="radio" id="one" value="1" v-model="status">
              <label style="margin-left: 10px" for="one">Married</label>
              <input style="margin-left: 30px" type="radio" id="two" value="0" v-model="status">
              <label style="margin-left: 10px" for="two">Not married</label>
          </b-col>

          <b-col class="mg25">
            <div class="text-color div-tittle" >OBJECTTIVE</div>
            <b-button style="margin-left: 150px" @click="onClickAddObject()">Add</b-button>
          </b-col>
          <div class="mg-2" v-for="(item, index) in lstObject" :key="index">
            <div class="div-remove">
              <b-input class="h25"   v-model="item.value"></b-input>
              <b-button style="margin-left: 80px; margin-top: 15px;" @click="onClickRemoveObject(index)">Remove</b-button>
            </div>
          </div>

          <b-col class="mg25">
            <div class="text-color div-tittle" >PROFESSIONAL SUMMARY</div>
            <b-button style="margin-left: 150px" @click="onClickAddProfession()">Add</b-button>
          </b-col>
          <div class="mg-2" v-for="(item, index) in lstProfession" :key="index">
             <div class="div-remove">
              <b-input class="h25"   v-model="item.value"></b-input>
              <b-button style="margin-left: 80px; margin-top: 15px;" @click="onClickRemoveProfession(index)">Remove</b-button>
            </div>
          </div>
          
      </div>
      <div>
        <b-button v-b-modal.modal-1>Launch demo modal</b-button>

        <b-modal id="modal-1" title="BootstrapVue">
          <p class="my-4">Hello from modal!</p>
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
import CustomTable2, {
} from "../components/CustomTable2/index.vue";


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
  public name = '';
  public nationality = '';
  public sex = '';
  public status = ''

  public lstObject: any[] = [{value:''}, {value:''}];
  public lstProfession: any[] = [{value:''}, {value:''}];
  
  public onClickAddObject() {
    /* eslint-disable no-alert, no-debugger */
    debugger;
    const item: any = {value:''};
    this.lstObject.push(item);
  }
  public onClickRemoveObject(index: number) {
    this.lstObject.splice(index, 1)
  }
      
  public onClickAddProfession() {
    this.$bvModal.show('modal-1')
    const item: any = {value:''};
    this.lstProfession.push(item);
  }

  public onClickRemoveProfession(index: number) {
    this.lstProfession.splice(index, 1)
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
  }
  .text-color {
    font-weight: bold;
    color: #09bced;
  
  }
  .div-tittle {
    display: inline-grid;
    width: 300px
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
