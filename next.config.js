const nextConfig = {
    webpack: (config) => {
      config.externals = {
        jquery: "jQuery",
      };
      return config;
    },
  };
  
  module.exports = nextConfig;