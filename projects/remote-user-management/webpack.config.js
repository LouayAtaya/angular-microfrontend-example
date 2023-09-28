const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, '../../tsconfig.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "remoteUserManagement",
    publicPath: "auto"
  },
  optimization: {
    runtimeChunk: false
  },   
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  experiments: {
    outputModule: true
  },
  plugins: [
    new ModuleFederationPlugin({
        library: { type: "module" },

        //For remotes (please adjust)
        name: "remoteUserManagement",
        filename: "remoteEntry.js",
        exposes: {
            './LoginModule': './projects/remote-user-management/src/app/login/login.module.ts',
        },        
        
        // For hosts (please adjust)
        // remotes: {
        //     "host": "http://localhost:4200/remoteEntry.js",
        //     "remoteCatalog": "http://localhost:4201/remoteEntry.js",
        //     "remoteOrdering": "http://localhost:4202/remoteEntry.js",

        // },

        shared: share({
          "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
          "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
          "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
          "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          //sharedMappings: {singleton: true,packageName:'@shared/user-management'},
          "@shared/user-management": {
            "singleton": true,
            "import": "dist/shared/user-management"
          },
          ...sharedMappings.getDescriptors()
          
        }),
        
 
        
    }),
    sharedMappings.getPlugin()
  ],
};
