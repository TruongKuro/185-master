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
        '<span style="color:#3D4852;font-size:24px;text-align:center;font-weight:700;">B???n c?? mu???n xo?? ng?????i n??y!</span>' +
        '<p style="color:#ccc;font-size:18px;text-align:center;font-weight:500;margin-top:12px;">B???n s??? xo?? v??nh vi???n ng?????i n??y.<br>B???m Hu??? ????? tr??? l???i.</p>',
      icon: "warning",
      iconColor: "red",
      showCancelButton: true,
      showConfirmButton: true,
      confirmButtonText: "Xo??",
      cancelButtonText: "Hu???",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(XoaNguoiDungAction(id));
        return Swal.fire({
          html:
            '<span style="color:#3D4852;font-size:24px;text-align:center;font-weight:700;">Xo?? th??nh c??ng!</span>' +
            '<p style="color:#ccc;font-size:18px;text-align:center;font-weight:500;margin-top:12px;">B???n ???? xo?? v??nh vi???n ng?????i d??ng.<br>B???m Xong ????? tr??? v??? danh s??ch nh??n vi??n.</p>',
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
        <h1>DANH S??CH NH??N VI??N </h1>
        <div className="option">
          <div className="search-input">
            <div className="input-search">

            <input type="text" placeholder="T??m Ki???m" onKeyUp={handleChange}/>
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
              T???o Ng?????i D??ng
            </button>
          </div>
        </div>
      </div>
      <div className="container-table">
        <table className="table table-user">
          <thead>
            <tr>
              <th className="tr-1 tr-0">ID</th>
              <th className="tr-1">H??? V?? T??n</th>
              <th className="tr-1">Email</th>
              <th className="tr-1">S??? ??i???n Tho???i</th>
              <th className="tr-1">Vai Tr?? </th>
              <th className="tr-1">Ng??y T???o</th>
              <th className="tr-1">Tr???ng Th??i </th>
              <th className="tr-1 tr-2">Thao T??c</th>
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
                      {user.state ? "??ang Ho???t ?????ng" : "Kh??ng ho???t ?????ng"}
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
