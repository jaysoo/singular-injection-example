module.exports = {
  name: 'module-c',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/module-c',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
