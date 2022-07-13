import ellipse_red from '../../../assets/svg/ellipse_red.svg';
import ellipse_green from '../../../assets/svg/ellipse_green.svg';
import ellipse_yellow from '../../../assets/svg/ellipse_yellow.svg';
import ellipse_violet from '../../../assets/svg/ellipse_violet.svg';
import view_by_status from '../../../assets/svg/view_by_status.svg';
import add from '../../../assets/svg/add.svg'
import ic_angle_up from '../../../assets/svg/icon_angle_up.svg'
import ic_angle_down from '../../../assets/svg/icon_angle_down.svg'
import {Link} from 'react-router-dom';

const listWork = [
    {
        ID: '01',
        work: 'Báo cáo hồ sơ',
        status: 'Đang thực hiện',
        deadline: '28/04/2022',
        remain: 7,
        note: 'Đang lên kế hoạch',
    },
    {
        ID: '02',
        work: 'Lên danh sách di tích',
        status: 'Hoàn thành',
        deadline: '28/04/2022',
        remain: 7,
        note: 'Đang lên kế hoạch',
    },
    {
        ID: '03',
        work: 'Báo cáo hồ sơ',
        status: 'Chưa xem',
        deadline: '28/04/2022',
        remain: 7,
        note: 'Đang lên kế hoạch',
    },
    {
        ID: '04',
        work: 'Lên danh sách di tích',
        status: 'Hoàn thành',
        deadline: '28/04/2022',
        remain: 7,
        note: 'Đang lên kế hoạch',
    },
    {
        ID: '05',
        work: 'Lên danh sách di tích',
        status: 'Đang thực hiện',
        deadline: '28/04/2022',
        remain: 7,
        note: 'Đang lên kế hoạch',
    },
    {
        ID: '06',
        work: 'Lên danh sách di tích',
        status: 'Trễ',
        deadline: '28/04/2022',
        remain: 7,
        note: 'Đang lên kế hoạch',
    },
    {
        ID: '07',
        work: 'Báo cáo hồ sơ',
        status: 'Đang thực hiện',
        deadline: '28/04/2022',
        remain: 7,
        note: 'Đang lên kế hoạch',
    },
    {
        ID: '08',
        work: 'Lên danh sách di tích',
        status: 'Chưa xem',
        deadline: '28/04/2022',
        remain: 7,
        note: 'Đang lên kế hoạch',
    },
    {
        ID: '09',
        work: 'Báo cáo hồ sơ',
        status: 'Đang thực hiện',
        deadline: '28/04/2022',
        remain: 7,
        note: 'Đang lên kế hoạch',
    },
    {
        ID: '10',
        work: 'Lên danh sách di tích',
        status: 'Hoàn thành',
        deadline: '28/04/2022',
        remain: 7,
        note: 'Đang lên kế hoạch',
    },
    {
        ID: '11',
        work: 'Lên danh sách di tích',
        status: 'Hoàn thành',
        deadline: '28/04/2022',
        remain: 7,
        note: 'Đang lên kế hoạch',
    },
    {
        ID: '12',
        work: 'Báo cáo hồ sơ',
        status: 'Đang thực hiện',
        deadline: '28/04/2022',
        remain: 7,
        note: 'Đang lên kế hoạch',
    },
    {
        ID: '13',
        work: 'Lên danh sách di tích',
        status: 'Chưa xem',
        deadline: '28/04/2022',
        remain: 7,
        note: 'Đang lên kế hoạch',
    },
    {
        ID: '14',
        work: 'Lên danh sách di tích',
        status: 'Đang thực hiện',
        deadline: '28/04/2022',
        remain: 7,
        note: 'Đang lên kế hoạch',
    },
    {
        ID: '15',
        work: 'Lên danh sách di tích',
        status: 'Trễ',
        deadline: '28/04/2022',
        remain: 7,
        note: 'Đang lên kế hoạch',
    },
]


function ListMission() {
    return ( 
        <div className="admin-container">
            <div className="admin-container-wrapper">
                <div className="add-mission-header-link">
                    <Link to="#">nhiệm vụ</Link>
                    <i class="fa fa-angle-double-right"></i>
                    <Link to="">Thông tin công việc</Link>
                </div>
                <div className="btn-view-by-status">
                    <img src={view_by_status} alt="" />
                    <span>Xem theo trạng thái</span>
                </div>
            </div>

            <div className="container-add-mission">
                <table className='admin-table'>
                    <thead>
                        <tr>
                            <th>
                                <div className='flex-center ml-4'>
                                    Stt
                                    <div className="table-col-icon-sort">
                                        <img src={ic_angle_up} alt="" />
                                        <img src={ic_angle_down} alt="" />
                                    </div>
                                </div>
                            </th>
                            <th>
                                <div className='flex-center'>
                                    Công việc
                                    <div className="table-col-icon-sort">
                                        <img src={ic_angle_up} alt="" />
                                        <img src={ic_angle_down} alt="" />
                                    </div>
                                </div>
                            </th>
                            <th>
                                <div className='flex-center'>
                                    Trạng thái
                                    <div className="table-col-icon-sort">
                                        <img src={ic_angle_up} alt="" />
                                        <img src={ic_angle_down} alt="" />
                                    </div>
                                </div>
                            </th>
                            <th>
                                <div className='flex-center'>
                                    Ngày hết hạn
                                    <div className="table-col-icon-sort">
                                        <img src={ic_angle_up} alt="" />
                                        <img src={ic_angle_down} alt="" />
                                    </div>
                                </div>
                            </th>
                            <th>
                                <div className='flex-center'>
                                    Thời gian còn lại
                                    <div className="table-col-icon-sort">
                                        <img src={ic_angle_up} alt="" />
                                        <img src={ic_angle_down} alt="" />
                                    </div>
                                </div>
                            </th>
                            <th>
                                <div className='flex-center'>
                                    Ghi chú
                                    <div className="table-col-icon-sort">
                                        <img src={ic_angle_up} alt="" />
                                        <img src={ic_angle_down} alt="" />
                                    </div>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {listWork.map((item, index)=>(
                        <tr>
                            <td><div className='ml-4'>{item.ID}</div></td>
                            <td>{item.work}</td>
                            <td>
                                {item.status==="Đang thực hiện" && (
                                    <div className='table-status-mission status-mission-processing'>
                                        <img src={ellipse_yellow} alt="" />
                                        <span>Đang thực hiện</span>
                                    </div>
                                )}
                                {item.status==="Hoàn thành" && (
                                    <div className='table-status-mission status-mission-processed'>
                                        <img src={ellipse_green} alt="" />
                                        <span>Hoàn thành</span>
                                    </div>
                                )}
                                {item.status==="Chưa xem" && (
                                    <div className='table-status-mission status-mission-not-seen'>
                                        <img src={ellipse_violet} alt="" />
                                        <span>Chưa xem</span>
                                    </div>
                                )}
                                {item.status==="Trễ" && (
                                    <div className='table-status-mission status-mission-late'>
                                        <img src={ellipse_red} alt="" />
                                        <span>Trễ</span>
                                    </div>
                                )}


                            </td>
                            <td><div className='ml-2'>{item.deadline}</div ></td>
                            <td><div className='ml-8'>{item.remain} ngày</div></td>
                            <td>{item.note}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
                <div className="btn-table-add">
                    <img src={add} alt="" />
                </div>
            </div>

        </div>
     );
}

export default ListMission;