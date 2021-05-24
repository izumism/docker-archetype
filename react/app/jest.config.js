module.exports = {
  "roots": [
    "<rootDir>/src"
  ],
  "transform": {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  "testEnvironment": 'node',
  "setupFilesAfterEnv": ["./src/tests/setupTests.ts"],
  "moduleFileExtensions": ["ts", "tsx", "js", "jsx", "json", "node"],  
  "snapshotSerializers": ["enzyme-to-json/serializer"],
}
