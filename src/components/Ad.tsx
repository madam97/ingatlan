import React from 'react';
import { Card } from 'react-bootstrap';
import IAd from '../interfaces/IAd';
import FavoriteButton from './FavoriteButton';

type AdProps = {
  ad: IAd
}

export default function Ad({ ad }: AdProps) {
  return (
    <Card className="ad-component mt-3 border-0 shadow-lg">
      <Card.Img src={ad.image} />
      <Card.Body>
        <Card.Title>{ad.address}</Card.Title>
        <Card.Text>
          <p className="subheading-font">{ad.price} {ad.currency}</p>

          <FavoriteButton adId={ad.adId} status={ad.status} />
        </Card.Text>
      </Card.Body>
    </Card>
  )
}