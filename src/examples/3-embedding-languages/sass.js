var createTag = require('../create-tag'),
    nodeSass  = require('node-sass');

module.exports = createTag(
  data => {
    let { css } = nodeSass.renderSync({
      data,
      outputStyle: 'compressed'
    });

    return css.toString('utf8');
  }
);
