import React from "react";
import AutoData from "../../../components/AutoComplete/AutoData";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ThemNguoiDungAction } from "../../../redux/actions/QuanLyNguoiDungAction";
import { useDispatch, useSelector } from "react-redux";

const phoneRegExp =
  /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/;

const schema = yup.object().shape({
  surname: yup.string().required("* Họ là bắt buộc"),
  name: yup.string().required("* Tên là bắt buộc"),
  email: yup
    .string()
    .email("* Không đúng định dạng email")
    .required("* Email là bắt buộc"),
  phone: yup
    .string()
    .matches(phoneRegExp, "* Số điện thoại không đúng định dạng"),
  role: yup.string().required("* Vai trò bắt buộc chọn"),
  position: yup.string().required("* Chức vụ bắt buộc chọn"),
  part: yup.string().required("* Bộ phận bắt buộc chọn"),
  branch: yup.string().required("* Chi nhánh bắt buộc chọn"),
});
export default function Register() {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const { users } = useSelector((state) => state.QuanLyNguoiDungReducer);
  const dispatch = useDispatch();
  const optionsCity = [
    {
      value: "Sai Gon",
    },
    {
      value: "TP. HCM",
    },
    {
      value: "Da Nang",
    },
  ];
  const optionsA = [
    {
      value: "A",
    },
    {
      value: "B",
    },
    {
      value: "C",
    },
  ];
  const navigate = useNavigate();
  const [image, setImage] = useState("");
  const convert2base64 = (file) => {
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result.toString());
    };
    reader.readAsDataURL(file);
  };

  const onSubmit = (data) => {
    let id = users.length + 1;
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();
    today = dd + "/" + mm + "/" + yyyy;
    data["id"] = id.toString();
    data["dateCreate"] = today;
    data["state"] = true;
    console.log(data);
    dispatch(ThemNguoiDungAction(data));
    navigate("/admin/adminhome");
  };

  function handleCancel(e) {
    navigate("/admin/adminhome");
  }
  return (
    <div className="container-register">
      <div className="title-register">
        <Link to="/admin/adminhome">
          <i className="fa fa-arrow-left"></i>
        </Link>
        <h1>TẠO NGƯỜI DÙNG MỚI </h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="submit-top">
          <div className="submit-top-info">
            <div className="form-group">
              <label htmlFor="exampleInputSurname">Họ *</label>
              <div className="form-input">
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputSurname"
                  placeholder="Nhập họ"
                  {...register("surname")}
                />
              </div>
              {errors.surname && (
                <p
                  style={{
                    color: "red",
                    fontSize: "12px",
                    marginBottom: "0px",
                  }}
                >
                  {errors.surname.message}
                </p>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputName">Tên *</label>
              <div className="form-input">
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputName"
                  placeholder="Nhập tên"
                  {...register("name")}
                />
              </div>
              {errors.name && (
                <p style={{ color: "red", fontSize: "12px" }}>
                  {errors.name.message}
                </p>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email *</label>
              <div className="form-input">
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Nhập địa chỉ email"
                  {...register("email")}
                />
              </div>
              {errors.email && (
                <p style={{ color: "red", fontSize: "12px" }}>
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputPhoneNumber">Số điện thoại *</label>
              <div className="form-input">
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputPhoneNumber"
                  placeholder="Nhập số điện thoại"
                  {...register("phone")}
                />
              </div>
              {errors.phone && (
                <p style={{ color: "red", fontSize: "12px" }}>
                  {errors.phone.message}
                </p>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputNation">Quốc gia</label>
              <div className="form-input">
                <input
                  type="text"
                  value="Việt Nam"
                  className="form-control"
                  id="exampleInputNation"
                  disabled
                  placeholder="Chọn quốc gia"
                  {...register("nation")}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputCity">Tỉnh/Thành phố</label>
              <AutoData
                placeholder="Chọn tỉnh thành phố"
                control={control}
                name="city"
                id="city"
                options={optionsCity}
              />
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputDistrict">Quận/Huyện</label>
              <AutoData
                placeholder="Chọn quận huyện"
                control={control}
                name="district"
                id="districst"
                options={optionsA}
                disabled={!watch("city")}
              />
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputCommune">Phường/Xã</label>
              <AutoData
                placeholder="Chọn tỉnh thành phố"
                control={control}
                name="commune"
                id="commune"
                options={optionsA}
                disabled={!watch("district")}
              />
            </div>
          </div>

          <div className="submit-top-avt">
            <label htmlFor="file" className="label-file">
              <span className="hinhDaiDien">Hình đại diện</span>
              <input
                type="file"
                name="file"
                id="file"
                className="inputfile"
                style={{ display: "none" }}
                {...register("image", {
                  onChange: (e) => {
                    convert2base64(e.target.files[0]);
                  },
                })}
              />
              <div htmlFor="file" className="img-input">
                {image ? (
                  <img src={image} alt="" />
                ) : null}
            
                {image ? (
                    <div className="img-overlay"></div>
                ) : null}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-camera"
                  viewBox="0 0 16 16"
                  style={{ color: image ? "white" : "#1a48e9" }}
                >
                  <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z" />
                  <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                </svg>
                <span style={{ color: image ? "#D8D8D8" : "#989898" }}>
                  Chọn ảnh để tải lên
                </span>
              </div>
            </label>
          </div>
        </div>

        <div className="submit-center">
          <div className="form-group">
            <label htmlFor="exampleInputAddress">Địa Chỉ</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputAddress"
              placeholder="Nhập địa chỉ"
              {...register("address")}
            />
          </div>
          <hr />
        </div>

        <div className="submit-bottom">
          <div className="form-group">
            <label htmlFor="exampleInputRole">Vai Trò *</label>
            <AutoData
              placeholder="Chọn vai trò"
              control={control}
              name="role"
              id="role"
              options={optionsA}
            />
            {errors.role && (
              <p style={{ color: "red", fontSize: "12px" }}>
                {errors.role.message}
              </p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputPosition">Chức Vụ *</label>
            <AutoData
              placeholder="Chọn chức vụ"
              control={control}
              name="position"
              id="position"
              options={optionsA}
            />
            {errors.position && (
              <p style={{ color: "red", fontSize: "12px" }}>
                {errors.position.message}
              </p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputPart">Bộ Phận *</label>
            <AutoData
              placeholder="Chọn bộ phận"
              control={control}
              name="part"
              id="part"
              options={optionsA}
            />
            {errors.part && (
              <p style={{ color: "red", fontSize: "12px" }}>
                {errors.part.message}
              </p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputBranch">Chi Nhánh *</label>
            <AutoData
              placeholder="Chọn chi nhánh"
              control={control}
              name="branch"
              id="branch"
              options={optionsA}
            />
            {errors.branch && (
              <p style={{ color: "red", fontSize: "12px" }}>
                {errors.branch.message}
              </p>
            )}
          </div>
        </div>

        <div className="btn-add-user">
          <button className="btn btn-add">Lưu</button>
          <button className="btn btn-cancel" onClick={handleCancel}>
            Huỷ
          </button>
        </div>
      </form>
    </div>
  );
}
