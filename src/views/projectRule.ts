import { Project } from "@/models/project";
import moment from "moment";

export function validation(data?: Project): any {
    /* eslint-disable no-alert, no-debugger */
      const result = {
        start: {
          rule:  data?.start !== '' ? null : false,
          msg: () => {return result.start.rule === false ? 'Please fill start time' : ''}
        },
        end: {
          rule:  data?.end !== '' && !!data?.end && moment(data.end).isAfter(data.start) ? null : false,
          msg: () => {return result.end.rule === false ? 'Please fill end time(After start time)' : ''}
        },
        projectName: {
            rule:  data?.projectName !== ''  ? null : false,
            msg: () => {return result.projectName.rule === false ? 'Please fill name' : ''}
        },
        projectDesc: {
            rule:  data?.projectDesc !== ''  ? null : false,
            msg: () => {return result.projectDesc.rule === false ? 'Please fill Project Description' : ''}
        },
        teamSize: {
            rule:  data?.teamSize !== 0  ? null : false,
            msg: () => {return result.teamSize.rule === false ? 'Please fill team size' : ''}
        },
        role: {
            rule:  data?.role !== ''  ? null : false,
            msg: () => {return result.role.rule === false ? 'Please fill role' : ''}
        },
        responsibilities: {
            rule:  data?.responsibilities !== ''  ? null : false,
            msg: () => {return result.responsibilities.rule === false ? 'Please fill responsibilities' : ''}
        },
        programmingLanguage: {
            rule:  data?.programmingLanguage !== ''  ? null : false,
            msg: () => {return result.programmingLanguage.rule === false ? 'Please fill programming language' : ''}
        },
        database: {
            rule:  data?.database !== ''  ? null : false,
            msg: () => {return result.database.rule === false ? 'Please fill database' : ''}
        },
        tools: {
            rule:  data?.database !== ''  ? null : false,
            msg: () => {return result.database.rule === false ? 'Please fill tools' : ''}
        },
        technologies: {
            rule:  data?.database !== ''  ? null : false,
            msg: () => {return result.database.rule === false ? 'Please fill technologies' : ''}
        },
        isValid: () => {
          return result.projectName.rule === null
            && result.start.rule  === null
            && result.end.rule === null
            && result.teamSize.rule === null
            && result.role.rule === null
            && result.responsibilities.rule === null
            && result.programmingLanguage.rule === null
            && result.database.rule === null
            && result.tools.rule === null
            && result.technologies.rule === null
        }
      }
    
      return result;
    }