const BaseController = require('./BaseController');
const AdService = require('../service/AdService')

class AdController extends BaseController {
    // 发布任务
    static async publish(ctx) {
        const {adTitle, adType, adLink, adAmount, adAward, adFee, requirement, auditing, userId} = ctx.request.body;
        ctx.json(await AdService.publish(adTitle, adType, adLink, adAmount, adAward, adFee, requirement, auditing, userId));
    }

    // 前台首页获取任务信息
    static async getAds(ctx) {
        ctx.json(await AdService.getAds(ctx.request.query));
    }

    //获取任务详情
    static async getById(ctx) {
        ctx.json(await AdService.getById(ctx.request.query.id));
    }

    // 获取个人发布的任务
    static async getPersonalAds(ctx) {
        const userid = ctx.request.query.userId;
        ctx.json(await AdService.getPersonalAds(userid));
    }

    //按任务类型查询
    static async findAdType(ctx) {
        const adType = ctx.request.query.adType;
        ctx.json(await AdService.findAdType(adType));
    }

    static async updateAdAmount(ctx) {
        const userid = ctx.request.body.id;
        const infos = ctx.request.body.infos;
        ctx.json(await AdService.updateAdAmount(userid, infos))

    }
}

module.exports = AdController;