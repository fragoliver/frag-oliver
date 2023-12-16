# Frag Oliver

A ChatGPT app for Daddy's website

## Goldlabel Open Source

> This software is Open Source and Free

#### Get started

Identify where you're going to clone the repository. We'll call this `<working-repo>`. Decide on the machine readable name `<your-project>`. Clone the repo and install dependencies

```bash
cd <working-dir>
git clone https://github.com/listingslab-software/open-source <your-project>
cd <your-project>
cd gatsby
npm install
cd ../
```

Open and configure `gatsby/src/config`

```javascript
export const glConfig: ConfigShape = {
    siteDisplayname: "Display Name", 
    siteUrl: "https://yourdomain.com",
    siteEmail: "you@yourdomain.com",
    siteFacebook: "https://www.facebook.com/yourfacebook",
    siteTitle: "Your Site Name",
    siteDescription: "Tagline,
    siteKeywords: "default, keywords",
    siteImage: "/jpg/default.jpg",
    siteIcon: "/svg/iOS.svg",
    siteTwitter: "@yourtwitter",
    siteTheme: "#C5C5C5",
    theme: {
        slug: "opensource",
        primaryColor: "#C5C5C5",
        secondaryColor: "#616161",
    },
    plugins: ["Geolocator", "Lingua", "Tings"],
```

Start with the command `npm start`

When Gatsby has finished starting the dev server, it's available on 
http://localhost:8000


## Firebase Cloud Functions

Cloud Functions for Firebase is a serverless framework that lets you automatically run backend code in response to events triggered by background events, HTTPS requests, the Admin SDK, or Cloud Scheduler jobs. Your JavaScript, TypeScript or Python code is stored on Google Cloud infrastructure and runs in a managed environment. There's no need to manage and scale your own servers

## Express

```javascript
const app = express();
app.use(cors({credentials: true}));
```


