import { schema, normalize } from 'normalizr';

const name = new schema.Entity('names');
const credit = new schema.Entity('credits');
const course = new schema.Entity('courses', {
  name,
  credit,
});

export const courseNormalizer = (data) => normalize(data, [course]);
