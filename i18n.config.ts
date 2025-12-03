import type { Config } from "next-globe-gen"

const config: Config = {
  locales: ["en", "id"],
  defaultLocale: "id",
  routes: {
    originDir: "./src/_app",
  },
}
export default config
