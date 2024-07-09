// next.config.mjs
export default {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/dictionary",
        permanent: true, // Set to true if you want a permanent redirect (308 status code)
      },
    ];
  },
};
