module.exports = {
  lintOnSave: false,
  configureWebpack: {
    resolve: {
        alias: {
            'assets': '@/assets',
            'components': '@/components',
            'plugins': '@/plugins'
        }
    } 
 }
}
