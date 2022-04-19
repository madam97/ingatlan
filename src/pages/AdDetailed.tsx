import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container, Carousel, Modal } from 'react-bootstrap';
import { ArrowLeftShort, ChevronLeft } from 'react-bootstrap-icons';
import { fetchAd } from '../models/AdModel';
import Ad from '../components/Ad';
import Heading from '../components/Heading';
import IAd from '../interfaces/IAd';

export default function AdDetailed() {

  /** @const {string | undefined} id The active ad's id */
  const { id } = useParams();

  /** @const {IAd} ad The active ad's data */
  const [ad, setAd] = useState<IAd>();

  /** @const {boolean} showContacts If true, shows the contacts' modal */
  const [showContacts, setShowContacts] = useState<boolean>(false);

  /** Fetches the active ad */
  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      let ad: IAd | undefined = undefined;

      if (id) {
        const res = await fetchAd( parseInt(id) );

        if (typeof res !== 'string') {
          ad = res;
        }
      }

      setAd(ad);
    }

    fetchData();
  }, [id]);

  /** Shows or hides the contacts' modal */
  const toggleContactModal = (): void => {
    setShowContacts(!showContacts);
  }

  // ------------------------------------------

  return (
    <main id="page-ad-detailed">
      <Container className="d-none d-sm-block mb-6 pl-main-menu pl-main-menu-md" fluid>
        <Link className="btn-go-back btn btn-secondary" to="/">
          <ArrowLeftShort /> Vissza
        </Link>

        <Heading title="Részletek" />
      </Container>

      <Link className="btn-go-back d-flex d-sm-none btn btn-secondary" to="/">
        <ChevronLeft />
      </Link>

      {ad && 
        <>
          <Container className="mb-4">
            <div className="ad-images-grid d-none d-sm-grid mb-4">
              <div className="bg-image" style={{ backgroundImage: `url(${ad.image})` }}></div>
              <div className="bg-image" style={{ backgroundImage: `url(${ad.image})` }}></div>
              <div className="bg-image" style={{ backgroundImage: `url(${ad.image})` }}></div>
              <div className="bg-image" style={{ backgroundImage: `url(${ad.image})` }}></div>
            </div>

            <Carousel className="ad-images-slide d-block d-sm-none" controls={false}>
              <Carousel.Item className="bg-image" style={{ backgroundImage: `url(${ad.image})` }} />
              <Carousel.Item className="bg-image" style={{ backgroundImage: `url(${ad.image})` }} />
              <Carousel.Item className="bg-image" style={{ backgroundImage: `url(${ad.image})` }} />
              <Carousel.Item className="bg-image" style={{ backgroundImage: `url(${ad.image})` }} />
            </Carousel>

            <Ad ad={ad} showImage={false} showUploadDate>
              <div className="my-2 my-sm-4 p-3 rounded-1 shadow-inset fs-sm">{ad.description}</div>

              <div className="text-end">
                <button className="btn btn-primary btn-lg heading-font" onClick={toggleContactModal}>
                  Kapcsolatfelvétel
                </button>
              </div>
            </Ad>
          </Container>

          <Modal show={showContacts} centered onHide={toggleContactModal}>
            <Modal.Header className="heading-font" closeButton>
              Kapcsolatfelvétel
            </Modal.Header>
            <Modal.Body className="text-center">
              <p>
                <a className="link-primary" href={`mailto:${ad.contact.email}`}>{ad.contact.email}</a>
              </p>

              {ad.contact.parsedPhoneNumbers.map((phoneNumber, index) => 
                <p className={index+1 === ad.contact.parsedPhoneNumbers.length ? 'mb-0' : ''}>
                  <a key={phoneNumber} className="link-primary" href={`tel:${phoneNumber}`}>{phoneNumber}</a>
                </p>
              )}
            </Modal.Body>
          </Modal>
        </>
      }
    </main>
  )
}