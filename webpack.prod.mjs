import { merge } from 'webpack-merge'
import common from './webpack.common.mjs'

export default async (env, argv) => {
  return merge(common(env, argv), {
    mode: 'production',
    devtool: 'source-map',
  })
}
