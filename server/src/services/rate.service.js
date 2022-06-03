import RateRepo from "../repositories/rate.repository.js";

const RateService = {};

RateService.getAllRates = RateRepo.getAllRates();

RateService.getRateById = (id) => RateRepo.getRateById(id);

RateService.createRate = (rate) => RateRepo.createRate(rate);

RateService.updateRate = (id, rate) => RateRepo.updateRate(id, rate);

RateService.deleteRate = (id) => RateRepo.deleteRate(id);

RateService.getRateByPostId = (postId) => RateRepo.getRateByPostId(postId);

export default RateService;
