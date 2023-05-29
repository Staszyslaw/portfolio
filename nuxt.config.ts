// https://nuxt.com/docs/api/configuration/nuxt-config
import {isProduction} from "std-env";

export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            google_analytics_id: 'G-KC4FBBK469',
            production_mode: isProduction,
        }
    },
    app: {
        head: {
            title: 'Stanisław Czajka - portfolio'
        }
    }
})
