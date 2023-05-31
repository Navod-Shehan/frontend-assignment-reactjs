import React, { useState, useEffect } from "react";
import { Row, Col, Table, Button, Input, Image, Modal } from "antd";
import scanner from "../../assets/images/Scanner@2x.png";
import add from "../../assets/images/Add.png";
import "./Listview.css";
import Sidebar from "../Sidebar/Sidebar";
import Detailsview from "../Detailsview/Detailsview";
import Formview from "../Formview/Formview";
import Gear from "../../assets/images/Gear.png"
import Snow from "../../assets/images/Snow.png"

const Listview = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDetailsViewOpen, setIsDetailsViewOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState();
  const [data, setData] = useState()

  useEffect(() => {
    setData([]);
    const storedData = localStorage.getItem("data");

    if (storedData) {
      try {
        setData(JSON.parse(storedData));
      } catch (error) {
        console.error('Error parsing data from local storage:', error);
      }
    }
  }, []);

  const handleRowClick = (data) => {
    console.log(data);
    setIsDetailsViewOpen(true);
    setSelectedRow(data);

  };
  const handleDetailsViewOk = () => {
    setIsDetailsViewOpen(false);
  }
  const handleDetailsViewCancel = () => {
    setIsDetailsViewOpen(false);
  }

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  
  //table columns
  const columns = [
    {
      title: "Avatar",
      dataIndex: "avatar",
      key: "avatar",
      render: (avatarUrl) => <Image src={Snow} alt="Avatar" width={30} />,
      width: 200,
    },
    {
      title: "ShelfId",
      dataIndex: "shelfId",
      key: "shelfId",
      render: (shelfId) => (
        <div>
          <div>Shelf front { }</div>
          <div style={{ fontSize: "12px", color: "gray" }}>{shelfId}</div>
        </div>
      ),
      width: 200,
    },
    {
      title: "ShelfType",
      dataIndex: "shelfType",
      width: 200,
      key: "shelfType",
      render: (shelfType) => (
        <div>
          <div> {shelfType}</div>
          <div style={{ fontSize: "12px", color: "gray" }}>Shelf type</div>
        </div>
      ),
    },
    {
      title: "ShelfDimension",
      width: 200,
      dataIndex: "shelfDimension",
      key: "shelfDimension",
      render: (shelfDimension) => (
        <div>
          <div> {shelfDimension}</div>
          <div style={{ fontSize: "12px", color: "gray" }}>
            Shelf dimensions
          </div>
        </div>
      ),
    },
    {
      title: "Action1",
      key: "action1",
      width: 200,
      render: (text, record) => (

        <Button
          style={{
            backgroundColor: "black",
            color: "white",
            borderRadius: "20px",
          }}
          onClick={() => handleButtonClick(record.shelfId)}
        >
          Delete
        </Button>
      ),
    },
    {
      title: "Action2",
      key: "action2",
      width: 200,
      render: (text, record) => (
        <Button
          style={{
            backgroundColor: "black",
            color: "white",
            borderRadius: "50px",
          }}
          onClick={() => handleRowClick(record)}
        >
          <img src={Gear}/>
        </Button>
      ),
    },
  ];

  const handleButtonClick = (id) => {
    const index = data.findIndex((obj) => obj.shelfId === id);

    console.log(`Button clicked for ID: ${id}`);
    if (index !== -1) {
      // Create a copy of the array state
      const newData = [...data];

      // Remove the object from the copied array
      newData.splice(index, 1);

      // Update the state with the modified array
      setData(newData);
    }


    // Retrieve the data from local storage
    const storedData = localStorage.getItem('data');

    if (storedData) {
      const dataArray = JSON.parse(storedData);


      const updatedArray = dataArray.filter(obj => obj.shelfId !== id);

      // Store the modified array back in local storage
      localStorage.setItem('data', JSON.stringify(updatedArray));

    };
  }

  return (
    <>
      {/* Main Container */}
      <Row className="container">
        {/* sidebar */}
        <Col span={2}>
          <Sidebar />
        </Col>

        {/* rightBar */}
        <Col span={22}>
          {/* header */}
          <Row className="rightHeader">
            <Col span={22} className="text-header">
              <h4>FixelMagic Shelf Configuration</h4>
              <h3>Shelves</h3>
            </Col>
            <Col span={2} className="header-button">
              <Button type="primary" shape="circle">
                <img src={scanner} alt="scanner" />
              </Button>
            </Col>

            {/* SearchBar */}
            <Col span={24}>
              <Input placeholder="Placeholder" className="search-bar" />
            </Col>
          </Row>

          {/* Buttons */}
          <Row className="button-row">
            <Col span={20}>
              <Button className="buttons-all" type="primary" shape="circle">
                All
              </Button>
              <Button className="buttons-all" type="primary" shape="round">
                Freeze
              </Button>
              <Button className="buttons-all" type="primary" shape="round">
                Modular
              </Button>
              <Button className="buttons-all" type="primary" shape="round">
                Pegboard
              </Button>
            </Col>
            <Col span={4}>
              <Button type="primary" shape="round" onClick={showModal}>
                {/* <img src={add} alt="add" /> */}
                Add Shelf
              </Button>

              <Modal
                title="Add New Shelf"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                wrapClassName="custom-modal"
              >
                <Formview setData={setData} data={data} />
              </Modal>

              <Modal
                title="Shelf Front"
                open={isDetailsViewOpen}
                onOk={handleDetailsViewOk}
                onCancel={handleDetailsViewCancel}
                wrapClassName="custom-modal"
              >
                <Detailsview setData={setData} data={selectedRow} allData={data} />

              </Modal>
            </Col>
          </Row>

          {/* table */}
          <Row className="table-row">
            <Col span={24} className="table-cont">
              <Table
                className="custom-table"
                columns={columns}
                dataSource={data}
                showHeader={false}
                pagination={false}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Listview;
