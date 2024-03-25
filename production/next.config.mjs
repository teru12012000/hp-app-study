/** @type {import('next').NextConfig} */

import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin"

const withVanillaExtract = createVanillaExtractPlugin()

const nextConfig = {
    images: {
        domains: ["raw.githubusercontent.com"],
    },
}

export default withVanillaExtract(nextConfig)
