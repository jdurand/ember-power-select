import { helper } from '@ember/component/helper';
import { get } from '@ember/object';
import { typeOf } from '@ember/utils';

export default helper(function emberPowerSelectIsDisabled([option, func]/*, hash*/) {
  if (typeOf(func) === 'function') {
    return func.call(option);
  } else {
    return !!get(option, 'disabled');
  }
});
