import React from 'react';
import { Layout, Row, Col } from 'antd';
import imageF from '../../assets/images/Avatar@3x.png'

const { Sider } = Layout;

const images = [
  'image1.jpg',
  'image2.jpg',
  'image3.jpg',
  'image4.jpg',
  'image5.jpg',
  'image6.jpg',
];

const Sidebar = () => {
  return (
    <Layout style={{ height: '100vh',width:'5vw',marginLeft:'20px',marginTop:'30px',borderRadius:'25px',background:'#232528' }}>
      <Sider width="5%" style={{ backgroundColor: '#232528', marginTop: '2rem', marginLeft: '1rem' }}>
        <Row gutter={[16, 16]} justify="space-between" align="middle">
          {images.slice(0, 5).map((image, index) => (
            <Col span={24} key={index}>
              <img src={imageF}alt={`Image ${index + 1}`} style={{ width: '40px' }} />
            </Col>
          ))}
          <Col span={24} style={{ marginTop: 'auto' }}>
            <img src={imageF} alt="Last Image" style={{ width: '40px',marginTop:'340px' }} />
          </Col>
        </Row>
      </Sider>
    </Layout>
  );
};

export default Sidebar;
