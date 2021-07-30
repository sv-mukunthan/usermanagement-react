import React from 'react';
import { Formik, Form } from 'formik';
import Input from '../../../common_components/ui/field/field.ui';
import Button from '../../../common_components/ui/button/button.ui';
import { loginSchema } from '../../../helpers/validation.helper';
import { login } from "../../../models/auth.model";
import './login.screen.scss';
import { toast } from 'react-toastify';

const Login = (props: any) => {
  const { history } = props;
  const initialValues = ({ email: "", password: "" });

  const handleLoginUser = async (values: any) => {
    try {
      const response: any = await login(values);
      toast.success("Login success" , {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      localStorage.setItem("token", response.data.token);
      window.location.href = "/"
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
    <div className="login_screen">
      <div className="login_container">
        <div className="login_wrapper">
          <div className="input_wrapper">
            <Formik
              initialValues={initialValues}
              validationSchema={loginSchema}
              onSubmit={(values, actions) => handleLoginUser(values)}
            >
              <Form>
                <div className="header">Login</div>
                <div className="input_div">
                  <Input name="email" type="text" placeholder="email" className="input_class" />
                </div>
                <div className="input_div">
                  <Input name="password" type="password" placeholder="password" className="input_class" />
                </div>
                <div className="signup_desc">
                  <div className="desc">Register Now ? &ensp; <span className="sign_in_btn" onClick={() => history.push('/signup')}>Signup</span></div>
                </div>
                <div className="signup_desc">
                  <div className="desc">Forget Password ? &ensp; <span className="sign_in_btn" onClick={() => history.push('/forget_password')}>Forget</span></div>
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

export default Login;