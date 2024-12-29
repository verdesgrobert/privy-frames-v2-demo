export async function GET() {
  const appUrl = process.env.NEXT_PUBLIC_URL;

  const config = {
   
  "accountAssociation": {
    "header": "eyJmaWQiOjQwOTYzNywidHlwZSI6ImN1c3RvZHkiLCJrZXkiOiIweGRBNWJGNjkxMmViNzI1MUU3RDI3NDI4YTdBOGNhRjU2RjhiMzFiRDkifQ",
    "payload": "eyJkb21haW4iOiJzdGFnaW5nLnN0cmVhbW0udHYifQ",
    "signature": "MHhiOGVlNWQwMTQ5MmNhZTI5ODBlYzA2ZjcwMmI5MjkxYTEwMzgyNzFkMTM1MWYyNWQxNTUzN2NiNTU2ZDI4OGZiNzdiNTAzNWIyYTEzNDFkNjBhZTQ2NzEzYTBlY2YyYjdiMDllM2QxNDgxNTAxMmY1NGQwMDc4MWUzMTJmNjk3ZTFj"
  },
  "frame": {
    "version": "1",
    "name": "Example Frame",
    "iconUrl": "https://staging.streamm.tv/icon.png",
    "homeUrl": "https://staging.streamm.tv",
    "imageUrl": "https://staging.streamm.tv/image.png",
    "buttonTitle": "Check this out",
    "splashImageUrl": "https://staging.streamm.tv/splash.png",
    "splashBackgroundColor": "#eeccff",
    "webhookUrl": "https://staging.streamm.tv/api/webhook"
  }

  };

  return Response.json(config);
}
