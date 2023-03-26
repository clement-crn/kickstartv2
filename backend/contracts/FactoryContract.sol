// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.8.15;

import "./CampaignContract.sol";

//le paiement sera fait par l'user qui demande le déploiement d'un nouveau contrat
//campaignFacotry permet aussi de sécuriser le contrat en évitant de le modifier
contract Factory {
    CampaignContract[] public campaigns;

    function createCampaign(uint256 minimum) public {
        CampaignContract deployed = new CampaignContract(minimum, msg.sender);
        campaigns.push(deployed);
    }

    function getCampaigns() public view returns (CampaignContract[] memory) {
        return campaigns;
    }
}
