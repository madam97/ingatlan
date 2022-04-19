import React from 'react';
import { Card } from 'react-bootstrap';
import { Calendar } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import IAd from '../interfaces/IAd';
import FavoriteButton from './FavoriteButton';

type AdProps = {
  ad: IAd,
  showUploadDate?: boolean
}

export default function Ad({ ad, showUploadDate = false }: AdProps) {
  return (
    <Card className="ad-component mt-3 border-0 shadow-lg">
      <Card.Img src={ad.image} />
      <Card.Body>
        <Card.Title>{ad.address}</Card.Title>
        <Card.Text className="ad-component-price">{ad.price.toLocaleString('hu-HU')} {ad.currency}</Card.Text>
        {showUploadDate && 
          <Card.Text className="ad-component-date">
            <Calendar /> {ad.uploadDate}
          </Card.Text>
        }
        <FavoriteButton adId={ad.adId} status={ad.status} />
      </Card.Body>

      <Link to={`/ads/${ad.adId}`}></Link>
    </Card>
  )
}