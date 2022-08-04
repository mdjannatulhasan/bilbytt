import { extendTheme } from '@chakra-ui/react'
import { mode } from "@chakra-ui/theme-tools";
const theme = extendTheme({
    colors: {
        brand: {
            50: "#f6f9fb",
            100: "#e0f0fc",
            200: "#bedcf9",
            300: "#91baf0",
            400: "#6594e4",
            500: "#4a81df",
            600: "#4154c8",
            700: "#333fa6",
            800: "#242b79",
            900: "#141a4d",
        },
    },
    components: {
    },
    sizes: {
        container: {
            '2xl': '1450px'
        }
    },
    styles: {
        global: (props) => ({
            body: {
                bg: mode('#000000', 'blue')(props),
            }
        })
    },
})

export default theme