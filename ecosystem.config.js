module.exports = {
    apps: [
      {
        name: 'react-app',
        script: 'react-scripts start',
        args: 'build -s',
        cwd: './',
        env: {
          PORT: 3000
        },
        env_production: {
          PORT: 80
        }
      }
    ]
  };
  