const BaseService = require('./BaseService');
const TaskTaken = require('./../model/taskTaken');
const User = require('./../model/user');
const Ad = require('./../model/ad');

class TaskTakenService extends BaseService {
    /**
     * 领取任务
     * @param userId
     * @param taskId
     * @returns {Promise<*>}
     */
    static async taskTaken(userId = '', taskId = '') {
        try {
            let taskTaken = new TaskTaken({userId, taskId});
            if (await TaskTaken.findOne({'userId': userId, 'taskId': taskId})) {
                return this.failure('同一用户不能重复领取同一任务', 400);
            }
            taskTaken = await taskTaken.save();
            return this.success(taskTaken, 201);
        } catch (e) {
            console.log(676, e)
        }
    }

    static async getMyTask(userId = '') {
        let tasks = await TaskTaken.find({'userId': userId}).populate('taskId');
        return this.success(tasks)
    }

    // 提交任务结果
    static async submitResult(_id = '', infos = {}) {
        let record = await TaskTaken.findById(_id);
        if (record) {
            for (let key in infos) {
                record[key] = infos[key]
            }
            await record.save();
            return this.success();
        } else {
            return this.failure();
        }
    }

    // 提交审核结果
    static async submitAuditing(_id = '') {
        let record = await TaskTaken.findById(_id);
        if(record.taskState==='已完成'){
            return this.failure('该任务已审核过')
        }
        record.taskState = '已完成';
        await record.save();
        let user = await User.findById(record.userId);
        let ad = await Ad.findById(record.taskId);
        user.accountBalance = user.accountBalance + ad.adAward;
        ad.adAmount = ad.adAmount - 1;
        await user.save();
        await ad.save();
        return this.success()
    }

    // 获取提交的任务结果
    static async getTaskResult(taskId = '') {
        let task = await TaskTaken.find({'taskId': taskId});
        if (task) {
            return this.success(task)
        } else {
            return this.success('该任务还未有提交结果')
        }
    }
}

module.exports = TaskTakenService;