import React from "react";
import login from "../../assets/img/login.png";
import { useForm } from "react-hook-form";
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";
import { DangNhapAction } from "../../redux/actions/QuanLyNguoiDungAction";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const schema = yup.object().shape({
  userName: yup.string().required('* Mã số là bắt buộc'),
  passWord: yup.string().required('* Mật khẩu là bắt buộc'),
})

export default function Login() {
  const navigate=useNavigate();
  const {register, handleSubmit, formState: { errors } } =useForm({resolver: yupResolver(schema)});

  const dispatch = useDispatch();
  const onSubmit=(data)=>{
    dispatch(DangNhapAction(data,navigate));
  };


  return (
    <div className="login">
      <div className="img-login ">
        <img src={login} alt="login" className="w-100" />
      </div>
      <form className="form-login" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="mb-5">Đăng Nhập</h1>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Mã Số *</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Nhập Mã Số Của Bạn"
            {...register("userName")}
          />
          {errors.userName && <p style={{color:"red", fontSize:"12px"}}>{errors.userName.message}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Mật Khẩu *</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Nhập Mật Khẩu Của Bạn "  
            {...register("passWord")}
          />
          {errors.passWord && <p style={{color:"red", fontSize:"12px"}}>{errors.passWord.message}</p>}
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label
            className="form-check-label check-label"
            htmlFor="exampleCheck1"
            id="checkBox"
          >
            Nhớ Thông Tin
          </label>
        </div>
        <button type="submit" className="btn btn-primary submit-login">
          Đăng Nhập
        </button>
      </form>
    </div>
  );
}
