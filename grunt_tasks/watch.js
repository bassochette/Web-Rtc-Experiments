module.exports = {
    public: {
        files: ['frontend/public/**/**'],
        tasks: ['copy:dev']
    },
    styles: {
        files: ['frontend/stylus/**/*.styl'],
        tasks: ['stylus:dev']
    }
};