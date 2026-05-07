export const navigateToSection = (navigate, sectionId) => {
  sessionStorage.setItem('scrollTo', sectionId)
  navigate('/')
}