const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

const TasksModuleFederationConfigPlugin = withModuleFederationPlugin({

  name: 'tasks',

  exposes: {
    './Component': './src/app/app.module.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});

TasksModuleFederationConfigPlugin.output.publicPath = 'http://localhost:4202/'
module.exports = TasksModuleFederationConfigPlugin;
