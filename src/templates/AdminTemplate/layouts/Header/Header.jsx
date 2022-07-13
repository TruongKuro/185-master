import React from "react";
import { Link } from "react-router-dom";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space } from "antd";
import logo from "../../../../assets/img/logo.png";
import CardNotification from "./CardNotification";
import bell_outline from "../../../../assets/svg/bell_outline.svg"

export default function Header() {
  const menu = (
    <Menu
      items={[
        {
          key: "1",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.antgroup.com"
            >
              1st menu item
            </a>
          ),
        },
        {
          key: "2",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.aliyun.com"
            >
              2nd menu item (disabled)
            </a>
          ),
          icon: <SmileOutlined />,
          disabled: true,
        },
        {
          key: "3",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.luohanacademy.com"
            >
              3rd menu item (disabled)
            </a>
          ),
          disabled: true,
        },
        {
          key: "4",
          danger: true,
          label: "a danger item",
        },
      ]}
    />
  );

  return (
    <div className="header-template">
      <Link to="/admin">
        <div className="header-left">
          <img src={logo} alt="logo" />
          <h1>
            TRUNG TÂM BẢO TỒN VÀ PHÁT HUY GIÁ TRỊ LỊCH SỬ VĂN HOÁ THÀNH PHỐ HỒ
            CHÍ MINH{" "}
          </h1>
        </div>
      </Link>

      <div className="header-right">
        <Link to="/admin/messenger">
          <i className="fab fa-facebook-messenger"></i>
        </Link>

        <CardNotification/>

        

        <Link to="/admin/account">
          <div className="acount">
            <div className="acount-left">
              <img src="https://picsum.photos/id/1/200/300" alt="user" />
            </div>
            <div className="acount-right">
              <Dropdown overlay={menu}>
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                      <p className="user-name">Nguyễn Công Anh</p>
                      <p className="user-title">Admin</p>
                  </Space>
                </a>
              </Dropdown>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
