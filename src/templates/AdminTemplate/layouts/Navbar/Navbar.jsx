import React from "react";
import nav1 from "../../../../assets/img/navbar/1.png";
import nav2 from "../../../../assets/img/navbar/2.png";
import nav3 from "../../../../assets/img/navbar/3.png";
import nav4 from "../../../../assets/img/navbar/4.png";
import nav5 from "../../../../assets/img/navbar/5.png";
import nav6 from "../../../../assets/img/navbar/6.png";

export default function Navbar() {
  return (
    <div className="msb" id="msb">
      <nav className="navbar navbar-default" role="navigation">
        {/* Main Menu */}
        <div className="side-menu-container">
          <ul className="nav navbar-nav">
            {/* Dropdown*/}
            <li className="panel panel-default" id="dropdown">
              <a data-toggle="collapse" href="#dropdown-lvl1">
                <img src={nav1} alt="1" />
                Quản Lý Người Dùng
                <span className="caret" />
              </a>
            </li>

            {/* Dropdown*/}
            <li className="panel panel-default" id="dropdown">
              <a data-toggle="collapse" href="#dropdown-lvl2">
                <img src={nav2} alt="2" /> Quản Lý Nhân Sự
                <span className="caret" />
              </a>
              {/* Dropdown level 1 */}
              <div id="dropdown-lvl2" className="panel-collapse collapse">
                <div className="panel-body">
                  <ul className="nav navbar-nav">
                    <li>
                      <a href="#">Nhiệm vụ</a>
                    </li>
                    <li>
                      <a href="#">Lịch</a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            {/* Dropdown*/}
            <li className="panel panel-default" id="dropdown">
              <a data-toggle="collapse" href="#dropdown-lvl3">
                <img src={nav3} alt="3" />
                Quản Lý Văn Thư
                <span className="caret" />
              </a>
              {/* Dropdown level 1 */}
              <div id="dropdown-lvl3" className="panel-collapse collapse">
                <div className="panel-body">
                  <ul className="nav navbar-nav">
                    <li>
                      <a href="#">Công văn mặt</a>
                    </li>
                    <li>
                      <a href="#">Công văn tham mưu</a>
                    </li>
                    <li>
                      <a href="#">Công văn chỉ đạo</a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            {/* Dropdown*/}
            <li className="panel panel-default" id="dropdown">
              <a data-toggle="collapse" href="#dropdown-lvl4">
                <img src={nav4} alt="4" /> Quản Lý Di Tích 
                <span className="caret" />
              </a>
            </li>

            {/* Dropdown*/}
            <li className="panel panel-default" id="dropdown">
              <a data-toggle="collapse" href="#dropdown-lvl5">
                <img src={nav5} alt="5" />
                Quản Lý Tài Liệu
                <span className="caret" />
              </a>
              {/* Dropdown level 1 */}
              <div id="dropdown-lvl5" className="panel-collapse collapse">
                <div className="panel-body">
                  <ul className="nav navbar-nav">
                    <li>
                      <a href="#">Quản lý dự án</a>
                    </li>
                    <li>
                      <a href="#">
                        Tư vấn thiết kế lập báo <br />
                        cáo kinh tế kỹ thuật
                      </a>
                    </li>
                    <li>
                      <a href="#">Tư vấn giám sát thi công</a>
                    </li>
                    <li>
                      <a href="#">Tư vấn thẩm tra thiết kế và dự toán</a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            {/* Dropdown*/}
            <li className="panel panel-default" id="dropdown">
              <a data-toggle="collapse" href="#dropdown-lvl6">
                <img src={nav6} alt="6" /> Quản Lý Lương
                <span className="caret" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
