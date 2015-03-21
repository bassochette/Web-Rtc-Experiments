module.exports = {
	release:{
		files: [
			{expand: true, cwd: '<%= config.bower %>/bootstrap/dist/fonts/', src: ['**'], dest: '<%= config.public %>/fonts/'},
			{src: '<%= config.bower %>/bootstrap/dist/css/bootstrap.min.css', dest: '<%= config.application%>/vendors/bootstrap.css'},
			{src: '<%= config.bower %>/bootstrap/dist/js/bootstrap.min.js', dest: '<%= config.application %>/vendors/bootstrap.js'},
			{src: '<%= config.bower %>/animate.css/animate.css', dest: '<%= config.public %>/styles/animate.css'},
			{expand: true, cwd: '<%= config.assets %>/images/', src: ['**'], dest: '<%= config.public %>/images/'}
		]
	},
	dev:{
		files:[
	  		{expand: true, cwd: '<%= config.frontend %>/public/', src: ['**'], dest: '<%= config.public %>'},

            {expand: true, cwd: '<%= config.bower %>/bootstrap/dist/fonts/', src: ['**'], dest: '<%= config.public %>/fonts/'},
            {src: '<%= config.bower %>/bootstrap/dist/css/bootstrap.css', dest: '<%= config.public %>/styles/bootstrap.css'},
            {src: '<%= config.bower %>/bootstrap/dist/js/bootstrap.js', dest: '<%= config.public %>/lib/bootstrap.js'},
            {src: '<%= config.bower %>/jquery/jquery.js', dest: '<%= config.public %>/lib/jquery.js'},
            {src: '<%= config.bower %>/animate.css/animate.css', dest: '<%= config.public %>/styles/animate.css'},
            {src: '<%= config.assets %>/stylus/bs-editable.css', dest: '<%= config.public %>/styles/bs-editable.css'},
            {src: '<%= config.bower %>/angular/angular.js', dest: '<%= config.public %>/lib/angular.js'},
            {src: '<%= config.bower %>/angular-route/angular-route.js', dest: '<%= config.public %>/lib/angular-route.js'},
            {src: '<%= config.bower %>/angular-route/angular-route.min.js.map', dest: '<%= config.public%>/lib/angular-route.min.js.map'},
            {src: '<%= config.bower %>/angular/angular.min.js.map', dest: '<%= config.public %>/lib/angular.min.js.map'},
            {src: '<%= config.bower %>/requirejs/require.js', dest: '<%= config.public %>/lib/require.js'}
		]
	}
}