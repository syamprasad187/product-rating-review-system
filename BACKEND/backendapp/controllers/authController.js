const User = require('../models/User');

exports.register = (request, response) => {
    const {name, email, password} = request.body;

    if(!name || !email || !password)    return response.status(400).json({message : 'All fields are required'});

    User.register({name, email, password}, (error, result) => {
        if(error)   return response.status(500).json({message : 'Registration failed'});
        response.json({user : {id : result.insertId, name, email}});
    });
};

exports.login = (request, response) => {
    User.login(email, password, (error, results) => {
        if(error || results.length === 0)   return response.status(401).json({message : 'Invalid credentials'});
        const user = results[0];
        response.json({user : {id : user.id, name : user.name, email : user.email}});
    });
};