/**
 * @jest-environment jsdom
 */
import { pushToHistory } from '../scripts/router.js';
test('Test settings', () => {
    expect(pushToHistory('settings')).toHaveProperty('state', { page: 'settings' });
});

test('Test entry and entry number', () => {
    expect(pushToHistory('entry', 2)).toHaveProperty('state', { page: `entry2` });
});

test('Default', () => {
    expect(pushToHistory()).toHaveProperty('state', {});
});

test('Length', () => {
    expect(pushToHistory().length).toBe(5);
});