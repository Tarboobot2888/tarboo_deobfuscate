import { mergeTransforms } from '../ast-utils';
import * as transforms from '../webcrack/transforms';

export default mergeTransforms({
  name: 'unminify',
  tags: ['safe'],
  transforms: Object.values(transforms),
});
