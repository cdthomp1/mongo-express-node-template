const ToyCar = require('../models/ToyCar');

exports.getToyCars = async (req, res, next) => {
    try {
        const toyCar = await ToyCar.find();

        return res.status(200).json({
            success: true,
            count: toyCar.length,
            data: toyCar
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: `Error Getting Toy Cars: ${error.message}`
        })
    }
}

exports.getToyCarById = async (req, res, next) => {
    try {
        const toyCar = await ToyCar.findById(req.params.id);
        if (!toyCar) {
            return res.status(404).json( {
                success: false,
                error: 'Toy Car Not Found'
            })
        }
        return res.status(200).json({
            success: true,
            data: toyCar
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: `Error Getting Toy Car ${req.params.id}: ${error.message}`
        })
    }
}

exports.updateToyCar = async (req, res, next) => {
    try {
        const toyCar = await ToyCar.findById(req.params.id).exec();
        if (!toyCar) {
            return res.status(404).json( {
                success: false,
                error: 'Toy Car Not Found'
            })
        }
        console.log(req.body)
        toyCar.set(req.body);
        var update = await toyCar.save();
        return res.status(200).json({
            success: true,
            data: update
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: `Error Getting Toy Car ${req.params.id}: ${error.message}`
        })
    }
}

exports.addToyCar = async (req, res, next) => {
    try {
        const { name, image, category, description, price } = req.body;

        const toyCar = await ToyCar.create(req.body);
        return res.status(201).json({
            success: true,
            data: toyCar
        })
    } catch (error) {
        console.log(req);

        if(error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(val => val.message);
            
            return res.status(400).json({
                success: false,
                error: messages
            })
        } else {
            return res.status(500).json({
                success: false,
                error: `Error Adding Toy Car: ${error.message}`
            })
        }
    }

}

exports.deleteToyCar = async (req, res, next) => {
    try {
        const toyCar = await ToyCar.findById(req.params.id);
        if (!toyCar) {
            return res.status(404).json( {
                success: false,
                error: 'Toy Car Not Found'
            })
        }

        await toyCar.remove();

        return res.status(200).json({
            success: true,
            data: {}
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: `Error Deleting Toy Car: ${error.message}`
        })
    }
}