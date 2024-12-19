# Privy x Frames v2 Demo

Source: https://github.com/farcasterxyz/frames-v2-demo

This is an example [**Frame (v2)**](https://docs.farcaster.xyz/developers/frames/v2/) to demonstrate how you can use Frames alongside Privy's [**Farcaster login**](https://docs.privy.io/guide/guides/farcaster-login) feature to create novel, cross-app experiences for your users.

When a user first opens this demo Frame in their Farcaster client a few things happen. Behind the scenes, Privy automatically logs the user in with their Farcaster account, creates an embedded wallet, and creates a smart account for interacting with the "Yoink!" contract. Users can then [Yoink](https://github.com/horsefacts/yoink) without paying for gas fees.

This app is built with [NextJS](https://nextjs.org/), and makes uses of libraries like [`@farcaster/frame-sdk`](https://www.npmjs.com/package/@farcaster/frame-sdk) and [`viem`](https://viem.sh/) for interacting with the blockchain and the [Farcaster](https://www.farcaster.xyz/) protocol.

## Live Demo

To see this demo in action, share [`https://privy-frames-v2-demo.vercel.app/`](https://privy-frames-v2-demo.vercel.app/) in any Farcaster client that supports Frames (e.g. Warpcast) and interact with it.

## Setup

1. Configure [a new Privy app](https://dashboard.privy.io/) with [Farcaster login enabled](https://docs.privy.io/guide/react/recipes/misc/farcaster#login-with-farcaster) and a Base Sepolia smart wallet configuration. https://docs.privy.io/guide/react/wallets/smart-wallets/configuration

2. Fork this repository, clone it, and open it in your command line:

```sh
git clone https://github.com/<your-github-handle>/privy-frames-v2-demo
```

3. Install the necessary dependencies using your preferred package manager:

```sh
npm i
```

4. Initialize your environment variables by copying the contents of `.env.example.local` to a new `.env.local` file, and fill in the required values. You'll need to set a base URL, and your Privy app ID.

```sh
NEXT_PUBLIC_URL=<insert-the-url-for-your-frame>
PRIVY_APP_ID=<insert-your-privy-app-id>
```

**That's it!** To run the demo locally, execute `npm run dev` and open [http://localhost:3000](http://localhost:3000).

## Testing the frame

You can test this Frame using [Warpcast Embed Tools](https://warpcast.com/~/developers/frames) to preview the frame interaction. Please note that a `localhost` URL will not work with Warpcast Embed Tools, so you should set up a public tunnel to your local app using a tool like [`ngrok`](https://ngrok.com/) or [Cloudflare](https://www.cloudflare.com/products/tunnel/).

## Check out

- `src/components/Demo.tsx` to see how to use Privy to seamlessly login a user in a Farcaster frame
