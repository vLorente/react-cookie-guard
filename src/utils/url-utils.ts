export const currentPage = () => {
    const path = window.location.pathname
    const currentPageName = path.substring(1)
    return currentPageName
}