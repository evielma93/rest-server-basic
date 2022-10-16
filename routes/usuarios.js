
const { Router } = require('express')
const router = Router();

const { usuariosGet,usuariosPost,usuariosPatch,usuariosDelete,usuariosPut } = require('../controllers/usuarios')


router.get('/', usuariosGet );

router.put('/:id', usuariosPut );

router.post('/', usuariosPost );

router.delete('/', usuariosDelete);

router.patch('/', usuariosPatch);



module.exports = router;