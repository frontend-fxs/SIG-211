(function (window) {
    var host = window.location.host;
    var env = (host === '' || host.startsWith('localhost')) ? 'DEV' : (host === 'qa.fxstreet.com') ? 'QA' : 'PRO';

    var config = {
        static_host: {
            DEV: '',
            QA: '',
            PRO: ''
        }
    };

    var resources = {
            scripts: ['', ''],
            styles: ['', '']
    };

    var helpers = {
        loadjs_async: function (url, callback) {
            var x = document.getElementsByTagName('script')[0],
                s = document.createElement('script');
            s.type = 'text/javascript';
            s.async = true;
            s.src = url;
            if (callback && typeof callback === "function") {
                if (s.addEventListener) {
                    s.addEventListener('load', callback, false);
                } else {
                    s.onreadystatechange = function () {
                        if (this.readyState === "complete" || this.readyState === "loaded") {
                            callback.call();
                        }
                    };
                }
            }
            x.parentNode.insertBefore(s, x);
        },
        loadcss: function (url) {
            var css = document.createElement("link");
            css.type = "text/css";
            css.rel = "stylesheet";
            css.href = url;
            var head = document.getElementsByTagName("head")[0];
            head.appendChild(css);
        }
    };

    function loadResources(callback) {
        resources.styles.forEach(function(element){
            var url = config.static_host[env] + element;
            helpers.loadcss(url);
        });
        
        var scriptsCount = resources.scripts.length;
        resources.scripts.forEach(function (element) {
            var url = config.static_host[env] + element;
            helpers.loadjs_async(url, function () {
                scriptsCount--;
            });
        });

        var timeout;
        var interval = setInterval(function () {
            if (scriptsCount === 0) {
                clearInterval(interval);
                if (timeout) {
                    clearTimeout(timeout);
                }
                callback(true);
            }
        }, 10);

        timeout = setTimeout(function () {
            if (scriptsCount !== 0) {
                clearInterval(interval);
                callback(false);
            }
        }, 3000);
    };

    window.addEventListener("load", function() {
        loadResources(function(loaded){
            if(loaded){
               //YOUR CODE
            }
            else{
                console.error("the resources were not loaded");
            }
        });
    });

})(window);

