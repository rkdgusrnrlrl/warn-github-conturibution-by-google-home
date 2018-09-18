var rp = require('request-promise-native');
const _ = require('lodash')
const cheerio = require('cheerio')

const user = 'rkdgusrnrlrl'

exports.getContributesCount = async function () {
    const url = `https://www.github.com/${user}`;
    const body = await rp.get(url)

    const $ = cheerio.load(body);
    return $('rect').get().reduce((data, rect) => {
        // Parse contributions value
        const value = (() => $(rect).data('count'))();

        // Parse contributions date
        const [year, month, day] = $(rect).data('date').split('-').map(
            dateNum => parseInt(dateNum));
        _.setWith(data, [year, month, day], value, Object);

        return data;
    }, {});
}