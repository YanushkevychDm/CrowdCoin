import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xa7194F8556DFa43E43691D297a6F69447a7ed967'
);

export default instance;