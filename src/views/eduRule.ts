import { Education } from "@/models/education";

export function validation(data?: Education): any {
    /* eslint-disable no-alert, no-debugger */
      const result = {
        from: {
          rule:  data?.from !== 0 ? null : false,
          msg: () => {return result.from.rule === false ? 'Please fill start time' : ''}
        },
        to: {
          rule:  data?.to !== 0 && !!data?.to && data.to > data.from ? null : false,
          msg: () => {return result.from.rule === false ? 'Please fill end time' : ''}
        },
        school: {
            rule:  data?.school !== ''  ? null : false,
            msg: () => {return result.from.rule === false ? 'Please fill school' : ''}
          },
        major: {
            rule:  data?.major !== ''  ? null : false,
            msg: () => {return result.from.rule === false ? 'Please fill major' : ''}
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
    