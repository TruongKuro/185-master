import ic_search from '../../../assets/svg/icon_search.svg'
import ic_angle_up from '../../../assets/svg/icon_angle_up.svg'
import ic_angle_down from '../../../assets/svg/icon_angle_down.svg'
import ic_angle_left from '../../../assets/svg/icon_angle_left.svg'
import ic_angle_right from '../../../assets/svg/icon_angle_right.svg'
import { useSelector, useDispatch } from "react-redux";

const listUser = [
    {
        id: '01',
        name: 'Tran Van Quang Dung',
        email: 'tva@example.com',
        part: 'HR',
    },
    {
        id: '02',
        name: 'Tran Van Quang Dung',
        email: 'lva@example.com',
        part: 'HR',
    },
    {
        id: '03',
        name: 'Tran Van Quang Dung',
        email: 'nandy@example.com',
        part: 'Marketing',
    },
    {
        id: '04',
        name: 'Tran Van Quang Dung',
        email: 'nvbi@example.com',
        part: 'Marketing',
    },
    {
        id: '05',
        name: 'Tran Van Quang Dung',
        email: 'btc@example.com',
        part: 'Marketing',
    },
    {
        id: '06',
        name: 'Tran Van Quang Dung',
        email: 'nvdi@example.com',
        part: 'IT',
    },
    {
        id: '07',
        name: 'Tran Van Quang Dung',
        email: 'ttem@example.com',
        part: 'IT',
    },
    {
        id: '08',
        name: 'Tran Van Quang Dung',
        email: 'ctgai@example.com',
        part: 'IT',
    },
    {
        id: '09',
        name: 'Tran Van Quang Dung',
        email:'nthue@example.com',
        part: 'Developer',
    },
    {
        id: '10',
        name: 'Tran Van Quang Dung',
        email: 'lloi@example.com',
        part: 'Developer',
    },
]

function ModalAddMission() {
    const {isPopup} = useSelector(store => store.popup);
    const dispatch = useDispatch();
    return ( 
        <div className="modal-add-mission">
            <div className="modal-add-mission-content">
                <p className='modal-title'>Danh sách người được giao công việc cho Phòng LHSDT</p>
                <p className='modal-subtitle'>Hãy chọn những người mà bạn giao công việc trong bảng này</p>
                <div className="modal-add-mission-input">
                    <div className="modal-add-mission-input-search">
                        <input type="text" placeholder='Tìm kiếm'/>
                        <img src={ic_search} alt="" />
                    </div>
                    <div className="modal-add-mission-number-selected">
                        <span>5/15</span>
                        <span>người đã được chọn</span>
                    </div>
                </div>

                <div className="table-header">
                    <div className="table-col-checkbox">
                        <input type="checkbox" className='checkbox-size-18'/>
                    </div>
                    <div className="table-col-number">
                        ID
                        <div className="table-col-icon-sort">
                            <img src={ic_angle_up} alt="" />
                            <img src={ic_angle_down} alt="" />
                        </div>
                    </div>
                    <div className="table-col-name">
                        Họ và tên
                        <div className="table-col-icon-sort">
                            <img src={ic_angle_up} alt="" />
                            <img src={ic_angle_down} alt="" />
                        </div>
                    </div>
                    <div className="table-col-email">
                        Email
                        <div className="table-col-icon-sort">
                            <img src={ic_angle_up} alt="" />
                            <img src={ic_angle_down} alt="" />
                        </div>
                    </div>

                    <div className="table-col-part">
                        Bộ phận
                        <div className="table-col-icon-sort">
                            <img src={ic_angle_up} alt="" />
                            <img src={ic_angle_down} alt="" />
                        </div>
                    </div>
                </div>
                {listUser.map((item, index) => (
                <div className="table-body" key={index}>
                    <div className="table-col-checkbox">
                        <input type="checkbox" className='checkbox-size-18'/>
                    </div>
                    <div className="table-col-number">
                        {item.id}
                    </div>
                    <div className="table-col-name">
                        {item.name}
                    </div>
                    <div className="table-col-email">
                       {item.email}
                    </div>
                    <div className="table-col-part">
                       {item.part}
                    </div>
                </div>
                ))}

                <div className="table-footer">
                    <div className="table-show-number-row flex-center">
                        Hiển thị 
                        <div className="table-show-number-row-dropdown-list">
                            10
                            <img src={ic_angle_down} alt="" />
                        </div>
                        trong tổng số 100 dữ liệu
                    </div>
                    <div className="table-pagination flex-center">
                        <div className="flex-center mr-2">
                            <img src={ic_angle_left} alt="" />
                            <img src={ic_angle_left} alt="" />
                        </div>
                        <div className="mr-2">
                            <img src={ic_angle_left} alt="" />
                        </div>
                        <div className="table-pagination-number">
                            <div className="table-pagination-number-item">1</div>
                            <div className="table-pagination-number-item-clicked">2</div>
                            <div className="table-pagination-number-item">...</div>
                            <div className="table-pagination-number-item">3</div>
                        </div>
                        <div className="ml-2">
                            <img src={ic_angle_right} alt="" />
                        </div>
                        <div className="flex-center ml-2">
                            <img src={ic_angle_right} alt="" />
                            <img src={ic_angle_right} alt="" />
                        </div>
                    </div>
                </div>
                 <div className="flex-end w-100"><button className="btn btn-primary add-mission-btn-next">Lưu</button></div>

            </div>
        </div>
     );
}

export default ModalAddMission;