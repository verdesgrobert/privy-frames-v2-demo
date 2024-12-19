# Privy x Frames v2 Demo
This is an example Frame to demonstrate how you can use Frames alongside Privy's Farcaster login feature to create novel, cross-app experiences for your users.

When a user first sees this demo Frame in their Farcaster client, they can click a button to redeem a testnet NFT. Behind the scenes, Privy creates an embedded wallet associater with the current Farcaster user and airdrops an NFT to it. Users can view their NFT by signing in with their Farcaster account to the Privy Demo. This is a testnet NFT on the Optimism Sepolia testnet.

This app is built with NextJS, and makes uses of libraries like @coinbase/onchainkit, @farcaster/hub-node-js, and viem for interacting with the blockchain and the Farcaster protocol.
