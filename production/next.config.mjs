/** @type {import('next').NextConfig} */

import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin"

const withVanillaExtract = createVanillaExtractPlugin()

const nextConfig = {
    images: {
        domains: ["ik.imagekit.io"],
    },
}

export default withVanillaExtract(nextConfig)
