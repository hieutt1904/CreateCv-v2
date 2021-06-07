export function validation(data?: any): any {
  /* eslint-disable no-alert, no-debugger */
    const result = {
      value: {
        rule:  data !== '' ? null : false,
        msg: () => {return result.value.rule === false ? 'Please fill in the information' : ''}
      },
  
      isValid: () => {
        return result.value.rule === null
          && result.value.rule  === null
      }
    }
  
    return result;
  }
  