import Message from '../commons/message.js';
import RES from '../commons/status.js';
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
            RES.created(res, rate, Message.create);
        })
        .catch((error) => {
            RES.internal(res, Message.unCreate);
        })
}

RateController.getAllRates = async (req, res) => {
    try {
        const rates = await RateRepo.getAllRates;
        RES.success(res, rates, Message.success);
    } catch (error) {
        RES.internal(res, Message.notFound)
    }
}

RateController.deleteRate = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await RateRepo.deleteRate(id);
        RES.success(res, result, Message.delete)
    } catch (error) {
        RES.notFound(res, Message.unDelete)
    }
}

RateController.getRateById = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await RateRepo.getRateById(id);
        RES.success(res, result, Message.success)
    } catch (error) {
        RES.notFound(res, Message.notFound)
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
            RES.updated(res, Message.update)
        })
        .catch((error) => {
            RES.internal(res, Message.unUpdate)
        })
}

RateController.getRateByPostId = async (req, res) => {
    try {
        const id = req.params.postId;

        const result = await RateRepo.getRateByPostId(id);
        RES.success(res, result, Message.success);
    } catch (error) {
        RES.notFound(res, error, Message.notFound);
    }
}

export default RateController;