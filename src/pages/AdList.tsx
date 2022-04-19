import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { fetchAds } from '../models/AdModel';
import Ad from '../components/Ad';
import Heading from '../components/Heading';
import IAd from '../interfaces/IAd';

export default function AdList() {

  const [ads, setAds] = useState<IAd[]>([]);

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
    <main className="pl-main-menu">
      <Container fluid>
        <Heading title="Lista" count={ads.length} />

        {ads.map(ad => <Ad ad={ad} />)}
      </Container>
    </main>
  )
}