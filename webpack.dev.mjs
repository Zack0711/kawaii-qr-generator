import { merge } from 'webpack-merge'
import common from './webpack.common.mjs'

export default (env, argv) => {
  console.log(env)
  return merge(common(env, argv), {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
      https: false,
      open: true,
      hot: true,
      host: 'localhost',
      port: 3030,
      client: {
        progress: true,
      },  
    },
  })
}
