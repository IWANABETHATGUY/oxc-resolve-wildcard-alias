const resolve = require("enhanced-resolve");

const myResolve = resolve.create({
	// or resolve.create.sync
	extensions: [".ts", ".js"],
	alias: {
		"@/*": "./src/*",
	},
	// see more options below
});
console.log('enhanced-resolve')
myResolve(__dirname, "@/index.js", (err, result) => {
	console.log(`result: `, result);
});
