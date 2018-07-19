const BaseService = require('./BaseService');
const Ad = require('./../model/ad');

class AdService extends BaseService {
    // 发布广告
    static async publish(adTitle = '', adType = '', adLink = '', adAmount = 1, adAward = 10, adFee = 12, requirement = '', auditing = '', userId = '') {
        let ad = new Ad({adTitle, adType, adLink, adAmount, adAward, adFee, requirement, auditing, userId});
        ad = await ad.save();
        return this.success(ad, 201);

    }

    // 前台
    static async getAds() {
        let ads = await Ad.find().sort('-publishTime');
        return this.success(ads);
    }

    //通过id获取任务详情
    static async getById(_id = '') {
        return this.success(await Ad.findById(_id))
    }

    // 获取个人发布的任务
    static async getPersonalAds(userid = '') {
        let ads = await Ad.find({'userId': userid});
        return this.success(ads);
    }

    // 后台
    static async findAdType(adType = '') {
        let ads = await Ad.find({'adType': adType});
        return this.success(ads);
    }

    // 审核后更新任务份数
    static async updateAdAmount(_id = '', info = {}) {
        let ad = await Ad.findById(_id);
        if (ad) {
            for (let key in info) {
                ad[key] = info[key];
            }
            const error = this.validate(ad);
            if (error) {
                return error;
            }
            await ad.save();
            return this.success();
        } else {
            return this.failure();
        }
    }

}

module.exports = AdService;