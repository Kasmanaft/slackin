import dom from 'vd'
import { readFileSync as read } from 'fs'

const js = read(__dirname + '/assets/iframe.js').toString()
const css = read(__dirname + '/assets/iframe-button.css').toString()

export default function iframe ({ path, active, total, large }){
  let str = ''
  if (active) str = `${active}/`
  if (total) str += total
  if (!str.length) str = '–'

  let div = dom('span',
    dom('input.slackin-submit type=submit value="Join Now"'),
    dom('style', css),
    dom('script', `
      data = {};
      data.path = ${JSON.stringify(path)};
      data.total = ${total != null ? total : 'null'};
      data.active = ${active != null ? active : 'null'};
    `),
    dom('script', js)
  )

  return div
}
