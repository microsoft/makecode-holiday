(function() {
    if (window.ksRunnerInit) return;

    // This line gets patched up by the cloud
    var pxtConfig = {
    "relprefix": "/makecode-holiday/",
    "verprefix": "",
    "workerjs": "/makecode-holiday/worker.js",
    "monacoworkerjs": "/makecode-holiday/monacoworker.js",
    "pxtVersion": "5.2.13",
    "pxtRelId": "",
    "pxtCdnUrl": "/makecode-holiday/",
    "commitCdnUrl": "/makecode-holiday/",
    "blobCdnUrl": "/makecode-holiday/",
    "cdnUrl": "/makecode-holiday/",
    "targetVersion": "0.0.0",
    "targetRelId": "",
    "targetUrl": "",
    "targetId": "holidays",
    "simUrl": "/makecode-holiday/simulator.html",
    "partsUrl": "/makecode-holiday/siminstructions.html",
    "runUrl": "/makecode-holiday/run.html",
    "docsUrl": "/makecode-holiday/docs.html",
    "isStatic": true
};

    var scripts = [
        "/makecode-holiday/highlight.js/highlight.pack.js",
        "/makecode-holiday/bluebird.min.js",
        "/makecode-holiday/semantic.js",
        "/makecode-holiday/marked/marked.min.js",
        "/makecode-holiday/target.js",
        "/makecode-holiday/pxtembed.js"
    ]

    if (typeof jQuery == "undefined")
        scripts.unshift("/makecode-holiday/jquery.js")

    var pxtCallbacks = []

    window.ksRunnerReady = function(f) {
        if (pxtCallbacks == null) f()
        else pxtCallbacks.push(f)
    }

    window.ksRunnerWhenLoaded = function() {
        pxt.docs.requireHighlightJs = function() { return hljs; }
        pxt.setupWebConfig(pxtConfig || window.pxtWebConfig)
        pxt.runner.initCallbacks = pxtCallbacks
        pxtCallbacks.push(function() {
            pxtCallbacks = null
        })
        pxt.runner.init();
    }

    scripts.forEach(function(src) {
        var script = document.createElement('script');
        script.src = src;
        script.async = false;
        document.head.appendChild(script);
    })

} ())
