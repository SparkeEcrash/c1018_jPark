export const validate = (element, formdata = []) => {
  let error = [true, ''];
  if(element.validation.email) {
    const valid = /\S+@\S+\.\S+/.test(element.value)
    const message = `${!valid ? 'Must be a valid email' : ''}`;
    error = !valid ? [valid, message] : error;
  }

  if(element.validation.confirm) {
    const valid = element.value.trim() === formdata[element.validation.confirm].value;
    const message = `${!valid ? 'Passwords do not match' : ''}`;
    error = !valid ? [valid, message] : error;
  }

  if(element.validation.required) {
    const valid = element.value.trim() !== '';
    const message = `${!valid ? 'This field is required' : ''}`;
    error = !valid ? [valid, message] : error;
  }

  return error
}

export const update = (element, formdata, formName) => {
  const newFormdata = {
    ...formdata
  }

  const newElement = {
    ...newFormdata[element.id]
  }

  newElement.value = element.event.target.value; 

  if(element.blur || element.changed) {
    let validData = validate(newElement, formdata);

    newElement.valid = validData[0];
    newElement.validationMessage = validData[1];
  }

  newElement.touched = element.blur;

  newFormdata[element.id] = newElement;

  return newFormdata;

}

export const generateData = (formdata, formName) => {
  let dataToSubmit = {};
  for(let key in formdata) {
    if(key !== 'confirmPassword')
    {
      dataToSubmit[key] = formdata[key].value;
    }
    if(key === 'images')
    {
      dataToSubmit[key] = formdata[key].pictures;
    }
  }

  return dataToSubmit 
}

export const isFormValid = (formdata, formName) => {
  let formIsValid = true;
  for(let key in formdata) {
    if(formdata[key].valid === false) {
      formIsValid = false;
    }
    formIsValid = formdata[key].valid && formIsValid
  }
  return formIsValid;
}

export const populateOptionFields = (formdata, arrayData=[], field) => {
  const newArray = [];
  const newFormdata = {...formdata};

  arrayData.forEach(item=>{
    newArray.push({key:item._id, value:item.name})
  })

  newFormdata[field].config.options = newArray;
  return newFormdata;

}

export const resetFields = (formdata, formname) => {
  const newFormdata = {...formdata};
  for(let key in newFormdata){
    if(key === 'images'){
      newFormdata[key].pictures = [];
      newFormdata[key].valid = true;
    } else {
      newFormdata[key].value='';
      newFormdata[key].valid = false;
    } 
    newFormdata[key].touched = false;
    newFormdata[key].validationMessage = '';    
  }

  return newFormdata;
}

export const populateFields = (formData, fields) => {
  for(let key in formData){
    formData[key].value = fields[key];
    formData[key].valid = true;
    formData[key].touched = true;
    formData[key].validationMessage = '';
  }

  return formData;
}

export const validateFields = (formData) => {
  for (let key in formData) {
    formData[key].valid = true;
  }
}

export const isEmpty = value => {
  return (
    value === undefined ||
    value === null ||
    (typeof value === 'object' && Object.keys(value).length === 0) ||
    (typeof value === 'string' && value.trim().length === 0)
  );
}