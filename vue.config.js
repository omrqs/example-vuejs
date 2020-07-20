const manifestJSON = require("./public/manifest.json");
const webpack = require("webpack");
const fs = require("fs");
const packageJson = fs.readFileSync("./package.json");
const version = JSON.parse(packageJson).version || "v0.0.1";

module.exports = {
  productionSourceMap: false,
  runtimeCompiler: false,
  transpileDependencies: ["vuetify"],
  devServer: {
    disableHostCheck: true,
    host: "0.0.0.0",
    port: 8080
  },
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        "process.env": {
          PACKAGE_VERSION: version
        }
      })
    ],
    performance: {
      hints: false
    },
    optimization: {
      minimize: true,
      splitChunks: {
        chunks: "all",
        minSize: 30000,
        maxSize: 0
      }
    }
  },
  pwa: {
    themeColor: manifestJSON.theme_color,
    workboxPluginMode: "InjectManifest",
    workboxOptions: {
      swSrc: "./public/service-worker.js",
      exclude: [/\.map$/],
      runtimeCaching: [
        {
          urlPattern: new RegExp(
            "https://fonts.(?:googleapis|gstatic).com/(.*)"
          ),
          handler: "cacheFirst",
          options: {
            cacheName: "google-fonts",
            expiration: {
              maxEntries: 30
            },
            cacheableResponse: {
              statuses: [0, 200]
            }
          }
        }
      ]
    }
  }
};
