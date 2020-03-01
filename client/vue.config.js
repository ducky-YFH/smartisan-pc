module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        ws: true,
        changOrigin: true
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
            @import "./src/assets/styles/main.scss";
          `
      }
    }
  }
}