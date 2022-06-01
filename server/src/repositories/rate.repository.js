import connectDB from "../models/index.js";

const RateModel = connectDB.rates;

const RateRepo = {};

RateRepo.getAllRates = async () => {
    return await RateModel.findAll({
        include: [{
            model: connectDB.users
        }, {
            model: connectDB.posts
        }]
    });
}

RateRepo.getRateById = async (id) => {
    return await RateModel.findOne({
        where: { id: id },
        include: [{
            model: connectDB.users
        }, {
            model: connectDB.posts
        }]
    })
}

RateRepo.updateRate = async (id, rate) => {

    const rateUpdate = await RateModel.findOne({ where: { id: id } });

    if (!rateUpdate) throw "Rate not found!!!";

    Object.assign(rateUpdate, rate);

    await rateUpdate.save();
}

RateRepo.deleteRate = async (id) => {
    const rateDelete = await RateModel.findOne({ where: { id: id } });

    if (!rateDelete) throw "Rate not found!!!";

    return await RateModel.destroy({ where: { id: id } });
}

RateRepo.createRate = async (rate) => {

    const rateCreate = new RateModel(rate);

    await rateCreate.save();
}

RateRepo.getRateByPostId = async (postId) => {
    
    const rates = await RateModel.findAll({ where: {postId: postId}});
    
    let sum = 0;
    const result = rates.map((rate) => {
        sum += rate.rate;
    })

    return sum/(rates.length);
   
}

export default RateRepo;