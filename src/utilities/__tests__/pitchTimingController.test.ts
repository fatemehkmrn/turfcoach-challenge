import { pitchTimingController } from '../pitchTimingController';

const activity = {
	assignee: 'John',
	date: new Date('Tue Jun 20 2023 00:00:00 GMT+0200 (Central European Summer Time)'),
	id: 2,
	pitch: 'pitch 2',
	time: '12-14',
	type: 'Irrigation'
};

const activitiesList = [
	{
		assignee: 'Tom',
		date: new Date('Tue Jun 20 2023 00:00:00 GMT+0200 (Central European Summer Time)'),
		id: 1,
		pitch: 'pitch 2',
		time: '12-14',
		type: 'Mowing'
	}
];

test('prevents user to define activities at one time on a same pitch', () => {
	expect(pitchTimingController(activitiesList, activity, true)).toBe(true);
});
