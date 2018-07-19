const BaseController = require('./BaseController');
const TaskTakenService = require('../service/TaskTakenService');

class TaskTakenController extends BaseController {
    // 领取任务
    static async taskTaken(ctx) {
        console.log(ctx.request.body);
        const {userId, taskId} = ctx.request.body;
        ctx.json(await TaskTakenService.taskTaken(userId, taskId));
    }

    // 获取已领取的任务
    static async getMyTask(ctx) {
        const userid = ctx.request.query.userId;
        ctx.json(await TaskTakenService.getMyTask(userid))
    }

    // 提交任务结果
    static async submitResult(ctx) {
        const id = ctx.request.body.id;
        const infos = ctx.request.body.infos;
        ctx.json(await TaskTakenService.submitResult(id, infos))
    }
    static async submitAuditing(ctx) {
        const id = ctx.request.query.id;
        ctx.json(await TaskTakenService.submitAuditing(id))
    }
    // 获取任务提交的结果
    static async getTaskResult(ctx) {
        const taskId = ctx.request.query.id;
        ctx.json(await TaskTakenService.getTaskResult(taskId))
    }
}

module.exports = TaskTakenController;
