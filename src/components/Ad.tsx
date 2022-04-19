import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { Calendar } from 'react-bootstrap-icons';
import IAd from '../interfaces/IAd';
import FavoriteButton from './FavoriteButton';

type AdProps = {
  className?: string,
  ad: IAd,
  showLink?: boolean,
  showImage?: boolean,
  showUploadDate?: boolean,
  children?: React.ReactNode | React.ReactNode[]
}

export default function Ad({ className, ad, showLink = false, showImage = false, showUploadDate = false, children }: AdProps) {
  return (
    <Card className={`ad-component border-0 shadow-lg ${className ?? ''}`}>
      {showImage && <Card.Img src={ad.image} />}
      <Card.Body>
        <Card.Title>{ad.address}</Card.Title>
        <Card.Text className="ad-component-price">{ad.price.toLocaleString('hu-HU')} {ad.currency}</Card.Text>
        {showUploadDate && 
          <Card.Text className="ad-component-date">
            <Calendar /> {ad.uploadDate}
          </Card.Text>
        }

        <FavoriteButton adId={ad.adId} status={ad.status} />
        
        {showLink && <Link className="ad-component-link" to={`/ads/${ad.adId}`}></Link>}

        {children}
      </Card.Body>
    </Card>
  )
}