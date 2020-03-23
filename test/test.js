var chai           = require('chai'),
    chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
chai.should();

describe('../src/examples/1-basics/', function() {
  let suite = this;

  beforeEach(function() {
    this.tag = require(suite.title + this.currentTest.title);
  });

  it('noop-1', function() {
    this.tag`Hello ${'World'}!`.
      should.deep.equal({ strings: ['Hello ', '!'], values: ['World'] });
  });

  it('noop-2', function() {
    this.tag`Hello ${'World'}!`.
      should.equal('Hello World!');
  });
});

describe('../src/examples/2-string-manipulation/', function() {
  let suite = this;

  beforeEach(function() {
    this.tag = require(suite.title + this.currentTest.title);
  });

  it('squish', function() {
    this.tag` a  b  c  `.
      should.equal('a b c');
  });

  it('trim-indent', function() {
    let result = this.tag`
      # Shopping List

      - Apples
      - Oranges
    `;

    result.should.equal('\n# Shopping List\n\n- Apples\n- Oranges\n');
  });
});

describe('../src/examples/3-embedding-languages/', function() {
  let suite = this;

  beforeEach(function() {
    this.tag = require(suite.title + this.currentTest.title);
  });

  it('gql', function() {
    let { kind } = this.tag`{
      users {
        name
      }
    }`;

    kind.should.equal('Document');
  });

  it('html2dom', function() {
    var { window: { document } } = this.tag`
      <ul>
        <li>Apples</li>
        <li>Oranges</li>
      </ul>
    `;

    document.querySelector('body').innerHTML.should.equal(
      '<ul>\n        <li>Apples</li>\n        <li>Oranges</li>\n      </ul>\n    '
    );
  });

  it('md2dom', function() {
    var { window: { document } } = this.tag`
      # Shopping List

      - Apples
      - Oranges
    `;

    document.querySelector('body').innerHTML.should.equal(
      '<pre><code>  # Shopping List\n\n  - Apples\n  - Oranges</code></pre>'
    );
  });

  it('sh', function() {
    this.tag`echo "Hello ${'Shell'}!"`.stdout.should.equal('Hello Shell!\n');
  });

  it('cljs', function() {
    let hello = this.tag`(fn [name] (str "Hello " name "!"))`;

    hello('ClojureScript').should.equal('Hello ClojureScript!');
  });
});

describe('../src/examples/4-metaprogramming/', function() {
  let suite = this;

  beforeEach(function() {
    this.tag = require(suite.title + this.currentTest.title);
  });

  it('ast', function() {
    let { type, expression } = this.tag`1 + 2`;

    type.should.equal('ExpressionStatement');
    expression.should.contain({
      type: 'BinaryExpression',
      operator: '+'
    });
    expression.left.should.contain({
      type: 'NumericLiteral',
      value: 1
    });
    expression.right.should.contain({
      type: 'NumericLiteral',
      value: 2
    });
  });

  it('qq', function() {
    let t = require('@babel/types');

    let result = this.tag`
      const ENV = ${t.stringLiteral('development')};
      const PORT = ${t.numericLiteral(3000)}
    `;

    result.should.equal('const ENV = "development";\nconst PORT = 3000;');
  });
});

describe('../src/examples/5-async-programming/', function() {
  let suite = this;

  beforeEach(function() {
    this.tag = require(suite.title + this.currentTest.title);
  });

  it('promise', function() {
    var add = (x, y) => new Promise(
      resolve => setTimeout(() => resolve(x + y), 500)
    );

    this.tag`1 + 2 = ${add(1, 2)}`.
      should.eventually.equal('1 + 2 = 3');
  });
});
