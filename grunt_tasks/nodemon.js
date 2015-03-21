module.exports = {
	options:{
    	ignore: [
            'backend/**',
    		'public/**',
    		'node_modules/**',
    		'bower_components/**',
    		'grunt_tasks/**'
    	]
    },
    application: {
        script: ['server.js']
    }
}