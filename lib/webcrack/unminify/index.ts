import { mergeTransforms, type Transform } from '../ast-utils';
import * as transforms from './transforms';

export default mergeTransforms({
  name: 'unminify',
  tags: ['safe'],
  transforms: Object.values(transforms) as Transform[],
});
