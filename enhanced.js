const resolve = require("enhanced-resolve");

const myResolve = resolve.create({
	// or resolve.create.sync
	extensions: [".ts", ".js"],
	alias: {
		"@/*": "./src/*",
	},
	// see more options below
});

myResolve(__dirname, "@/index.js", (err, result) => {
	console.log(`result: `, result);
});
