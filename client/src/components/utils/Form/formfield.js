import React, {Fragment} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function formfield({formdata, change, id}) {
  const showError = () => {
    let errorMessage = null;
    if(formdata.validation.required && !formdata.valid) {
      errorMessage = (
        <div className="mt-1 error_label text-center">
          {formdata.validationMessage}
        </div>
      )
    }

    return errorMessage;
  }

  const renderTemplate = () => {
    let formTemplate = null;
    switch(formdata.element) {
      case('input'):
        formTemplate = (
          <Fragment>
            <div className="input-group">
              { formdata.showlabel ? 
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <FontAwesomeIcon icon={formdata.config.label}></FontAwesomeIcon>
                </span>
              </div>
              :
              null}
              <input
                {...formdata.config}
                value={formdata.value}
                onBlur={(event) => change({event, id, blur:true})}
                onChange={(event) => change({event, id, changed:true})}
              ></input>
            </div>
            {showError()}
          </Fragment>
        )
      break;
      case('select'):
        formTemplate = (
          <Fragment>
            <div className="form-group">
              { formdata.showlabel ? 
              <label htmlFor={id}>{formdata.config.label}</label>
              : null }
              <select
                id = {id}
                className={formdata.config.className}
                value={formdata.value}
                onBlur={(event) => change({event, id, blur: true})}
                onChange={(event) => change({event, id, changed: true})}
              >
                <option value="">Select one</option>
                {
                  formdata.config.options.map(item=>(
                    <option key={item.key} value={item.key}>
                      {item.value}
                    </option>
                  ))
                }
              </select>
              {showError()}
            </div>
            
          </Fragment>
        )
        break;
      case('textarea'):
        formTemplate = (
          <div className="formBlock">
            { formdata.showlabel ? 
            <div className="label_inputs">{formdata.config.label}</div>
            :
            null }
            <textarea 
              {...formdata.config}
              value={formdata.value}
              onBlur={(event)=> change({event, id, blur:true})}
              onChange={(event)=> change({event, id, changed:true})}
            />
            {showError()}
          </div>
        )
      break;
      default:
        formTemplate = null;
    }
    return formTemplate
  }

  return(
    <Fragment>
      {renderTemplate()}
    </Fragment>
  )

}