SOL = (function() {
    function SOL() { }

    SOL.setCookie = (name, value) => {
        const cookie = `${name}=${JSON.stringify(value)};`
        document.cookie = cookie;
    };

    SOL.getCookie = (name) => {
        let result = document.cookie.match(new RegExp(name + '=([^;]+)'));
        result && (result = JSON.parse(result[1]));
        return result;
    };
    return SOL;
})();

SOL.Browser = (function() {
    function Browser() { }

    Browser.prototype = Object.create(SOL.prototype);
    Browser.prototype.constructor = Browser;

    Browser.detectBrowser = function() {
        let agent = navigator.userAgent.toLowerCase(),
            name = navigator.appName,
            browser = '';

        // browser information
        if (name === 'Microsoft Internet Explorer' || agent.indexOf('trident') > -1 || agent.indexOf('edge/') > -1) {
            // MS 계열 브라우저
            browser = 'ie';
            if (name === 'Microsoft Internet Explorer') { // IE old version (IE 10 or Lower)
                agent = /msie ([0-9]{1,}[\.0-9]{0,})/.exec(agent);
                browser += parseInt(agent[1]);
            } else { // IE 11+
                if (agent.indexOf('trident') > -1) { // IE 11
                    browser += 11;
                } else if (agent.indexOf('edge/') > -1) { // Edge
                    browser = 'edge';
                }
            }
        } else if (agent.indexOf('safari') > -1) { // Chrome or Safari
            if (agent.indexOf('opr') > -1) { // Opera
                browser = 'opera';
            } else if (agent.indexOf('chrome') > -1) { // Chrome
                browser = 'chrome';
            } else if (agent.indexOf('crios') > -1) { // Chrome on iOS
                browser = 'crios';
            } else { // Safari
                browser = 'safari';
            }
        } else if (agent.indexOf('firefox') > -1) { // Firefox
            browser = 'firefox';
        }

        // OS information
        if (agent.indexOf('windows') > -1) {
            browser += ' windows';
        }
        if (agent.indexOf('linux') > -1) {
            browser += ' linux';
        }
        if (agent.indexOf('macintosh') > -1) {
            browser += ' macosx';
        }
        if (agent.indexOf('samsung') > -1) {
            browser += ' samsung';
        }
        if (agent.indexOf('ipad') > -1 || agent.indexOf('iphone') > -1) { // iOS
            browser += ' ios';
        }
        if (agent.indexOf('android') > -1) {
            browser += ' android';
        }
        if (agent.indexOf('mobile') > -1) { // Any mobile device
            browser += ' mobile';
        }
        if (agent.indexOf('applewebkit') > -1) { // Apple Webkit
            browser += ' webkit';
        }

        if (agent.indexOf('kakaotalk') > -1) { // Apple Webkit
            browser += ' kakaotalk';
        }
        return browser;
    }


    return Browser;
})();