import { extendTheme } from "@chakra-ui/react"
import { Fasthand, Montserrat } from 'next/font/google'

const fasthand = Fasthand({
    subsets: ['latin'],
    weight: '400',
    variable: '--font-fasthand'
})

const montserrat = Montserrat({
    subsets: ['latin'],
    variable: '--font-montserrat',
    weight: ['400', '600', '700']
})

export const theme = extendTheme({
    fonts: {
        fasthand: fasthand.style.fontFamily,
        montserrat: montserrat.style.fontFamily,
    }
})