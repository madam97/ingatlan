import React from 'react';
import { Card } from 'react-bootstrap';
import IAd from '../interfaces/IAd';

type AdProps = {
  ad: IAd
}

export default function Ad({ ad }: AdProps) {
  return (
    <Card className="ad-component mt-3 border-0 shadow">
      <Card.Img src={ad.image} />
      <Card.Body>
        <Card.Title className="mb-3">{ad.address}</Card.Title>
        <Card.Text>
          <p className="subheading-font">{ad.price} {ad.currency}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}