const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const taskTakenSchema = new Schema({
    // 用户id
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    // 任务id
    taskId: {
        type: Schema.Types.ObjectId,
        ref: 'Ad',
    },
    // 任务完成状态
    taskState: {
        type: String,
        default: '未完成',
        enum: ['未完成', '已完成', '待审核']
    },
    // 提交的结果
    taskResult: {
        type: [String]
    }
});

module.exports = mongoose.model('TaskTaken', taskTakenSchema);