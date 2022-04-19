import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { fetchAds } from '../models/AdModel';
import Ad from '../components/Ad';
import Heading from '../components/Heading';
import IAd from '../interfaces/IAd';
import TOrder from '../types/TOrder';

export default function FavoriteList() {

  /** @const {IAd[]} ads The list of favorite ads */
  const [ads, setAds] = useState<IAd[]>([]);

  /** @const {string} activeOrder The id of the current sort command */
  const [activeOrder, setActiveOrder] = useState<string>('');

  /** Fetches favorite ads */
  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const res = await fetchAds({ status: 'checked' });

      if (typeof res !== 'string') {
        setAds(res);
      }
    }

    fetchData();
  }, []);

  /** Sorts ads */
  useEffect(() => {
    const newAds = ads.slice();

    if (!activeOrder) {
      newAds.sort((ad1, ad2) => ad1.adId < ad2.adId ? -1 : 1);
    } else {
      newAds.sort((ad1, ad2) => {
        switch (activeOrder) {
          case 'addressAsc':
            return ad1.address.localeCompare(ad2.address, 'hu-HU');
          case 'addressDesc':
            return -1 * ad1.address.localeCompare(ad2.address, 'hu-HU');
          case 'uploadDateAsc':
            return ad1.uploadDate === ad2.uploadDate ? 0 : (ad1.uploadDate < ad2.uploadDate ? -1 : 1);
          case 'uploadDateDesc':
            return ad1.uploadDate === ad2.uploadDate ? 0 : (ad1.uploadDate < ad2.uploadDate ? 1 : -1);
          default:
            return 0;
        }
      });
    }

    setAds(newAds);
  }, [activeOrder]);

  // ------------------------------------------

  /** @const {TOrder[]} orders The possible sort commands */
  const orders: TOrder[] = [
    { id: 'addressAsc', title: 'Cím szerint növekvő' },
    { id: 'addressDesc', title: 'Cím szerint csökkenő' },
    { id: 'uploadDateAsc', title: 'Feltöltés szerint növekvő' },
    { id: 'uploadDateDesc', title: 'Feltöltés szerint csökkenő' },
  ]

  return (
    <main>
      <Container className="pl-main-menu" fluid>
        <Heading title="Kedvencek" activeOrder={activeOrder} orders={orders} setActiveOrder={setActiveOrder} />

        {ads.map(ad => <Ad className="mt-3" key={ad.adId} ad={ad} showLink showImage showUploadDate />)}
      </Container>
    </main>
  )
}