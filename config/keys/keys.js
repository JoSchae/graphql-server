if (process.env.NODE_ENV === 'production') {
    module.exports = required('./keys_prod');
} else {
    module.exports = required('./keys_dev');
}