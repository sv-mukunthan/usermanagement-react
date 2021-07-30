import React from 'react';
import { Formik, Form } from 'formik';
import Input from '../../../common_components/ui/field/field.ui';
import Button from '../../../common_components/ui/button/button.ui';
import { signUpSchema } from '../../../helpers/validation.helper';
import './signup.screen.scss';
import { signup } from '../../../models/auth.model';
import { toast } from 'react-toastify';

const SignUp = (props: any) => {
  const { history } = props;
  const initialValues = ({ email: "", password: "", phone: "", name: "" });

  const signUp = async (values: any) => {
    console.log("values", values)
    try {
      const user = await signup(values);
      toast.success("Signup success" , {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      history.push('/login')
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
    <div className="signup_screen">
      <div className="signup_container">
        <div className="signup_wrapper">
          <div className="input_wrapper">
            <Formik
              initialValues={initialValues}
              validationSchema={signUpSchema}
              onSubmit={(values, actions) => signUp(values)}
            >
              <Form>
                <div className="header">SignUp</div>
                <div className="input_div">
                  <Input name="name" type="text" placeholder="name" className="input_class" />
                </div>
                <div className="input_div">
                  <Input name="email" type="text" placeholder="email" className="input_class" />
                </div>
                <div className="input_div">
                  <Input name="phone" type="text" placeholder="phone" className="input_class" />
                </div>
                <div className="input_div">
                  <Input name="password" type="password" placeholder="password" className="input_class" />
                </div>
                <div className="signup_desc">
                  <div className="desc">Already a user ? &ensp; <span className="sign_in_btn" onClick={() => history.push('/login')}>Login</span></div>
                </div>
                <div className="button_container">
                  <Button name="Signup" onClick={() => console.log("text")} />
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp;