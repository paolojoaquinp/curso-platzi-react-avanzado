const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "app.bundle.js",
      publicPath: '/',
    },
    resolve: {
      extensions: [".js", ".jsx"],
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader",
            },
          ],
        },
        {
            test: /\.s?css$/,
            use:[
                {
                    loader: MiniCssExtractPlugin.loader,
                },
                'css-loader',
                'sass-loader'
            ]
        }
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html",
        filename: "./index.html",
      }),

      new MiniCssExtractPlugin({
          filename: 'assests/[name].css',
      }),

      new WebpackPwaManifestPlugin({
        name: 'Petgram - tu app de fotos de mascotas',
        short_name: 'Petgram 🐶',
        description: 'Con petgram puedes encontrar fotos de animales domésticos muy facilmente',
        orientation: 'portrait',
        display: 'standalone',
        scope: '/',
        background_color: '#fff',
        theme_color: '#b1a',
        icons: [
          {
            src: path.resolve('src/assets/icon.png'),
            sizes: [96, 128, 192, 256, 384, 512],
            purpose: 'maskable' // <-- Añade esta línea
          }
        ],
        start_url: "/",
      }),


      new WorkboxWebpackPlugin.GenerateSW({
        runtimeCaching: [
          {
            urlPattern: new RegExp('https://(res.cloudinary.com|images.unsplash.com)'),
            handler: 'CacheFirst',
            options: {
              cacheName: 'images'
            }
          },
          {
            urlPattern: new RegExp('https://petgram-server-paolo.vercel.app'),
            handler: 'NetworkFirst',
            options: {
              cacheName: 'api'
            }
          }
        ],
        maximumFileSizeToCacheInBytes: 5000000,
      }),
    ],
    devServer: {
      contentBase: path.join(__dirname, "dist"),
      historyApiFallback: true,
      compress: true,
      port: 3000,
    },
  };