export default {
  entry: 'dist/index.js',
  dest: 'dist/bundle.js',
  sourceMap: false,
  format: 'umd',
  moduleName: 'universal-tools',
  external: ['@angular/core', '@angular/common'],
  globals: {
    '@angular/core': 'ng.core',
    '@angular/common': 'ng.common'
  }
}
