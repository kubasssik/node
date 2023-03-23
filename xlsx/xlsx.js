const XLSX = require("xlsx");


//console.log(XLSX);

const parse = (filename)=>{
const exceData = XLSX.readFile(filename)
return Object.keys(exceData.Sheets).map((name)=>({
  name,
  data:XLSX.utils.sheet_to_json(exceData.Sheets[name], {header: 1}),
}))

}

//parse('./demo.xlsx')

module.exports = parse



