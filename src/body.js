import React from 'react';
import { Layout, Button, Card, Space, Row, Col, Typography } from 'antd';
import './body.css'; // Custom CSS 
import TopBar from './TopBar';
import Cards from './card_s';
import MyCard from './burner';
import ContactUs from './contact_us.jsx';

const { Footer } = Layout;
const { Text } = Typography;


const { Title, Paragraph } = Typography;

function App() {
  const title = "Your Title"
  
  return (
    <Layout className="layout">
      <TopBar />
      <div className="content">
        <Title level={2} className="mission-text">AI FOR ALL</Title>
        <Title level={1} className="main-text">Democratizing industry-leading AI: <br/>Research and Publications</Title>
        <Title level={6} className="subtitle-text"> Our continuing efforts to make top-tier AI tools and knowledge universally accessible to all.</Title>

        <Button 
 type="primary" 
 className="learn-more-button watch-button"
 style={{width: '150px', height: '50px', fontSize: '20px'}}
 onClick={() => window.open('https://www.youtube.com/channel/UCuDW_KBcvfw23iyGvJnx1tg', '_blank')}
>
 Watch
</Button>
        <div className="latest-news-section">
          <Title level={2} className="latest-news-title latest-videos">Latest Videos</Title>
          <Paragraph className="latest-news-description GPT-videos">Discover our latest GPT Videos and updates from the lab</Paragraph>
        </div>
      </div>
     

    
      <Cards/>
      <div className = "burner" style={{alignSelf: 'center',  
    }}>
    <MyCard/>
       </div>

       {/* <ContactUs/> */}
      {/* <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <Title level={2}>Technologies</Title>
        <Paragraph style={{ fontSize: '1rem' }}>
          Breakthrough research. Transformative products.
        </Paragraph>
      </div> */}
      {/* <Row gutter={16} style={{ marginTop: 20, marginLeft: 30, marginRight: 30 }}>
        <Col span={8}>
          <Card
            hoverable
            style={{ width: '100%' }}
            cover={<img alt="Nature" src="#" />}
          >
          </Card>
          <Title level={4} style={{ textAlign: 'center' }}>PaLM 2</Title>
        </Col>
        <Col span={8}>
          <Card
            hoverable
            style={{ width: '100%' }}
            cover={<img alt="Scenery" src="#" />}
          >
          </Card>
          <Title level={4} style={{ textAlign: 'center' }}>SynthID</Title>
        </Col>
        <Col span={8}>
          <Card
            hoverable
            style={{ width: '100%' }}
            cover={<img alt="Mountains" src="#" />}
          >
          </Card>
          <Title level={4} style={{ textAlign: 'center' }}>AlphaFold</Title>
        </Col>
      </Row> */}
      {/* <div style={{ width: '80%', height: '40%', margin: '20px auto' }}>
        <Card style={{ width: '100%', height: '100%' }}>
          <div className="custom-card-overlay">
            <img alt="Example" src="#" style={{ width: '100%', height: '100%' }} />
            <div className="text-overlay">
              <Paragraph style={{ fontSize: '2rem', textAlign: 'center' }}>
                Making AI more inclusive through imagery
              </Paragraph>
              <Button className="rounded-button">Find out more</Button>
            </div>
          </div>
        </Card>
      </div>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <Title level={2}>Impact</Title>
          <Paragraph style={{ fontSize: '1rem' }}>
           Working across Google to improve products<br/> used by billions of people.
         </Paragraph>
      </div> */}
      
       {/* New section with two cards */}
       {/* <Row justify="center" style={{ marginTop: '20px' }}>
        <Col span={6} style={{ textAlign: 'center', margin: '0 10px' }}>
          <Card
            hoverable
            style={{ width: '100%' }}
            cover={<img alt="MuZero" src="#" />} // Replace with actual image URL
          />
          <Title level={4}>MuZero, AlphaZero, and AlphaDev: Optimizing computer systems</Title>
        </Col>
        <Col span={6} style={{ textAlign: 'center', margin: '0 10px' }}>
          <Card
            hoverable
            style={{ width: '100%' }}
            cover={<img alt="Google Cloud" src="#" />} // Replace with actual image URL
          />
          <Title level={4}>Google Cloud: Driving digital transformation</Title>
        </Col>
      </Row>
      <div style={{ textAlign: 'left', marginTop: '20px',  marginLeft: '60px'}}>
        <Title level={2}>Responsibility</Title>
          <Paragraph style={{ fontSize: '1rem' }}>
          We want AI to benefit the world, so we must be thoughtful about how it’s built and used
         </Paragraph>
      </div> */}
      {/* <Row justify="center" style={{ marginTop: '20px' }}>
        <Col span={6} style={{ textAlign: 'left', margin: '0 10px' }}>
          <Card
            hoverable
            style={{ width: '100%' }}
            cover={<img alt="Responsibility & Safety" src="#" />} // Replace with actual image URL
          >
            <Title level={2}>Responsibility & Safety</Title>
            <Paragraph>
              We want AI to benefit the world, so we must be thoughtful about how it’s built and used.
            </Paragraph>
          </Card>
        </Col>
        <Col span={6} style={{ textAlign: 'left', margin: '0 10px' }}>
          <Card
            hoverable
            style={{ width: '100%' }}
            cover={<img alt="Our Principles" src="#" />} // Replace with actual image URL
          >
            <Title level={2}>Our Principles</Title>
            <Paragraph>
              While we are optimistic about the potential of AI, we recognize that advanced technologies can raise important challenges that must be addressed clearly, thoughtfully, and affirmatively.
            </Paragraph>
          </Card>
        </Col>
      </Row> */}
      <Footer style={{ textAlign: 'center', padding: '24px 50px' }}>
        <Row justify="space-between" align="middle">
          <Col>
            <Text>©2023 AI Applied</Text>
          </Col>
          <Col>
            <Space>
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Use</a>
            </Space>
          </Col>
          <Col>
            <Text>Contact Us: namusanganicho@gmail.com.com</Text>
          </Col>
        </Row>
      </Footer>

      </Layout>
  );
}

export default App;
