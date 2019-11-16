const resume = require("./resume.json")

resume.formatDate = (date) => {
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  return `${monthNames[new Date(date).getMonth()]}, ${new Date(date).getFullYear() + 1}`
}

module.exports = {
  plugins:
    [
      require('posthtml-include')({ root: __dirname + '/src/web/components' }),
      require('posthtml-expressions')({ root: __dirname + '/src/web', locals: resume }),
    ]
}
