const Task = require('../models/task-model');


exports.getTasks = async (req, res) => {
    let query = {};
    if (req.query.name) {
        query.title = { $regex: req.query.name, $options: "i" }; 
    }
    if (req.query.startDate || req.query.endDate) {
        query.deadline = {};
        if (req.query.startDate) {
            query.deadline.$gte = new Date(req.query.startDate);
        }
        if (req.query.endDate) {
            query.deadline.$lte = new Date(req.query.endDate);
        }
    }

    try {
        const tasks = await Task.find(query).sort({ deadline: 1 });
        res.render('tasks', { tasks, req });
    } catch (error) {
        console.error('Failed to retrieve tasks:', error);
        res.status(500).render('error', { error: 'Failed to load tasks' });
    }
};

exports.getTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        res.render('task', { task });
    } catch (error) {
        res.status(404).send('Task not found');
    }
};

exports.createTask = async (req, res) => {
    try {
        const newTask = new Task();
        newTask.title = req.body.title;
        newTask.deadline = new Date(req.body.deadline);
        newTask.description = req.body.description;
        newTask.completed = false;
        newTask.createdAt = new Date();
        
        await newTask.save();
        res.redirect('/tasks');
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.updateTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });

        res.redirect('/tasks');
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.deleteTask = async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.redirect('/tasks');
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.completeTask = async (req, res) => {
    try {
        await Task.findByIdAndUpdate(req.params.id, { isCompleted: true });
        res.redirect('/tasks');
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.reopenTask = async (req, res) => {
    try {
        await Task.findByIdAndUpdate(req.params.id, { isCompleted: false });
        res.redirect('/tasks');
    } catch (error) {
        res.status(400).send(error);
    }
};



/*
controlleur pour fetch les taches (paginated) non utilisé car comportements bizarres à certains endroits de l'application
exports.getTasks = async (req, res) => {
    let query = {};
    if (req.query.name) {
        query.title = { $regex: req.query.name, $options: "i" }; 
    }
    if (req.query.startDate || req.query.endDate) {
        query.deadline = {};
        if (req.query.startDate) {
            query.deadline.$gte = new Date(req.query.startDate);
        }
        if (req.query.endDate) {
            query.deadline.$lte = new Date(req.query.endDate);
        }
    }

    const page = parseInt(req.query.page) || 1;
    const limit = 4; 
    const skip = (page - 1) * limit;


    try {
        const tasks = await Task.find(query).sort({ deadline: 1 }).skip(skip).limit(limit);
        const totalTasks = await Task.countDocuments(query);
        const totalPages = Math.ceil(totalTasks / limit);

        res.render('tasks', { tasks, req, totalPages, currentPage: page });
    } catch (error) {
        console.error('Failed to retrieve tasks:', error);
        res.status(500).render('error', { error: 'Failed to load tasks' });
    }
};
*/
