
// 
const citiesObj = {
    'Ha Long Bay': 'https://lp-cms-production.imgix.net/features/2019/04/HalongBay-aa0f7e71a1db.jpg',
    'Mexico City': 'https://afar.brightspotcdn.com/dims4/default/c354629/2147483647/strip/true/crop/1357x720+41+0/resize/1440x764!/quality/90/?url=https%3A%2F%2Fafar-media-production-web.s3.amazonaws.com%2Fbrightspot%2F13%2Fad%2Fa968ccf54af783d2f7aa93839bb1%2Ftravelguide-mexicocity-ramiroreynajr.jpg',
    'London': 'https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTYyNDg1MjE3MTI1Mjc5Mzk4/topic-london-gettyimages-760251843-promo.jpg',
    'Tokyo': 'https://assets.vogue.com/photos/5e387ae1be72df00088bf8c8/master/w_2560%2Cc_limit/EEX74X.jpg',
    'Cairo': 'https://d3rr2gvhjw0wwy.cloudfront.net/uploads/mandators/49581/file-manager/egypt-cairo.jpg',
    'Huatulco': 'https://www.turismomexico.es/wp-content/uploads/2021/11/bahia_conejos_huatulco.jpg',
    'Berlin': 'https://tallgirlbigworld.com/wp-content/uploads/2020/05/Monbijoupark-Berlin-in-summer.jpg',
    'Mongolia': 'https://cdn.theculturetrip.com/wp-content/uploads/2021/05/2c31pk9-1-650x366.jpg',
    'shantou': 'https://cdn.theworldofchinese.com/media/images/VCG111343792481_1.format-webp.width-800.webp',
    'Dingle': 'https://www.rabbies.com/application/files/9615/7495/8421/Dingle_Peninsula_800_x_420.jpg',
}

const cityKeyArr = Object.keys(citiesObj);
const randomNum = Math.floor(Math.random() * cityKeyArr.length);
const randomCity = cityKeyArr[randomNum];
const randomImg = citiesObj[randomCity];
  

// THese lines get the current day of the week
const currentDate = new Date()
const currentDay = currentDate;

// If the current Day of the week is 0 (Sunday) Resource websites won't load
// and will tell you to take a break

// if (currentDay === 0) {


// remove footer
const footer = document.querySelector('footer')
footer.remove();

// iteratively remove each child of the body Node
const body = document.querySelector('body');
while (body.firstChild) {
  body.removeChild(body.firstChild);
}

// take a break image (top of the page)
const quote = document.createElement('img')
quote.setAttribute('id', 'quote')
quote.setAttribute('src', 'https://t4.ftcdn.net/jpg/02/92/36/75/240_F_292367576_OrEHrUYt7cj9PX6q0uaXFo4BJcntUi3j.jpg');

// create a HTML img element to house the destination's images
const element = document.createElement('img');

// set attributes
element.setAttribute('src', `${randomImg}`);
element.setAttribute('id', 'destination');

// prepend to the quote and element Nodes to the body
body.prepend(element);
body.prepend(quote);


// } // Closing of the 'if' conditional


