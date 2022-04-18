import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Heading from '../components/Heading';
import IAd from '../interfaces/IAd';

export default function AdList() {

  const [ads, setAds] = useState<IAd[]>([]);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const res = await axios.get(process.env.REACT_APP_API_BASE_URL + '/ads');

        if (res.data) {
          setAds(res.data);
        }
      } catch(err) {

      }
    }

    fetchData();
  }, []);

  // ------------------------------------------

  return (
    <main className="pl-main-menu">
      <Container fluid>
        <Heading title="Lista" count={ads.length} />
      </Container>
    </main>
  )
}