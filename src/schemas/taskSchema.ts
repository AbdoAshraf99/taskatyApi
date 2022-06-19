import mongoose from "mongoose";

const schema=mongoose.Schema;

const taskSchema=new schema({
    title:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    dueDate:{
        type:Date,
        required:true,
    },
    createdBy:{
        type:String,
        required:true
    },
    assignedTo:{
        type:Array,
        array: [],
    }
},{timestamps:true});

const Task=mongoose.model('Tasks',taskSchema);

export default Task;