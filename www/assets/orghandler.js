// Redirects GitHub Pages for repos that have moved to another org.
(function () {
'use strict';

// Mapping from repo name to the org it moved to.
var movedRepos = {
    'blog': 'zunalita',
    'zunalita': 'zunalita',
    // add more like: 'repo': 'org'
};

var repoRegex = new RegExp('^/([^/]+)(/|$)');
var match = repoRegex.exec(location.pathname);
if (match) {
    var repo = match[1];
    var newOrg = movedRepos[repo];
    if (newOrg) {
    var newPath = location.pathname.replace(/^\/[^/]+\/?/, ''); // remove "/repo/" or "/repo"
    var newUrl = 'https://' + newOrg + '.github.io/' + newPath.replace(/^\/+/, ''); // remove extra slashes
    location.href = newUrl;
    }
}
})();