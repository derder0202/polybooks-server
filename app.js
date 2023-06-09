const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

const admin = require("firebase-admin");

const serviceAccount = require("./credentials.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "gs://polybooks-52282.appspot.com",
});

require('dotenv').config()

//connect mongoose
mongoose.connect(process.env.MONGODBURL).then(()=>{
  console.log("mongodb connected")
})

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const statisticalRouter = require('./routes/statistical');
const membervipRouter = require('./routes/membervip');
const memberRouter = require('./routes/member');
const autionpostRouter = require('./routes/autionpost');
const contentRouter = require('./routes/content');
const reportRouter = require('./routes/report');
const admanagerRouter = require('./routes/admanager');

const apiUserRouter = require('./api_src/route/user')
const apiPostRouter = require('./api_src/route/post')
const apiAuthorRouter = require('./api_src/route/author')
const apiPublisherRouter = require('./api_src/route/pulisher')
const apiReviewRouter = require('./api_src/route/review')
const apiShopRouter = require('./api_src/route/shop')
const apiCategoryRouter = require('./api_src/route/category')
const apiDepositHistoryRouter = require('./api_src/route/deposit_history')
const apiDiscountRouter = require('./api_src/route/discount')
const apiReportRouter = require('./api_src/route/report')
const apiBannerRouter = require('./api_src/route/banner')

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//Web Admin
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/account_statistics',statisticalRouter);
// app.use('/',membervipRouter);
// app.use('/',memberRouter);
// app.use('/',autionpostRouter);
// app.use('/',contentRouter);
// app.use('/',reportRouter);
// app.use('/',admanagerRouter);





//API
app.use('/api/users',apiUserRouter)
app.use('/api/posts',apiPostRouter)
app.use('/api/authors',apiAuthorRouter)
app.use('/api/publishers',apiPublisherRouter)
app.use('/api/reviews',apiReviewRouter)
app.use('/api/shops',apiShopRouter)
app.use('/api/categories',apiCategoryRouter)
app.use('/api/reports',apiReportRouter)
app.use('/api/depositHistory',apiDepositHistoryRouter)
app.use('/api/discounts',apiDiscountRouter)
app.use('/api/banners',apiBannerRouter)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
