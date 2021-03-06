## Guide for learning Cosmos Gravity Bridge

- Simple blog post: [How gravity works](https://blog.althea.net/how-gravity-works/)

- Gravity currently can transfer ERC20 assets originating on Cosmos or Ethereum to and from Ethereum, as well as move Cosmos assets to Ethereum as ERC20 representations.

- Set up dev environment: [Dev environment setup](https://github.com/althea-net/cosmos-gravity-bridge/blob/main/docs/developer/environment-setup.md). Make sure to complete all steps till :

```bash
# builds the original docker container, only have to run this once
./tests/build-container.sh

# This starts the Ethereum chain, Cosmos chain, and a full set of Orchestrators + relayers
./tests/start-chains.sh
```

- When we run `./tests/start-chains.sh`, the following services start inside a docker container:\
    1) Cosmos SDK Chain
    2) Orchestrator (Eth Signer + Oracle in a single binary)
    3) Ethereum Chain ( With a smart contract called `Gravity.sol`)


- How Tokens are transferred: https://github.com/althea-net/cosmos-gravity-bridge/blob/main/docs/design/mint-lock.md

- The important point here is that `Cosmos` based assets (ie Assets originally born on Cosmos) need corresponding assets on `Ethereum`.

- So, a Cosmos based asset first must be represented on Ethereum before it's possible to bridge it. To do this the Gravity.sol contract contains an endpoint called `deployERC20`.

- Transaction Batching: https://github.com/althea-net/cosmos-gravity-bridge/blob/main/spec/batch-creation-spec.md

- Oracle: https://github.com/althea-net/cosmos-gravity-bridge/blob/main/docs/design/oracle.md

- Ethereum Signing: https://github.com/althea-net/cosmos-gravity-bridge/blob/main/docs/design/ethereum-signing.md

## Interesting features

### Coin Transfers

- What is `voucher`: Represents a bridged ETH token on the Cosmos side (ie The cosmos equivalent of an ERC20 token that originated in Ethereum side). Their denom is has a gravity prefix and a hash that is build from contract address and contract token. The denom is considered unique within the system.

- During Ethereum -> Cosmos transfer. When more than 66% (by voting power) of validators claim to have observed a particular transfer (let's say `A` -> `B` ), the assets are sent to the Cosmos Address (`B` in our case). All validators run `Oracle` to watch for such events on the `Ethereum` chain

- Cosmos -> Ethereum transfers are batched due to high Gas on the mainnet. Transfers of the same token are picked from a `pool` of transactions and then `relayers` relay them to Ethereum for a reward

- When are tokens minted in Cosmos? :- Consider a Ethereum -> Cosmos transfer in which the Cosmos Tokens didn't originate on Cosmos (this can be checked). In this case, tokens are minted and sent. In case the tokens originated on Cosmos, then they are transferred from the Gravity Module account to the cosmos address (receipent) because at some point they were transferred to the module account during a Cosmos->Ethereum transfer

- When are tokens burnt in Cosmos? :- Consider a Cosmos -> Ethereum transfer in which the Cosmos Tokens are `vouchers` (ie Originated on ethereum side), the vouchers are burnt.

- In case of a Ethereum -> Cosmos transfer in which the tokens originated on Cosmos side, the required amount is sent from `gravity` module's acc to the recipient

- Rewards are paid on Ethereum side to make relaying competitive. Also, the reward has to be paid in the same ERC20 token that is being transferred to Ethereum


### Architecture related
- Malicious users can spam the cosmos network with request to transfer assets with too less fees. The relayers may not pick them due to unprofitability. Hence, they would just congest the network. To avoid this, Transaction Batching is done in this [way](https://github.com/althea-net/cosmos-gravity-bridge/blob/main/docs/design/ethereum-signing.md)



