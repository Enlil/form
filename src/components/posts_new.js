import React, {Component,PropTypes} from 'react';
import { reduxForm } from 'redux-form';
import {Link} from 'react-router';

class PostsNew extends Component {
  static contextTypes = {
    router : PropTypes.object
  };
  onSubmit(props) {
    // this.props.createPost(props)
    // .then( ()=> {
    //   this.context.router.push('/');
    // });
  }

  //const handleSubmit= this.props.handleSubmit;
  render() {
  
    const { fields:{ contactname,businessname,contactphone,contactemail,streetaddress,city,province,postalcode,comments },handleSubmit }=this.props;
    //const contactname= this.props.fields.contactname;
    return (
      <div className="col-xs-10">
        <form onSubmit ={handleSubmit(this.onSubmit.bind(this))}>
      <h4>Redux-Form-Validation</h4>

      <div className="col-xs-4">
        <div className={`form-group ${contactname.touched && contactname.invalid ? 'has-danger' : ' '}`}>
        <input type="text" className="form-control" {...contactname} placeholder="Contact Name" />
        <div className="has-danger">{contactname.touched ? contactname.error : ' '}</div>
      </div>
      
      <div className={`form-group ${businessname.touched && businessname.invalid ? 'has-danger' : ' '}`}>
        <input type="text" className="form-control" {...businessname} placeholder="Business Name" />
          <div className="has-danger">{businessname.touched ? businessname.error : ' '}</div>
      </div>
      
      <div className={`form-group ${contactphone.touched && contactphone.invalid ? 'has-danger' : ' '}`}>
        <input type="text" className="form-control" {...contactphone} placeholder="(123)45678" />
            <div className="has-danger">{contactphone.touched ? contactphone.error : ' '}</div>
      </div>
      
      <div className={`form-group ${contactemail.touched && contactemail.invalid ? 'has-danger' : ' '}`}>
        <input type="text" className="form-control" {...contactemail} placeholder="example@example.com" />
            <div className="has-danger">{contactemail.touched ? contactemail.error : ' '}</div>
      </div>
      </div>
      
      <div className="col-xs-4">
        <div className={`form-group ${streetaddress.touched && streetaddress.invalid ? 'has-danger' : ' '}`}>
        <input type="text" className="form-control" {...streetaddress} placeholder="12 Floor Street West" />
            <div className="has-danger">{streetaddress.touched ? streetaddress.error : ' '}</div>
      </div>
      
      <div className={`form-group ${city.touched && city.invalid ? 'has-danger' : ' '}`}>
        <input type="text" className="form-control" {...city} placeholder="City" />
            <div className="has-danger">{city.touched ? city.error : ' '}</div>
      </div>
      
      <div className={`form-group ${province.touched && province.invalid ? 'has-danger' : ' '}`}>
        <input type="text" className="form-control" {...province} placeholder="Province" />
            <div className="has-danger">{province.touched ? province.error : ' '}</div>
      </div>
      
      <div className={`form-group ${postalcode.touched && postalcode.invalid ? 'has-danger' : ' '}`}>
        <input type="text" className="form-control" {...postalcode} placeholder="Postal Code" />
            <div className="has-danger">{postalcode.touched ? postalcode.error : ' '}</div>
      </div>
      </div>
      
      <div className={`form-group ${comments.touched && comments.invalid ? 'has-danger' : ' '}`}>
        <textarea type="text" rows="5" className="form-control" {...comments} placeholder="Comments" />
            <div className="has-danger">{comments.touched ? comments.error : ' '}</div>
      </div>
      <div className="form-group btn-group">
        <button type="submit" className="btn btn-primary">submit</button>
        <Link to="/" className='btn btn-danger'>cancel</Link>
      </div>

      </form>
      </div>
    );
  }
}
function validate(value) {
  //console.log(value);
  const errors = {};
  if(!value.contactname) {
    errors.contactname = 'Add Contact Name';
  }
  if(!value.businessname) {
    errors.businessname = 'Add Buisness Name';
  }
  if(!value.contactphone) {
    errors.contactphone = 'Add Contact Phone';
  }
  if(!value.contactemail) {
    errors.contactemail = 'Add Contact Email';
  }
  if(!value.streetaddress) {
    errors.streetaddress = 'Add Street Address';
  }
  if(!value.city) {
    errors.city = 'Add City';
  }
  if(!value.province) {
    errors.province = 'Add Province';
  }
  if(!value.postalcode) {
    errors.postalcode = 'Add postal code';
  }
  if(!value.comments) {
    errors.comments = 'Add Comment';
  }
  if(value.postalcode) {
    let val = value.postalcode;
    if(!(val.length == 6)){
      errors.postalcode = 'enter valid postal code of 6 numbers';
    }
  }
  if(value.contactemail) {
    const str = value.contactemail;
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
    if(!(str.match(mailformat))) {
      errors.contactemail = 'email is not valid';
    }
  }
  return errors;
}
export default reduxForm({
  form:'PostNewForm',
  fields:['contactname','businessname','contactphone','contactemail','streetaddress','city','province','postalcode','comments'],
  validate
  
},null,{})(PostsNew);
