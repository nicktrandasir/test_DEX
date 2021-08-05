import {theme} from "./theme"


export const StylesForMultiSelect = {
    container: (styles: any) => {
        return {
            ...styles,
            width: '100%',
            height: '40px',
            fontSize: '14px',


        }
    },
    valueContainer: (styles: any) => {
        return {
            ...styles,
            flexWrap: 'no-wrap',
            height: 'inherit'
        }
    },
    control: (styles: any, state: any) => {
        return {
            ...styles,

            width: '364px',
            height: '100%',
            border: '0.5px solid #D1D1D1',
            boxSizing: 'border-box',
            borderRadius: '4px',
            backgroundColor: `${theme.white}`,
            cursor: state.isFocused ? 'default' : 'pointer',
            alignContent: 'center',
            textCol: `${theme.white}`,
            '&:hover': {
                backgroundColor: `${theme.lightestGrey}`
            },
            '@media screen and (max-width: 513px)': {
                width: '100%'
            }
        }
    },
    menu: (styles: any) => {
        return {
            ...styles,
            border: '0.5px solid #D1D1D1',
            ':focus-visible': {
                border: 'none'
            }
        }
    },
    menuList: (styles: any) => {
        return {
            ...styles,
            lineHeight: 'center'

        }
    },
    indicatorsContainer: (styles: any) => {
        return {
            ...styles,
            cursor: 'pointer'
        }
    },
    clearIndicator: (styles: any) => {
        return {
            ...styles,
            color: `${theme.lightestGrey}`
        }
    },
    dropdownIndicator: (styles: any) => {
        return {
            ...styles,
            height: 'inherit',
            color: `${theme.lightestGrey}`
        }
    },
    multiValue: (styles: any) => {
        return {
            ...styles,
            backgroundColor: `${theme.red}`,
            borderRadius: '4px',
            color: `${theme.white}`,
            fontSize: '14px',
            marginRight: '3px'
        }
    },
    singleValue: (styles: any) => {
        return {
            ...styles,
            color: `${theme.white}`,
            lineHeight: '24px'
        }
    },
    multiValueLabel: (styles: any) => {
        return {
            ...styles,
            margin: 0,
            color: `${theme.white}`
        }
    },
    multiValueRemove: (styles: any) => {
        return {
            ...styles,
            color: `${theme.white}`,
            cursor: 'pointer'
        }
    },
    option: (styles: any, state: any) => ({
        ...styles,
        borderBottom: `0.5px solid ${theme.lightestGrey}`,
        backgroundColor: state.isSelected ? `${theme.darkRed}` : `${theme.white}`,
        ':last-child': {
            border: 'none'
        },
        ':hover': {
            backgroundColor: state.isMulti ? `${theme.lightestRed}` : state.isSelected ? `${theme.darkRed}` : `${theme.red}`,
            color: state.isMulti ? `${theme.white}` : `${theme.white}`,
            cursor: 'pointer'
        },
        '&:active': {
            backgroundColor: `${theme.darkRed}`
        },
        padding: 20
    })
}