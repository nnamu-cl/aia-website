import React from "react";
import { Card, Row, Col, Typography } from "antd";
import './body.css';
import ai_first_video from "./images/sddefault.jpg";
import ai_second_video from "./images/sddefault1.jpg";
import ai_third_video from "./images/sddefault2.jpg";
import { RightOutlined } from '@ant-design/icons';


const { Title, Paragraph } = Typography


function Cards() {
  return (

    <Row gutter={16} style={{ marginTop: 20, marginLeft: 30, marginRight: 30 }}>
      <Col span={8}>
        <Card
          hoverable
          style={{ width: '100%' }}
          cover={<img alt="Nature" src={ai_first_video} />}
        >
          <Paragraph style={{ fontSize: '1.3rem' }} className='card-text'>🚀 Mastering Custom GPT Actions: Integrate External APIs Like a Pro! - Ultimate Tutorial</Paragraph>
          <Paragraph className="card-text">
            <a style={{ textDecoration: 'none', fontSize: '17px', marginRight: '10px', color: "#153cbb" }} href='https://www.youtube.com/watch?v=-D_0ZTSFQ5s'>
              Watch
            </a>
            <RightOutlined style={{ marginRight: '40px', color: "blue" }} />

          </Paragraph>
        </Card>
      </Col>
      <Col span={8}>
        <Card
          hoverable
          style={{ width: '100%' }}
          cover={<img alt="Scenery" src={ai_second_video} />}
        >
          <Paragraph style={{ fontSize: '1.3rem' }} className='card-text'>Unlock Infinite Possibilities: Custom GPT + Pinecone for Comprehensive Data Utilization 🚀📈</Paragraph>
          <Paragraph className="card-text"><a style={{ textDecoration: 'none', fontSize: '17px', marginRight: '10px', color: "#153cbb" }} href='https://www.youtube.com/watch?v=s70WHoVh0lk'>Watch</a>
            <RightOutlined style={{ marginRight: '40px', color: "blue" }} /></Paragraph>          </Card>
      </Col>
      <Col span={8}>
        <Card
          hoverable
          style={{ width: '100%' }}
          cover={<img alt="Mountains" src={ai_third_video} />}
        >
          <Paragraph style={{ fontSize: '1.3rem' }} className='card-text'>🌟 Pinecone + Custom GPTs: Crafting the Future of Tailored AI Solutions 🌐</Paragraph>
          <Paragraph className="card-text"><a style={{ textDecoration: 'none', fontSize: '17px', marginRight: '10px', color: "#153cbb" }} href='https://www.youtube.com/watch?v=-L7qt2g6-gg'>Watch</a>
            <RightOutlined style={{ marginRight: '40px', color: "blue" }} /></Paragraph>
        </Card>
      </Col>
    </Row>

  );
};

export default Cards;


{/* */ }