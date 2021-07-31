import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { editUser, getUserByToken, userList } from '../../models/user.model';
import './user.screen.scss';
import { useSetState } from '../../helpers/function.helper';
import { setUserList, setUser } from '../../utils/redux.utils';
import Button from '../../common_components/ui/button/button.ui';
import { Formik, Form } from 'formik';
import { editSchema } from '../../helpers/validation.helper';
import Input from '../../common_components/ui/field/field.ui';
import 'react-responsive-modal/styles.css';
import { toast } from 'react-toastify';
import { Modal } from 'react-responsive-modal';
import { logout } from '../../models/auth.model';
const User = (props: any) => {
  const users = useSelector((state: any) => state.user.userList);
  const user = useSelector((state: any) => state.user.user);
  console.log("user", user);
  const [state, setState] = useSetState({ user: '', currentUser: {}, initialValues: { name: "", email: "", phone: "" }, open: false, hasMore: false, page: 1 });

  useEffect(() => {
    getUser();
    getUserList({ limit: 20, page: 1 });
  },[])

  useEffect(() => {
    const token = localStorage.getItem("token");
    // console.log("token", token)
    if(!token) {
      props.history.push('/login');
    }
  }, []);

  const getUser = async() => {
    try {
      const user: any = await getUserByToken();
      setUser(user.data);
    } catch(err) {
      console.log('err', err);
    }
  }

  const getUserList = async({ limit, page }: any) => {
    try {
      const users: any = await userList({ page: page, limit: limit, search: "" });
      setState({ hasMore: users.data.hasNextPage })
      setUserList(users.data.docs);
    } catch(err) {
      console.log(err);
    }
  }

  const loadMore = async() => {
    try {
      const data: any = await userList({ page: state.page+1, limit: 20, search: "" });
      setState({ hasMore: data.data.hasNextPage, page: state.page+1 })
      setUserList([...users, ...data.data.docs]);
    } catch(err) {
      console.log(err);
    }
  }

  const openEdit = async(user: any) => {
    setState({ currentUser: user, open: true, initialValues: { name: user.name, email: user.email, phone: user.phone } })
  }

  const update = async(values: any) => {
    try {
      values.user_id = state.currentUser._id;
      const edit: any = await editUser(values);
      toast.success("User updated successfully" , {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      getUserList({ limit: state.page * 20, page: 1 });
      setState({ open: false, currentUser: {} });
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

  const logoutUser = async() => {
    try {
      const logout_user = await logout(user._id);
      localStorage.removeItem('token');
      props.history.push('/login');
    } catch(err) {
      console.log("logout", err);
    }
  }

  return (
    <div className="user_screen">
      <div className="logout_container">
        <div className="head">User Management</div>
        <div className="logout_btn">
          <Button name="Logout" onClick={() => logoutUser()} />
        </div>
      </div>
      <div className="user_screen_wrapper">
        <div className="table_header_wrapper">
          <div className="table_head">
            <div className="header_item">Name</div>
            <div className="header_item">Email</div>
            <div className="header_item">Phone</div>
            <div className="header_item">Action</div>
          </div>
        </div>
        {users.map((user: any, index: number) =>
          <div className="user_details" key={`user${index}`}>
            <div className="user_content">
              <div className="user_item">{user.name}</div>
              <div className="user_item">{user.email}</div>
              <div className="user_item">{user.phone}</div>
              <div className="user_item action_btn_container">
                <div className="action_btn">
                  <Button name="Edit" className="action" onClick={() => openEdit(user)} />
                </div>
              </div>
            </div>
          </div>)}
          {state.hasMore &&
            <div className="load_more_container">
              <div className="load_more_btn">
                <Button name="Lode More" onClick={() => loadMore()} />
              </div>
            </div>}
      </div>
          <Modal open={state.open} onClose={() => setState({ open: false })} classNames={{ modal: "edit_model" }} center>
            <Formik
              initialValues={state.initialValues}
              validationSchema={editSchema}
              onSubmit={(values, actions) => update(values)}
            >
              <Form>
                <div className="user_item input_div">
                  <Input name="name" type="text" placeholder="name" className="input_class" />
                </div>
                <div className="user_item input_div">
                  <Input name="email" disabled type="text" placeholder="email" className="input_class" />
                </div>
                <div className="user_item input_div">
                  <Input name="phone" type="number" placeholder="phone" className="input_class" />
                </div>
                <div className="user_item button_container">
                  <Button name="Update" onClick={() => console.log("update clicked")} />
                  {/* <button type="submit">Update</button> */}
                </div>
              </Form>
            </Formik>
          </Modal>
    </div>
  )
}

export default User;