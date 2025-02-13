let num1 = 0;
let num2 = 0;
let num3 = 0;
let num4 = 0;
let num5 = 0;
let orgNum = 0;


exports.showBinary = (req, res) => {
  const action = req.query.action;
  console.log(action)
  let num = parseInt(req.query.num); // Convert num to integer
  console.log(num);

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

  res.render('binary', {
    num1,
    num2,
    num3,
    num4,
    num5,
    orgNum
   });
};

exports.clearNumber = (req,res)=>{
  const action = req.query.action
  if(action==='org'){
    orgNum = 0
  }else if(action==='nums'){
    num1=0
    num2=0
    num3=0
    num4=0
    num5=0
  }
  res.render('binary',{
    num1,
    num2,
    num3,
    num4,
    num5,
    orgNum
  })
}

