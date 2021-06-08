import { Education } from "@/models/education";
import moment from "moment";

export function validation(data?: Education): any {
    /* eslint-disable no-alert, no-debugger */
      const result = {
        from: {
          rule:  data?.fromDate !== '' ? null : false,
          msg: () => {return result.from.rule === false ? 'Please fill start time' : ''}
        },
        to: {
          rule:  data?.toDate !== '' && !!data?.toDate && moment(data.toDate).isAfter(data.fromDate) ? null : false,
          msg: () => {return result.to.rule === false ? 'Please fill end time(After start time)' : ''}
        },
        school: {
            rule:  data?.school !== ''  ? null : false,
            msg: () => {return result.school.rule === false ? 'Please fill school' : ''}
          },
        major: {
            rule:  data?.major !== ''  ? null : false,
            msg: () => {return result.major.rule === false ? 'Please fill major' : ''}
        },
        isValid: () => {
          return result.from.rule === null
            && result.to.rule  === null
            && result.school.rule === null
            && result.major.rule === null
        }
      }
    
      return result;
    }
    