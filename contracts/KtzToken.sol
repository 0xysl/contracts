// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0 <0.8.0;

import "./libs/BEP20.sol";

contract KtzToken is BEP20("KarrotoTZ", "KRTZ") {
    /// @notice Creates `_amount` token to `_to`. Must only be called by the owner (MasterChef).
    function mint(address _to, uint256 _amount) public onlyOwner {
        _mint(_to, _amount);
    }

    /// @notice A record of states for signing / validating signatures
    mapping(address => uint256) public nonces;
}
