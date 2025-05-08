const authorizeRole = (...allowedRoles) => {
    return (req, res, next) => {
        const userRole = req.user.role; // Assuming req.user is set by a previous middleware

        if (!allowedRoles.includes(userRole)) {
            return res.status(403).json({ message: 'Forbidden: You do not have the required role' });
        }

        next();
    };
};

module.exports = authorizeRole;