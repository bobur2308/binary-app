let num1 = 0;
let num2 = 0;
let num3 = 0;
let num4 = 0;
let num5 = 0;
let orgNum = '0';
let binary = 0
const data = {
  0:"0",
  1:"1",
  10:"2",
  11:"3",
  100:"4",
  101:"5",
  110:"6",
  111:"7",
  1000:"8",
  1001:"9",
  1010:"10",
  1011:"11",
  1100:"12",
  1101:"13",
  1110:"14",
  1111:"15",
  10000:"16",
  10001:"17",
  10010:"18",
  10011:"19",
  10100:"20",
  10101:"21",
  10110:"22",
  10111:"23",
  11000:"24",
  11001:"25",
  11010:"26",
  11011:"27",
  11100:"28",
  11101:"29",
  11110:"30",
  11111:"31"
}
let text = 'Try again !'

exports.generateNumber = (req, res) => {
  binary = Math.floor(Math.random() * 32);
  res.render("binary", { 
    binary, 
    num1,
    num2,
    num3,
    num4,
    num5,
    orgNum:parseInt(data[parseInt(orgNum)]),
    text
  });
};


exports.showBinary = (req, res) => {
  const action = req.query.action;
  // console.log(action)
  let num = parseInt(req.query.num); 
  
  switch (num) {
    case 1:
      if (action === 'up') {
        num1 = 1; // Set num1 to 1
      } else if (action === 'down') {
        num1 = 0; // Set num1 to 0
      }
      break;
      case 2:
        if (action === 'up') {
          num2 = 1;
        } else if (action === 'down') {
          num2 = 0;
        }
        break;
    case 3:
      if (action === 'up') {
        num3 = 1;
      } else if (action === 'down') {
        num3 = 0;
      }
      break;
      case 4:
        if (action === 'up') {
          num4 = 1;
        } else if (action === 'down') {
          num4 = 0;
        }
        break;
        case 5:
          if (action === 'up') {
            num5 = 1;
          } else if (action === 'down') {
        num5 = 0;
      }
      break;
      default:
        console.log("Invalid num value");
  }
  orgNum = `${num1}${num2}${num3}${num4}${num5}`
  // console.log('binary is:',binary)
  // console.log('Num is:', orgNum)
  // console.log('orgNum is:',parseInt(data[parseInt(orgNum)]))

  if(binary===parseInt(data[parseInt(orgNum)])){
    text = "You did it !"
  }else{
    text = 'Try again !'
  }
  res.render('binary', {
    num1,
    num2,
    num3,
    num4,
    num5,
    orgNum:parseInt(data[parseInt(orgNum)]),
    binary,
    text
   });
};

exports.clearNumber = (req,res)=>{
  const action = req.query.action
  if(action==='org'){
    orgNum = '0'
  }else if(action==='nums'){
    orgNum='0'
    num1=0
    num2=0
    num3=0
    num4=0
    num5=0
  }
  res.render('binary',{
    binary,
    num1,
    num2,
    num3,
    num4,
    num5,
    orgNum:parseInt(orgNum),
    text
  })
}

