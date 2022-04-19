import React, { useState } from 'react';
import { Star, StarFill } from 'react-bootstrap-icons';
import { patchAd } from '../models/AdModel';
import TAdStatus from '../types/TAdStatus';

type FavoriteButtonProps = {
  adId: number,
  status: TAdStatus
}

export default function FavoriteButton({ adId, status }: FavoriteButtonProps) {

  /** @const {TAdStatus} statusState The current favorite status of the ad */
  const [statusState, setStatusState] = useState<TAdStatus>(status);

  /**
   * Handles the clicking on the favorite button; adding or removing ad from favorites
   * @param e 
   */
  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>): Promise<void> => {
    e.preventDefault();
    
    const newStatus = statusState === 'unchecked' ? 'checked' : 'unchecked';

    const res = await patchAd(adId, { status: newStatus });

    if (typeof res !== 'string') {
      setStatusState(newStatus);
    }
  }

  // ------------------------------------------

  return (
    <button className="favorite-btn-component btn shadow-lg" onClick={handleClick}>
      {statusState === 'unchecked' && <Star className="text-gray-500" />}
      {statusState === 'checked' && <StarFill className="text-yellow" />}
    </button>
  )
}