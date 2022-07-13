import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  LayNguoiDungAction,
  XoaNguoiDungAction,
} from "../../../redux/actions/QuanLyNguoiDungAction";
import ReactPaginate from "react-paginate";
import eye_outline from '../../../assets/svg/eye_outline.svg'

export default function AdminHome() {
  const { users } = useSelector((state) => state.QuanLyNguoiDungReducer);
  const dispatch = useDispatch();
  const Swal = require("sweetalert2");
  let navigate = useNavigate();
  const [search, setSearch] = useState("");
  let userSearch = users.filter((user) => {
    return user.id.toLowerCase().includes(search.toLowerCase()) ||
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.surname.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())||
      user.phone.toLowerCase().includes(search.toLowerCase())||
      user.dateCreate.toLowerCase().includes(search.toLowerCase());
  });
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;
  useEffect(()=>{
    if(!search){
      const endOffset = itemOffset + itemsPerPage;
      setCurrentItems(users.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(users.length / itemsPerPage));
    }
    else{
      const endOffset = itemOffset + itemsPerPage;
      setCurrentItems(userSearch.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(userSearch.length / itemsPerPage));
    }
  },[search])

  function handleChange(event){
    setSearch(event.target.value);
}
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(users.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(users.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, users]);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(userSearch.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(userSearch.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, userSearch]);


  const handlePageClick = (event) => {
    if(search==="")
    {
    const newOffset = (event.selected * itemsPerPage) % users.length;
    setItemOffset(newOffset);
    }
    else{
      const newOffset = (event.selected * itemsPerPage) % userSearch.length;
    setItemOffset(newOffset);
    }
  };

  function handleClickDelete(id) {
    return Swal.fire({
      html:
        '<span style="color:#3D4852;font-size:24px;text-align:center;font-weight:700;">Bạn có muốn xoá người này!</span>' +
        '<p style="color:#ccc;font-size:18px;text-align:center;font-weight:500;margin-top:12px;">Bạn sẽ xoá vĩnh viễn người này.<br>Bấm Huỷ để trở lại.</p>',
      icon: "warning",
      iconColor: "red",
      showCancelButton: true,
      showConfirmButton: true,
      confirmButtonText: "Xoá",
      cancelButtonText: "Huỷ",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(XoaNguoiDungAction(id));
        return Swal.fire({
          html:
            '<span style="color:#3D4852;font-size:24px;text-align:center;font-weight:700;">Xoá thành công!</span>' +
            '<p style="color:#ccc;font-size:18px;text-align:center;font-weight:500;margin-top:12px;">Bạn đã xoá vĩnh viễn người dùng.<br>Bấm Xong để trở về danh sách nhân viên.</p>',
          icon: "success",
          showConfirmButton: true,
          confirmButtonText: "Xong",
        });
      }
    });
  }
  const handleEdit = (user) => {
    navigate("/admin/edit");
    dispatch(LayNguoiDungAction(user));
  };
 
 
 
  return (
    <div className="container-adminhome">
      <div className="search-admin">
        <h1>DANH SÁCH NHÂN VIÊN </h1>
        <div className="option">
          <div className="search-input">
            <div className="input-search">

            <input type="text" placeholder="Tìm Kiếm" onKeyUp={handleChange}/>
            <button className="btn btn-search">
              <i className="fab fa-sistrix"></i>
            </button>
            </div>
          </div>
          <div className="btn-get-user">
        
            <button
              className="btn btn-success btn-get"
              onClick={() => {
                navigate("/admin/register");
              }}
            >
              Tạo Người Dùng
            </button>
          </div>
        </div>
      </div>
      <div className="container-table">
        <table className="table table-user">
          <thead>
            <tr>
              <th className="tr-1 tr-0">ID</th>
              <th className="tr-1">Họ Và Tên</th>
              <th className="tr-1">Email</th>
              <th className="tr-1">Số Điện Thoại</th>
              <th className="tr-1">Vai Trò </th>
              <th className="tr-1">Ngày Tạo</th>
              <th className="tr-1">Trạng Thái </th>
              <th className="tr-1 tr-2">Thao Tác</th>
            </tr>
          </thead>
          <tbody>
            {currentItems &&
              currentItems.map((user, index) => {
                return (
                  <tr key={index}>
                    <td
                      className={`${user.state ? "" : "disable"} `}
                      scope="row"
                    >
                      {user.id}
                    </td>
                    <td className={`${user.state ? "" : "disable"} `}>
                      {user.surname + " " + user.name}
                    </td>
                    <td className={`${user.state ? "" : "disable"} `}>
                      {user.email}
                    </td>
                    <td className={`${user.state ? "" : "disable"} `}>
                      {user.phone}
                    </td>
                    <td className={`${user.state ? "" : "disable"} `}>
                      {user.role}
                    </td>
                    <td className={`${user.state ? "" : "disable"} `}>
                      {user.dateCreate}
                    </td>

                    <td className={`active ${user.state ? "" : "disable"} `}>
                      <i className="fa fa-circle"></i>
                      {user.state ? "Đang Hoạt Động" : "Không hoạt động"}
                    </td>
                    <td>
                      {/* <button
                        className="btn btn-pen"
                        onClick={() => handleEdit(user)}
                      >
                        <i className="fa fa-pen"></i>
                      </button>
                      <button
                        className="btn btn-alt"
                        onClick={() => handleClickDelete(user.id)}
                      >
                        <i className="fa fa-trash-alt"></i>{" "}
                      </button> */}
                      <button
                        className="btn btn-pen"
                      >
                        <img src={eye_outline} alt="" />
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        <hr />
      </div>
      <ReactPaginate
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={1}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        containerClassName={"pagination"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link page-number"}
        previousClassName={"page-item previous-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item next-item"}
        nextLinkClassName={"page-link"}
      />
    </div>
  );
}
