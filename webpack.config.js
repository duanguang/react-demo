/**
 * Created by duanguang on 2017/3/9.
 */
if (process.env.NODE_ENV === 'production') {
    module.exports = require('./webpack.prod.config')
} else {
    module.exports = require('./webpack.dev.config')
}