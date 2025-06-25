const Appoint = require('../model/appointment');
const checkjwt=require('../checkjwt');
exports.Service = (req, res, next) => {
  const services = [{
    service:"Traditional Cupping Therapy",dis:"Traditional Cupping Therapy se paayein sukoon aur behtar sehat.Hamaare expert therapists aapke ghar par hi personalized care dete hain."},

    {service:"Dry Needling Therapy",dis:"Muscle pain aur trigger points ke liye miley instant relief.Dry needling therapy ab available hai aapke ghar par — safe aur effective."},
    
    {service:"Physiotherapy for Back Pain",dis:"Back pain ko ignore na karein, uska solution chunein.Experienced physiotherapists se paayein personalized treatment aapke doorstep par."},

    {service:"Joint Mobilization",dis:"Joint stiffness aur movement restriction ka paayein behtareen solution.Hamare experts ke saath karein joint mobilization therapy ghar baithe hi."},

    {service:"Sports Injury Recovery",dis:"Choti ya badi sports injury ho — recovery hamare experts ke saath possible hai.Ghar par hi miley professional physiotherapy tailored to your athletic needs."},

    {service:"Home Visit Consultation",dis:"Clinic jaane ki zarurat nahi — expert care ab aapke ghar par.Hamari home visit consultation service se paayein rahat bina travel ke."},

    
  ];
  res.status(200).json(services);
}

exports.serv = (req, res, next) => {
  let arr = [{
    imgs: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPqHh9CBfmMFeecLGWU6OY9eZZ1sF-EgDcoA&s", title: "Cupping Therapy", dis: " Our physiotherapy services are designed to help you restore mobility, reduce pain, and improve overall physical function through personalized treatment plans."
  }, {
    imgs: "https://easetemplate.com/free-website-templates/theraphy/images/service-2.jpg", title: "Sport Injuries", dis: "Whether you're a professional athlete or a weekend runner, our rehabilitation program helps you recover faster and return to your sport safely."
  }, {
    imgs: "https://easetemplate.com/free-website-templates/theraphy/images/service-3.jpg", title: "Rehabilitation", dis: "Our rehabilitation services focus on helping individuals regain strength, mobility, and independence after injury, surgery, or neurological conditions."
  }, {
    imgs: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg3paZp-L30Unb4NHD3GQXS_80l2cWrFV90A&s", title: "Dry Needling Therapy", dis: "Acupuncture is a time-tested healing technique that uses fine needles to stimulate specific points on the body, promoting natural healing and pain relief."
  }];
  res.status(200).json(arr);
}

exports.Doctor = (req, res, next) => {
  let doc = [{
    imgs: "WhatsApp Image 2025-06-18 at 15.07.44_7ec17950.jpg", title: "Dr.Kalimullah", dis: "Consultant Physician"
  }]
  res.status(200).json(doc);
}

exports.Appointment = (req, res, next) => {
  const BOT_TOKEN = process.env.BOT_TOKEN;
  const CHAT_ID = process.env.CHAT_ID;
  const bookingid=Math.floor(Math.random()*(9999999-1000000+1))+1000000;
  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

  const { name, email, phone, service, date } = req.body;
  // const appoint = new Appoint({ name, email, phone, service, date });
  // await appoint.save();
  const response =  fetch(url, {
    method: 'POST', headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text:`New Appointment:\nBookinId: ${bookingid}\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\nDate: ${date}`
    })
  })
  

  res.status(200).json(`Form submited sucessfuly\n Your bookin id is : ${bookingid} .save it.`);
}

// exports.Booked=(checkjwt,(req,res)=>{
//   res.status(200).json('booked data aa gya');
// })