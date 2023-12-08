import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

function ClickableCard({ title, description, link }) {
  const handleCardClick = () => {
    window.open(link, '_blank');
  };

  return (
    <div onClick={handleCardClick} style={{ cursor: 'pointer' }}>
      <Card
        hoverable
        style={{ width: 300 }}
        cover={<img alt="Card cover" src="your-image-url.jpg" />}
      >
        <Meta title={title} description={description} />
      </Card>
    </div>
  );
}

export default ClickableCard;
