const miPromesa = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Tenemos valor en la promesa')
        }, 1000)
    })
}

const medirTiempoAsync = async () => {

    try {
        console.log('inicio')

        const respuesta = await miPromesa()
        console.log(respuesta)

        console.log('fin')

        return 'fin medir tiempo'

    } catch (error) {
        return 'catch en medirTiempoAsync'
    }
}

medirTiempoAsync()
    .then(console.log)
    .catch(console.log)
