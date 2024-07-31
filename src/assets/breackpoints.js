const size = {
    mobileL: '425px',
    tabletS: '600px',
    tablet: '768px',
    tabletM: '900px', 
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
}

export const device = {
    mobileL: `(min-width: ${size.mobileL})`,
    tabletS: `(min-width: ${size.tabletS})`,
    tablet: `(min-width: ${size.tablet})`,
    tabletM: `(min-width: ${size.tabletM})`, 
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`
}
