const customMediaQuery = (maxWidth: number): string => `@media (max-width: ${maxWidth}px)`;
export enum BREAKPOINTS {
  mobile = 576,
  tablet = 768,
  desktop = 922,
}
export const media = {
  custom: customMediaQuery,
  desktop: customMediaQuery(BREAKPOINTS.desktop),
  tablet: customMediaQuery(BREAKPOINTS.tablet),
  phone: customMediaQuery(BREAKPOINTS.mobile),
};
