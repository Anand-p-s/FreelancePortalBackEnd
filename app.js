var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();
var cors = require("cors");

var login = require("./routes/login");
var districtreg = require("./routes/districtreg");
var locationreg = require("./routes/locationreg");
var districtview = require("./routes/districtview");
var categoryreg = require("./routes/categoryreg");
var categoryview = require("./routes/categoryview");
var subcategoryreg = require("./routes/subcategoryreg");
var getlocation = require("./routes/getlocation");
var locationdelete = require("./routes/locationdelete");
var locationedit = require("./routes/locationedit");
var getlocationbyid = require("./routes/getlocationbyid");
var getsubcategory = require("./routes/getsubcategory");
var subcategorydelete = require("./routes/subcategorydelete");
var getsubcategorybyid = require("./routes/getsubcategorybyid");
var subcategoryedit = require("./routes/subcategoryedit");
var getcategory = require("./routes/getcategory");
var categorydelete = require("./routes/categorydelete");
var getcategorybyid = require("./routes/getcategorybyid");
var categoryedit = require("./routes/categoryedit");
var companyreg = require("./routes/companyreg");
var freelancerreg = require("./routes/freelancerreg");
var workpost = require("./routes/workpost");
var getworkdetails = require("./routes/getworkdetails");
var districtdelete = require("./routes/districtdelete");
var getdistrictbyid = require("./routes/getdistrictbyid");
var districtedit = require("./routes/districtedit");
var getjobfreelancer = require("./routes/getjobfreelancer");
var workdetails = require("./routes/workdetails");
var getfreelancerbyid = require("./routes/getfreelancerbyid");
var workreq = require("./routes/workreq");
var getfreelancerbyworkid = require("./routes/getfreelancerbyworkid");
var updatereqstatus = require("./routes/updatereqstatus");
var getrequestbyid = require("./routes/getrequestbyid");
var updatereqreview = require("./routes/updatereqreview");
var remarkview = require("./routes/remarkview");
var getrequestbyfreelancerid = require("./routes/getrequestbyfreelancerid");
var workreqdelete = require("./routes/workreqdelete");
var getworkbyrequestid = require("./routes/getworkbyrequestid");
var updateworkprogress = require("./routes/updateworkprogress");
var getfreelancerbyreq = require("./routes/getfreelancerbyreq");
var getworkbystatus = require("./routes/getworkbystatus");
var getprogressbyid = require("./routes/getprogressbyid");
var getclientdetails = require("./routes/getclientdetails");
var payment = require("./routes/payment");
var clientreport = require("./routes/clientreport");
var freelancerreport = require("./routes/freelancerreport");
var categorywisefreelancer = require("./routes/categorywisefreelancer");
var getclient = require("./routes/getclient");
var updateclientstatus = require("./routes/updateclientstatus");
var piechartcategory = require("./routes/piechartcategory");
var clientprofileedit = require("./routes/clientprofileedit");
var changepwd = require("./routes/changepwd");
var freelancerprofileedit = require("./routes/freelancerprofileedit");
var forgotpwd = require("./routes/forgotpwd");
var workedit = require("./routes/workedit");
var workdelete = require("./routes/workdelete");
var paymentdetails = require("./routes/paymentdetails");

app.use(cors());
app.use(logger("dev"));

global.__basedir = path.resolve(path.dirname(""));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

app.use("/login", login);

app.use("/districtreg", districtreg);
app.use("/locationreg", locationreg);
app.use("/districtview", districtview);
app.use("/upload", require("./routes/upload"));
app.use("/categoryreg", categoryreg);
app.use("/categoryview", categoryview);
app.use("/subcategoryreg", subcategoryreg);
app.use("/getlocation", getlocation);
app.use("/locationdelete", locationdelete);
app.use("/locationedit", locationedit);
app.use("/getlocationbyid", getlocationbyid);
app.use("/getsubcategory", getsubcategory);
app.use("/subcategorydelete", subcategorydelete);
app.use("/getsubcategorybyid", getsubcategorybyid);
app.use("/subcategoryedit", subcategoryedit);
app.use("/getcategory", getcategory);
app.use("/categorydelete", categorydelete);
app.use("/getcategorybyid", getcategorybyid);
app.use("/categoryedit", categoryedit);
app.use("/companyreg", companyreg);
app.use("/freelancerreg", freelancerreg);
app.use("/workpost", workpost);
app.use("/getworkdetails", getworkdetails);
app.use("/districtdelete", districtdelete);
app.use("/getdistrictbyid", getdistrictbyid);
app.use("/districtedit", districtedit);
app.use("/getjobfreelancer", getjobfreelancer);
app.use("/workdetails", workdetails);
app.use("/getfreelancerbyid", getfreelancerbyid);
app.use("/workreq", workreq);
app.use("/getfreelancerbyworkid", getfreelancerbyworkid);
app.use("/updatereqstatus", updatereqstatus);
app.use("/getrequestbyid", getrequestbyid);
app.use("/updatereqreview", updatereqreview);
app.use("/remarkview", remarkview);
app.use("/getrequestbyfreelancerid", getrequestbyfreelancerid);
app.use("/workreqdelete", workreqdelete);
app.use("/getworkbyrequestid", getworkbyrequestid);
app.use("/updateworkprogress", updateworkprogress);
app.use("/getfreelancerbyreq", getfreelancerbyreq);
app.use("/getworkbystatus", getworkbystatus);
app.use("/getprogressbyid", getprogressbyid);
app.use("/getclientdetails", getclientdetails);
app.use("/payment", payment);
app.use("/clientreport", clientreport);
app.use("/freelancerreport", freelancerreport);
app.use("/categorywisefreelancer", categorywisefreelancer);
app.use("/getclient", getclient);
app.use("/updateclientstatus", updateclientstatus);
app.use("/piechartcategory", piechartcategory);
app.use("/clientprofileedit", clientprofileedit);
app.use("/changepwd", changepwd);
app.use("/freelancerprofileedit", freelancerprofileedit);
app.use("/forgotpwd", forgotpwd);
app.use("/workedit", workedit);
app.use("/workdelete", workdelete);
app.use("/paymentdetails", paymentdetails);

module.exports = app;