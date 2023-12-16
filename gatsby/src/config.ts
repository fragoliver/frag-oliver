import {ConfigShape} from "./types"

export const glConfig: ConfigShape = {
    siteTitle: "Frag Oliver",
    siteDescription: "Frag mich etwas",
    siteEmail: "fragensieoliver@gmail.com",
    siteDisplayname: "Oliver",
    siteUrl: "https://frag-oliver.web.app/",
    siteFacebook: "https://www.facebook.com/listingslabspage",
    siteKeywords: "listingslab, goldlabel, opensource",
    siteImage: "/jpg/153920249.jpg",
    siteIcon: "/svg/characters/biker.svg",
    siteTwitter: "@listingslab",
    siteTheme: "#22939C",
    theme: {
        slug: "teal",
        primaryColor: "#22939C",
        secondaryColor: "#126970",
        defaultDarkmode: false,
    },
    mapbox: {
        light: "mapbox://styles/listingslab/clmrnpplw00ej01nsfv8l4q25",
        dark: "mapbox://styles/listingslab/clmrnt68o02a801qxevn0bt6u"
    },
    debuggerEnabled: true,
    darkmodeEnabled: true,
    membersOnly: true,
    passwordOnly: true,
    sharing: true,
}
