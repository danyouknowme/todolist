import express from 'express';
import { List } from '../models/List';

const router = express.Router();

// Create List
router.post('/api/lists', async (req, res) => {
    const newList = new List(req.body);
    try {
        const savedList = await newList.save();
        res.status(200).json(savedList);
    } catch (error) {
        res.status(500).json(error);
    }
});

// Get a list
router.get('/api/lists/:id' , async (req, res) => {
    try {
        const currentList = await List.findById(req.params.id);
        res.status(200).json(currentList);
    } catch (error) {
        res.status(500).json(error);
    }

})

// Update List
router.put('/api/lists/:id', async (req, res) => {
    try {
        const updatedList = await List.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true });
        res.status(200).json(updatedList);
    } catch (error) {
        res.status(500).json(error);
    }
});

// Delete List
router.delete('/api/lists/:id', async (req, res) => {
    try {
        await List.findByIdAndDelete(req.params.id);
        res.status(200).json("The list has been deleted...");
    } catch (error) {
        res.status(500).json(error);
    }
});

// Get All List
router.get('/api/lists/', async (req, res) => {
    try {
        const lists = await List.find();
        res.status(200).json(lists);
    } catch (error) {
        res.status(500).json(error);
    }
});

export { router as listRouter }