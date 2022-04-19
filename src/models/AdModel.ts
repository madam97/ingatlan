import axios from 'axios';
import IAd from '../interfaces/IAd';

/** 
 * The API endpoint of the ads
 * @const {string}
 */
const AD_URL = process.env.REACT_APP_API_BASE_URL + '/ads';

/**
 * Returns ads' data
 * @param {object} params
 * @returns {Promise<IAd[] | string>}
 */
const fetchAds = async (params: object = {}): Promise<IAd[] | string> => {
  try {
    const res = await axios.get(AD_URL, {
      params
    });

    return res.data ?? 'no data returned';
  } catch(err) {
    return err instanceof Error ? err.message : 'unknown error';
  }
}

/**
 * Update the given ad's data
 * @param id 
 * @param data 
 * @returns {Promise<IAd | string>}
 */
const patchAd = async (id: number, data: object): Promise<IAd | string> => {
  try {
    const res = await axios.patch(AD_URL + '/' + id, data);

    return res.data ?? 'no data returned';
  } catch(err) {
    return err instanceof Error ? err.message : 'unknown error';
  }
} 

export { AD_URL, fetchAds, patchAd };