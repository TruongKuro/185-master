import React from "react";
import AutoData from "../../../components/AutoComplete/AutoData";
import { useForm } from "react-hook-form";
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";
import { Switch } from 'antd';
import Swal from "sweetalert2";
import { XoaNguoiDungAction } from "../../../redux/actions/QuanLyNguoiDungAction";
import { useDispatch, useSelector } from "react-redux";





const schema = yup.object().shape({
    // userName: yup.string().required('Username is required'),
    // passWord: yup.string().required('Password is required'),
  })

export default function Information() {
    const { users } = useSelector((state) => state.QuanLyNguoiDungReducer);
const dispatch = useDispatch();
const Swal = require("sweetalert2");
const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };

  function handleClickEdit ()  {
    return Swal.fire({
      html:
        '<span style="color:#3D4852;font-size:24px;text-align:center;font-weight:700;">Chỉnh Sửa thành công!</span>' +
        '<p style="color:#ccc;font-size:18px;text-align:center;font-weight:500;margin-top:12px;">Bạn đã chỉnh sửa thành công! <br>Bấm Xong để trở về danh sách nhân viên.</p>',
      icon: "success",
      showConfirmButton: true,
      confirmButtonText: "Xong",
    });


  }

    const {register, handleSubmit,control,watch, formState: { errors } } =useForm({resolver: yupResolver(schema)});
    const optionsCity = [
      {
        value: 'Sai Gon',
      },
      {
        value: 'TP. HCM',
      },
      {
        value: 'Da Nang',
      },
    ];
    const optionsA = [
      {
        value: 'A',
      },
      {
        value: 'B',
      },
      {
        value: 'C',
      },
    ];
    const onSubmit=(data)=>{
      console.log(data);
    };
    return (
      <div className="container-register">
        <div className="title-register">
          <i class="fa fa-arrow-left"></i>
          <h1>THÔNG TIN NGƯỜI DÙNG </h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className="infor-title">Thông Tin Cá Nhân</h2>
          <div className="submit-top">
              <div className="submit-top-info">
              <div className="form-group">
                <label htmlFor="exampleInputSurname" className="label-infor">Họ </label>
                <div className="form-input">
                {/* <input type="text" className="form-control" id="exampleInputSurname"  placeholder="Nhập họ" {...register("surname")}/> */}
                <div className="information-admin">Nguyen</div>
                </div>
              </div>
  
              <div className="form-group">
                <label htmlFor="exampleInputName" className="label-infor">Tên </label>
                <div className="form-input">
                {/* <input type="text" className="form-control" id="exampleInputName" placeholder="Nhập tên" {...register("name")}/> */}
                <div className="information-admin">Quang Van </div>

                </div>
              </div>
  
              <div className="form-group">
                <label htmlFor="exampleInputEmail1" className="label-infor">Email </label>
                <div className="form-input">
                {/* <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Nhập địa chỉ email" {...register("email")}/> */}
                <div className="information-admin">daiquocviet@gmail.com</div>

                </div>
              </div>
  
              <div className="form-group">
                <label htmlFor="exampleInputPhoneNumber" className="label-infor">Số điện thoại </label>
                <div className="form-input">
                {/* <input type="text" className="form-control" id="exampleInputPhoneNumber"  placeholder="Nhập số điện thoại" {...register("phone")}/> */}
                <div className="information-admin">0123456789</div>

                </div>
              </div>
  
              <div className="form-group">
                <label htmlFor="exampleInputNation" className="label-infor">Quốc gia</label>
                <div className="form-input">
                {/* <input type="text" value="Việt Nam" className="form-control" id="exampleInputNation" disabled  placeholder="Chọn quốc gia" {...register("nation")}/> */}
                <div className="information-admin">Viet Nam </div>

                </div>
              </div>
  
              <div className="form-group">
                <label htmlFor="exampleInputCity" className="label-infor">Tỉnh/Thành phố</label>
                {/* <AutoData  placeholder="Chọn tỉnh thành phố" control={control} name="city" id="city" options={optionsCity}/>  */}
                <div className="information-admin">Ho Chi Minh </div>

              </div>
  
              <div className="form-group">
                <label htmlFor="exampleInputDistrict" className="label-infor">Quận/Huyện</label>
                {/* <AutoData  placeholder="Chọn quận huyện" control={control} name="district" id="districst" options={optionsA} disabled={!watch("city")} />  */}
                <div className="information-admin">Quan 3</div>

              </div>
  
              <div className="form-group">
                <label htmlFor="exampleInputCommune" className="label-infor">Phường/Xã</label>
                {/* <AutoData  placeholder="Chọn tỉnh thành phố" control={control} name="commune" id="commune" options={optionsA} disabled={!watch("district")} />  */}
                <div className="information-admin">3</div>

                </div>
              </div>
              
  
              <div className="submit-top-avt">
              <label for="file" className="label-file">
                <span className="hinhDaiDien">Hình đại diện</span>
              <div for="file" className="img-input">
                <img src="../../../assets/img/logo.png" alt="123" />
              </div>
              </label>
              </div>
              
            </div>
            
            <div className="submit-center infor-center">
                <div className="form-group">
                <label htmlFor="exampleInputAddress" className="label-infor">Địa Chỉ</label>
                {/* <input type="text" className="form-control" id="exampleInputAddress" placeholder="Nhập địa chỉ" /> */}
                <div className="information-admin">423 Dien Bien Phu Quan 3</div>

              </div>
            </div>
            <div className="trang-thai">
                <div className="title-trangthai">Trạng Thái</div>
                <div className="item-trangthai">

            <Switch defaultChecked onChange={onChange} />
            <span className="content-trangthai">Đang Hoạt Động</span>
                </div>
            </div>
              <hr />
              <h2 className="infor-title">Thông Tin Làm Việc </h2>
            <div className="submit-bottom infor-bottom">
                  <div className="form-group">
                  <label htmlFor="exampleInputRole" className="label-infor">Vai Trò </label>
                  {/* <AutoData  placeholder="Chọn vai trò" control={control} name="role" id="role" options={optionsA} />  */}
                  <div className="information-admin">423 Dien Bien Phu Quan 3</div>

                </div>
  
  
                <div className="form-group">
                  <label htmlFor="exampleInputPosition" className="label-infor">Chức Vụ </label>
                  {/* <AutoData  placeholder="Chọn chức vụ" control={control} name="position" id="position" options={optionsA}  />  */}
                  <div className="information-admin">423 Dien Bien Phu Quan 3</div>

  
                </div>
  
  
                <div className="form-group">
                  <label htmlFor="exampleInputPart" className="label-infor">Bộ Phận </label>
                  {/* <AutoData  placeholder="Chọn bộ phận" control={control} name="part" id="part" options={optionsA}  />  */}
                  <div className="information-admin">423 Dien Bien Phu Quan 3</div>

  
                </div>
  
  
                <div className="form-group">
                  <label htmlFor="exampleInputAgency" className="label-infor">Chi Nhánh </label>
                  {/* <AutoData  placeholder="Chọn chi nhánh" control={control} name="agency" id="agency" options={optionsA} />  */}
                  <div className="information-admin">423 Dien Bien Phu Quan 3</div>

  
                </div>
            </div>
   
           
            <div className="btn-add-user">
             <button className="btn btn-add" onClick={handleClickEdit}>Chỉnh Sửa</button>
          </div>
  
        </form>
     
    
      </div>
    );
}
