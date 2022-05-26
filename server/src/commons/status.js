
const RES = {};

RES.success = (res, result, message) => {
    return res.status(200).json({
        message: message,
        result: result
    })
}

RES.created = (res, result, message) => {
    return res.status(201).json({
        message: message,
        result: result
    })
}

RES.updated = (res, message) => {
    return res.status(201).json({
        success: true,
        message: message,
    })
}

/**
 * Custom error response
 */
RES.notFound = (res, error, message) => {
    return res.status(404).json({
        message: message,
        error: error.message
    })
}

/**
 * (status 403)
 * Bad request response
 */
RES.badreq = (res, error, message) => {
    return res.status(400).json({
        message: message,
        error: error.message
    })
}

/**
 * (status 401)
 * Unauthorize request response
 */
RES.unAuth = (res, error, message) => {
    return res.status(401).json({
        message: message,
        error: error.message
    })
}

/**
 * (status 500)
 * Internal request response
 */
RES.internal = (res, error, message) => {
    return res.status(500).json({
        message: message,
        error: error.message
    })
}

export default RES;