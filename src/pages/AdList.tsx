import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { fetchAds } from '../models/AdModel';
import Ad from '../components/Ad';
import Heading from '../components/Heading';
import IAd from '../interfaces/IAd';

export default function AdList() {

  /** @const {IAd[]} ads The list of all ads */
  const [ads, setAds] = useState<IAd[]>([]);

  /** Fetches ads */
  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const res = await fetchAds();

      if (typeof res !== 'string') {
        setAds(res);
      }
    }

    fetchData();
  }, []);

  // ------------------------------------------

  return (
    <main>
      <Container className="pl-main-menu mb-4" fluid>
        <Heading title="Lista" count={ads.length} />

        {ads.map(ad => 
          <Ad className="mt-3" key={ad.adId} ad={ad} showLink showImage />
        )}
      </Container>
    </main>
  )
}