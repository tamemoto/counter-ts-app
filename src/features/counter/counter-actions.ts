import { createAction } from '@reduxjs/toolkit';

const FEATURE = 'counter';
export const added = createAction<number>(`${FEATURE}/added`);
export const decremented = createAction(`${FEATURE}/decrimented`);
export const incremented = createAction(`${FEATURE}/incremented`);
