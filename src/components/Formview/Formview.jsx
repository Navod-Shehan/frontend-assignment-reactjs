import React from 'react'
import { Input, Button, Form, Select } from 'antd'
import './Formview.css'

const { Option } = Select;
const Formview = ({ setData, data }) => {
  const [form] = Form.useForm();

  const handleFormSubmit = (values) => {

    // Get form values
    const { shelfId, shelfName, shelfType, shelfDimension, noOfPartitions } = values;

    // create new data object
    const newData = {
      shelfId: shelfId,
      shelfName: shelfName,
      shelfType: shelfType,
      shelfDimension: shelfDimension,
      noOfPartitions: noOfPartitions,
    }
    // set data state
    setData([...data, newData])
    console.log(data)

    // Get existing data from local storage
    if (localStorage.getItem('data') === null) {
      localStorage.setItem('data', JSON.stringify([]))
    }
    const existingData = localStorage.getItem('data');


    // Parse existing data into a JavaScript object
    const parsedData = JSON.parse(existingData);

    // Push new data object into the array
    parsedData.push(newData);
    console.log(parsedData)

    // Serialize the updated data back into a string
    const updatedData = JSON.stringify(parsedData);

    // Save the updated data back to local storage
    localStorage.setItem('data', updatedData);
  };

  return (
    <Form form={form} onFinish={handleFormSubmit} className="custom-form">
      <Form.Item name="shelfId" noStyle>
        <Input placeholder="Enter shelfId" className="form-input" />
      </Form.Item>

      <Form.Item name="shelfName" noStyle>
        <Input placeholder="Enter shelfName" className="form-input" />
      </Form.Item>

      <Form.Item name="shelfType" noStyle>
        <Select placeholder="Select shelfType" className="form-input">
          <Option value="Freeze">Freeze</Option>
          <Option value="Modular">Modular</Option>
          <Option value="Pegboard">Pegboard</Option>
        </Select>
      </Form.Item>

      <Form.Item name="shelfDimension" noStyle>
        <Select placeholder="Select shelfDimensions" className="form-input">
          <Option value="200x150x40cm">200x150x40cm</Option>
          <Option value="300x150x40cm">300x150x40cm</Option>
          <Option value="400x150x40cm">400x150x40cm</Option>
        </Select>
      </Form.Item>

      <Form.Item name="noOfPartitions" noStyle>
        <Select placeholder="Select noOfPartitions" className="form-input">
          <Option value="1">1</Option>
          <Option value="2">2</Option>
          <Option value="3">3</Option>
          <Option value="4">4</Option>
          <Option value="5">5</Option>


        </Select>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className='submit-button'>
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default Formview;





