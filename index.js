module.exports.closedHandler = (req, res, next) => {
    req.closed = false;
    req.closeHandler = () => { };
    
    req.connection.on("close", () => {
        req.closed = true;
        req.closeHandler();
    })
    next();    
}
