module.exports = {
    apps: [
      {
        name: 'ims',
        script: 'server.js',
        instances: 'max', 
        exec_mode: 'cluster', 
        watch: false, 
        env: {
          NODE_ENV: 'production',
          PORT: 5000 
        },
        error_file: './logs/error.log', 
        out_file: './logs/output.log', 
        log_file: './logs/combined.log', 
        time: true 
      }
    ]
  };
  