const fmt = require('./fmt')
const github = require('./github')
var googlehome = require('google-home-notifier')
var language = 'kr'; // if not set 'us' language will be used

var rp = require('request-promise-native');
const _ = require('lodash')
const cheerio = require('cheerio')

async function f() {

    googlehome.ip('192.168.0.6', language); // Change to your Google Home name



    const data = await github.getContributesCount()

    const now = new Date()
    const year = now.getFullYear() + ""
    const mon = now.getMonth() + 1
    const date = now.getDate()


    let doCommit = '오늘 커밋이 없네요 뭐하는 건가요?'

    let activityCount = data[year][mon][date];
    const num = fmt.toOrdinal(activityCount, 0, '번');
    if (activityCount) {
        doCommit = `오늘 ${num}의 활동이 있었네요. 수고 했어요`
    }

    googlehome.notify(doCommit, function(res) {
        console.log(res);
    });
}

f();

