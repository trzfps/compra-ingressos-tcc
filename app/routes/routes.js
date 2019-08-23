const router = require('express').Router();
router.get('/', (req, res) => {
    res.status(200).send('GET Example');
});
router.post('/', (req, res) => {
    res.status(201).send('POST EXAMPLE');
});
router.put('/', (req, res) => {
    res.status(200).send('PUT EXAMPLE');
});
router.delete('/', (req, res) => {
    res.status(200).send('DELETE EXAMPLE');
});

module.exports = router;