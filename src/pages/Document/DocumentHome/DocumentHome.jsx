import React from 'react'
import { useNavigate } from 'react-router-dom';
import AutoData from '../../../components/AutoComplete/AutoData';
import { useForm } from 'react-hook-form';
export default function DocumentHome() {
    const navigate=useNavigate();
    const {
        register,
        handleSubmit,
        control,
        watch,
        formState: { errors },
      } = useForm();
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
    return (
        <div className="container-documenthome">
            <h1>QUẢN LÝ DI TÍCH</h1>
            <div className='document-option-address'>
                <h3>Chọn quận *</h3>
                <form>
                <AutoData placeholder="Chọn quận"
                control={control}
                name="district"
                id="district"
                options={optionsA}/>
                </form>
            </div>
            <div></div>
        </div>
      );
}
