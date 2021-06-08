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
          <label style="margin-left: 10px" for="two">Single</label>
        </b-col>

        <hr/>
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
              <b-input class="h25-v2" v-model="item.fromDate" disabled></b-input>
              <b-input class="h25-v2" v-model="item.toDate" disabled></b-input>
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

        <b-col class="mg25">
          <div class="text-color div-tittle">WORK EXPERIENCE</div>
          <b-button style="margin-left: 150px" @click="onClickOpenModalWork()"
            >Add</b-button>
        </b-col>
        <div class="mg-2" v-for="(item, index) in lstWork" :key="index">
          <div class="div-remove">
            <b-row>
              <b-input class="h25-v2" v-model="item.fromDate" disabled></b-input>
              <b-input class="h25-v2" v-model="item.toDate" disabled></b-input>
            </b-row>
            <b-row>
              <b-input class="h25-v3" v-model="item.company" disabled></b-input>
              <b-input class="h25-v3" v-model="item.jobTitle" disabled></b-input>
            </b-row>
            <b-button
              style="margin-left: 80px; margin-top: 10px; display: inline"
              @click="onClickRemoveWork(index)"
              >Remove</b-button
            >
          </div>
        </div>
        <hr/>
        <b-col class="mg25">
          <div class="text-color div-tittle" style="display: table-row !important">TECHNOLOGY AND SOFTWARE DEVELOPMENT SKILLS</div>
          <div>Level: 1-4 Aware (Basic, need to practice more); 5-7 Knowledgeable (Intermediate, can use it at work); 8-10 Proficient (Advanced, very good to use it at work)</div>
        </b-col>

        <b-col class="mg25" style="display: inline-flex;">
          <b-row style="margin-left: 200px; font-weight: bold;">Competencies</b-row>
          <b-row style="margin-left: 230px; font-weight: bold;">Level</b-row>
        </b-col>

        <b-col class="mg25">
          <div class="text-color div-tittle">Programing Language</div>
          <b-button style="margin-left: 110px" @click="onClickOpenModalSkill(1)"
            >Add</b-button>
        </b-col>
       <div class="mg-2" v-for="(item, index) in lstLang" :key="index">
          <div class="div-remove">
            <b-input class="h25" v-model="item.competencies" disabled></b-input>
            <b-input class="h25" style="width: 150px" v-model="item.level" disabled></b-input>
            <b-button
              style="margin-left: 80px; margin-top: 10px; display: inline"
              @click="onClickRemoveSkill(index, 1)"
              >Remove</b-button
            >
          </div>
        </div>

        <b-col class="mg25">
          <div class="text-color div-tittle">Technology & Framework</div>
          <b-button style="margin-left: 110px" @click="onClickOpenModalSkill(2)"
            >Add</b-button>
        </b-col>
       <div class="mg-2" v-for="(item, index) in lstTech" :key="index">
          <div class="div-remove">
            <b-input class="h25" v-model="item.competencies" disabled></b-input>
            <b-input class="h25" style="width: 150px" v-model="item.level" disabled></b-input>
            <b-button
              style="margin-left: 80px; margin-top: 10px; display: inline"
              @click="onClickRemoveSkill(index, 2)"
              >Remove</b-button
            >
          </div>
        </div>

        <b-col class="mg25">
          <div class="text-color div-tittle">Database System</div>
          <b-button style="margin-left: 110px" @click="onClickOpenModalSkill(3)"
            >Add</b-button>
        </b-col>
       <div class="mg-2" v-for="(item, index) in lstDatabase" :key="index">
          <div class="div-remove">
            <b-input class="h25" v-model="item.competencies" disabled></b-input>
            <b-input class="h25" style="width: 150px" v-model="item.level" disabled></b-input>
            <b-button
              style="margin-left: 80px; margin-top: 10px; display: inline"
              @click="onClickRemoveSkill(index, 3)"
              >Remove</b-button
            >
          </div>
        </div>

        <b-col class="mg25">
          <div class="text-color div-tittle">Development Tool</div>
          <b-button style="margin-left: 110px" @click="onClickOpenModalSkill(4)"
            >Add</b-button>
        </b-col>
       <div class="mg-2" v-for="(item, index) in lstTool" :key="index">
          <div class="div-remove">
            <b-input class="h25" v-model="item.competencies" disabled></b-input>
            <b-input class="h25" style="width: 150px" v-model="item.level" disabled></b-input>
            <b-button
              style="margin-left: 80px; margin-top: 10px; display: inline"
              @click="onClickRemoveSkill(index, 4)"
              >Remove</b-button
            >
          </div>
        </div>

        <b-col class="mg25">
          <div class="text-color div-tittle">Operating System</div>
          <b-button style="margin-left: 110px" @click="onClickOpenModalSkill(5)"
            >Add</b-button>
        </b-col>
       <div class="mg-2" v-for="(item, index) in lstSystem" :key="index">
          <div class="div-remove">
            <b-input class="h25" v-model="item.competencies" disabled></b-input>
            <b-input class="h25" style="width: 150px" v-model="item.level" disabled></b-input>
            <b-button
              style="margin-left: 80px; margin-top: 10px; display: inline"
              @click="onClickRemoveSkill(index, 5)"
              >Remove</b-button
            >
          </div>
        </div>
        <hr/>
        <b-col class="mg25">
          <div class="text-color div-tittle">LANGUAGES</div>
          <b-button style="margin-left: 150px" @click="onClickOpenModalLang"
            >Add</b-button
          >
        </b-col>
        <b-col class="mg25" style="display: inline-flex;">
          <b-row style="margin-left: 140px; font-weight: bold;">Language</b-row>
          <b-row style="margin-left: 150px; font-weight: bold;">Level</b-row>
          <b-row style="margin-left: 185px; font-weight: bold;">Note</b-row>
        </b-col>
        <div class="mg-2" v-for="(item, index) in lstLanguages" :key="index">
          <div class="div-remove">
            <b-input class="h25" v-model="item.language" disabled></b-input>
            <b-input class="h25" v-model="item.noteLevel" disabled></b-input>
            <b-input class="h25" v-model="item.note" disabled></b-input>
            <b-button
              style="margin-left: 80px; margin-top: 10px; display: inline"
              @click="onClickRemoveLang(index)"
              >Remove</b-button
            >
          </div>
        </div>
        <b-col class="mg25">
          <div class="text-color div-tittle">PROJECT LIST</div>
          <b-button style="margin-left: 150px" @click="onClickOpenModalProject"
            >Add</b-button
          >
        </b-col>
        <b-row>
          <b-col></b-col>
        </b-row>
        <div class="mg-2" v-for="(item, index) in lstProject" :key="index">
          <div style="display: block;
                      width: 700px;">
            <b-col>
              <b-row class="mg-b-15">
                <b-col>Project Name</b-col>
                <b-col><b-input class="h25-v4" v-model="item.projectName" disabled></b-input></b-col>
              </b-row>
              <b-row class="mg-b-15">
                <b-col>Execution Time</b-col>
                <b-col><b-input class="h25-v4" v-model="item.executionTime" disabled></b-input></b-col>
              </b-row>
              <b-row class="mg-b-15">
                <b-col>Project Description</b-col>
                <b-col><b-input class="h25-v4" v-model="item.projectDesc" disabled></b-input></b-col>
              </b-row>
              <b-row class="mg-b-15">
                <b-col>Team size</b-col>
                <b-col><b-input class="h25-v4" v-model="item.teamSize" disabled></b-input></b-col>
              </b-row>
              <b-row class="mg-b-15">
                <b-col>Role</b-col>
                <b-col><b-input class="h25-v4" v-model="item.role" disabled></b-input></b-col>
              </b-row>
              <b-row class="mg-b-15">
                <b-col>Responsibilities</b-col>
                <b-col><b-textarea class="h25-v4" v-model="item.responsibilities"  rows="3" disabled></b-textarea></b-col>
              </b-row>
              <b-row class="mg-b-15">
                <b-col>Programming Languages</b-col>
                <b-col><b-input class="h25-v4" v-model="item.programmingLanguage" disabled></b-input></b-col>
              </b-row>
              <b-row class="mg-b-15">
                <b-col>Database</b-col>
                <b-col><b-input class="h25-v4" v-model="item.database" disabled></b-input></b-col>
              </b-row>
              <b-row class="mg-b-15">
                <b-col>Tools</b-col>
                <b-col><b-input class="h25-v4" v-model="item.tools" disabled></b-input></b-col>
              </b-row>
              <b-row class="mg-b-15">
                <b-col>Used technologies:</b-col>
                <b-col><b-input class="h25-v4" v-model="item.technologies" disabled></b-input></b-col>
              </b-row>  
            </b-col>         
            
            <b-col>
                <b-button
                style="margin-left: 80px; margin-top: 10px; display: inline"
                @click="onClickRemoveProject(index)"
                >Remove</b-button>
            </b-col>
            
          </div>
        </div>
        <hr/>
        <b-col>
                <b-button
                style="margin-left: 40%; margin-top: 10px; display: inline"
                @click="onClickPrint"
                >Print</b-button>
            </b-col>
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
          title="Submit Your Education & Certifications"
          @ok="handleOkEdu"
        >
          <form ref="form" @submit.stop.prevent="onClickAddEdu">
            <b-form-group>
              <label for="from"> From</label>
              <b-form-datepicker
                id="from"
                v-model="newDataEdu.fromDate"
                :state="validationEdu.from.rule"
                v-b-tooltip.hover.right.v-danger
                :title="$t(validationEdu.from.msg())"
              ></b-form-datepicker>
              <label for="to"> To</label>
              <b-form-datepicker
                id="to"
                v-model="newDataEdu.toDate"
                :state="validationEdu.to.rule"
                v-b-tooltip.hover.right.v-danger
                :title="$t(validationEdu.to.msg())"
              ></b-form-datepicker>
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
      <div>
        <b-modal
          id="modal-work"
          ref="modal"
          title="Submit Your Work Experience"
          @ok="handleOkWork"
        >
          <form ref="form" @submit.stop.prevent="onClickAddWork">
            <b-form-group>
              <b-form-datepicker
                id="from"
                v-model="newDataWork.fromDate"
                :state="validationWork.from.rule"
                v-b-tooltip.hover.right.v-danger
                :title="$t(validationWork.from.msg())"
              ></b-form-datepicker>
              <label for="to"> To</label>
              <b-form-datepicker
                id="to"
                v-model="newDataWork.toDate"
                :state="validationWork.to.rule"
                v-b-tooltip.hover.right.v-danger
                :title="$t(validationWork.to.msg())"
              ></b-form-datepicker>
              <label for="company"> Company</label>
              <b-form-input
                id="company"
                v-model="newDataWork.company"
                :state="validationWork.company.rule"
                v-b-tooltip.hover.right.v-danger
                :title="$t(validationWork.company.msg())"
              ></b-form-input>
              <label for="jobtitle">JobTitle</label>
              <b-form-input
                id="jobtitle"
                v-model="newDataWork.jobTitle"
                :state="validationWork.jobTitle.rule"
                v-b-tooltip.hover.right.v-danger
                :title="$t(validationWork.jobTitle.msg())"
              ></b-form-input>
            </b-form-group>
          </form>
        </b-modal>
      </div>
      <div>
        <b-modal
          id="modal-skill"
          ref="modal"
          title="Submit Your Infor"
          @ok="handleSkillOk"
        >
          <form ref="form" @submit.stop.prevent="onClickAddSkill">
            <b-form-group>
              <label>Competencies</label>
              <b-form-input
                v-model="newSkill.competencies"
                :state="validationSkill.competencies.rule"
                v-b-tooltip.hover.right.v-danger
                :title="$t(validationSkill.competencies.msg())"
              ></b-form-input>
              <label>Level</label>
              <b-form-input
                v-model="newSkill.level"
                :state="validationSkill.level.rule"
                v-b-tooltip.hover.right.v-danger
                :title="$t(validationSkill.level.msg())"
              ></b-form-input>
            </b-form-group>
          </form>
        </b-modal>
      </div>

      <div>
        <b-modal
          id="modal-language"
          ref="modal"
          title="Submit Your Infor"
          @ok="handleLangOk"
        >
          <form ref="form" @submit.stop.prevent="onClickAddLang">
            <b-form-group>
              <label>Language</label>
              <b-form-input
                v-model="newLanguage.language"
                :state="validationLang.language.rule"
                v-b-tooltip.hover.right.v-danger
                :title="$t(validationLang.language.msg())"
              ></b-form-input>
              <label>Level</label>
              <b-form-select style="width: 100%;height: 35px" v-model="newLanguage.level" :options="optionLang" ></b-form-select>
              <label>Note</label>
              <b-form-input
                v-model="newLanguage.note"
              ></b-form-input>
            </b-form-group>
          </form>
        </b-modal>
      </div>

      <div>
        <b-modal
          id="modal-project"
          ref="modal"
          title="Submit Your Infor"
          @ok="handleProjectOk"
        >
          <form ref="form" @submit.stop.prevent="onClickAddProject">
            <b-form-group>
              <label>Project Name</label>
              <b-form-input
                v-model="newProject.projectName"
                :state="validationProject.projectName.rule"
                v-b-tooltip.hover.right.v-danger
                :title="$t(validationProject.projectName.msg())"
              ></b-form-input>
              <label>Start</label>
              <b-form-datepicker
                v-model="newProject.start"
                :state="validationProject.start.rule"
                v-b-tooltip.hover.right.v-danger
                :title="$t(validationProject.start.msg())"
              ></b-form-datepicker>
              <label>End</label>
              <b-form-datepicker
                v-model="newProject.end"
                :state="validationProject.end.rule"
                v-b-tooltip.hover.right.v-danger
                :title="$t(validationProject.end.msg())"
              ></b-form-datepicker>
              <label>Project Description</label>
              <b-form-input
                v-model="newProject.projectDesc"
                :state="validationProject.projectDesc.rule"
                v-b-tooltip.hover.right.v-danger
                :title="$t(validationProject.projectDesc.msg())"
              ></b-form-input>
              <label>Team size</label>
              <b-form-input
                v-model="newProject.teamSize"
                :state="validationProject.teamSize.rule"
                v-b-tooltip.hover.right.v-danger
                :title="$t(validationProject.teamSize.msg())"
                type="number"
              ></b-form-input>
              <label>Role</label>
              <b-form-input
                v-model="newProject.role"
                :state="validationProject.role.rule"
                v-b-tooltip.hover.right.v-danger
                :title="$t(validationProject.role.msg())"
              ></b-form-input>
              <label>Responsibilities</label>
              <b-form-textarea
                v-model="newProject.responsibilities"
                rows="3"
                :state="validationProject.responsibilities.rule"
                v-b-tooltip.hover.right.v-danger
                :title="$t(validationProject.responsibilities.msg())"
              ></b-form-textarea>
              <label>Programming Languages</label>
              <b-form-input
                v-model="newProject.programmingLanguage"
                :state="validationProject.programmingLanguage.rule"
                v-b-tooltip.hover.right.v-danger
                :title="$t(validationProject.programmingLanguage.msg())"
              ></b-form-input>
              <label>Database</label>
              <b-form-input
                v-model="newProject.database"
                :state="validationProject.database.rule"
                v-b-tooltip.hover.right.v-danger
                :title="$t(validationProject.database.msg())"
              ></b-form-input>
              <label>Tools</label>
              <b-form-input
                v-model="newProject.tools"
                :state="validationProject.tools.rule"
                v-b-tooltip.hover.right.v-danger
                :title="$t(validationProject.tools.msg())"
              ></b-form-input>
              <label>Used technologies</label>
              <b-form-input
                v-model="newProject.technologies"
                :state="validationProject.technologies.rule"
                v-b-tooltip.hover.right.v-danger
                :title="$t(validationProject.technologies.msg())"
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
import * as validateWork from "./workRule";
import * as validateSkill from "./skillRule";
import * as validateLang from "./langRule";
import * as validateProject from "./projectRule";
import { Education } from "@/models/education";
import { Work } from "@/models/work";
import { Skill } from "@/models/skill";
import { Language } from "@/models/languages";
import { Project } from "@/models/project";
import { axiosCreator } from "@/base/customAxios";

@Component({
  components: {
    AdminLayout,
    CustomTable2,
  },
})
/* eslint-disable */ 
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
  public lstLang: Skill[] = [];
  public lstTech: Skill[] = [];
  public lstDatabase: Skill[] = [];
  public lstTool: Skill[] = [];
  public lstSystem: Skill[] = [];
  public lstLanguages: Language[] = [new Language()];
  public lstProject: Project[] = [new Project()]
  public optionLang = [{value: 1, text: 'Beginner'},
                      {value: 2, text: 'Intermediate'},
                      {value: 3, text: 'Advanced'},
                      {value: 4, text: 'Native'}]

  public isValidate = false;
  public isValidateEdu = false;
  public isValidateWork = false;
  public isValidateSkill = false;
  public isValidateLang = false;
  public isValidateProject = false;

  public data = "";
  public modal = 0;
  public typeSkill  = 0;

  public newDataEdu = new Education();
  public newDataWork =  new Work();
  public newSkill = new Skill();
  public newLanguage = new Language();
  public newProject = new Project();
  
  axios = axiosCreator();
  API = {
    print: "/cv-creator/demo-cv"
  };

  get validation(): any {
    return !this.isValidate
      ? validate.validation()
      : validate.validation(this.data);
  }
  get validationEdu(): any {
    return !this.isValidateEdu
      ? validateEdu.validation()
      : validateEdu.validation(this.newDataEdu);
  }

  get validationSkill(): any {
    return !this.isValidateSkill
      ? validateSkill.validation()
      : validateSkill.validation(this.newSkill);
  }

  get validationWork(): any {
    return !this.isValidateWork
      ? validateWork.validation()
      : validateWork.validation(this.newDataWork);
  }

  get validationLang(): any {
    return !this.isValidateLang
      ? validateLang.validation()
      : validateLang.validation(this.newLanguage);
  }

   get validationProject(): any {
    return !this.isValidateProject
      ? validateProject.validation()
      : validateProject.validation(this.newProject);
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

  public onClickOpenModalWork() {
    this.newDataWork = new Work();
    this.$bvModal.show("modal-work");
  }

  public onClickOpenModalSkill(type: any) {
    this.typeSkill = type;
    this.newSkill = new Skill();
    this.$bvModal.show("modal-skill");
  }

  public onClickOpenModalLang() {
    this.newLanguage = new Language();
    this.$bvModal.show("modal-language");
  }

  public onClickOpenModalProject() {
    this.newProject = new Project();
    this.$bvModal.show("modal-project");
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
  
  public handleSkillOk(bvModalEvt: any) {
    // Prevent modal from closing
    bvModalEvt.preventDefault();
    // Trigger submit handler
    this.onClickAddSkill();
  }

  public handleLangOk(bvModalEvt: any) {
    // Prevent modal from closing
    bvModalEvt.preventDefault();
    // Trigger submit handler
    this.onClickAddLang();
  }

  public handleProjectOk(bvModalEvt: any) {
    // Prevent modal from closing
    bvModalEvt.preventDefault();
    // Trigger submit handler
    this.onClickAddProject();
  }

  public onClickAddProject() {
    this.isValidateProject = true;
    if(!this.validationProject.isValid()) {
      return;
    }
    this.lstProject.push(this.newProject);
    this.$nextTick(() => {
      this.$bvModal.hide("modal-project");
    });
  }
  public onClickAddLang() {
    this.isValidateLang = true;
    if(!this.validationLang.isValid()) {
      return;
    }
    this.lstLanguages.push(this.newLanguage);
    this.$nextTick(() => {
      this.$bvModal.hide("modal-language");
    });
  }

  public onClickAddSkill() {
    this.isValidateSkill = true;
    if (!this.validationSkill.isValid()) {
      return;
    }

    if(this.typeSkill === 1) {
      this.lstLang.push(this.newSkill);
    } else if (this.typeSkill === 2) {
      this.lstTech.push(this.newSkill);
    } else if (this.typeSkill === 3) {
      this.lstDatabase.push(this.newSkill);
    } else if (this.typeSkill === 4) {
      this.lstTool.push(this.newSkill);
    } else {
      this.lstSystem.push(this.newSkill);
    }

    this.$nextTick(() => {
      this.$bvModal.hide("modal-skill");
    });
  }
  public handleOkWork(bvModalEvt: any) {
    // Prevent modal from closing
    bvModalEvt.preventDefault();
    // Trigger submit handler
    this.onClickAddWork();
  }

  public onClickAddEdu() {
    this.isValidateEdu = true;
    if (!this.validationEdu.isValid()) {
      return;
    }
    this.lstEdu.push(this.newDataEdu);
    this.$nextTick(() => {
      this.$bvModal.hide("modal-edu");
    });
  }

  public onClickAddWork() {
    this.isValidateWork = true;
    if (!this.validationWork.isValid()) {
      return;
    }
    this.lstWork.push(this.newDataWork);
    this.$nextTick(() => {
      this.$bvModal.hide("modal-work");
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

  public onClickRemoveWork(index: number) {
    this.lstWork.splice(index, 1);
  }

  public onClickRemoveSkill(index: number, type: number) {
    if(type === 1) {
      this.lstLang.splice(index, 1);
    } else if (type === 2) {
      this.lstTech.splice(index, 1);
    } else if (type === 3) {
      this.lstDatabase.splice(index, 1);
    } else if (type === 4) {
      this.lstTool.splice(index, 1);
    } else {
      this.lstSystem.splice(index, 1);
    }
  }

  public onClickRemoveLang(index: number) {
      this.lstLanguages.splice(index, 1);
    }

  public onClickRemoveProject(index: number) {
    this.lstProject.splice(index, 1);
  }

  public onClickPrint() {

    const lstSkilParams = [{skillTitle: "Programing Language", lstSkillDetail: this.lstLang},
    {skillTitle: "Technology & Framework", lstSkillDetail: this.lstTech},
    {skillTitle: "Database System", lstSkillDetail: this.lstDatabase},
    {skillTitle: "Development Tool", lstSkillDetail: this.lstTool},
    {skillTitle: "Operating System", lstSkillDetail: this.lstSystem}]
    const lstObjectParam = this.lstObject.map((data: any) => data.value);
    const lstlstProfessionParam = this.lstProfession.map((data: any) => data.value);
    const params = {
      name: this.name,
      national: this.nationality,
      sex: this.sex,
      marriedStatus: this.status,
      lstObjective: lstObjectParam,
      lstProfessionalSummary: lstlstProfessionParam,
      lstEducationAndCertifications: this.lstEdu,
      lstWorkExperience: this.lstWork,
      lstSkill: lstSkilParams,
      lstLanguage: this.lstLanguages,
      lstProject: this.lstProject

    }
    this.axios.post(this.API.print, params).then((res: any) => {
      const fileURL = window.URL.createObjectURL(new Blob([res.data]));
      const fileLink = document.createElement('a');

     fileLink.href = fileURL;
     fileLink.setAttribute('download', 'file.pdf');
     document.body.appendChild(fileLink);

     fileLink.click();
    })
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
.h25-v4 {
  height: 25px;
  width: 500px;
}
.mg-b-15 {
  margin-bottom: 15px;
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
