exports.get404Page = (req, res, next) => {
    // res.sendFile(path.join(__dirname, 'views', '404.html'));
    res.render('404', { pageTitle: 'Page Not Found' });
};