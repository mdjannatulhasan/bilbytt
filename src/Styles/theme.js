import { extendTheme } from '@chakra-ui/react'
import { mode } from "@chakra-ui/theme-tools";
const theme = extendTheme({
    components: {
    },
    sizes: {
        container: {
            xl: "1450px",
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