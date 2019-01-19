import React, {Fragment} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function formfield({formdata, change, id}) {
  const showError = () => {
    let errorMessage = null;
    if(formdata.validation.required && !formdata.valid) {
      errorMessage = (
        <div className="mt-1 error_label">
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