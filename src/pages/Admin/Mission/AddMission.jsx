import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import ModalAddMission from "./ModalAddMission";
import file_pdf from '../../../assets/svg/file_pdf.svg';
import file_doc from '../../../assets/svg/file_doc.svg';


function AddMission() {
    const {isPopup} = useSelector(store => store.popup);
    const dispatch = useDispatch();
    console.log(isPopup);
    return ( 
        <div className="admin-container">
            {isPopup && 
                <Modal>
                    <ModalAddMission/>
                </Modal>}
            <div className="add-mission-header-link">
                <Link to="#">nhiệm vụ</Link>
                <i class="fa fa-angle-double-right"></i>
                <Link to="">Thông tin công việc</Link>
            </div>
            <div className="container-add-mission d-flex w-100">
                <div className="card-input">
                    <h1>Thông tin cơ bản</h1>
                    <div className="submit-top-info">
                        <div className="form-group">
                            <label htmlFor="name-mission">Tên công việc *</label>
                            <input type="text" id="name-mission" className="form-control" placeholder="Nhập tên côn việc" required/>
                        </div>
                        <div className="d-flex w-100">
                            <div className="form-group w-50 mr-8">
                                <label htmlFor="start-day-mission">Ngày bắt đầu *</label>
                                <input type="date" id="start-day-mission" className="form-control" placeholder="Chọn ngày bắt đầu" required/>
                            </div>
                            <div className="form-group w-50 ml-8">
                                <label htmlFor="end-day-mission">Ngày kết thúc *</label>
                                <input type="date" id="end-day-mission" className="form-control" placeholder="Chọn ngày kết thúc" required/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="description-mission">Mô tả *</label>
                            <textarea class="form-control resize-none" id="description-mission" rows="5" placeholder="Nhập mô tả"></textarea>
                        </div>

                        <div className="add-mission-input-file">
                            <span>Thả tập tin vào đây</span>
                            <input type="file" name="file" />
                        </div>

                        <div className="add-mission-file-result">
                            <img src={file_pdf} alt="" />
                            <span>Bảng báo cáo hồ sơ tháng 1</span>
                        </div>
                        <div className="add-mission-file-result">
                            <img src={file_doc} alt="" />
                            <span>Bảng báo cáo hồ sơ tháng 2</span>
                        </div>

                        <div className="form-group mt-8">
                            <label htmlFor="">Số lần nhắc nhở *</label>
                            <input type="text" value="1" className="add-mission-input-number-remind"/>
                        </div>


                    </div>
                </div>
                <div className="card-checkbox">
                    <h1>Nhận nhiệm vụ</h1>

                    <div class="form-check mb-8 mt-12 flex-center">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" checked/>
                        <label class="form-check-label" for="exampleCheck1">Phòng LHSDT</label>
                    </div>
                    <div class="form-check mb-8 flex-center">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" checked/>
                        <label class="form-check-label" for="exampleCheck1">Phòng TBDT</label>
                    </div>
                    <div class="form-check flex-center">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                        <label class="form-check-label" for="exampleCheck1">Phòng HC-TH</label>
                    </div>
                </div>
            </div>

            <div className="flex-end w-100"><button className="btn btn-primary add-mission-btn-next" onClick={() => {
            
                dispatch({
                    type: 'OPENED_POPUP',
                })
            }}>Tiếp tục</button></div>
        </div>
     );
}

export default AddMission;