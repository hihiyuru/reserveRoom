const path = require("path");
const webpack = require("webpack");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const resolve = dir => path.join(__dirname, dir);
const IS_PROD = ["production", "prod"].includes(process.env.NODE_ENV);
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/reserveRoom/'
    : '/',
  css: {
    // 當為true時，css文件名可省略 module 默認為 false
    modules: false,
    // 是否將組件中的 CSS 提取至一個獨立的 CSS 文件中,當作為一個庫構建時，你也可以將其設置為 false 免得用戶自己導入 CSS
    // 默認生產環境下是 true，開發環境下是 false
    extract: false,
    // 是否為 CSS 開啟 source map。設置為 true 之後可能會影響構建的性能 開啟後即可知道css來自哪隻vue
    sourceMap: true,
    //向 CSS 相關的 loader 傳遞選項(支持 css-loader postcss-loader sass-loader less-loader stylus-loader)
    loaderOptions: {
      css: {},
      less: {}
    }
  },

  publicPath: "./", // 默認'/'，部署應用包時的基本 URL
  outputDir: 'dist', // 生產環境構建文件的目錄
  assetsDir: "static", // 相對於outputDir的靜態資源(js、css、img、fonts)目錄
  configureWebpack: config => {
    const plugins = [];
    // build刪除console.log
    if (IS_PROD) {
      config.optimization.minimizer[0].options.terserOptions.compress.warnings = false
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
      config.optimization.minimizer[0].options.terserOptions.compress.drop_debugger = true
      config.optimization.minimizer[0].options.terserOptions.compress.pure_funcs = [
        'console.log'
      ]

    }

    config.plugins = [...config.plugins, ...plugins];
  },
  chainWebpack: config => {
    // 修復HMR
    config.resolve.symlinks(true);
    config
      .plugin("ignore")
      .use(
        new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /zh-cn$/)
      );



    // 添加別名
    config.resolve.alias
      .set("@", resolve("src"))
      .set("@assets", resolve("src/assets"))
      .set("@components", resolve("src/components"))
      .set("@util", resolve("src/util"))
      .set("@js", resolve("src/js"))
      .set("@views", resolve("src/views"))
      .set("@store", resolve("src/store"))


    // 打包分析
    if (process.env.IS_ANALYZ) {
      config.plugin("webpack-report").use(BundleAnalyzerPlugin, [{
        analyzerMode: "static"
      }]);
    }
    if (IS_PROD) {
      // config.optimization.delete("splitChunks");
    }
    return config;
  },

  transpileDependencies: [],
  lintOnSave: false,
  runtimeCompiler: true, // 是否使用包含運行時編譯器的 Vue 構建版本
  productionSourceMap: !IS_PROD, // 生產環境的 source map
  parallel: require("os").cpus().length > 1,
  pwa: {},
  devServer: {
    // overlay: { // 讓瀏覽器 overlay 同時顯示警告和錯誤
    //   warnings: true,
    //   errors: true
    // },
    open: true, // 是否打開瀏覽器
    // host: "localhost",
    port: "8888", // 要開的port號s
    // https: false,
    // hotOnly: false, // 熱更新
    proxy: {
      "/api": {
        target: "https://challenge.thef2e.com", //精神時光屋

        secure: true,
        changeOrigin: true, // 開啟代理，在本地創建一個虛擬服務端
        ws: false, // 是否啟用websockets
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
};
