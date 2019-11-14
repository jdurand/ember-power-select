import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | ember-power-select-is-disabled', function(hooks) {
  setupRenderingTest(hooks);

  test('it returns true if the option has a disabled property set to true', async function(assert) {
    this.set('option', { disabled: true });
    await render(hbs`{{ember-power-select-is-disabled option}}`);
    assert.equal(this.element.textContent.trim(), 'true');
  });

  test('it returns false if the option has a disabled property set to false', async function(assert) {
    this.set('option', { disabled: false });
    await render(hbs`{{ember-power-select-is-disabled option}}`);
    assert.equal(this.element.textContent.trim(), 'false');
  });

  test('it returns false if the option does not have a disabled property', async function(assert) {
    this.set('option', {  });
    await render(hbs`{{ember-power-select-is-disabled option}}`);
    assert.equal(this.element.textContent.trim(), 'false');
  });

  test('when a function is passed in, use the returned value', async function(assert) {
    this.set('option', { disabled: true });
    this.set('func', () => false);
    await render(hbs`{{ember-power-select-is-disabled option func}}`);
    assert.equal(this.element.textContent.trim(), 'false');
  });

  test('when func is not a function, use the options disabled property', async function(assert) {
    this.set('option', { disabled: true });
    this.set('func', 'foo');
    await render(hbs`{{ember-power-select-is-disabled option func}}`);
    assert.equal(this.element.textContent.trim(), 'true');
  });
});
