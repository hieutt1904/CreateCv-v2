import { Language } from "@/models/languages";

export function validation(data?: Language): any {
    /* eslint-disable no-alert, no-debugger */
      const result = {
        language: {
          rule:  !!data && data.language !== '' ? null : false,
          msg: () => {return result.language.rule === false ? 'Please fill in the information' : ''}
        },

        isValid: () => {
          return result.language.rule === null
        }
      }
    
      return result;
    }
    