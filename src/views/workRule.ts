import { Work } from "@/models/work"

export function validation(data?: Work): any {
    /* eslint-disable no-alert, no-debugger */
      const result = {
        from: {
          rule:  data?.from !== 0 ? null : false,
          msg: () => {return result.from.rule === false ? 'Please fill start time' : ''}
        },
        to: {
          rule:  data?.to !== 0 && !!data?.to && data.to > data.from ? null : false,
          msg: () => {return result.to.rule === false ? 'Please fill end time' : ''}
        },
        company: {
            rule:  data?.company !== ''  ? null : false,
            msg: () => {return result.company.rule === false ? 'Please fill company' : ''}
          },
        jobTitle: {
            rule:  data?.jobTitle !== ''  ? null : false,
            msg: () => {return result.jobTitle.rule === false ? 'Please fill job title' : ''}
        },
        isValid: () => {
          return result.from.rule === null
            && result.to.rule  === null
            && result.company.rule === null
            && result.jobTitle.rule === null
        }
      }
    
      return result;
    }
    