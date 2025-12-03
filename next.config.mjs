// @ts-check

import createNextGlobeGenPlugin from "next-globe-gen/plugin";
import createMDX from '@next/mdx'


const withGlobeGen = createNextGlobeGenPlugin()
const withMDX = createMDX({
    options: {
        remarkPlugins: [],
        rehypePlugins: [],
    },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
   
    pageExtensions: ["mdx", "md", "jsx", "js", "tsx", "ts"],
    reactStrictMode: true,
    images: {
        dangerouslyAllowSVG: true,
        contentDispositionType: "inline",
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
        remotePatterns: [
            {
                protocol: "https",
                hostname: "firebasestorage.googleapis.com",
                port: "",
                pathname: "/**",    
            },
            {
                protocol: "https",
                hostname: "images.unsplash.com",
                port: "",
                pathname: "/**",
            },
        ],
    },
    async redirects(){
        return[
            {
                source:"/",
                destination:"/en",
                permanent:false,
            }
        ]
    } 
}

let config = withMDX(nextConfig)
config = withGlobeGen(config)

export default config

