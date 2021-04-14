import {DefaultTheme} from "styled-components"

const theme: DefaultTheme = {
    fontSizes: [0, '12px', '14px', 15, 16, '24px'],
    lineHeights: ['16px' ,'19px' ,'22px', '30px'],
    colors: ['#FFFFFF', '#000000', '#EAEFF3', '#252C3A','#8A8E97', '#F64B1D', '#69C405', 'rgba(246, 75, 29, 0.2)','rgba(105, 196, 5, 0.2)'],
    space: [0,'0px', '5px', '10px', '12px', '15px','20px', '30px', '11.8px'],
    sizes: ['38px', '400px', '440px','770px', '790px','30px' ],
    radii: ['4px', '10px','40px', '6px'],
    shadows: ['0px 5px 30px rgba(0, 0, 0, 0.1)'],
    borders: ['1px solid', '2px solid'],
}

export default theme

export const getcolor = (index: number) => {
    return theme.colors[index]
}
