import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x1b9b2AcEd10f73171AF7f9a948a2eaC356977527'
);

export default instance;