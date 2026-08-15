const select = require('./select');
const request = require('../request');
const { getManagedCacheStorage } = require('../cache');

const API = 'https://nextmusic.toubiec.cn/api/getSongUrl';
const IP = '120.235.65.149';

const track = async (info) => {
	const body = JSON.stringify({
		id: String(info.id),
		level: select.ENABLE_FLAC ? 'hires' : 'exhigh',
		timestamp: Date.now(),
		ip: IP,
	});

	const response = await request(
		'POST',
		API,
		{
			accept: '*/*',
			'content-type': 'application/json',
			origin: 'https://wyapi.toubiec.cn',
			referer: 'https://wyapi.toubiec.cn/',
		},
		body
	);

	const jsonBody = await response.json();

	if (
		jsonBody?.code !== 200 ||
		typeof jsonBody?.data?.url !== 'string' ||
		!jsonBody.data.url
	) {
		return Promise.reject();
	}

	return jsonBody.data.url;
};

const cs = getManagedCacheStorage('provider/nextmusic');

const check = (info) => cs.cache(info.id, () => track(info));

module.exports = { check };
