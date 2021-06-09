import { Skill } from "@/models/skill";

export function validation(data?: Skill): any {
    /* eslint-disable no-alert, no-debugger */
      const result = {
        competencies: {
          rule:  !!data && data.competencies !== '' ? null : false,
          msg: () => {return result.competencies.rule === false ? 'Please fill in the information' : ''}
        },
        level: {
            rule:  !!data && 0 < parseInt(data.level) && parseInt(data.level) <=10 ? null : false,
            msg: () => {return result.level.rule === false ? 'Please fill in the information(1 -> 10)' : ''}
          },

        isValid: () => {
          return result.competencies.rule === null
            && result.level.rule  === null
        }
      }
    
      return result;
    }
    