import React from 'react'
import { AutoComplete } from 'antd';
import 'antd/dist/antd.min.css';
import { useController } from 'react-hook-form';


export default function AutoData({control,...props}) {

  const {field}=useController({control, name:props.name});
  
  return (
    <>
    <div className='autodata'>
    <AutoComplete
    filterOption={(inputValue, option) =>
      option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1

    }
    
    {...field}
    {...props}
  />
  <i className="fa fa-angle-down"></i>
  </div>
  </>
  )
}
