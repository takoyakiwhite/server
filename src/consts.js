const DEFAULT_SOURCE = ['nextmusic', 'kugou', 'bodian', 'migu', 'ytdlp'];
const PROVIDERS = {
	nextmusic: require('./provider/nextmusic'),
	qq: require('./provider/qq'),
	kugou: require('./provider/kugou'),
	kuwo: require('./provider/kuwo'),
	bodian: require('./provider/bodian'),
	migu: require('./provider/migu'),
	joox: require('./provider/joox'),
	youtube: require('./provider/youtube'),
	youtubedl: require('./provider/youtube-dl'),
	ytdlp: require('./provider/yt-dlp'),
	bilibili: require('./provider/bilibili'),
	bilivideo: require('./provider/bilivideo'),
	pyncmd: require('./provider/pyncmd'),
};

module.exports = {
	DEFAULT_SOURCE,
	PROVIDERS,
};
