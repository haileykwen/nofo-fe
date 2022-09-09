import { extendTheme } from '@chakra-ui/react';
import { mode } from "@chakra-ui/theme-tools";

export const colors = {
    primary: "#3AAFA9",
    bodyBg: {
        lightMode: '#F7FAFC',
        darkMode: '#1A202C'
    },
    font: {
        primary: {
            lightMode: '#17242A',
            darkMode: '#FFFFFF'
        },
    },
    button: {
        lightMode: {
            background: '#3AAFA9',
            hover: '#2B7A77'
        },
        darkMode: {
            background: '#3AAFA9',
            hover: '#2B7A77'
        }
    },
    sidebar: {
        lightMode: "#EFF3F5",
        darkMode: "#1A202C"
    },
    border: {
        lightMode: "#E2E8F0",
        darkMode: "#3F444E"
    }
};

const theme = extendTheme({
    config: {
        initialColorMode: 'system',
        useSystemColorMode: true
    },
    breakpoints: {
        xs: '414px',
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        xxl: '1400px'
    },
    semanticTokens: {
        colors: {
            'chakra-body-bg': {
                _light: colors.bodyBg.lightMode,
                _dark: colors.bodyBg.darkMode
            },
            'chakra-body-text': {
                _light: colors.font.primary.lightMode,
                _dark: colors.font.primary.darkMode
            },
            primary: {
                default: '#3AAFA9'
            },
            fontColorPrimary: {
                _light: colors.font.primary.lightMode,
                _dark: colors.font.primary.darkMode
            },
            border: {
                _light: colors.border.lightMode,
                _dark: colors.border.darkMode
            },
            sidebar: {
                _light: colors.sidebar.lightMode,
                _dark: colors.sidebar.darkMode
            },
        },
    },
    fontSizes: {
        'fs-xs': '.5rem',
        'fs-sm': '.7rem',
        'fs': '.9rem',
        'fs-lg': '1.1rem',
        'fs-xl': '1.3rem',
    },
    components: {
        Button: {
            variants: {
                solid: (props: any) => ({
                    background: mode(colors.button.lightMode.background, colors.button.darkMode.background)(props),
                    color: mode(colors.font.primary.darkMode, colors.font.primary.lightMode)(props),
                    fontSize: 'fs-sm',
                    _hover: {
                        background: mode(colors.button.lightMode.hover, colors.button.darkMode.hover)(props),
                        _disabled: {
                            background: mode(colors.button.lightMode.background, colors.button.darkMode.background)(props),
                        }
                    },
                    _active: {
                        background: mode(colors.button.lightMode.hover, colors.button.darkMode.hover)(props),
                    },
                }),
                outline: (props: any) => ({
                    fontSize: 'fs-sm',
                }),
            },
        },
        Input: {
            variants: {
                outline: {
                    field: {
                        fontSize: "fs-sm",
                        _focusVisible: {
                            borderColor: 'primary',
                            boxShadow: `0 0 0 3px ${colors.primary}66`
                        },
                    },
                },
            },
        },
        Text: {
            baseStyle: {
                fontFamily: "Poppins",
                fontWeight: "400",
                fontSize: "fs",
                color: "fontColorPrimary",
                lineHeight: "100%"
            },
        },
    },
});

export default theme;