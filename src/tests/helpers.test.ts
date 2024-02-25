import { findURLRelatingDrawerItem } from '../helpers/navigationHelper';
import { DRAWER_ITEMS } from '../staticcontent/DrawerItems';
import { getTimeDifference } from '../helpers/stringHelper';
import { test, describe, expect } from 'vitest';

describe('returns the correct drawer item for a given URL', () => {
    test('should return the expected drawer item', () => {
        const url = '/explorer';
        const expectedDrawerItem = DRAWER_ITEMS[1];

        const actualDrawerItem = findURLRelatingDrawerItem(url);

        expect(actualDrawerItem).toEqual(expectedDrawerItem);
    });
    test('should return null', () => {
        const url = '/unknown-route';
        const expectedDrawerItem = DRAWER_ITEMS[0];

        const actualDrawerItem = findURLRelatingDrawerItem(url);

        expect(actualDrawerItem).toEqual(expectedDrawerItem);
    });
});

describe('returns the correct string for a given date', () => {
    test('should return the correct time difference in years', () => {
        const date = new Date('2022-01-01T00:00:00Z');
        const currentDate = new Date('2024-01-01T00:00:01Z');
        const expectedDifference = '2 years ago';

        const actualDifference = getTimeDifference(date, currentDate);

        expect(actualDifference).toEqual(expectedDifference);
    });

    test('should return the correct time difference in months', () => {
        const date = new Date('2024-01-01T00:00:00Z');
        const currentDate = new Date('2024-03-01T00:00:01Z');
        const expectedDifference = '2 months ago';

        const actualDifference = getTimeDifference(date, currentDate);

        expect(actualDifference).toEqual(expectedDifference);
    });

    test('should return the correct time difference in hours', () => {
        const startTime = new Date('2024-01-01T00:00:00Z');
        const currentDate = new Date('2024-01-01T01:00:00Z');
        const expectedDifference = '1 hour ago';

        const actualDifference = getTimeDifference(startTime, currentDate);

        expect(actualDifference).toEqual(expectedDifference);
    });
});
