const config  = require( '../complete/config' );

module.exports = {
	...config,
	entry: './build/module/module.js',
	output: {
		filename     : 'splide.esm.js',
		environment: {
			arrowFunction: false,
			bigIntLiteral: false,
			const        : false,
			destructuring: false,
			dynamicImport: false,
			forOf        : false,
			module       : false,
		},
		library      : 'Splide',
		libraryTarget: 'umd',
	},
	mode: 'production',
};