export class BreakPoints {
  static lg(template: TemplateStringsArray, ...array: any[]) {
    return `
      @media only screen and (max-width: 1024px){
        ${template.reduce((result, item, index) => {
          return `${result} ${array[index - 1] ?? ""}${item}`;
        })}
      }
    `;
  }
  static md(template: TemplateStringsArray, ...array: any[]) {
    return `
      @media only screen and (max-width: 768px){
         ${template.reduce((result, item, index) => {
           return `${result} ${array[index - 1] ?? ""}${item}`;
         })}
      }
    `;
  }
  static sm(template: TemplateStringsArray, ...array: any[]) {
    return `
      @media only screen and (max-width: 481px){
         ${template.reduce((result, item, index) => {
           return `${result} ${array[index - 1] ?? ""}${item}`;
         })}
      }
    `;
  }
}
export type BreakPointSize = {
  lg?: number;
  md?: number;
  sm?: number;
};

export const getTypoBreakPoints = (lg?: number, md?: number, sm?: number) => {
  return `
  ${BreakPoints.lg`
    font-size: ${lg}px;
  `}
  ${BreakPoints.md`
    font-size: ${md}px;
  `}
  ${BreakPoints.sm`
    font-size: ${sm}px;
  `}
  `;
};
