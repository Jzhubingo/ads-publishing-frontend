const router = require('koa-router')();
const multer = require('koa-multer');//加载koa-multer模块
const UserController = require('./controller/UserController');
const SessionController = require('./controller/SessionController');
const NoticeController = require('./controller/NoticeController');
const FrLinkController = require('./controller/FrLinkController');
const AdController = require('./controller/AdController');
const TaskTakenController = require('./controller/TaskTakenController')
router
    .get('/', UserController.get)
    .get('/findUser', UserController.findUser)          //通过用户名获取用户
    .get('/user', UserController.getUser)               // 获取用户信息
    .get('/users', UserController.findAll)              //后台表格获取用户信息
    .post('/user', UserController.register)
    .put('/user', UserController.editUser)              //编辑用户信息
    .put('/updatePwd', UserController.updatePassword)   //更新密码

    // 公告信息操作
    .get('/notice', NoticeController.getNotices)
    .post('/taskTaken', TaskTakenController.taskTaken)  //领取任务
    .put('/submitResult', TaskTakenController.submitResult)//提交任务结果
    .put('/submitAuditing',TaskTakenController.submitAuditing) //提交审核结果
    .get('/myTask', TaskTakenController.getMyTask)      //获取领取的任务
    .get('/getTaskResult', TaskTakenController.getTaskResult)//通过任务id获取当前任务的完成结果
    //广告信息操作
    .post('/ad', AdController.publish)                  //发布任务
    .get('/ad', AdController.getAds)                    //前台首页获取任务信息
    .get('/findById', AdController.getById)             //
    .get('/personalAds', AdController.getPersonalAds)   //通过用户id获取其发布的任务
    .get('/findAdType', AdController.findAdType)
    .put('/updateAdAmount',AdController.updateAdAmount)//任务发布者审核通过后，更新任务数量
    .get('/frLink', FrLinkController.getFrLinks)        //前台获取友情链接信息
    .post('/session', SessionController.login)          //用户登录
;
//文件上传
//配置
var storage = multer.diskStorage({
    //文件保存路径
    destination: function (req, file, cb) {
        cb(null, 'public/uploads/')
    },
    //修改文件名称
    filename: function (req, file, cb) {
        var fileFormat = (file.originalname).split(".");
        cb(null, Date.now() + "." + fileFormat[fileFormat.length - 1]);
    }
});
//加载配置
var upload = multer({storage: storage});
//路由
router.post('/upload', upload.single('file'), async (ctx, next) => {
    ctx.body = {
        // filename: ctx.req.file.filename,//返回文件名
        filepath: 'http://localhost:3000/uploads/' + ctx.req.file.filename//返回文件路径
    }
});
module.exports = (app) => {

    app.use(router.routes())
        .use(router.allowedMethods());
};
