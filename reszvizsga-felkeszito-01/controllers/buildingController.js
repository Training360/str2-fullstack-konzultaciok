const db = require('../db/db');

const getAll = async () => {
    const list = await db.getAll();
    return JSON.stringify(list);
};

module.exports = Object.freeze({
    getAll,
});
