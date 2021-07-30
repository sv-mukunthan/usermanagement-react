import React from 'react';
import { Formik, Form } from 'formik';
import Input from '../../../common_components/ui/field/field.ui';
import Button from '../../../common_components/ui/button/button.ui';
import { resetSchema } from '../../../helpers/validation.helper';
import { resetPassword } from "../../../models/auth.model";
import './reset_password.screen.scss';
import { toast } from 'react-toastify';

const Login = (props: any) => {
  const { history, match } = props;
  const initialValues = ({ password: "", confirm_password: "" });

  const handleResetPassword = async (values: any) => {
    try {
      values.reset_password_hash = match.params.hash;
      console.log("values", values)
      const response: any = await resetPassword(values);
      toast.success("Password reset successfully" , {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      localStorage.setItem("token", response.data.token);
      history.push('/login');
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
    <div className="reset_password_screen">
      <div className="reset_password_container">
        <div className="reset_password_wrapper">
          <div className="input_wrapper">
            <Formik
              initialValues={initialValues}
              validationSchema={resetSchema}
              onSubmit={(values, actions) => handleResetPassword(values)}
            >
              <Form>
                <div className="header">Reset Password</div>
                <div className="input_div">
                  <Input name="password" type="password" placeholder="password" className="input_class" />
                </div>
                <div className="input_div">
                  <Input name="confirm_password" type="password" placeholder="Confirm password" className="input_class" />
                </div>
                <div className="button_container">
                  <Button name="Reset" onClick={() => console.log("text")} />
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;