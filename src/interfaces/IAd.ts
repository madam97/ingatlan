import TAdStatus from '../types/TAdStatus';
import TCurrency from '../types/TCurrency';
import IContact from './IContact';

interface IAd {
  adId: number,
  address: string,
  price: number,
  image: string,
  currency: TCurrency,
  uploadDate: string,
  description: string,
  status: TAdStatus,
  contact: IContact
}

export default IAd;