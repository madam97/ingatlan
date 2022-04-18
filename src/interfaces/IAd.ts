import IContact from './IContact';

interface IAd {
  adId: number,
  address: string,
  price: number,
  image: string,
  currency: 'Euro' | 'Ft',
  uploadDate: string,
  description: string,
  status: 'checked' | 'unchecked',
  contact: IContact
}

export default IAd;