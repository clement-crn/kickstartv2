// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.8.15;

import "./FactoryContract.sol";

///@notice @dev This contract is for educationnal purpose only
///@dev there is no side effects in this contract
contract CampaignContract {
    struct Request {
        string description;
        uint256 value;
        address payable recipient;
        bool complete;
        uint256 approvalCount;
        mapping(address => bool) approvals;
    }

    uint256 numRequests; //
    mapping(uint256 => Request) public requests;

    address public manager;
    uint256 public minimumContribution;
    uint256 public approversCount;
    mapping(address => bool) public approvers;

    ///@dev a function with this modifier can only be executed by the manager
    modifier restricted() {
        require(
            msg.sender == manager,
            "Attention, le msgsender n'est pas le manager"
        );
        _;
    }

    constructor(uint256 minimum, address managerAddress) {
        manager = managerAddress;
        minimumContribution = minimum;
    }

    ///@dev allow any user (including the manager) to contribute
    function contribute() public payable {
        require(
            msg.value > minimumContribution,
            "Attention, la contribution n'est pas suffisante"
        );
        approvers[msg.sender] = true;
        approversCount++;
    }

    ///@dev  create a request to withdraw. The front-end app should use a form
    function createRequest(
        string calldata description,
        uint256 value,
        address payable recipient
    ) public restricted {
        require(approvers[msg.sender]);
        Request storage r = requests[numRequests];
        r.description = description;
        r.value = value;
        r.recipient = recipient;
        r.complete = false;
        r.approvalCount = 0;
        numRequests++;
    }

    ///@dev can only be called once by donator. Each approver is listed in the map
    function approveRequest(uint256 index) public {
        Request storage r = requests[index];

        require(approvers[msg.sender], "Attention, vous n'etes pas le manager");
        require(!r.approvals[msg.sender], "Vous avez probablement deja vote");

        r.approvals[msg.sender] = true;
        r.approvalCount++;
    }

    ///@dev allow the manager to finalize his requests, only if at least 50% of approvers are OK
    function finalizeRequest(uint256 index) public restricted {
        Request storage r = requests[index];
        require(r.approvalCount > (approversCount / 2));
        require(!r.complete);

        r.complete = true;
        r.recipient.transfer(r.value);
    }

    ///@dev return general informations about a campaign
    function getSummary()
        public
        view
        returns (uint256, uint256, uint256, uint256, address)
    {
        return (
            minimumContribution,
            address(this).balance,
            numRequests, //remplace length
            approversCount,
            manager
        );
    }

    ///@dev return the number of requests (could be displayed with the number of approved requests)
    function getRequestsCount() public view returns (uint256) {
        return numRequests;
    }
}
