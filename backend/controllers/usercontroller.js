const express = require('express');
const userModel = require('../models/usermodel.js');

const updateUser = async (req, res) => {
    const { id } = req.params;
    const { name, email, password, phone } = req.body;

    try {
        const user = await userModel.findById(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        user.name = name || user.name;
        user.email = email || user.email;
        user.phone = phone || user.phone;
        
        if (password) {
            user.password = password; // Hash the password before saving
        }

        await user.save();
        res.status(200).json({ message: 'User updated successfully', user });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
}