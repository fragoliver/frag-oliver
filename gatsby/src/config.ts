import {ConfigShape} from "./types"

export const glConfig: ConfigShape = {
    siteTitle: "Frag Oliver",
    siteDescription: "Frag mich etwas",
    siteEmail: "fragensieoliver@gmail.com",
    siteDisplayname: "Oliver",
    siteUrl: "https://frag-oliver.web.app/",
    siteFacebook: "https://www.facebook.com/listingslabspage",
    siteKeywords: "law",
    siteImage: "/jpg/153920249.jpg",
    siteIcon: "/svg/iOS.svg",
    siteTwitter: "@listingslab",
    siteTheme: "#333",
    theme: {
        slug: "black",
        primaryColor: "#333",
        secondaryColor: "#222",
        defaultDarkmode: false,
    },
    mapbox: {
        light: "mapbox://styles/listingslab/clmrnpplw00ej01nsfv8l4q25",
        dark: "mapbox://styles/listingslab/clmrnt68o02a801qxevn0bt6u"
    },
    debuggerEnabled: true,
    darkmodeEnabled: false,
    membersOnly: true,
    passwordOnly: true,
    sharing: false,
}
