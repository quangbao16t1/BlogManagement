import RateRepo from '../repositories/rate.repository.js';

const RateController = {};

RateController.createRate = async (req, res) => {
    const rate = {
        userId: req.body.userId,
        postId: req.body.postId,
        rate: req.body.rate,
        createAt: Date.now(),
    }
    await RateRepo.createRate(rate)
        .then(() => {
            res.status(201).json({
                success: true,
                message: `Create Rate successfully!!!`,
            })
        })
        .catch((error) => {
            res.status(500).json({
                message: "Can't create Rate!!!",
                error: error.message
            })
        })
}

RateController.getAllRates = async (req, res) => {
    try {
        const rates = await RateRepo.getAllRates;
        res.status(200).json({
            success: true,
            Rates: rates
        })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

RateController.deleteRate = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await RateRepo.deleteRate(id);
        res.status(200).json({
            success: true,
            message: "DELETE successfully!!!!!",
        })
    } catch (error) {
        res.status(404).json({
            error: error.message
        })
    }
}

RateController.getRateById = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await RateService.getRateById(id);
        res.status(200).json({
            success: true,
            message: "successfully!!!!!",
            Rate: result
        })
    } catch (error) {
        res.status(404).json({
            error: error.message
        })
    }
}

RateController.updateRate = async (req, res) => {
    const rateUpdate = {
        userId: req.body.userId,
        postId: req.body.postId,
        rate: req.body.rate,
        updateAt: Date.now(),
    }

    const id = req.params.id;

    await RateRepo.updateRate(id, rateUpdate)
        .then(() => {
            res.status(200).json({
                success: true,
                message: `Update Rate successfully!!!`,
            })
        })
        .catch((error) => {
            res.status(500).json({
                message: "Can't Update Rate!!!",
                error: error.message
            })
        })
}


export default RateController;