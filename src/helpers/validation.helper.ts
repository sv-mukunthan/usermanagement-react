import * as Yup from 'yup';
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/


export const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required(),
  password: Yup.string().required(),
})

export const signUpSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required(),
  password: Yup.string().required(),
  phone: Yup.string().required().matches(phoneRegExp, 'Phone number is not valid'),
  name: Yup.string().required(),
})

export const editSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required(),
  phone: Yup.string().required().matches(phoneRegExp, 'Phone number is not valid'),
  name: Yup.string().required(),
})

export const forgetSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required(),
})

export const resetSchema = Yup.object().shape({
  password: Yup.string().required('Password is required').min(8, "Password must have atleast 8 digits"),
  confirm_password: Yup.string().required("Confirm password is required").oneOf([Yup.ref('password'), null], 'Password and Confirm password must match')
})