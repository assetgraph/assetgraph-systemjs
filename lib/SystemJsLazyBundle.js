const Relation = require('assetgraph/lib/relations/Relation');

class SystemJsLazyBundle extends Relation {
  inline() {
    throw new Error('SystemJsLazyBundle.inline(): Not supported');
  }

  set href(href) {
    this.node.key = { type: 'Literal', value: href };
  }

  get href() {
    return this.node.key.value || this.node.key.name;
  }
}

module.exports = SystemJsLazyBundle;
