import React from 'react';
import { Formik, Form } from 'formik';
import Input from '../../../common_components/ui/field/field.ui';
import Button from '../../../common_components/ui/button/button.ui';
import { forgetSchema } from '../../../helpers/validation.helper';
import { forgetPassword } from "../../../models/auth.model";
import './forget_password.screen.scss';
import { toast } from 'react-toastify';

const ForgetPassword = (props: any) => {
  const { history } = props;
  const initialValues = ({ email: "" });

  const handleForget = async (values: any) => {
    try {
      const response: any = await forgetPassword(values);
      history.push('/reset_password/'+response.data.hash);
    } catch(err) {
      toast.error(err.data ? err.data.message : err , {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }
  return (
    <div className="forget_password_screen">
      <div className="forget_password_container">
        <div className="forget_password_wrapper">
          <div className="input_wrapper">
            <Formik
              initialValues={initialValues}
              validationSchema={forgetSchema}
              onSubmit={(values, actions) => handleForget(values)}
            >
              <Form>
                <div className="header">Forget Password</div>
                <div className="input_div">
                  <Input name="email" type="text" placeholder="Email" className="input_class" />
                </div>
                <div className="signup_desc">
                  <div className="desc">Back To Login ? &ensp; <span className="sign_in_btn" onClick={() => history.push('/login')}>Login</span></div>
                </div>
                <div className="button_container">
                  <Button name="Login" onClick={() => console.log("text")} />
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForgetPassword;