module.exports = {
  // clearMocks will clear all mocks, so that the mock in nth test doesn’t mutate or affect the test at n+1 position.
  clearMocks: true,
  // Indicates whether the coverage information should be collected while executing the test
  // collectCoverage: false,

  // tells jest to collect the code coverage from all the .js files in the src/ folder. Coverage tells you what percentage of the code is being covered by your test cases.
  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: ['src/modules/**/*.{js,jsx,mjs}'],

  // tells the Jest that the coverage directory should be named coverage in the main app/ folder.
  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',
  
  // takes in an array of extensions that tells Jest which files it can test. We tell it to test all .js|.jsx|.json files.
  // An array of file extensions your modules use
  moduleFileExtensions: ['js', 'json', 'jsx'],

  // this is really important, as it tells Jest the path from where it can get configurations for enzyme 
  // The paths to modules that run some code to configure or set up the testing environment before each test
  setupFiles: ['<rootDir>/enzyme.config.js'],

  // specifies what environment Jest will run its test on, since we are testing a web application. I have set the environment to jsdom
  // The test environment that will be used for testing
  testEnvironment: 'jsdom',

  // tells Jest which files it will test. I pass in 2 configurations here, one being test all files in any folder named __tests__ or test all files that end with spec.js|.jsx or test.js|.jsx
  // The glob patterns Jest uses to detect test files
  testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],

  // I don’t want Jest to run tests inside my node_modules folder. So I have ignored those files here.
  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  testPathIgnorePatterns: ['\\\\node_modules\\\\'],

  // This option sets the URL for the jsdom environment. It is reflected in properties such as location.href
  testURL: 'http://localhost',

  // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation. Here I give it only one for node_modules
  // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
  transformIgnorePatterns: ['<rootDir>/node_modules/'],

  // If true gives you a very detail log when you run tests. I don’t want to see that, and only focus on the gist of my tests. So I have set its value to false
  // Indicates whether each individual test should be reported during the run
  verbose: false

}