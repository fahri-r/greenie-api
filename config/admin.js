module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6657e95ec2107b9cf3eef08c8c623328'),
  },
});
