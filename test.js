function throwit() {
	throw new Error('');
}

function catchit() {
	try {
		throwit();
	} catch(e) {
		console.log(e.stack);
	}
}
catchit();

function* fib(max) {
	var t,a=0,b=1,n=1;
	while(n<max) {
		yield a;
		t = a+b;
		a = b;
		b = t;
		n++;
	}
	return a;
}
var f = fib(10);
for(var x of f){
	console.log(x);
}

function* next_id(){
	var i=0;
	while(true){
		yield i++;
	}	
	return i;
}
var f = next_id();
console.log(f.next());
console.log(f.next());
console.log(f.next());


function* generator(){
	yield 1;
	yield 2;
	yield 3;
	yield 4;
}
var gen = generator();
for(var item of gen){
	console.log(item);
}

var log = console.log.bind(console.log);
var now = new Date();
log(now.toLocaleString());
log(now.getYear());
log(now.getMonth());
log(now.getDate());
log(now.getTime());

var re = /^\d{3}\-\d{3,8}$/;
re.test('010-54545');

var xiaoming = {
    name: '小明',
    age: 14,
    gender: true,
    height: 1.65,
    grade: null,
    'middle-school': '\"W3C\" Middle School',
    skills: ['JavaScript', 'Java', 'Python', 'Lisp']
};

JSON.stringify(xiaoming,(key,value) => {
	if(typeof value === 'string') {
		return value.toUpperCase();
	}
	return value;
},'');

var tianqi = {"query":{"count":1,"created":"2017-11-01T05:52:46Z","lang":"zh-CN","results":{"channel":{"units":{"distance":"mi","pressure":"in","speed":"mph","temperature":"F"},"title":"Yahoo! Weather - Beijing, Beijing, CN","link":"http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-2151330/","description":"Yahoo! Weather for Beijing, Beijing, CN","language":"en-us","lastBuildDate":"Wed, 01 Nov 2017 01:52 PM CST","ttl":"60","location":{"city":"Beijing","country":"China","region":" Beijing"},"wind":{"chill":"66","direction":"55","speed":"7"},"atmosphere":{"humidity":"26","pressure":"1015.0","rising":"0","visibility":"16.1"},"astronomy":{"sunrise":"6:44 am","sunset":"5:12 pm"},"image":{"title":"Yahoo! Weather","width":"142","height":"18","link":"http://weather.yahoo.com","url":"http://l.yimg.com/a/i/brand/purplelogo//uh/us/news-wea.gif"},"item":{"title":"Conditions for Beijing, Beijing, CN at 01:00 PM CST","lat":"39.90601","long":"116.387909","link":"http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-2151330/","pubDate":"Wed, 01 Nov 2017 01:00 PM CST","condition":{"code":"32","date":"Wed, 01 Nov 2017 01:00 PM CST","temp":"66","text":"Sunny"},"forecast":[{"code":"32","date":"01 Nov 2017","day":"Wed","high":"66","low":"39","text":"Sunny"},{"code":"34","date":"02 Nov 2017","day":"Thu","high":"66","low":"41","text":"Mostly Sunny"},{"code":"32","date":"03 Nov 2017","day":"Fri","high":"52","low":"38","text":"Sunny"},{"code":"32","date":"04 Nov 2017","day":"Sat","high":"55","low":"33","text":"Sunny"},{"code":"32","date":"05 Nov 2017","day":"Sun","high":"55","low":"33","text":"Sunny"},{"code":"32","date":"06 Nov 2017","day":"Mon","high":"58","low":"38","text":"Sunny"},{"code":"30","date":"07 Nov 2017","day":"Tue","high":"58","low":"42","text":"Partly Cloudy"},{"code":"34","date":"08 Nov 2017","day":"Wed","high":"55","low":"37","text":"Mostly Sunny"},{"code":"32","date":"09 Nov 2017","day":"Thu","high":"53","low":"35","text":"Sunny"},{"code":"34","date":"10 Nov 2017","day":"Fri","high":"52","low":"29","text":"Mostly Sunny"}],"description":"<![CDATA[<img src=\"http://l.yimg.com/a/i/us/we/52/32.gif\"/>\n<BR />\n<b>Current Conditions:</b>\n<BR />Sunny\n<BR />\n<BR />\n<b>Forecast:</b>\n<BR /> Wed - Sunny. High: 66Low: 39\n<BR /> Thu - Mostly Sunny. High: 66Low: 41\n<BR /> Fri - Sunny. High: 52Low: 38\n<BR /> Sat - Sunny. High: 55Low: 33\n<BR /> Sun - Sunny. High: 55Low: 33\n<BR />\n<BR />\n<a href=\"http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-2151330/\">Full Forecast at Yahoo! Weather</a>\n<BR />\n<BR />\n<BR />\n]]>","guid":{"isPermaLink":"false"}}}}}};

if (!window.JSON) {
  window.JSON = {
    parse: function(sJSON) { return eval('(' + sJSON + ')'); },
    stringify: (function () {
      var toString = Object.prototype.toString;
      var isArray = Array.isArray || function (a) { return toString.call(a) === '[object Array]'; };
      var escMap = {'"': '\\"', '\\': '\\\\', '\b': '\\b', '\f': '\\f', '\n': '\\n', '\r': '\\r', '\t': '\\t'};
      var escFunc = function (m) { return escMap[m] || '\\u' + (m.charCodeAt(0) + 0x10000).toString(16).substr(1); };
      var escRE = /[\\"\u0000-\u001F\u2028\u2029]/g;
      return function stringify(value) {
        if (value == null) {
          return 'null';
        } else if (typeof value === 'number') {
          return isFinite(value) ? value.toString() : 'null';
        } else if (typeof value === 'boolean') {
          return value.toString();
        } else if (typeof value === 'object') {
          if (typeof value.toJSON === 'function') {
            return stringify(value.toJSON());
          } else if (isArray(value)) {
            var res = '[';
            for (var i = 0; i < value.length; i++)
              res += (i ? ', ' : '') + stringify(value[i]);
            return res + ']';
          } else if (toString.call(value) === '[object Object]') {
            var tmp = [];
            for (var k in value) {
              if (value.hasOwnProperty(k))
                tmp.push(stringify(k) + ': ' + stringify(value[k]));
            }
            return '{' + tmp.join(', ') + '}';
          }
        }
        return '"' + value.toString().replace(escRE, escFunc) + '"';
      };
    })()
  };
}
//原型继承demo
var Bird = {
	fly:function() {
		console.log(this.name + 'is flying...');
	}
}
var xiaoming = {
	name:'小明'
}
xiaoming.__proto__ = Bird;
xiaoming.fly();

var Student = {
	name:'Robot',
	height:1.2,
	run:function() {
		console.log(this.name + 'is running...');
	}
}
//console.log(Student);

function createStudent(name) {
	//基于Student原型创建一个新对象；
	var s = Object.create(Student);
	s.name = name;
	return s;
}
var xioaming = createStudent('小明');
xiaoming.run();

class Animal {
    constructor(name) {
        this.name = name;
    }
	hello(){
		console.log(this.name + 'ddd');
	}
}

class Cat extends Animal {
	constructor(name){
		super(name);
	}
}
var t = new Cat('猫');
t.hello();

//navigator对象
var log = console.log.bind(console.log);

log('appName:' + navigator.appName);
log('appVersion ='+ navigator.appVersion);
log('language =' + navigator.language);
log('platform =' + navigator.platform);
log('userAgent=' + navigator.userAgent);

getIEVersion(navigator.userAgent);

//location
var log = console.log.bind(console.log);
log('protocol='+location.protocol);
log('host='+location.host);
log('port='+location.port);
log('pathname='+location.pathname);
log('search='+location.search);
log('hash='+location.hash);
log('href='+location.href);

document.getElementById('test-js');

var d = document.createElement('style');
d.setAttribute('type','text/css');
d.innerHTML = 'p {color:red}';
document.getElementsByTagName('head')[0].appendChild(d);

<ol id="test-list">
    <li class="lang">Scheme</li>
    <li class="lang">JavaScript</li>
    <li class="lang">Python</li>
    <li class="lang">Ruby</li>
    <li class="lang">Haskell</li>
</ol>

var ol = document.getElementById('test-list');
ol.childNodes().sort((a,b) => {
	if(a.innerText < b.innerText) {
		return -1;
	}
	if(a.innerText>b.innerText) {
		return 1;
	}
})
//AJAX Demo
function success(text) {
	var textarea = document.getElementById('test-response-text');
	textarea.value = text;
}

function fail(code) {
	var textarea = document.getElementById('test-response-test');
	textarea.value = 'Error code:'+code;
}

var request = XMLHttpRequest();//新建XMLHttpRequest对象

request.onreadystatechange = function() {
	if(request.readState === 4) {
		if(request.status === 200) {
			return success(request);
		} else {
			return fail(request.status);
		}
	} else {
		//HTTP请求还在继续
	}
}

request.open('GET','/api/categories');
request.send();

function callback(){
	console.log('Done');
}
console.log('before setTimeout()');
setTimeout(callback,2000);
console.log('after setTimeout()');
































































































