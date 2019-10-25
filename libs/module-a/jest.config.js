module.exports = {
  name: 'module-a',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/module-a',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
