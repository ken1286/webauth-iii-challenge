module.exports = function(department) {
  return function(req, res, next) {
    if (req.user) {
      if (
        // req.user.department && 
        // Array.isArray(req.user.roles)&&
        // req.user.roles.includes(role)
        req.user.department &&
        req.user.department === department
      ) {
        next();
      } else {
        res.status(403).json({ message: "can't touch this!" });
      }
    } else {
      res.status(401).json({ message: 'You cannot pass!' });
    }
  };
};