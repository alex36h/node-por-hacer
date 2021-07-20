const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea por hacer'
        }
    })
    .command('actualizar', 'Actualiza el estado de una tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de Actualizar'

        },
        completado: {
            default: true,
            alias: 'c',
            desc: 'Marca como compleatado o pendiente la tarea'
        }
    }).command('borrar', 'Borra la tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de borrar'

        }
    })
    .help()
    .argv;


module.exports = {
    argv
}