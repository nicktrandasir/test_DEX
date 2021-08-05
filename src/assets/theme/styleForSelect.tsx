import {theme} from "./theme"


export const StylesForSelect = {

    container: (styles: any) => {
        return {
            ...styles,
            width: '100%',
            height: 'inherit',

        }
    },

    control: (styles: any, state: any) => {
        return {
            ...styles,
            height: '40px',
            backgroundColor: `${theme.lightestGrey1}`,
            cursor: state.isFocused ? 'default' : 'pointer',
            alignContent: 'center',
            border: 'none',

            textCol: `${theme.lightestGrey}`,

                '&:hover': {
            backgroundColor: `${theme.lightestGrey}`
        },


        }
    },
    menu: (styles: any, state: any) => {
        return {
            ...styles,
            backgroundColor: state.isSelected ? `${theme.darkRed}` : `${theme.white}`,

        }
    },
    menuList: (styles: any) => {
        return {
            ...styles,
            lineHeight: 'center',

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
        }
    },
    singleValue: (styles: any) => {
        return {
            ...styles,
            color: `${theme.darkGrey}`,
            lineHeight: '24px'
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
            backgroundColor: state.isMulti ? `${theme.darkRed}` : state.isSelected ? `${theme.darkRed}` : `${theme.lightestRed}`,
            color: state.isMulti ? `${theme.white}` : `${theme.white}`,
            cursor: 'pointer'
        },
        padding: 20,

    }),

}