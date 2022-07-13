import check_white from "../../../../assets/svg/check_white.svg"
import bell_outline from "../../../../assets/svg/bell_outline.svg"
import {Link} from "react-router-dom";
import React from "react";

function CardNotification() {
  const [isShow, setIsShow]=React.useState(false);
  const toggleShowNotification=()=>{
      if(isShow==false){
        setIsShow(true);
      }else{
        setIsShow(false);
      }
  }
    return ( 
        <div className="btn-notification" onClick={toggleShowNotification}>
          <i className="fa fa-bell"></i>
          {isShow && (
            <div className="card-notification">
              <div className="card-notification-left">
                <img src={bell_outline} alt="" />
                <div className="card-notification-content">
                  <div>Thông báo</div>
                  <p>
                    Phần công việc của bạn sẽ hết hạn trong 17 ngày 5 giờ. 
                    Vui lòng kiểm tra và hoàn thành đúng tiến độ công việc
                  </p>
                </div>
              </div>
              <div className="card-notification-icon">
                <img src={check_white} alt="" />
              </div>
            </div>  
          )}
        </div>
        
     );
}

export default CardNotification;