import { join } from 'path'
import { fileURLToPath } from 'url'
import HtmlWebpackPlugin from 'html-webpack-plugin'

export default {
  mode: 'development',
  entry: './index.js',
  output: {
    path: join(fileURLToPath(new URL('.', import.meta.url)), 'docs'),
  },
  plugins: [new HtmlWebpackPlugin()],
}
