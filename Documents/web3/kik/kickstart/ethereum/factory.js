import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xb85b5f842798840832941e3A0b1E8B759b08cF8B'
);

export default instance;
