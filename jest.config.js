module.exports = {
  clearMocks: true,
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1',
  },
};
