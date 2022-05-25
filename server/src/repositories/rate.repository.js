import RateService from "../services/rate.service.js";

const RateRepo = {};

RateRepo.getAllRates = RateService.getAllRates();
RateRepo.getRateById = (id) => RateService.getRateById(id);
RateRepo.createRate = (rate) => RateService.createRate(rate);
RateRepo.updateRate = (id, rate) => RateService.updateRate(id, rate);
RateRepo.deleteRate = (id) => RateService.deleteRate(id);

export default RateRepo;
