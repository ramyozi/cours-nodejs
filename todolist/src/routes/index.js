const express = require('express');
const router = express.Router();
const taskController = require('../controllers/task-controller');

router.get('/', (req, res) => res.render('index', { title: 'Home' }));
router.get('/about', (req, res) => res.render('about', { title: 'About' }));
router.get('/tasks', taskController.getTasks);
router.get('/tasks/:id', taskController.getTask);
router.post('/tasks', taskController.createTask);
router.put('/tasks/:id', taskController.updateTask);
router.delete('/tasks/:id', taskController.deleteTask);

router.post('/tasks/:id/complete', taskController.completeTask);
router.post('/tasks/:id/reopen', taskController.reopenTask);

router.get('*', (req, res) => {
    res.status(404).render('notfound', { title: 'Page Not Found' });
});

module.exports = router;
