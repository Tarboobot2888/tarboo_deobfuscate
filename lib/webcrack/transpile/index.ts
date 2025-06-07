import { mergeTransforms } from '../ast-utils';
import * as transforms from '../webcrack/transforms';

export default mergeTransforms({
  name: 'transpile',
  tags: ['safe'],
  transforms: Object.values(transforms),
});
